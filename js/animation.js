// This file handles the logic for making the SVG float randomly across the screen.
// It includes functions to change the position of the SVG at set intervals.

document.addEventListener('DOMContentLoaded', function() {
    const svgContainer = document.getElementById('svg-container');
    
    // Start animation once SVG is loaded
    const checkSVGLoaded = setInterval(() => {
        if (svgContainer.querySelector('svg')) {
            clearInterval(checkSVGLoaded);
            moveRandomly();
        }
    }, 100);
    
    function moveRandomly() {
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Get SVG dimensions
        const svg = svgContainer.querySelector('svg');
        const svgWidth = parseFloat(svg.getAttribute('width'));
        const svgHeight = parseFloat(svg.getAttribute('height') || svgWidth * (svg.viewBox.baseVal.height / svg.viewBox.baseVal.width));
        
        // Calculate maximum positions
        const maxX = viewportWidth - svgWidth;
        const maxY = viewportHeight - svgHeight;
        
        function animate() {
            // Generate random position
            const newX = Math.max(0, Math.floor(Math.random() * maxX));
            const newY = Math.max(0, Math.floor(Math.random() * maxY));
            const scaleNew = 1 + Math.random();
            
            // Apply new position
            svgContainer.style.transform = `translate(${newX}px, ${newY}px)`;
            svgContainer.style.scale = scaleNew;
            
            // Schedule next movement
            setTimeout(animate, 5000); // Move every 5 seconds
        }
        
        animate();
    }
});