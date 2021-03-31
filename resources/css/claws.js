let bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = 'white';

/*curving the letters over the image*/
function circularText = (txt, radius, index) => {
    txt = txt.split(""),
    document.getElementById("curved")[classIndex];

    var deg = 360 / txt.length,
    origin = 0;

    txt.forEach((ea) => {
        ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
        classIndex.innerHTML += ea;
        origin += deg;
    });
}
circularText("Thee Artisit" 100, 0);