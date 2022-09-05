let die = document.querySelector(".dice");
let btn1 = document.querySelector(".one");
let btn2 = document.querySelector(".two");
let btn3 = document.querySelector(".three");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let active = document.querySelector(".active");

let result = 0;
p1.innerHTML = `0`;
p2.innerHTML = `0`;
result1.innerHTML = `0`;
result2.innerHTML = `0`;


btn1.onclick = () => {
    die.style.display = "none";
   result=0;
   result1.innerHTML = `0`;
result2.innerHTML = `0`;
btn2.removeAttribute('disabled');
btn3.removeAttribute('disabled');
right.classList.remove("winner")
left.classList.remove("winner")



p1.innerHTML = `0`;
p2.innerHTML = `0`;
}

btn2.onclick = () => {
    die.style.animation = "rotate 1s ";
    die.style.display = "block"

    let random = Math.floor(Math.random() * 6 + 1);
    die.src = `./${random}.png`;

    if (result1.classList.contains("active")) {
        if (random === 1) {
            result = 0;
            result2.classList.toggle("active");
            result1.classList.toggle("active");
        } else {
            result += random;
        }
        result1.innerHTML = result

    } else if (result2.classList.contains("active")) {
        if (random === 1) {
            result = 0;
            result2.classList.toggle("active");
            result1.classList.toggle("active");
        } else {
            result += random;
        }
        result2.innerHTML = result
    }
}

btn3.onclick = () => {

    if (result1.innerHTML > result2.innerHTML) {
        p1.innerHTML = "Winner"
        right.classList.add("winner")
    }
    else if(result2.innerHTML > result1.innerHTML)
    {
        p2.innerHTML = "Winner"
        left.classList.add("winner")
    }
    btn2.setAttribute('disabled', '');
    btn3.setAttribute('disabled', '');
}






