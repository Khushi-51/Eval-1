window.addEventListener('load', function() {

   
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

    startLoader();
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
        delay: 2.5,  
        opacity: 1,  
        scale: 2.2,  
        duration: 1.3,
        stagger: 0.3, 
        ease: "back.out(1.7)",  
        onComplete: function() {
            gsap.to(".yo",{
                scale: 1,  
                duration: 0.5,
                stagger: 0.1, 
                ease: "power2.inOut",
            });
        }
    });

    const barsAnimationDuration = 1.5; 
    const pauseAfterBars = 2500; 

    setTimeout(function() {
        document.getElementById('loader').classList.add('hide-loader');
    }, 5000 + pauseAfterBars);  

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
    }, 5000 + pauseAfterBars);
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 5000 + pauseAfterBars); 
});





