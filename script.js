// This is my second web project. The code is messy but I hope I will get better at making it look better.
// I will not look back at this code unless there are some bugs / glitches / etc. 
// I hope u will enjoy this and let your imagination go wild XD :p


const board = document.getElementById('mainBoard');
const grabBox = document.getElementsByClassName('drawBox');

let size = 8;
let eraserON = false;
let color = 'black';
let toggleRainbow = false;
let showGridStatus = false;

createBoxes(size);

function showGridON(){
    const showGrid = document.getElementsByClassName('showGrid');
    const getGrid = document.getElementsByClassName('drawBox');

    showGrid[0].addEventListener('click', () => {
        showGridStatus = !showGridStatus;

        if(showGridStatus == true){
            for(let x = 0 ; x < size * size; x++)
                getGrid[x].style.border = "solid 0.5px black";
        }
        else{
            for(let y = 0 ; y < size * size; y++)
                getGrid[y].style.border = "none";
        }
    })
}
    
    

function createBoxes(size){

    console.log('Generating new board...'); //debug
    board.innerHTML='';
    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    for(let i = 0; i < size * size; i++)
    {
        const box = document.createElement('div');
        box.classList.add('drawBox');
        box.style.backgroundColor = 'white';

        board.appendChild(box);
    }
}

function getSize(){
    const size16 = document.getElementsByClassName('set16x16');
    const size32 = document.getElementsByClassName('set32x32');
    const size64 = document.getElementsByClassName('set64x64');
    const sizeCustom = document.getElementsByClassName('setCustomSize');

    size16[0].addEventListener('click', () => {
        size = 16; 

        console.log(`Size is now: ${size}`); //debug

        createBoxes(size); 
        drawColor(); 
    })

    size32[0].addEventListener('click', () => {
        size = 32; 

        console.log(`Size is now: ${size}`); //debug

        createBoxes(size); 
        drawColor();
    })

    size64[0].addEventListener('click', () => {
        size = 64; 

        console.log(`Size is now: ${size}`); //debug

        createBoxes(size); 
        drawColor();
    })

    sizeCustom[0].addEventListener('click', () => {
        size = parseInt(prompt('Please type your custom PIXELPAD size: '));
        if(size < 0 || size > 1024 ||  !(typeof size == 'number')){
            size = 8;
            alert('Invalid Value (negative, huge value, null / NaN or string)');
        }

        console.log(`Size is now: ${size}`); //debug

        createBoxes(size);
        drawColor();
    })
}

function drawColor()
{
       for(let j = 0; j < size * size; j++)
    {
        grabBox[j].addEventListener('mouseover', (event) => {
            event.stopPropagation(); 
            
            
                if(eraserON == true){
                    grabBox[j].style.backgroundColor = 'white';

                    console.log(`Erased box ${j}.`); //debug
                }
                else 
                    if(toggleRainbow == true){
                        grabBox[j].style.backgroundColor = 
                        '#'+Math.floor(Math.random()*16777215).toString(16);
                    } 
                    else
                        grabBox[j].style.backgroundColor = color;
            
        })
    }
}

function resetBoard(){
    const resetButton = document.getElementsByClassName('resetButton');

    resetButton[0].addEventListener('click', () => {
        for(let k = 0; k < size * size; k++)
                grabBox[k].style.backgroundColor = 'white';
        })
    
}

function grabColor(){
    const colorInput = document.getElementById('colorPicker');

    colorInput.addEventListener('input', () => {
        color = colorInput.value;
    })
}

function eraserButton(){
    const eraserToggle = document.getElementsByClassName('eraseButton');
    eraserToggle[0].addEventListener('click', () => {
        eraserON = !eraserON;

        console.log(`Eraser on: ${eraserON}`); //debug
    })
}

function startStopRainbow(){
    const getRainbow = document.getElementById('rainbowMode');
    getRainbow.addEventListener('click', () => {

        toggleRainbow = !toggleRainbow;
        console.log(`Rainbow mode: ${toggleRainbow}`);
    })
}

getSize();
drawColor();
resetBoard();
grabColor();
eraserButton();
startStopRainbow();
showGridON();

const downloadBtn = document.querySelector('.download');

downloadBtn.addEventListener('click', () => {
    html2canvas(document.querySelector('#mainBoard'))
        .then(canvas => {
            const url = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.setAttribute('download', 'PIXELPAD_art.png');
            a.setAttribute('href', url);
            a.click();
        })
})
