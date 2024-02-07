// General Moo Logic 
// Array of images to cycle through. 
const images = 
['AllBackMoos/cows-relaxing-next-to-water-pond.webp',
 'AllBackMoos/cows-relaxing-next-to-water-pond2.webp', 
 'AllBackMoos/cows-relaxing-next-to-water-pond3.webp',
 'AllBackMoos/cows-relaxing-next-to-water-pond4.webp',
 'AllBackMoos/cows-relaxing-next-to-water-pond5.webp',
 'AllBackMoos/cows-relaxing-next-to-water-pond6.webp',]

// Function to change the image
function changeImage() {
    const randomImg = document.getElementById('random-image');
    const randomIndex = Math.floor(Math.random() * images.length);
    randomImg.src = images[randomIndex];
}

document.querySelector('.calculator-text').addEventListener('mouseover', function() {
    this.textContent = 'Privacy Policy';
    this.href = "privacy.html"; //  privacy policy URL here
    this.style.color = '#eb4e3d';
    this.style.textShadow = '0 0 1px black, 0 0 1px black';
});

document.querySelector('.calculator-text').addEventListener('mouseout', function() {
    this.textContent = 'App Portfolio';
    this.style.color = '#fff';
    this.style.textShadow = 'none';
});

window.onload = function() {
    var isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
        document.body.className += " mobile";
    } else {
        document.body.className += " desktop";
    }

    // Call the function to change the image when page loads
    changeImage();
};

document.getElementById('random-image').addEventListener('transitionend', function() {
    var appleLink = document.getElementById('applelink');
    var calSupLink = document.getElementById('CalSupLink');

    appleLink.style.zIndex = 2; // set link above the image
    appleLink.style.opacity = '1'; // set link opacity to 1 (visible)
    appleLink.style.transition = 'opacity 1s'; // Add transition to the link

    calSupLink.style.zIndex = 2; // set link above the image
    calSupLink.style.opacity = '1'; // set link opacity to 1 (visible)
    calSupLink.style.transition = 'opacity 1s'; // Add transition to the link
});

setTimeout(function() {
    var img = document.getElementById('random-image');
    img.style.opacity = '0.1';
    img.style.transition = 'opacity 2s'; // Add transition to the image
    img.style.zIndex = 0; // set image behind the link
}, 2000); // This will wait 2 seconds before executing
