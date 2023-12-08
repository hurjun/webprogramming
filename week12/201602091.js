let video=document.getElementById('video');

let canvas=document.getElementById('canvas');
let ctx=canvas.getContext("2d");
canvas.addEventListener('click',render);

function render(){
    ctx.drawImage(video,0,0,100,100);
    video.play();
}