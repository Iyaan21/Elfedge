// // #007bff and #eabd23

// @import "tailwindcss";
// @plugin "tailwindcss-animate";

// @custom-variant dark(&: is(.dark *));

// @theme inline {
//     --color - background: var(--background);
//     --color - foreground: var(--foreground);
//     --font - sans: var(--font - geist - sans);
//     --font - mono: var(--font - geist - mono);
//     --color - sidebar - ring: var(--sidebar - ring);
//     --color - sidebar - border: var(--sidebar - border);
//     --color - sidebar - accent - foreground: var(--sidebar - accent - foreground);
//     --color - sidebar - accent: var(--sidebar - accent);
//     --color - sidebar - primary - foreground: var(--sidebar - primary - foreground);
//     --color - sidebar - primary: var(--sidebar - primary);
//     --color - sidebar - foreground: var(--sidebar - foreground);
//     --color - sidebar: var(--sidebar);
//     --color - ring: var(--ring);
//     --color - input: var(--input);
//     --color - border: var(--border);
//     --color - destructive - foreground: var(--destructive - foreground);
//     --color - destructive: var(--destructive);
//     --color - accent - foreground: var(--accent - foreground);
//     --color - accent: var(--accent);
//     --color - muted - foreground: var(--muted - foreground);
//     --color - muted: var(--muted);
//     --color - secondary - foreground: var(--secondary - foreground);
//     --color - secondary: var(--secondary);
//     --color - primary - foreground: var(--primary - foreground);
//     --color - primary: var(--primary);
//     --color - popover - foreground: var(--popover - foreground);
//     --color - popover: var(--popover);
//     --color - card - foreground: var(--card - foreground);
//     --color - card: var(--card);
//     --radius - sm: calc(var(--radius) - 4px);
//     --radius - md: calc(var(--radius) - 2px);
//     --radius - lg: var(--radius);
//     --radius - xl: calc(var(--radius) + 4px);
//     --color - success: var(--success);
//     --color - warning: var(--warning);
//     --color - error: var(--error);
//     --color - info: var(--info);
//     --font - figtree: "Figtree", sans - serif;
//     --font - sans: var(--font - figtree);
//     --font - mono: var(--font - geist - mono);
//     --font - jost: "Jost", sans - serif;
//     --font - poppins: "Poppins", sans - serif;
//     --highlight: var(--highlight);
//     --shadow - color: var(--shadow - color);
// }

// :root {
//     /* Light Mode - Professional IT Theme */
//     --background: #f5f7fb;          /* Soft blue-gray background */
//     --foreground: #1a2b4c;          /* Deep navy for text */
//     --card: #ffffff;                /* Clean white cards */
//     --card - foreground: #1a2b4c;
//     --popover: #ffffff;
//     --popover - foreground: #1a2b4c;
//     --primary: #007bff;             /* Your logo blue */
//     --primary - foreground: #ffffff;
//     --secondary: #eabd23;           /* Your logo golden yellow */
//     --secondary - foreground: #1a2b4c;
//     --muted: #e8eef3;              /* Light blue-gray for muted areas */
//     --muted - foreground: #5c6b8a;    /* Soft slate for muted text */
//     --accent: #eabd23;             /* Golden yellow accent */
//     --accent - foreground: #1a2b4c;
//     --destructive: #ff4444;         /* Modern red for errors */
//     --destructive - foreground: #ffffff;
//     --border: #d4dbe5;             /* Subtle blue-gray border */
//     --input: #e8eef3;
//     --ring: #007bff66;             /* Blue ring with transparency */
//     --radius: 0.75rem;             /* Slightly larger radius for modern feel */
//     --sidebar: #ffffff;
//     --sidebar - foreground: #1a2b4c;
//     --sidebar - primary: #007bff;
//     --sidebar - primary - foreground: #ffffff;
//     --sidebar - accent: #eabd23;
//     --sidebar - accent - foreground: #1a2b4c;
//     --sidebar - border: #d4dbe5;
//     --sidebar - ring: #007bff66;
//     --success: #00cc66;            /* Vibrant tech green */
//     --warning: #ffaa00;            /* Modern amber */
//     --error: #ff4444;
//     --info: #00b4d8;              /* Cyan for info */
//     --highlight: #007bff;          /* Blue for highlights */
//     --shadow - color: #1a2b4c1a;     /* Navy shadow at 10% opacity */
//     --animation - duration: 20s;
// }

// .dark {
//     /* Dark Mode - Futuristic IT Theme */
//     --background: #0a1426;          /* Deep blue-black */
//     --foreground: #e0e6f0;          /* Light gray-blue for text */
//     --card: #14203d;               /* Darker blue for cards */
//     --card - foreground: #e0e6f0;
//     --popover: #14203d;
//     --popover - foreground: #e0e6f0;
//     --primary: #4a9eff;            /* Lighter version of logo blue */
//     --primary - foreground: #0a1426;
//     --secondary: #f0c743;          /* Lighter version of logo yellow */
//     --secondary - foreground: #0a1426;
//     --muted: #1e2a47;             /* Dark blue muted background */
//     --muted - foreground: #8a9abf;   /* Light blue-gray muted text */
//     --accent: #f0c743;
//     --accent - foreground: #0a1426;
//     --destructive: #ff6666;
//     --destructive - foreground: #ffffff;
//     --border: #2a3757;            /* Dark blue border */
//     --input: #2a3757;
//     --ring: #4a9eff66;            /* Light blue ring */
//     --sidebar: #14203d;
//     --sidebar - foreground: #e0e6f0;
//     --sidebar - primary: #4a9eff;
//     --sidebar - primary - foreground: #0a1426;
//     --sidebar - accent: #f0c743;
//     --sidebar - accent - foreground: #0a1426;
//     --sidebar - border: #2a3757;
//     --sidebar - ring: #4a9eff66;
//     --success: #00e676;
//     --warning: #ffbb33;
//     --error: #ff6666;
//     --info: #00d1ff;
//     --highlight: #4a9eff;
//     --shadow - color: #00000033;     /* Subtle black shadow */
// }

// html {
//     scroll - behavior: smooth;
// }

// @layer base {
//   * {
//     @apply border - border outline - ring / 50;
// }

//   body {
//     @apply bg - background text - foreground;
// }

// h1,
//     h2,
//     h3,
//     h4,
//     h5,
//     h6 {
//     @apply text - foreground font - semibold;
// }

//   a {
//     @apply text - accent hover: text - accent / 80 transition - colors;
// }
// }

// /* ---------------------------------------
//    NAVBAR
//    --------------------------------------- */
// @layer components {
//   .container {
//         @apply mx - auto px - 2 sm: px - 4;
//     }

//   .title {
//         @apply text - 3xl sm: text - 4xl md: text - 5xl font - bold text - center tracking - tight mb - 2 md: mb - 4;
//     }

//   .sub - title {
//         @apply text - muted - foreground text - center text - sm sm: text - base max - w - 2xl mx - auto;
//     }

//   .sub - menu {
//         @apply absolute top - [4.2rem] p - [15px] rounded - xl origin - [50 % _ - 170px] z - 50 border border - border / 10;
//         @apply bg - background / 95 backdrop - blur - xl shadow - lg;
//         @apply transition - all duration - 300 ease -in -out;
//     }

//   .sub - menu a:hover {
//         @apply bg - gradient - to - r from - primary / 10 to - transparent;
//     }

//   .sub - menu - item {
//         @apply flex items - center gap - 4 p - 3 rounded - lg hover: bg - foreground / 5 transition - all duration - 200;
//         @apply hover: translate - x - 1;
//     }

//   .sub - menu - icon {
//         @apply p - 2 rounded - md bg - primary / 10 text - primary transition - colors duration - 200;
//         @apply group - hover: bg - primary / 20;
//     }

//   .sub - menu - heading {
//         @apply relative text - sm font - medium tracking - wide uppercase text - foreground / 80;
//         @apply before:absolute before: left - 0 before: -bottom - 2 before: w - 8 before: h - [2px] before: bg - primary / 60;
//         @apply after:absolute after: left - 0 after: -bottom - 2 after: w - 16 after: h - [0.5px] after: bg - secondary / 30;
//     }

//   /* Infinite Moving Cards */
//   .animate - scroll - left {
//         animation: scroll - left var(--animation - duration) linear infinite;
//         will - change: transform;
//     }

//   .animate - scroll - right {
//         animation: scroll - right var(--animation - duration) linear infinite;
//         will - change: transform;
//     }

//     @keyframes scroll - left {
//         0 % { transform: translateX(0); }
//         100 % { transform: translateX(calc(-50 % - 0.75rem)); }
//     }

//     @keyframes scroll - right {
//         0 % { transform: translateX(calc(-50 % - 0.75rem)); }
//         100 % { transform: translateX(0); }
//     }

//   .pause - animation {
//         animation - play - state: paused;
//     }
// }

// /* ---------------------------------------
//    WHY CHOOSE US
//    --------------------------------------- */
// @layer components {
//     @keyframes slide - left {
//     from { opacity: 0; transform: translateX(-50px); }
//     to { opacity: 1; transform: translateX(0); }
//     }

//     @keyframes slide - right {
//     from { opacity: 0; transform: translateX(50px); }
//     to { opacity: 1; transform: translateX(0); }
//     }

//   .animate - slide - left {
//         animation: slide - left 0.8s ease - out forwards;
//     }

//   .animate - slide - right {
//         animation: slide - right 0.8s ease - out forwards;
//     }
// }

// /* ---------------------------------------
//    MEET OUR TEAM
//    --------------------------------------- */
// @layer components {
//     @keyframes slide - up {
//     from { opacity: 0; transform: translateY(30px); }
//     to { opacity: 1; transform: translateY(0); }
//     }

//     @keyframes rotating {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
//     }

//   .animate - slide - up {
//         animation: slide - up 0.8s ease - out forwards;
//     }

//   .animate - rotating {
//         animation: rotating 20s linear infinite;
//     }
// }

// /* ---------------------------------------

// @import "tailwindcss";
// @plugin "tailwindcss-animate";

// @custom-variant dark (&:is(.dark *));

// @theme inline {
//   --color-background: var(--background);
//   --color-foreground: var(--foreground);
//   --font-sans: var(--font-geist-sans);
//   --font-mono: var(--font-geist-mono);
//   --color-sidebar-ring: var(--sidebar-ring);
//   --color-sidebar-border: var(--sidebar-border);
//   --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
//   --color-sidebar-accent: var(--sidebar-accent);
//   --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
//   --color-sidebar-primary: var(--sidebar-primary);
//   --color-sidebar-foreground: var(--sidebar-foreground);
//   --color-sidebar: var(--sidebar);
//   --color-ring: var(--ring);
//   --color-input: var(--input);
//   --color-border: var(--border);
//   --color-destructive-foreground: var(--destructive-foreground);
//   --color-destructive: var(--destructive);
//   --color-accent-foreground: var(--accent-foreground);
//   --color-accent: var(--accent);
//   --color-muted-foreground: var(--muted-foreground);
//   --color-muted: var(--muted);
//   --color-secondary-foreground: var(--secondary-foreground);
//   --color-secondary: var(--secondary);
//   --color-primary-foreground: var(--primary-foreground);
//   --color-primary: var(--primary);
//   --color-popover-foreground: var(--popover-foreground);
//   --color-popover: var(--popover);
//   --color-card-foreground: var(--card-foreground);
//   --color-card: var(--card);
//   --radius-sm: calc(var(--radius) - 4px);
//   --radius-md: calc(var(--radius) - 2px);
//   --radius-lg: var(--radius);
//   --radius-xl: calc(var(--radius) + 4px);
//   --color-success: var(--success);
//   --color-warning: var(--warning);
//   --color-error: var(--error);
//   --color-info: var(--info);
//   --font-figtree: "Figtree", sans-serif;
//   --font-sans: var(--font-figtree);
//   --font-mono: var(--font-geist-mono);
//   --font-jost: "Jost", sans-serif;
//   --font-poppins: "Poppins", sans-serif;
//   --highlight: var(--highlight);
//   --shadow-color: var(--shadow-color);
// }

// :root {
//   /* Light Mode - Sophisticated IT Theme */
// --background: #f6f8fa;          /* Clean, light blue-gray */
// --foreground: #1f2a44;          /* Deep blue for contrast */
// --card: #ffffff;               /* Pure white cards */
// --card - foreground: #1f2a44;
// --popover: #ffffff;
// --popover - foreground: #1f2a44;
// --primary: #007bff;            /* Your logo blue */
// --primary - foreground: #ffffff;
// --secondary: #d4af37;          /* Your muted gold */
// --secondary - foreground: #1f2a44;
// --muted: #e9edf2;             /* Subtle blue-gray muted */
// --muted - foreground: #5a6982;   /* Soft slate text */
// --accent: #d4af37;            /* Gold accent */
// --accent - foreground: #1f2a44;
// --destructive: #ff4d4f;        /* Modern red */
// --destructive - foreground: #ffffff;
// --border: #d9dfe6;            /* Light gray-blue border */
// --input: #e9edf2;
// --ring: #007bff66;            /* Blue ring with transparency */
// --radius: 0.75rem;            /* Modern radius */
// --sidebar: #ffffff;
// --sidebar - foreground: #1f2a44;
// --sidebar - primary: #007bff;
// --sidebar - primary - foreground: #ffffff;
// --sidebar - accent: #d4af37;
// --sidebar - accent - foreground: #1f2a44;
// --sidebar - border: #d9dfe6;
// --sidebar - ring: #007bff66;
// --success: #00c853;           /* Tech green */
// --warning: #ff9100;           /* Vibrant orange */
// --error: #ff4d4f;
// --info: #00b7d4;             /* Bright cyan */
// --highlight: #007bff;         /* Blue highlight */
// --shadow - color: #1f2a441a;    /* Deep blue shadow at 10% */
// --animation - duration: 20s;
// }

// .dark {
//     /* Dark Mode - Advanced IT Theme */
//     --background: #0b1529;          /* Deep midnight blue */
//     --foreground: #e2e8f0;          /* Light slate for text */
//     --card: #15213b;               /* Darker blue cards */
//     --card - foreground: #e2e8f0;
//     --popover: #15213b;
//     --popover - foreground: #e2e8f0;
//     --primary: #4a9eff;            /* Lighter logo blue */
//     --primary - foreground: #0b1529;
//     --secondary: #e0bf5a;          /* Lighter muted gold */
//     --secondary - foreground: #0b1529;
//     --muted: #202e4a;             /* Dark blue muted */
//     --muted - foreground: #94a3b8;   /* Light slate muted text */
//     --accent: #e0bf5a;
//     --accent - foreground: #0b1529;
//     --destructive: #ff6666;
//     --destructive - foreground: #ffffff;
//     --border: #2d3a5a;            /* Dark blue border */
//     --input: #2d3a5a;
//     --ring: #4a9eff66;            /* Light blue ring */
//     --sidebar: #15213b;
//     --sidebar - foreground: #e2e8f0;
//     --sidebar - primary: #4a9eff;
//     --sidebar - primary - foreground: #0b1529;
//     --sidebar - accent: #e0bf5a;
//     --sidebar - accent - foreground: #0b1529;
//     --sidebar - border: #2d3a5a;
//     --sidebar - ring: #4a9eff66;
//     --success: #00e676;
//     --warning: #ffab40;
//     --error: #ff6666;
//     --info: #00d4ff;
//     --highlight: #4a9eff;
//     --shadow - color: #00000033;     /* Subtle black shadow */
// }

// html {
//     scroll - behavior: smooth;
// }

// @layer base {
//   * {
//     @apply border - border outline - ring / 50;
// }

//   body {
//     @apply bg - background text - foreground;
// }

// h1,
//     h2,
//     h3,
//     h4,
//     h5,
//     h6 {
//     @apply text - foreground font - semibold;
// }

//   a {
//     @apply text - accent hover: text - accent / 80 transition - colors;
// }
// }

// /* ---------------------------------------
//    NAVBAR
//    --------------------------------------- */
// @layer components {
//   .container {
//         @apply mx - auto px - 2 sm: px - 4;
//     }

//   .title {
//         @apply text - 3xl sm: text - 4xl md: text - 5xl font - bold text - center tracking - tight mb - 2 md: mb - 4;
//     }

//   .sub - title {
//         @apply text - muted - foreground text - center text - sm sm: text - base max - w - 2xl mx - auto;
//     }

//   .sub - menu {
//         @apply absolute top - [4.2rem] p - [15px] rounded - xl origin - [50 % _ - 170px] z - 50 border border - border / 10;
//         @apply bg - background / 95 backdrop - blur - xl shadow - lg;
//         @apply transition - all duration - 300 ease -in -out;
//     }

//   .sub - menu a:hover {
//         @apply bg - gradient - to - r from - primary / 10 to - transparent;
//     }

//   .sub - menu - item {
//         @apply flex items - center gap - 4 p - 3 rounded - lg hover: bg - foreground / 5 transition - all duration - 200;
//         @apply hover: translate - x - 1;
//     }

//   .sub - menu - icon {
//         @apply p - 2 rounded - md bg - primary / 10 text - primary transition - colors duration - 200;
//         @apply group - hover: bg - primary / 20;
//     }

//   .sub - menu - heading {
//         @apply relative text - sm font - medium tracking - wide uppercase text - foreground / 80;
//         @apply before:absolute before: left - 0 before: -bottom - 2 before: w - 8 before: h - [2px] before: bg - primary / 60;
//         @apply after:absolute after: left - 0 after: -bottom - 2 after: w - 16 after: h - [0.5px] after: bg - secondary / 30;
//     }

//   /* Infinite Moving Cards */
//   .animate - scroll - left {
//         animation: scroll - left var(--animation - duration) linear infinite;
//         will - change: transform;
//     }

//   .animate - scroll - right {
//         animation: scroll - right var(--animation - duration) linear infinite;
//         will - change: transform;
//     }

//     @keyframes scroll - left {
//         0 % { transform: translateX(0); }
//         100 % { transform: translateX(calc(-50 % - 0.75rem)); }
//     }

//     @keyframes scroll - right {
//         0 % { transform: translateX(calc(-50 % - 0.75rem)); }
//         100 % { transform: translateX(0); }
//     }

//   .pause - animation {
//         animation - play - state: paused;
//     }
// }

// /* ---------------------------------------
//    WHY CHOOSE US
//    --------------------------------------- */
// @layer components {
//     @keyframes slide - left {
//     from { opacity: 0; transform: translateX(-50px); }
//     to { opacity: 1; transform: translateX(0); }
//     }

//     @keyframes slide - right {
//     from { opacity: 0; transform: translateX(50px); }
//     to { opacity: 1; transform: translateX(0); }
//     }

//   .animate - slide - left {
//         animation: slide - left 0.8s ease - out forwards;
//     }

//   .animate - slide - right {
//         animation: slide - right 0.8s ease - out forwards;
//     }
// }

// /* ---------------------------------------
//    MEET OUR TEAM
//    --------------------------------------- */
// @layer components {
//     @keyframes slide - up {
//     from { opacity: 0; transform: translateY(30px); }
//     to { opacity: 1; transform: translateY(0); }
//     }

//     @keyframes rotating {
//     from { transform: rotate(0deg); }
//     to { transform: rotate(360deg); }
//     }

//   .animate - slide - up {
//         animation: slide - up 0.8s ease - out forwards;
//     }

//   .animate - rotating {
//         animation: rotating 20s linear infinite;
//     }
// }
