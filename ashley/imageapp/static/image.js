var img = [
    {image:"roshan.png", about:"ROSHAN"},
    {image:"khan.png", about:"SHAH RUKH KHAN"},
    {image:"devar.png", about:"VIJAY DEVARKONDA"},
];
var index=0;
function next()
{
    index++;
    if(index >= img.length)
        index = 0;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerHTML = img[index].about;
}

function prev()
{
    index--;
    if(index < 0)
        index = img.length - 1;
    document.getElementById("image").src = img[index].image;
    document.getElementById("about").innerHTML= img[index].about;
}
