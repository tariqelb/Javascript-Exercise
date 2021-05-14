// Write a JavaScript program to display a random image (clicking on a button) from the following list. Go to the editor
// Sample Image information :

// "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", width: "240", height: "160"
// "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", width: "320", height: "195"
// "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg", width: "500", height: "343"


let randomimg = () =>
{
    let arr = ["http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"]
    
    let rndm = (Math.random() * 2).toFixed(0)
    let div = document.getElementById("img1")
    div.setAttribute('src', arr[rndm])
    // con
}