package com.academy.lms;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.net.ConnectivityManager;
import android.net.NetworkCapabilities;
import android.webkit.WebResourceError;
import android.webkit.WebResourceResponse;
import androidx.activity.OnBackPressedCallback;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.webkit.WebViewAssetLoader;
import android.view.View;
import android.webkit.CookieManager;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;
import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.animation.ObjectAnimator;
import android.animation.ValueAnimator;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.ViewGroup;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.view.animation.DecelerateInterpolator;
import android.view.animation.OvershootInterpolator;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

public class MainActivity extends AppCompatActivity {

    private static final String APP_URL = "https://academy-lms-sepia.vercel.app/";
    // Bundled copy of the site (android/app/src/main/assets/site), served from a stable https origin
    private static final String OFFLINE_HOST = "appassets.androidplatform.net";
    private static final String OFFLINE_URL = "https://" + OFFLINE_HOST + "/assets/site/index.html?view=study";
    private WebViewAssetLoader assetLoader;
    private boolean showingOffline;
    private WebView webView;
    private SwipeRefreshLayout swipeRefresh;
    private ProgressBar progressBar;

    // animated launch splash
    private static final long SPLASH_MIN_MS = 2200;
    private static final long SPLASH_MAX_MS = 7000;
    private final Handler handler = new Handler(Looper.getMainLooper());
    private FrameLayout splash;
    private long splashShownAt;
    private boolean splashDismissed;
    private final java.util.List<Animator> splashLoops = new java.util.ArrayList<>();

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Dynamic root layout
        androidx.coordinatorlayout.widget.CoordinatorLayout root = new androidx.coordinatorlayout.widget.CoordinatorLayout(this);
        root.setLayoutParams(new androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams(
                androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams.MATCH_PARENT,
                androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams.MATCH_PARENT
        ));

        // Android 15+ draws apps edge-to-edge: pad the content so it never sits under the status/nav bars or keyboard
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        root.setBackgroundColor(Color.parseColor("#0B0F19"));
        WindowInsetsControllerCompat insetsController = WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        insetsController.setAppearanceLightStatusBars(false);
        insetsController.setAppearanceLightNavigationBars(false);
        ViewCompat.setOnApplyWindowInsetsListener(root, (v, insets) -> {
            Insets bars = insets.getInsets(WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout());
            Insets ime = insets.getInsets(WindowInsetsCompat.Type.ime());
            v.setPadding(bars.left, bars.top, bars.right, Math.max(bars.bottom, ime.bottom));
            return WindowInsetsCompat.CONSUMED;
        });

        assetLoader = new WebViewAssetLoader.Builder()
                .setDomain(OFFLINE_HOST)
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();

        swipeRefresh = new SwipeRefreshLayout(this);
        swipeRefresh.setLayoutParams(new androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams(
                androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams.MATCH_PARENT,
                androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams.MATCH_PARENT
        ));

        webView = new WebView(this);
        webView.setLayoutParams(new androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams(
                androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams.MATCH_PARENT,
                androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams.MATCH_PARENT
        ));
        swipeRefresh.addView(webView);
        root.addView(swipeRefresh);

        progressBar = new ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal);
        androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams pbParams =
                new androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams(
                        androidx.coordinatorlayout.widget.CoordinatorLayout.LayoutParams.MATCH_PARENT,
                        8
                );
        progressBar.setLayoutParams(pbParams);
        progressBar.setMax(100);
        progressBar.setVisibility(View.GONE);
        root.addView(progressBar);

        if (savedInstanceState == null) {
            splash = buildSplash();
            root.addView(splash);
            splashShownAt = SystemClock.uptimeMillis();
            animateSplash();
            handler.postDelayed(this::dismissSplash, SPLASH_MAX_MS);
        }

        setContentView(root);

        // Configure WebView settings
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setUseWideViewPort(true);
        settings.setLoadWithOverviewMode(true);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setAllowFileAccess(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setUserAgentString(settings.getUserAgentString() + " AcademyLMS-Android/1.0");

        // Cookies
        CookieManager cookieManager = CookieManager.getInstance();
        cookieManager.setAcceptCookie(true);
        cookieManager.setAcceptThirdPartyCookies(webView, true);

        // SwipeRefresh
        swipeRefresh.setOnRefreshListener(() -> {
            if (showingOffline && isOnline()) {
                showingOffline = false;
                webView.loadUrl(APP_URL);
            } else {
                webView.reload();
            }
        });

        // WebViewClient
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                progressBar.setVisibility(View.VISIBLE);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                progressBar.setVisibility(View.GONE);
                swipeRefresh.setRefreshing(false);
                requestSplashDismiss();
            }

            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return assetLoader.shouldInterceptRequest(request.getUrl());
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                // live site unreachable: fall back to the study material bundled inside the app
                if (request.isForMainFrame() && !showingOffline) {
                    openOffline();
                }
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                String url = request.getUrl().toString();
                if (url.contains(OFFLINE_HOST) || url.contains("accounts.google.com") || url.contains("academy-lms") || url.contains("vercel.app")) {
                    return false; // let WebView handle internal and auth URLs
                }
                try {
                    Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                    startActivity(intent);
                    return true;
                } catch (Exception e) {
                    return false;
                }
            }
        });

        // WebChromeClient
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                progressBar.setProgress(newProgress);
                if (newProgress == 100) {
                    progressBar.setVisibility(View.GONE);
                }
            }
        });

        if (savedInstanceState != null) {
            webView.restoreState(savedInstanceState);
        } else {
            if (isOnline()) {
                webView.loadUrl(APP_URL);
            } else {
                openOffline();
            }
        }

        // Android 16 predictive back: go back inside the site first, then leave the app
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                if (webView.canGoBack()) {
                    webView.goBack();
                } else {
                    setEnabled(false);
                    getOnBackPressedDispatcher().onBackPressed();
                }
            }
        });
    }

    private void openOffline() {
        showingOffline = true;
        webView.loadUrl(OFFLINE_URL);
    }

    private boolean isOnline() {
        ConnectivityManager cm = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
        if (cm == null) return true;
        NetworkCapabilities caps = cm.getNetworkCapabilities(cm.getActiveNetwork());
        return caps != null && caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET);
    }

    private int dp(float value) {
        return Math.round(TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, value, getResources().getDisplayMetrics()));
    }

    private FrameLayout buildSplash() {
        FrameLayout layer = new FrameLayout(this);
        layer.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        GradientDrawable bg = new GradientDrawable();
        bg.setGradientType(GradientDrawable.RADIAL_GRADIENT);
        bg.setColors(new int[]{Color.parseColor("#1B2150"), Color.parseColor("#0B0F19")});
        bg.setGradientRadius(dp(420));
        layer.setBackground(bg);
        layer.setClickable(true); // swallow touches while visible

        LinearLayout column = new LinearLayout(this);
        column.setOrientation(LinearLayout.VERTICAL);
        column.setGravity(Gravity.CENTER_HORIZONTAL);
        FrameLayout.LayoutParams columnParams = new FrameLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT, Gravity.CENTER);
        column.setLayoutParams(columnParams);

        ImageView logo = new ImageView(this);
        logo.setTag("splash_logo");
        logo.setImageResource(R.drawable.splash_logo);
        logo.setLayoutParams(new LinearLayout.LayoutParams(dp(170), dp(170)));
        column.addView(logo);

        TextView title = new TextView(this);
        title.setTag("splash_title");
        title.setText("Academy LMS");
        title.setTextColor(Color.WHITE);
        title.setTextSize(TypedValue.COMPLEX_UNIT_SP, 32);
        title.setTypeface(Typeface.create("sans-serif", Typeface.BOLD));
        title.setLetterSpacing(0.02f);
        title.setShadowLayer(dp(14), 0, 0, Color.parseColor("#8B5CF6"));
        LinearLayout.LayoutParams titleParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        titleParams.topMargin = dp(18);
        title.setLayoutParams(titleParams);
        column.addView(title);

        TextView tagline = new TextView(this);
        tagline.setTag("splash_tagline");
        tagline.setText("RGPV B.Tech & M.Tech \u00b7 Every branch, every semester");
        tagline.setTextColor(Color.parseColor("#94A3B8"));
        tagline.setTextSize(TypedValue.COMPLEX_UNIT_SP, 13);
        LinearLayout.LayoutParams tagParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        tagParams.topMargin = dp(6);
        tagline.setLayoutParams(tagParams);
        column.addView(tagline);

        FrameLayout track = new FrameLayout(this);
        GradientDrawable trackBg = new GradientDrawable();
        trackBg.setColor(Color.parseColor("#1E293B"));
        trackBg.setCornerRadius(dp(2));
        track.setBackground(trackBg);
        LinearLayout.LayoutParams trackParams = new LinearLayout.LayoutParams(dp(140), dp(3));
        trackParams.topMargin = dp(28);
        track.setLayoutParams(trackParams);
        View bar = new View(this);
        bar.setTag("splash_bar");
        GradientDrawable barBg = new GradientDrawable(GradientDrawable.Orientation.LEFT_RIGHT,
                new int[]{Color.parseColor("#22D3EE"), Color.parseColor("#8B5CF6")});
        barBg.setCornerRadius(dp(2));
        bar.setBackground(barBg);
        bar.setLayoutParams(new FrameLayout.LayoutParams(dp(140), dp(3)));
        track.addView(bar);
        column.addView(track);

        layer.addView(column);
        return layer;
    }

    private void animateSplash() {
        View logo = splash.findViewWithTag("splash_logo");
        View title = splash.findViewWithTag("splash_title");
        View tagline = splash.findViewWithTag("splash_tagline");
        View bar = splash.findViewWithTag("splash_bar");

        logo.setAlpha(0f);
        logo.setScaleX(0.55f);
        logo.setScaleY(0.55f);
        logo.setRotation(-8f);
        logo.animate().alpha(1f).scaleX(1f).scaleY(1f).rotation(0f)
                .setDuration(800).setInterpolator(new OvershootInterpolator(1.4f))
                .withEndAction(() -> {
                    ObjectAnimator pulseX = ObjectAnimator.ofFloat(logo, View.SCALE_X, 1f, 1.06f);
                    ObjectAnimator pulseY = ObjectAnimator.ofFloat(logo, View.SCALE_Y, 1f, 1.06f);
                    for (ObjectAnimator pulse : new ObjectAnimator[]{pulseX, pulseY}) {
                        pulse.setDuration(900);
                        pulse.setRepeatCount(ValueAnimator.INFINITE);
                        pulse.setRepeatMode(ValueAnimator.REVERSE);
                        pulse.setInterpolator(new AccelerateDecelerateInterpolator());
                        splashLoops.add(pulse);
                        pulse.start();
                    }
                }).start();

        float lift = dp(28);
        title.setAlpha(0f);
        title.setTranslationY(lift);
        title.animate().alpha(1f).translationY(0f).setStartDelay(450).setDuration(600)
                .setInterpolator(new DecelerateInterpolator()).start();
        tagline.setAlpha(0f);
        tagline.setTranslationY(lift);
        tagline.animate().alpha(1f).translationY(0f).setStartDelay(700).setDuration(600)
                .setInterpolator(new DecelerateInterpolator()).start();

        bar.setPivotX(0f);
        bar.setScaleX(0f);
        ObjectAnimator load = ObjectAnimator.ofFloat(bar, View.SCALE_X, 0f, 1f);
        load.setStartDelay(900);
        load.setDuration(1300);
        load.setRepeatCount(ValueAnimator.INFINITE);
        load.setInterpolator(new AccelerateDecelerateInterpolator());
        splashLoops.add(load);
        load.start();
    }

    private void requestSplashDismiss() {
        if (splash == null || splashDismissed) return;
        long elapsed = SystemClock.uptimeMillis() - splashShownAt;
        if (elapsed >= SPLASH_MIN_MS) {
            dismissSplash();
        } else {
            handler.postDelayed(this::dismissSplash, SPLASH_MIN_MS - elapsed);
        }
    }

    private void dismissSplash() {
        if (splash == null || splashDismissed) return;
        splashDismissed = true;
        final View layer = splash;
        layer.animate().alpha(0f).scaleX(1.08f).scaleY(1.08f).setDuration(450)
                .setInterpolator(new AccelerateDecelerateInterpolator())
                .setListener(new AnimatorListenerAdapter() {
                    @Override
                    public void onAnimationEnd(Animator animation) {
                        for (Animator loop : splashLoops) loop.cancel();
                        splashLoops.clear();
                        ViewGroup parent = (ViewGroup) layer.getParent();
                        if (parent != null) parent.removeView(layer);
                        splash = null;
                    }
                }).start();
    }

    @Override
    protected void onDestroy() {
        handler.removeCallbacksAndMessages(null);
        super.onDestroy();
    }


    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        webView.saveState(outState);
    }
}
