// Option: 2 add onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Option:3 
const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = makeBlueBtn;
function makeBlueBtn() {
 document.body.style.backgroundColor = 'blue';
}

// Option: 3 another
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurpleBtn() {
  document.body.style.backgroundColor = 'purple'
}

// Option: 4
const makePink = document.getElementById('make-pink');
//    console.log(makePink);
   makePink.addEventListener('click', makePinkBtn)
   function makePinkBtn() {
    document.body.style.backgroundColor = 'pink';
}

// option: 4 another
const makeGreen = document.getElementById('make-green');
      makeGreen.addEventListener('click', function makeGreenBtn() {
        document.body.style.backgroundColor = 'green'
})

// important we will use this
// Option: 4 final

const makeGoldenRod = document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod' 
})