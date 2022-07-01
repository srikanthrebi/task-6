function StartAD(){
  setTimeout(function() {
    document.getElementById("plane").style.transform='translate(0px,0px) scale(1)'; 
    document.getElementById("plane").style.transition='all 0.8s ease' ;
  },250)
  setTimeout(function() {
    document.getElementById("plane").classList.add("fly"); 
    document.getElementById("plane").removeAttribute("style") ;
  },1100)
    setTimeout(function() {
      document.getElementById("copy-1").style.transform='translateX(0)';;  
      document.getElementById("copy-1").style.opacity='1';
    },1500)
    setTimeout(function() {
        document.getElementById("copy-2").style.transform='translateX(0)';  
        document.getElementById("copy-2").style.opacity='1';
      },1750)
      setTimeout(function() {
        document.getElementById("copy-3").style.transform='translateX(0)';  
        document.getElementById("copy-3").style.opacity='1';
      },2200)
      setTimeout(function() {
        document.getElementById("circle").style.transform='scale(1)';  
      },2750)
      setTimeout(function() {
        document.getElementById("logo").style.transform='translateY(0)';  
      },3200)
      setTimeout(function() {
        document.getElementById("button").style.transform='translateY(0)';  
      },3750)
     
 
}window.load=StartAD();