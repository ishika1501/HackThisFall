// import {q} from '../Questions/random'
//const qu=require('../Questions/random')

// const { Check } = require("@material-ui/icons");

var main_content = document.querySelector(".main_content");
var ans = document.getElementById("ans");
var cont = document.querySelector(".cont");
var form_check = document.querySelectorAll(".form-check");
//Question
var question=document.getElementById('question');
//Option
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');
let box=document.querySelectorAll('.form-check-input');
//Desciption
var explain=document.getElementById('explain');

var status=document.getElementById('status');

form_check.forEach((ele => ele.addEventListener('click', () => {
    main_content.classList.add("blur");
    ans.style.display="flex";
})
))

cont.addEventListener('click',()=>{
    main_content.classList.remove("blur");
    ans.style.display="none";

})

function getQsn(){
    return fetch('../Questions/random.json').then(response=>response.json()).then(data=>{
        // console.log(data);
        return data;
    })
}

function showQsn(q){
    function checked(i){
        console.log(i);
        if(q[0].correct==i){
           status.innerText="Correct";
        }else{
            status.innerText="Wrong";
        }
    }
    question.innerHTML=q[0].Question;
    op1.innerHTML=q[0].option[0];
    op2.innerHTML=q[0].option[1];
    op3.innerHTML=q[0].option[2];
    op4.innerHTML=q[0].option[3];
    explain.innerHTML=q[0].Explaination;
    box.forEach(b => {
        b.addEventListener("click",()=>{
            checked(b.dataset.index);
        })
    });
}
getQsn();
getQsn().then(data=>{
    showQsn(data);
})
showQsn();


