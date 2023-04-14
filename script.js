const itemElm = document.querySelectorAll(".items");
//let colors = ['red','green','blue','black','orange']
let rcolorIndex, gcolorIndex, bcolorIndex;

//itemElm[2].style.backgroundColor='blue'

  setInterval(function () {
        itemElm.forEach(function(item){
    rcolorIndex = Math.floor(Math.random() * 255);
    gcolorIndex = Math.floor(Math.random() * 255);
    bcolorIndex = Math.floor(Math.random() * 255);
    
    item.style.backgroundColor =
      "rgb(" + rcolorIndex + "," + gcolorIndex + "," + bcolorIndex + ")";
      item.textContent= item.style.backgroundColor
          }  )
  }, 4000);

