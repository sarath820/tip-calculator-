let boxvalue = 0;
let personbox = 0;

document.querySelector(".box1").addEventListener("input",function() {
    boxvalue = this.value;
})

document.querySelector(".box").addEventListener("input",function(){
    personbox = this.value;
})
document.querySelectorAll(".tip div").forEach((element)=>{
   element.addEventListener("click", function (){
         ht = this.innerHTML;
         let partstring = ht.substring(0,2);
         let numberstring = +partstring;

        let total = (boxvalue * numberstring)/100;
        let perperson = total/personbox;
        
        document.querySelector(".total").innerHTML = total;
        document.querySelector(".tipperson").innerHTML = perperson;
        
        
        
    });
})

document.querySelector(".reset").addEventListener("click", ()=>{
    document.querySelector(".total").innerHTML = 0;
        document.querySelector(".tipperson").innerHTML = 0;
})
