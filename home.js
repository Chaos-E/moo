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

var hoverTimer;

document.querySelector('.app-text').addEventListener('mouseover', function() {
    hoverTimer = setTimeout(() => {
        this.textContent = 'Privacy Policy';
        this.href = "privacy.html"; //  privacy policy URL here
        this.style.color = '#eb4e3d';
        this.style.textShadow = '0 0 1px black, 0 0 1px black';
    }, 3000); // delay of 3000ms, adjust this to the desired delay
});

document.querySelector('.app-text').addEventListener('mouseout', function() {
    clearTimeout(hoverTimer);
    this.textContent = 'Applications / Secondary Users';
    this.href = "applicationsport.html"; //  applications URL here
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
// General Moo Logic 