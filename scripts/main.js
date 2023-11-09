//1)
let items = document.getElementsByClassName("textbox");
let tpm = items[0].innerHTML;
items[0].innerHTML = items[1].innerHTML;
items[1].innerHTML = tpm;

//2)
function DoSmth(sideNumb, sideVal) {
    var S = sideNumb * sideVal * sideVal / (4 * Math.tan(Math.PI/ sideNumb));
    var S = S.toFixed(2)

    const items = document.getElementsByClassName("box3");
    const elem = document.createElement('p');
    elem.style.margin = "25px";
    elem.innerHTML = String(S);
    items[0].appendChild(elem);
}
const n = 5;
const a = 10;
DoSmth(n,a)

//3)
items = document.getElementsByClassName("box3");

let height = "4vh";
let fontSize = "2vh";
let margin ="25px"

let label = document.createElement('label');
label.innerHTML = "input triangle sides";
label.style.fontSize = fontSize;
label.style.margin= margin;
label.style.height = height

let form = document.createElement('input');
form.value = "example: 1 2 3";  
form.style.fontSize = fontSize;
form.style.margin= margin;
form.style.height = height

let button = document.createElement('button');
button.textContent = 'check';
button.style.fontSize = fontSize; 
button.style.margin= margin; 
button.style.height = height;

items[0].appendChild(label);
items[0].appendChild(form);
items[0].appendChild(button);

document.getElementsByTagName('button')[0].onclick = function() {
    const input = document.getElementsByTagName('input')[0].value;
    let result = input.split(' ').map(Number);
    if (result.length != 3) {
        alert("invalid input");
        return;
    }
    if (result[0] + result[1] > result[2] && result[0] + result[2] > result[1] && result[1] + result[2] > result[0]) {
        alert("yes, triangle can be constructed");
    }
    else alert("no, triangle cannot be constructed");
 };

 var curCookie = name + "=" + value + 
 ", expires=" + ATS_getExpire() + 
 ", path=" + path + 
 ", domain=" + domain;

document.cookie = curCookie;
alert("Your Cookie : " + document.cookie);
