const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video element and then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    // Catch errors
    console.log("Oops! An error occured!\nError description: ", error)
  }
}

// Event Listener
button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture-In-Picture
  await videoElement.requestPictureInPicture();
  // Enable Button
  button.disabled = false;
});

// On load
selectMediaStream();