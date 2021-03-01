Webcam.set({
   width:360,
   height:320,
   image_format:'png',
   png_qaulity:90
});

cammera=document.getElementById("camera");

Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">';
    });
}

console.log("Ml5",ml5.version);

classifier= ml5.imageClassifier( 'https://teachablemachine.withgoogle.com/models/Kh2-Ji8F3/model.json',modelLoaded);
function modelLoaded(){
    console.log("Modal Loaded");
}

function check(){
    img=document.getElementById("captured_img");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
if (error) {
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_object").innerHTML=results[0].label;
    document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}