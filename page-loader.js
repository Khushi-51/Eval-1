window.addEventListener('load', function() {

    // Function to start the counter animation
    function startLoader() {
        let counterElement = document.querySelector(".counter");
        let currentValue = 0;

        function updateCounter() {
            if (currentValue === 2) {
                return;
            }
            counterElement.textContent = currentValue;
            currentValue++;
            let delay = Math.floor(Math.random() * 200) + 50;
            setTimeout(updateCounter, delay);
        }

        updateCounter();
    }

    // Start the counter animation
    startLoader();

    // GSAP animations for bars and text
    gsap.to(".counter", 0.25, {
        delay: 1,  
        opacity: 1,
    });

    gsap.to(".bar", 1.5, {
        delay: 3.5,
        duration:2,
        height: 0,
        stagger: {
            amount: 0.5,
        },
        ease: "power4.inOut",
    });

    gsap.to(".yo", 1.5, {
        delay: 2.5,  // Start animating after 2.5 seconds
        opacity: 1,  // Fade in the letters
        scale: 2.2,  // Slightly scale up the letters for emphasis
        duration: 1.3,  // Duration of the animation
        stagger: 0.3,  // Stagger each letter by 0.2s
        ease: "back.out(1.7)",  // A smooth spring-like easing
        onComplete: function() {
            gsap.to(".yo",{
                scale: 1,  // Return to original size
                duration: 0.5,  // Smooth return to normal size
                stagger: 0.1,  // Stagger each letter by 0.2s
                ease: "power2.inOut",
            });
        }
    });

    // Adding a pause duration after the bars animation
    const barsAnimationDuration = 1.5; // Duration of bars animation
    const pauseAfterBars = 2500; // 2 seconds pause after bars animation

    // Delay before hiding loader and revealing content
    setTimeout(function() {
        document.getElementById('loader').classList.add('hide-loader');
    }, 5000 + pauseAfterBars);  // Ensure this happens after all animations and pause

    // Delay for header and main animations
    setTimeout(function() {
        gsap.from("header", 1.5, {
            y: 400,
            stagger: {
                amount: 0.5,
            },
            ease: "power4.inOut",
        });

        gsap.from("main", 2, {
            y: -900,
            ease: "power4.inOut",
        });
    }, 5000 + pauseAfterBars);  // Show header and main after delays

    // Final removal of loader after the pause
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 5000 + pauseAfterBars);  // Final removal of loader
});





