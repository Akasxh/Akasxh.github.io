
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Akasxh</title>
    <style>
        body {
            margin: 0;
            overflow: hidden; /* Prevents scrollbars due to canvas size */
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh; /* Ensure the body takes up the full height of the viewport */
        }

        #myCanvas {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1; /* Places the canvas behind other elements */
        }

        /* Your additional styling for titles or other elements goes here */
        header {
            text-align: center;
            z-index: 1; /* Places titles in front of the canvas */
        }

        h1 {
            margin: 0;
        }
    </style>
    
</head>
<body>
    <canvas id="myCanvas" width="1250" height="1000"></canvas>
    
    <!-- Your HTML content, titles, etc. -->
    <header>
        <img id="profile-pic" src="your_profile_pic.jpg" alt="Profile Picture">
        <h1>Akash</h1>
        <p id="description">Short description about yourself goes here.</p>
        <div id="social-icons">
            <a href="https://github.com/Akasxh" target="_blank"><img src="github-icon.png" alt="GitHub" width="32" height="32"></a>
            <a href="https://linkedin.com/in/s-akash-project-gia" target="_blank"><img src="linkedin-icon.png" alt="LinkedIn" width="32" height="32"></a>
            <a href="https://instagram.com/akaxsh.x" target="_blank"><img src="instagram-icon.png" alt="Instagram" width="32" height="32"></a>
        </div>
    </header>

    <!-- Include your JavaScript file at the end to ensure the DOM is fully loaded -->
    <script src="script.js"></script>
</body>
</html>

