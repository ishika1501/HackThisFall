
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

var result=document.getElementById('status');

var cont=document.getElementById('cont');

form_check.forEach((ele => ele.addEventListener('click', () => {
    main_content.classList.add("blur");
    ans.style.display="flex";
})
))



function getQsn(){
    return fetch('../Questions/random.json').then(response=>response.json()).then(data=>{
        // console.log(data);
        return data;
    })
}

function showQsn(q){
    
    var t=q.length;
    var x=Math.floor(Math.random()*t);

    function checked(i){
        if(q[x].correct==i){
           result.innerText="Correct";
        }else{
        result.innerText="Wrong";
        }
    }

    
    question.innerHTML=q[x].Question;
    op1.innerHTML=q[x].option[0];
    op2.innerHTML=q[x].option[1];
    op3.innerHTML=q[x].option[2];
    op4.innerHTML=q[x].option[3];
    explain.innerHTML=q[x].Explaination;

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

var turns=0;
cont.addEventListener('click',()=>{
    if(turns<10){
        getQsn().then(data=>{
            showQsn(data);
        })
        main_content.classList.remove("blur");
        ans.style.display="none";
        turns=turns+1;
    }
})




