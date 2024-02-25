
for(let i =0;i<document.querySelectorAll(".w").length;i++)
    document.querySelectorAll(".w")[i].addEventListener("click",function () {
       var buttonLetter=this.innerHTML;
       switch(buttonLetter){
          case 'sa': new Audio("sounds/crash.mp3").play();  break
          case 're': new Audio("sounds/kick-bass.mp3").play(); break
          case 'ga': new Audio("sounds/tom-1.mp3").play(); break
          case 'ma': new Audio("sounds/tom-2.mp3").play(); break
          case 'pa': new Audio("sounds/tom-3.mp3").play(); break
          case 'dha': new Audio("sounds/tom-4.mp3").play(); break
          case 'ni': new Audio("sounds/snare.mp3").play(); break
          default:console.log();
       }
})
// 