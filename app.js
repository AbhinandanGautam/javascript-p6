// option 1
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         const ques = e.currentTarget.parentElement.parentElement;
//         ques.classList.toggle("show-text");
//     });
// });

// option 2
const ques = document.querySelectorAll(".question");

ques.forEach(function(art){
    const btn = art.querySelector(".question-btn");
    btn.addEventListener("click", function(){
        art.forEach(function(item){
            if(item !== art){
                item.classList.remove("show-text");
            }
        });
        art.classList.toggle("show-text");
    });
});