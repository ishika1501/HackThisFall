
var main_content = document.querySelector(".main_content");
var ans = document.getElementById("ans");
var cont = document.querySelector(".cont");
//Question
var question = document.getElementById('question');
//Option
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
// let box=document.querySelectorAll('.form-check-input');
let box = document.querySelectorAll('.form-check');

//Desciption
var explain = document.getElementById('explain');
var result = document.getElementById('status');

// var cont=document.getElementById('cont');
var cont = document.querySelectorAll('.cont');
var check_ans = document.getElementById('check_ans');

//score
var score_sheet = document.getElementById('score_sheet');
var star = document.getElementById('star');
var points = document.getElementById('points');

//reset/exit
var exit = document.getElementById('exit');
var retest = document.getElementById('retest');


check_ans.addEventListener('click', () => {
    main_content.classList.add("blur");
    ans.style.display = "flex";
})





function getQsn() {
    return fetch('../Questions/random.json').then(response => response.json()).then(data => {
        // console.log(data);
        return data;
    })
}

var score = 0;
let unique_index=[-1000];
function showQsn(q) {
    var t = q.length;
    var x = Math.floor(Math.random() * t);
    while(unique_index.includes(x)){
        console.log("dfsd")
        x = Math.floor(Math.random() * t);
    }
    unique_index.push(x);
    
    function checked(i) {
        if(i){
            if (q[x].correct == i) {
                box[q[x].correct].style.backgroundColor = "green"
                score = score + 1;
                result.innerHTML = "Correct";
            } 
        }else {
            box[q[x].correct].style.backgroundColor = "green"
            result.innerHTML = "Wrong";
        }
    }

    points.innerText = score;
    update_stars(score);
    
    question.innerHTML = q[x].Question;
    op1.innerHTML = q[x].option[0];
    op2.innerHTML = q[x].option[1];
    op3.innerHTML = q[x].option[2];
    op4.innerHTML = q[x].option[3];
    explain.innerHTML = q[x].Explaination;
    
    var touch = 0;
    box.forEach(b => {
        b.style.backgroundColor = "transparent";
        b.addEventListener("click", () => {
            if (touch == 0) {
                if (b.dataset.index != q[x].correct) {
                    b.style.backgroundColor = "red";
                }

                checked(b.dataset.index);
                touch = 1;
            }
        })

    });

}

getQsn();
getQsn().then(data => {
    showQsn(data);
})

var turns = 0;
cont.forEach(ele => ele.addEventListener("click", () => {
    if (turns < 10) {
        getQsn().then(data => {
            showQsn(data);
        })
        main_content.classList.remove("blur");
        ans.style.display = "none";
        turns = turns + 1;
    }
    if (turns == 9) {
        cont[0].innerHTML = "View Score"
        cont[1].innerHTML = "View Score"

    }
    if (turns == 10) {
        main_content.classList.add("blur");
        ans.style.display = "none";
        score_sheet.style.display = "flex";
    }
}))

retest.addEventListener("click",()=>{
    turns=0;
    unique_index=[-1000];
    main_content.classList.remove("blur");
    ans.style.display = "none";
    score_sheet.style.display = "none";
    score=0;
    cont[0].innerHTML = "Continue >>"
    cont[1].innerHTML = "Continue >>"
})

const update_stars = (score) => {

    if (score == 10) {
        star.innerHTML = "♻♻♻♻♻";
    }
    else if (score >= 8) {
        star.innerHTML = "♻♻♻♻";
    }
    else if (score >= 6) {
        star.innerHTML = "♻♻♻";
    }
    else if (score >= 4) {
        star.innerHTML = "♻♻";
    }
    else if (score >= 2) {
        star.innerHTML = "♻";
    }
    else {
        star.innerHTML = "Opps !!!";
    }
}






