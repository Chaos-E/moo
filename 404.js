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

document.querySelector('.fourofour-text').addEventListener('mouseover', function() {
    this.textContent = 'Moo Home';
    this.href = "home.html"; //  privacy policy URL here
    this.style.color = '#fff';
    this.style.textShadow = '0 0 1px black, 0 0 1px black';
});

document.querySelector('.fourofour-text').addEventListener('mouseout', function() {
    this.textContent = '404';
    this.style.color = '#eb4e3d';
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
