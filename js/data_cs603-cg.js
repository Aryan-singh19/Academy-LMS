window.topicDetails = window.topicDetails || {};
Object.assign(window.topicDetails, {
    'cs603-cg-u1': {
        'cg-u1t1': {
            title: 'Raster Scan Displays & Bresenham Algorithm',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">How Screens Work</h3>
<p class="mb-4">Modern computer monitors are <strong>Raster Scan Displays</strong>. They do not draw continuous lines like an Etch-A-Sketch. Instead, the screen is a massive grid of millions of tiny squares called <strong>Pixels</strong> (Picture Elements). To draw a line, the computer must figure out exactly which discrete squares to light up to create the illusion of a straight, continuous line.</p>

<h3 class="text-xl font-bold mb-2 text-yellow-400">The Problem with Drawing Lines</h3>
<p class="mb-4 text-gray-300">The mathematical equation for a line is <code>y = mx + c</code>. If you plug in an X coordinate, you will get a Y coordinate. But that Y coordinate will usually be a decimal (e.g., 4.7). You cannot light up 4.7 pixels. You must round to 5. Floating-point math (decimals) is incredibly slow for computers to process millions of times per second.</p>

<div class="bg-gray-800 p-6 rounded-xl border-t-4 border-green-500 shadow-lg mb-6">
    <h4 class="text-green-400 font-bold mb-2">Bresenham's Line Algorithm (1962)</h4>
    <p class="text-gray-300 text-sm mb-4">Jack Bresenham at IBM solved this problem brilliantly. His algorithm determines which pixels to illuminate to approximate a straight line between two points, using <strong>ONLY fast integer addition and subtraction</strong>. No floating-point division or multiplication is required.</p>
    <ul class="list-disc pl-5 space-y-2 text-gray-400 text-sm">
        <li>It uses a <strong>Decision Parameter (P)</strong> to track the mathematical error.</li>
        <li>As you move one pixel to the right (X+1), the algorithm checks if the true mathematical line is closer to the current Y pixel, or the Y+1 pixel above it.</li>
        <li>If P > 0, you move up one pixel (Y+1) and adjust P. If P < 0, you keep the same Y.</li>
    </ul>
</div>
            `,
            quizzes: [
                {
                    question: "Why is Bresenham's algorithm superior to the DDA (Digital Differential Analyzer) line drawing algorithm?",
                    options: [
                        "A) Bresenham's can draw 3D lines, DDA cannot.",
                        "B) Bresenham's uses only integer arithmetic, making it significantly faster and cheaper for hardware to process than DDA, which requires floating-point operations.",
                        "C) Bresenham's algorithm uses less RAM.",
                        "D) DDA requires a specialized GPU."
                    ],
                    answer: 1,
                    explanation: "Before modern GPUs, doing floating-point math for every single pixel was agonizingly slow. Bresenham's genius was reducing the math to simple integer additions."
                }
            ],
            references: [
                { title: "Interactive Bresenham Visualizer", url: "https://www.cs.helsinki.fi/group/goa/mallinnus/lines/bresenh.html" }
            ]
        },
        'cg-u1t2': {
            title: '2D Transformations',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Moving Things Around</h3>
<p class="mb-4">Once you draw a shape, you probably want to move it, rotate it, or scale it. In computer graphics, we do this by multiplying the coordinates of the shape's vertices by <strong>Transformation Matrices</strong>.</p>

<table class="w-full text-left border-collapse mb-6 bg-gray-900 rounded-lg overflow-hidden shadow-lg mt-4 border border-gray-700">
    <thead class="bg-gray-800 text-gray-200">
        <tr>
            <th class="p-4">Transformation</th>
            <th class="p-4">Math Concept</th>
            <th class="p-4">Visual Result</th>
        </tr>
    </thead>
    <tbody class="text-gray-300 divide-y divide-gray-800 text-sm">
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-blue-300">Translation</td>
            <td class="p-4">Adding a constant (tx, ty) to (X, Y).</td>
            <td class="p-4">The object slides across the screen without rotating or changing size.</td>
        </tr>
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-green-300">Scaling</td>
            <td class="p-4">Multiplying (X, Y) by a scale factor (sx, sy).</td>
            <td class="p-4">The object grows or shrinks. If sx=2, it becomes twice as wide.</td>
        </tr>
        <tr class="hover:bg-gray-750 transition-colors">
            <td class="p-4 font-bold text-purple-300">Rotation</td>
            <td class="p-4">Using Sine and Cosine functions to pivot (X, Y) around an origin.</td>
            <td class="p-4">The object spins.</td>
        </tr>
    </tbody>
</table>

<h3 class="text-xl font-bold mb-2 text-yellow-400">Homogeneous Coordinates</h3>
<p class="mb-4 text-gray-300">In standard 2D Cartesian math, Translation is an addition problem, while Rotation and Scaling are multiplication problems. You cannot combine addition and multiplication easily into a single matrix. So mathematicians added a "fake" 3rd dimension (W), turning <code>(X, Y)</code> into <code>(X, Y, 1)</code>.</p>
<p class="mb-4">This math trick, called <strong>Homogeneous Coordinates</strong>, turns Translation into a multiplication problem. Now, ALL transformations can be done by multiplying matrices, allowing GPUs to combine thousands of movements into a single ultra-fast calculation!</p>
            `,
            quizzes: [
                {
                    question: "Why do 2D graphics systems use 3x3 Homogeneous Coordinate matrices instead of standard 2x2 matrices?",
                    options: [
                        "A) Because screens are 3D.",
                        "B) So that Translation can be treated as matrix multiplication, allowing all transformations to be combined into a single matrix.",
                        "C) It prevents integer overflow.",
                        "D) It allows for better color rendering."
                    ],
                    answer: 1,
                    explanation: "Without the 'fake' 1 in (x,y,1), you can't translate via multiplication. Making everything multiplication is what makes graphics pipelines so fast."
                }
            ]
        }
    },
    'cs603-cg-u2': {
        'cg-u2t1': {
            title: '3D Projections (Perspective vs Parallel)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Illusion of Depth</h3>
<p class="mb-4">Your computer monitor is completely flat (2D). A "3D game" does not actually exist in 3 dimensions on the screen. The GPU must perform a mathematical operation called <strong>Projection</strong> to flatten a 3D virtual world onto a 2D plane, tricking your brain into seeing depth.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-yellow-500 shadow-md">
        <h4 class="text-yellow-400 font-bold mb-2">Perspective Projection</h4>
        <p class="text-gray-300 text-sm mb-2">Simulates how the human eye works. Objects that are further away are drawn smaller. Parallel lines appear to converge at a <strong>Vanishing Point</strong> on the horizon.</p>
        <p class="text-gray-300 text-sm italic">Used in: First-Person Shooters (FPS), realistic simulations, architectural walkthroughs.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-l-4 border-purple-500 shadow-md">
        <h4 class="text-purple-400 font-bold mb-2">Parallel (Orthographic) Projection</h4>
        <p class="text-gray-300 text-sm mb-2">Objects remain their exact size regardless of how far away they are. Parallel lines NEVER converge.</p>
        <p class="text-gray-300 text-sm italic">Used in: Engineering blueprints, CAD software, Isometric games (like early SimCity or Age of Empires) where exact measurements matter more than realism.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "If you are designing CAD software where an engineer needs to measure the exact length of a pipe on screen regardless of its 'depth' in the scene, which projection must you use?",
                    options: ["A) Perspective Projection", "B) Parallel (Orthographic) Projection", "C) Homogeneous Projection", "D) Raster Projection"],
                    answer: 1,
                    explanation: "Perspective projection distorts size based on distance, making accurate on-screen measurements impossible. Orthographic projection preserves parallel lines and exact lengths."
                }
            ]
        },
        'cg-u2t2': {
            title: 'Hidden Surface Removal',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Don't Draw What You Can't See</h3>
<p class="mb-4">If a virtual character is standing behind a brick wall, the GPU shouldn't waste electricity calculating the lighting and textures for the character's face. <strong>Hidden Surface Removal</strong> algorithms determine which objects are blocked by other objects so they aren't drawn.</p>

<h3 class="text-xl font-bold mb-2 text-green-400">The Z-Buffer Algorithm (Depth Buffering)</h3>
<p class="mb-4 text-gray-300">This is the industry standard used by almost all modern graphics cards.</p>
<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li>The GPU maintains a second memory grid exactly the same size as the screen, called the <strong>Z-Buffer</strong>.</li>
    <li>Instead of storing colors (RGB), the Z-Buffer stores the <strong>Depth (Z-value)</strong> of the closest object seen at every single pixel.</li>
    <li>When the GPU tries to draw a new triangle, it checks the Z-Buffer for that pixel. Is the new triangle closer to the camera than the current value in the Z-Buffer?</li>
    <li>If <strong>YES</strong> (it's closer): Draw the color, and update the Z-Buffer with the new, closer depth.</li>
    <li>If <strong>NO</strong> (it's behind something): Ignore it and save processing power.</li>
</ul>

<div class="bg-gray-800 p-4 border-l-4 border-red-500 rounded text-sm text-gray-300 shadow-inner">
    <strong>Z-Fighting:</strong> A famous bug in 3D games. If two walls are placed at the exact same depth, the Z-Buffer gets confused about which one is "closer", causing the textures to violently flicker back and forth as the camera moves.
</div>
            `,
            quizzes: [
                {
                    question: "What is stored inside a Z-Buffer?",
                    options: [
                        "A) The RGB color values for the monitor.",
                        "B) The 3D models of the scene.",
                        "C) The distance (depth) of the closest object to the camera for each pixel.",
                        "D) The lighting calculations."
                    ],
                    answer: 2,
                    explanation: "The Z-Buffer (Depth Buffer) only cares about distance. It uses this distance to decide if a new pixel should overwrite an old pixel or be discarded because it's 'hidden' behind something."
                }
            ]
        }
    },
    'cs603-cg-u3': {
        'cg-u3t1': {
            title: 'Light Sources (Ambient, Diffuse, Specular)',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Let There Be Light</h3>
<p class="mb-4">Without light equations, a 3D sphere just looks like a flat 2D circle on the screen. Illumination models calculate how light interacts with surfaces to create shadows and highlights, giving the illusion of volume.</p>

<h3 class="text-xl font-bold mb-2 text-yellow-400">The 3 Components of Basic Lighting</h3>
<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-800 p-5 rounded-lg border border-gray-700">
    <li><strong class="text-purple-400">Ambient Light:</strong> Background light that bounces around everywhere. It ensures shadows aren't pitch black. It hits every part of every object equally, regardless of where the sun is.</li>
    <li><strong class="text-green-400">Diffuse Light:</strong> The matte reflection. Depends entirely on the angle of the light hitting the surface. If light hits a surface dead-on (perpendicular), it's very bright. If it hits at a steep angle, it's dark. (Calculated using the <strong>Dot Product</strong> of the light vector and the surface normal).</li>
    <li><strong class="text-blue-400">Specular Light:</strong> The shiny highlight. Depends on the angle of the light AND where the camera (your eye) is looking. Think of the bright white dot on a shiny billiard ball.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "Which component of an illumination model is responsible for the bright, shiny highlight on a polished apple?",
                    options: [
                        "A) Ambient Light",
                        "B) Diffuse Light",
                        "C) Specular Light",
                        "D) Refracted Light"
                    ],
                    answer: 2,
                    explanation: "Specular reflection creates the 'shiny dot' because it calculates light bouncing directly from the light source, off the surface, and perfectly straight into the camera lens."
                }
            ]
        },
        'cg-u3t2': {
            title: 'Phong vs Gouraud Shading',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Coloring the Triangles</h3>
<p class="mb-4">Once we know the lighting math, how do we actually paint the 3D triangles that make up a model? We have to interpolate (blend) colors across the surface.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-orange-500 shadow-lg">
        <h4 class="text-orange-400 font-bold mb-2">Gouraud Shading (Fast & Ugly)</h4>
        <p class="text-gray-300 text-sm mb-2">Calculates the lighting math ONLY at the three corners (vertices) of the triangle. It then blindly blends the resulting colors across the middle.</p>
        <p class="text-gray-300 text-sm"><strong>Problem:</strong> If a shiny specular highlight is supposed to be in the dead center of the triangle, Gouraud shading completely misses it because it only checks the corners. Looks blocky.</p>
    </div>
    <div class="bg-gray-800 p-5 rounded-xl border-t-4 border-indigo-500 shadow-lg">
        <h4 class="text-indigo-400 font-bold mb-2">Phong Shading (Slow & Pretty)</h4>
        <p class="text-gray-300 text-sm mb-2">Interpolates the <strong>Normal Vector</strong> (the angle of the surface) across the entire triangle, and then calculates the complex lighting math for <em>every single pixel</em> inside the triangle.</p>
        <p class="text-gray-300 text-sm"><strong>Result:</strong> Perfectly smooth curves and highly accurate, crisp specular highlights. Extremely computationally expensive.</p>
    </div>
</div>
            `,
            quizzes: [
                {
                    question: "Why does Gouraud shading often fail to render sharp specular highlights (shiny spots) on large polygons?",
                    options: [
                        "A) It only calculates lighting at the vertices (corners), so if the highlight mathematically falls in the center of the polygon, it is completely missed.",
                        "B) It doesn't support the color white.",
                        "C) It is designed only for 2D graphics.",
                        "D) It calculates lighting for every pixel, which blurs the highlight."
                    ],
                    answer: 0,
                    explanation: "Gouraud calculates colors at the corners and blends them. If the corners are dark, the middle will be dark, completely ignoring a bright spotlight hitting the center."
                }
            ]
        }
    },
    'cs603-cg-u4': {
        'cg-u4t1': {
            title: 'Bezier Curves',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Drawing Smooth Lines with Math</h3>
<p class="mb-4">In graphics, if you want to draw a smooth curve (like the outline of a font or the curve of a sports car), you don't store a million tiny straight lines. You use parametric equations to define the curve with just a few <strong>Control Points</strong>.</p>

<h3 class="text-xl font-bold mb-2 text-green-400">Bezier Curves</h3>
<p class="mb-4 text-gray-300">Invented by Pierre Bézier to design Renault cars in the 1960s. A Bezier curve uses a set of control points. The curve absolutely touches the first and last point, but is "pulled" toward the middle points like gravity, without actually touching them.</p>

<ul class="list-disc pl-5 space-y-3 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong>Cubic Bezier:</strong> The most common type (used in Adobe Illustrator's Pen Tool). It uses 4 points: Start, End, and two "Handle" points that pull the curve.</li>
    <li><strong>Mathematical Basis:</strong> They rely on Bernstein polynomials to smoothly interpolate between the points over time (from t=0 to t=1).</li>
</ul>
            `,
            quizzes: [
                {
                    question: "In a standard Cubic Bezier curve, how many control points dictate the shape of the curve?",
                    options: ["A) 2", "B) 3", "C) 4", "D) Infinite"],
                    answer: 2,
                    explanation: "A cubic Bezier curve requires 4 points: a starting anchor, an ending anchor, and two directional control handles."
                }
            ]
        },
        'cg-u4t2': {
            title: 'B-Spline & NURBS',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Problem with Bezier</h3>
<p class="mb-4">Bezier curves are great, but they have a fatal flaw: <strong>Global Control</strong>. If you have a complex curve made of 20 points, and you move just ONE point in the middle, the <em>entire</em> curve shifts and warps mathematically.</p>

<div class="bg-gray-800 p-5 rounded-xl border-l-4 border-red-500 shadow-lg mb-6">
    <h4 class="text-red-400 font-bold mb-2">B-Splines (Basis Splines)</h4>
    <p class="text-gray-300 text-sm">B-Splines solve this by offering <strong>Local Control</strong>. Moving one control point only affects the immediate local area of the curve, leaving the rest of the shape perfectly intact. This is crucial for 3D modeling complex objects like airplanes.</p>
</div>

<h3 class="text-xl font-bold mb-2 text-purple-400">NURBS (Non-Uniform Rational B-Splines)</h3>
<p class="mb-4 text-gray-300 text-sm">The industry standard for CAD and 3D modeling. "Rational" means they add a "weight" to each control point. If you increase the weight of a point, it pulls the curve closer to it with stronger gravity. NURBS are mathematically powerful enough to perfectly represent conic sections (like true, perfect circles), which standard Bezier and B-Splines cannot do.</p>
            `,
            quizzes: [
                {
                    question: "What is the primary advantage of B-Spline curves over Bezier curves for 3D modeling?",
                    options: [
                        "A) B-Splines are 2D only.",
                        "B) B-Splines provide Local Control, meaning moving one point only alters a small section of the curve, whereas moving a point on a Bezier alters the entire curve.",
                        "C) B-Splines don't use mathematics.",
                        "D) B-Splines require fewer control points."
                    ],
                    answer: 1,
                    explanation: "Local control is essential for complex modeling. You don't want the tail of your airplane model to warp just because you tweaked a curve on the nose."
                }
            ]
        }
    },
    'cs603-cg-u5': {
        'cg-u5t1': {
            title: 'Keyframing & Kinematics',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">Bringing Things to Life</h3>
<p class="mb-4">Animation is just rapidly drawing slightly different images (frames). But manually drawing 60 frames per second is impossible.</p>

<ul class="list-disc pl-5 space-y-4 text-gray-300 text-sm mb-6 bg-gray-900 p-5 rounded-lg border border-gray-700">
    <li><strong class="text-yellow-400">Keyframing:</strong> The animator only poses the character at the extremes (e.g., Frame 1: Arm down. Frame 30: Arm up). The computer uses mathematical curves (like Bezier) to <strong>Interpolate</strong> (tween) the arm smoothly across frames 2 through 29.</li>
    <li><strong class="text-green-400">Forward Kinematics (FK):</strong> To move a hand, the animator rotates the shoulder, then the elbow, then the wrist. The movement propagates down the hierarchy.</li>
    <li><strong class="text-blue-400">Inverse Kinematics (IK):</strong> Much smarter. The animator just grabs the character's hand and drags it to a doorknob. The computer mathematically calculates exactly how the elbow and shoulder must bend to allow the hand to reach that spot.</li>
</ul>
            `,
            quizzes: [
                {
                    question: "In 3D animation, if you move a character's foot to the floor, and the computer automatically calculates how the knee and hip joints must bend to accommodate the foot's position, what technique is being used?",
                    options: ["A) Forward Kinematics", "B) Inverse Kinematics", "C) Keyframing", "D) Ray Tracing"],
                    answer: 1,
                    explanation: "Inverse Kinematics works backwards from the goal (the foot's position) to calculate the angles of the parent joints."
                }
            ]
        },
        'cg-u5t2': {
            title: 'Ray Tracing Fundamentals',
            content: `
<h3 class="text-2xl font-bold mb-4 text-blue-400">The Holy Grail of Graphics</h3>
<p class="mb-4">Most video games use Rasterization (Z-buffers and projection) because it's fast. But it fakes shadows and reflections. <strong>Ray Tracing</strong> simulates the actual physics of light.</p>

<div class="bg-gray-800 p-5 rounded-xl border-t-4 border-purple-500 shadow-lg mb-6">
    <h4 class="text-purple-400 font-bold mb-2">How it works (Backwards)</h4>
    <p class="text-gray-300 text-sm mb-2">In the real world, billions of photons shoot out of a lightbulb, bounce off walls, and a tiny fraction happen to hit your eye. Simulating that is impossible.</p>
    <p class="text-gray-300 text-sm">Ray Tracing works in reverse. The camera shoots a mathematical "ray" out of every single pixel on the screen into the 3D scene. When the ray hits an object (like a mirror), the ray bounces. It keeps bouncing until it hits a light source. The computer then calculates the exact color and shadow along that path.</p>
    <p class="text-gray-300 text-sm mt-3 font-bold text-red-400">Result: Perfect, physically accurate reflections, glass refractions, and soft shadows.</p>
</div>
            `,
            quizzes: [
                {
                    question: "Why do Ray Tracing algorithms typically trace rays 'backwards' from the camera lens into the scene, rather than from the light source to the camera?",
                    options: [
                        "A) Because light travels backwards in computers.",
                        "B) Because 99.9% of rays shot from a light source will bounce off into space and never hit the tiny camera lens, wasting massive amounts of processing power. Tracing from the camera guarantees every calculated ray contributes to the final image.",
                        "C) Because it makes shadows darker.",
                        "D) Because Rasterization requires it."
                    ],
                    answer: 1,
                    explanation: "It's an optimization trick. Only calculating the light paths that actually hit your eye saves the computer from simulating billions of useless photons."
                }
            ]
        }
    }
});
