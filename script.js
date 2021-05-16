const videoElement = document.getElementById("video-container");
const button = document.getElementById("btn");

//Stream function
async function streamMedia() {
        //getting request for the video
        try {
            //Shows the popup of the screens available
            const video = await navigator.mediaDevices.getDisplayMedia();
            videoElement.srcObject = video;
            videoElement.onloadedmetadata = () => {
                    videoElement.play();
            }
        }
        catch(error){
            console.log(`here is the following error--:${error}`);
        }

}
button.addEventListener('click', async ()=> {
    button.disabled =true;
    await videoElement.requestPicutreInPicture();
    button.disabled = false;
});

//on loaded
streamMedia();