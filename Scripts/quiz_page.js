// import {q} from '../Questions/random'
const qu=require('../Questions/random')

var main_content = document.querySelector(".main_content");
var ans = document.getElementById("ans");
var cont = document.querySelector(".cont");
var form_check = document.querySelectorAll(".form-check");

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
    return 
}
getQsn();


