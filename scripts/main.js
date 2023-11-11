//1)
let items = document.getElementsByClassName("textbox");
let tpm = items[0].innerHTML;
items[0].innerHTML = items[1].innerHTML;
items[1].innerHTML = tpm;

//2)
function DoSmth(sideNumb, sideVal) {
    let S = sideNumb * sideVal * sideVal / (4 * Math.tan(Math.PI/ sideNumb));
    S = S.toFixed(2)

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
form.placeholder = "1 2 3";  
form.style.fontSize = fontSize;
form.style.margin= margin;
form.style.height = height

let button = document.createElement('button');
button.id = "check";
button.textContent = 'check';
button.style.fontSize = fontSize; 
button.style.margin= margin; 
button.style.height = height;

items[0].appendChild(label);
items[0].appendChild(form);
items[0].appendChild(button);

function saveData(data){
    document.cookie = "data: "+ String(data) + "; " + "expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";
};

function deleteData(){
    document.cookie = "data:; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

if((document.cookie == "") == false){
    alert(document.cookie);
    if(confirm("Delete data?")){
        deleteData();
        if(confirm("Data is deleted. Reload page?")){
            document.location.reload();
        }
    }
 }

document.getElementById("check").onclick = function() {
    const input = document.getElementsByTagName('input')[0].value;
    let result = input.split(' ').map(Number);
    var stringResult;
    if (result.length != 3) {
        stringResult = "invalid input";
    }
    else if (result[0] + result[1] > result[2] && result[0] + result[2] > result[1] && result[1] + result[2] > result[0]) {
        stringResult = "yes, triangle can be constructed";
    }
    else stringResult = "no, triangle cannot be constructed";
    
    saveData(stringResult);
    alert(document.cookie);
 };

 //4)
 const box4 = document.getElementsByClassName("box4")[0];
 const checkbox = document.createElement('input');
 checkbox.type = "checkbox";
 checkbox.style.height = "4vh";
 checkbox.style.width = "4vh";
 box4.appendChild(checkbox);

 if(localStorage.getItem("upper") == "true" && localStorage.getItem("checked") == "true") {
    let text = box4.getElementsByTagName('p')[0];
    text.innerHTML = upper(text.innerHTML);
 }
 localStorage.setItem("upper", "false");
 localStorage.setItem("checked", "false");

document.addEventListener( "blur", (event) => {
        let text = box4.getElementsByTagName('p')[0];
        text.innerHTML = upper(text.innerHTML);
        localStorage.setItem("upper", "true");
    },
    true,
  );

function upper(text){   
    let words = text.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    return words.join(' ');
}

box4.getElementsByTagName('input')[0].onclick = function() {
    if(box4.getElementsByTagName('input')[0].checked){
        localStorage.setItem("checked", "true");
    }
    else{
        localStorage.setItem("checked", "false");
        localStorage.setItem("upper", "false");
    }
}

//5)
const list = document.createElement('ol');
list.id = "list";
for(i = 0; i < 6; i++){
    let row = document.createElement('li');
    row.innerHTML = "box" + String(i+1);
    list.appendChild(row);
}


const box3 = document.getElementsByClassName("box3")[0];
box3.appendChild(list);

var lastTarget;


list.addEventListener ('dblclick', (ev) => {
    let ID = ev.target.innerHTML;
    const elem = document.getElementById(ID);
    if(elem.getElementsByTagName('p').length != 0){
        del_last_inputer();  
        let inputer = document.createElement('div');
        inputer.id = "inputer";

        let form = document.createElement('input');
        form.placeholder = "placeholder";  
        form.style.fontSize = fontSize;
        form.style.margin= margin;
        form.style.height = height

        let button1 = document.createElement('button');
        button1.textContent = 'set text';
        button1.style = button.style

        let button2 = document.createElement('button');
        button2.textContent = 'cancel';
        button2.style = button.style

        let button3 = document.createElement('button');
        button3.textContent = 'set default text';
        button3.style = button.style

        inputer.appendChild(form);
        inputer.appendChild(button1);
        inputer.appendChild(button3);
        inputer.appendChild(button2);
        elem.appendChild(inputer);

        if(localStorage.getItem(elem.id) == "") localStorage.setItem(elem.id, elem.getElementsByTagName('p')[0].innerText);
        
        button1.onclick = function() {
            elem.getElementsByTagName('p')[0].innerText= form.value;
            localStorage.setItem(elem.id + "changed", elem.getElementsByTagName('p')[0].innerText);
         };

        button2.onclick = function() {
            del_last_inputer();
         };

         button3.onclick = function() {
            localStorage.setItem(elem.id + "changed", "");
            elem.getElementsByTagName('p')[0].innerText= localStorage.getItem(elem.id);
         };

    } 
});

function del_last_inputer(){
    const deletedEl = document.getElementById("inputer");
    if(deletedEl) deletedEl.remove();  
}