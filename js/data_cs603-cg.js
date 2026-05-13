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
    }
});
