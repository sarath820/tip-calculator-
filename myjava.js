document.querySelectorAll(".tip div").forEach((element)=>{
   element.addEventListener("click",()=>{

        let box = document.querySelectorAll(".box").value;
        console.log(box);
    });
})

