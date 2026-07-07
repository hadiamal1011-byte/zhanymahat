// ==============================
// ЭКРАНЫ
// ==============================

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const readyBtn = document.getElementById("readyBtn");
const talkBtn = document.getElementById("talkBtn");

const typing = document.getElementById("typing");


// ==============================
// ТЕКСТ
// ==============================

const paragraphs = [

"Мне сейчас непросто это писать, но я не хочу молчать.",

"Я невероятно благодарен судьбе за то, что познакомился с тобой, ты потрясающий человек.",

"Но я чувствую, что из-за нашей тишины мы сейчас на грани расставания, и от этого очень тяжело.",

"Мне не хочется, чтобы мы просто так потеряли друг друга.",

"Давай встретимся и спокойно поговорим?",

"Я люблю тебя, менин кошаканым ❤️"

];


// ==============================
// ПЕРЕХОД 1 -> 2
// ==============================

readyBtn.addEventListener("click",()=>{

    screen1.classList.remove("active");

    setTimeout(()=>{

        screen2.classList.add("active");

        printParagraph(0);

    },600);

});


// ==============================
// ПЕЧАТЬ АБЗАЦЕВ
// ==============================

function printParagraph(index){

    if(index >= paragraphs.length){

        talkBtn.classList.remove("hidden");
        talkBtn.classList.add("fade");

        return;

    }

    const p = document.createElement("p");

    typing.appendChild(p);

    let text = paragraphs[index];

    let char = 0;

    const timer = setInterval(()=>{

        p.innerHTML += text.charAt(char);

        char++;

        if(char >= text.length){

            clearInterval(timer);

            setTimeout(()=>{

                printParagraph(index+1);

            },700);

        }

    },28);

}


// ==============================
// ПЕРЕХОД 2 -> 3
// ==============================

talkBtn.addEventListener("click",()=>{

    screen2.classList.remove("active");

    setTimeout(()=>{

        screen3.classList.add("active");

    },600);

});


// ==============================
// ЛЕТАЮЩИЕ СЕРДЕЧКИ
// ==============================

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"%";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.animationDuration=(6+Math.random()*5)+"s";

    heart.style.opacity=(0.2+Math.random()*0.5);

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },11000);

}

setInterval(createHeart,450);


// ==============================
// СЕРДЕЧКИ ПРИ ЗАГРУЗКЕ
// ==============================

for(let i=0;i<15;i++){

    setTimeout(createHeart,i*300);

}