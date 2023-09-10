// This is my second web project. The code is messy but I hope I will get better at making it look better.
// I will not look back at this code unless there are some bugs / glitches / etc. 
// I hope u will enjoy this and let your imagination go wild XD :p

const changeErasebtn = document.getElementsByClassName('eraseButton');
const changeColorbtn = document.getElementsByClassName('clrbtn');
const colorGrab = document.getElementById('colorPicker');


let color1 = 'black';
changeColorbtn[0].style.backgroundColor = color1;

changeErasebtn[0].addEventListener('click', () =>{
    if(changeErasebtn[0].classList.contains('off')){
        changeErasebtn[0].classList.remove('off');
        changeErasebtn[0].classList.add('on');
    }
    else{
        changeErasebtn[0].classList.remove('on');
        changeErasebtn[0].classList.add('off');
    }
})

colorGrab.addEventListener('input', () => {
    color1 = colorGrab.value;
    changeColorbtn[0].style.backgroundColor = color1;
  });