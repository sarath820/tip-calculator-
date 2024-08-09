let boxvalue = 0;

document.querySelector(".box1").addEventListener("input",function() {
    boxvalue = this.value;
})

document.querySelectorAll(".tip div").forEach((element)=>{
   element.addEventListener("click", function (){
         
        console.log(boxvalue);

        
        
        
    });
})

