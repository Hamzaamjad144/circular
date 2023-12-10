
for(var i = 7 ; i >= 0; i--){
    document.getElementById("Cr").innerHTML += `<div class="right-angle${i!=0?i:''}"><div class="box${i!=0?'-'+i:''}">
                         <p>Lorem ipsum dolor sit amet consectetuer adispiscong</p>
                     </div>      
                 </div>`
   }