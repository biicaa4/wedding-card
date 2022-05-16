const closeButton = document.querySelector('.close-button');
const container = document.querySelector('.container');
const video = document.querySelector('.video-iframe')


let videoStopper = function(id) {
    let containerElement = document.getElementById(id);
    let iframe_tag = containerElement.querySelector( 'iframe');
    let video_tag = containerElement.querySelector( 'video' );
    if ( iframe_tag) {
        let iframeSrc = iframe_tag.src;
        iframe_tag.src = iframeSrc; 
    }
    if ( video_tag) {
        video_tag.pause();
    }
}

const closeContainer = closeButton.addEventListener("click", function(){
    
    container.style.display = 'none';
});

closeContainer();

function displayContainer() {
    container.style.display = 'block';
}