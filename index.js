string="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
             string=eval(string);
             document.querySelector('input').value=string;
             var beep=new Audio('beep.mp3')
             beep.play();
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
            var sound=new Audio('click-sound.mp3')
            sound.play();
        }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
            var sound=new Audio('click-sound.mp3')
            sound.play();
        }
       
    })
})
