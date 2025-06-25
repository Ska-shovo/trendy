document.addEventListener('DOMContentLoaded', () => {
    const flashlightBtn = document.getElementById('flashlightBtn');
    const turmericBtn = document.getElementById('turmericBtn');
    const glass = document.querySelector('.glass');
    const water = document.querySelector('.water');
    const turmericParticles = document.querySelector('.turmeric-particles');
    const hand = document.querySelector('.hand');
    const bgMusic = document.getElementById('bgMusic');
    const overlayText = document.querySelector('.overlay-text');

    // Prevent audio looping
    bgMusic.loop = false;

    // Create additional turmeric particles
    ['particle1', 'particle2', 'particle3', 'particle4', 'particle5', 'particle6'].forEach(p => {
        const particle = document.createElement('div');
        particle.classList.add(p);
        turmericParticles.appendChild(particle);
    });

    // Log initialization for debugging
    console.log('Script initialized. Elements loaded:', {
        flashlightBtn, turmericBtn, glass, water, turmericParticles, hand, bgMusic, overlayText
    });

    flashlightBtn.addEventListener('click', () => {
        console.log('Torch toggled');
        glass.classList.toggle('flashlight-on');
    });

    turmericBtn.addEventListener('click', () => {
        console.log('Turmeric button clicked');
        // Start continuous droplet animation only if not already active
        if (!turmericParticles.classList.contains('active')) {
            turmericParticles.classList.add('active');
            hand.classList.add('active');
            console.log('Droplets started, hand tilted');
        } else {
            console.log('Droplets already active');
        }

        // Trigger bubbling immediately
        water.classList.add('bubbling');

        // Play audio once
        if (bgMusic.paused) {
            console.log('Playing audio');
            bgMusic.play().catch(error => {
                console.error('Audio playback failed:', error);
                alert('Failed to play audio. Please check if music/tum_jo_paya.mp3 exists.');
            });
        } else {
            console.log('Audio already playing');
        }

        // Start water color change and overlay text after 8 seconds
        setTimeout(() => {
            console.log('Applying water color change and overlay text');
            water.classList.add('mixed');
            overlayText.classList.add('active');
            // Reset all animations after 2 more seconds (10s total)
            setTimeout(() => {
                console.log('Resetting all animations');
                turmericParticles.classList.remove('active');
                hand.classList.remove('active');
                water.classList.remove('bubbling');
                water.classList.remove('mixed');
                overlayText.classList.remove('active');
                bgMusic.pause();
                bgMusic.currentTime = 0;
            }, 2000);
        }, 8000);
    });
});