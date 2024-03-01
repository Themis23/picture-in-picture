const videoElement = document.getElementById("video")
const button = document.getElementById("button")

// Prompt user to select media stream, pass to video element and play
async function selectMeadiaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    }catch(error){
        // Catch error here
        console.log("we have a problem", error)
    }
}

button.addEventListener("click", async () =>{
    // Disable button
    button.disabled = true
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false
})

// On load
selectMeadiaStream();