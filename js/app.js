let btn = document.querySelector("#btn");
let text = document.querySelector("#text");
let show = document.querySelector(".show");

btn.addEventListener("click", showMessage);

function showMessage(e) {
    let result = "Capitalize result: ";
    let txt = text.value;
    txt = txt.split(" ");

    txt.forEach(element => {
        let temp = element.charAt(0);
        temp = temp.toUpperCase() + element.substring(1);
        
        result += temp + " ";
    });

    show.innerText = result;
}