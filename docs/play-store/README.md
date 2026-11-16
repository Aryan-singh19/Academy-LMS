# Play Store launch kit

Everything needed to publish the Android app on Google Play. The app side is done. What's left is the account, the signing key and the closed test.

| Item | Status |
|---|---|
| Targets Android 16 (API 36), required for new apps | ✅ |
| Adaptive launcher icon and animated splash | ✅ |
| Offline mode (study material bundled in the app) | ✅ |
| Android 16 back gesture and edge-to-edge layout | ✅ |
| Signed release build (`.aab`) workflow: [`play-bundle.yml`](../../.github/workflows/play-bundle.yml) | ✅ waiting for signing secrets |
| Store listing text: [`listing.md`](listing.md) | ✅ |
| Icon 512 px, feature graphic 1024×500, 6 phone screenshots | ✅ in this folder |
| Data safety and content rating answers: [`data-safety.md`](data-safety.md) | ✅ |
| Privacy policy URL | ✅ https://academy-lms-sepia.vercel.app/html/privacy.html |
| Share messages to grow users first: [`share-kit.md`](share-kit.md) | ✅ |
| Developer account ($25, one time) | ⏳ |
| 12+ testers opted in for 14 days | ⏳ |

---

## Step 1 · Create the upload key (once, keep it forever)

Run this on your own computer. It needs Java, which comes with Android Studio or any JDK:

```bash
keytool -genkeypair -v -keystore academy-lms-upload.jks -alias academy-lms \
  -keyalg RSA -keysize 4096 -validity 10000
```

It asks for a password and your name. **Back up `academy-lms-upload.jks` and the password** (Google Drive plus a pen-drive). Never commit it to the repo.

> Play App Signing is on by default. Google holds the real signing key, and this file is only the *upload* key. If you lose it, Google can reset it, but that takes days.

## Step 2 · Add the key to GitHub secrets

Convert the key to text:

```bash
base64 -w0 academy-lms-upload.jks > key.txt     # Linux / Git Bash
# PowerShell: [Convert]::ToBase64String([IO.File]::ReadAllBytes("academy-lms-upload.jks")) > key.txt
```

Then go to the repo's **Settings → Secrets and variables → Actions → New repository secret** and add four secrets:

| Secret | Value |
|---|---|
| `ANDROID_KEYSTORE_BASE64` | contents of `key.txt` |
| `ANDROID_KEYSTORE_PASSWORD` | the keystore password |
| `ANDROID_KEY_ALIAS` | `academy-lms` |
| `ANDROID_KEY_PASSWORD` | the key password (same as the keystore password unless you set another) |

Delete `key.txt` afterwards. Once the secrets exist, the release workflow also builds the **signed** APK for GitHub Releases.

## Step 3 · Build the `.aab`

Go to **Actions → Play Store bundle (AAB) → Run workflow**. When it finishes, download `academy-lms-play-bundle` from the run's *Artifacts*.

## Step 4 · Developer account

1. Open https://play.google.com/console/signup and choose **Personal**.
2. Pay the $25 by credit or debit card (prepaid cards are refused) and complete the ID verification.
3. Choose **Create app**:
   - App name: *Academy LMS*
   - Default language: English (India)
   - App or game: App
   - Free or paid: Free

## Step 5 · Fill the listing

Copy the text from [`listing.md`](listing.md) and upload:

- `icon-512.png`
- `feature-graphic.png`
- `screenshots/01.png` to `06.png`

Answer the questionnaires using [`data-safety.md`](data-safety.md).

## Step 6 · Closed test (12 testers × 14 days)

1. Create a Google Group, e.g. `academy-lms-testers`, and add your testers' Gmail addresses (the ones on their phones). **Aim for 18–20 people**, because some drop out.
2. Go to **Test and release → Testing → Closed testing → Create track**, upload the `.aab`, and add the Google Group as testers.
3. After Google reviews the build, copy the **opt-in link** and send it with the tester message in [`share-kit.md`](share-kit.md).
4. Each tester opens the link with the same Gmail account as their phone, taps **Become a tester** and installs the app from the Play Store.
5. Ask them to actually use it a few times. Ship one or two small updates during the 14 days and note what you changed. Google asks about this.
6. After 14 days with 12+ testers opted in, press **Apply for production** and answer the questions. The review usually takes a few days.

## Updating later

1. Bump `versionCode` (+1) and `versionName` in `android/app/build.gradle`.
2. Run the **Play Store bundle** workflow.
3. Upload the new `.aab` to the production track.

Content changes to the website reach users instantly and need no app update. Only changes to the app shell (icon, splash, offline bundle, Android version) need a new upload.
