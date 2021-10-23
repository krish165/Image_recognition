Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("cam");
Webcam.attach("#cam");

function capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="Captured_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iT2ZQ2uBd/model.json",modelLoaded);

function modelLoaded()
{
    console.log("Model is loading.....")
}

function identify()
{
    img=document.getElementById("Captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
       console.log(results);
       document.getElementById("result_object_name").innerHTML=results[0].label;
       document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}