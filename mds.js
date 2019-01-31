let textfield = document.querySelector('.mds-text-field__input');
let label = document.querySelector('.mds-text-field__label');
let underline = document.querySelector('.mds-text-field__underline');


textfield.addEventListener('focus', () =>{
    label.classList.add('active');
    underline.classList.add('active')


})

textfield.addEventListener('blur', () =>{
  if(textfield.value == ""){
    label.classList.remove('active');
    underline.classList.remove('active');
    console.log(underline)
    console.log(label);

  }
})


function disable(){
let distext = document.querySelectorAll("input")
for (let all of distext){
  all.setAttribute("disabled", true);
  console.log(all);



  }
  let labels = document.querySelectorAll('label');
    for(let label of labels) {
      label.style.opacity = '0.2'
    }

}

function enable(){
let distext = document.querySelectorAll("input")
for (let all of distext){
  all.removeAttribute("disabled");
  console.log(all);

  }
  let labels = document.querySelectorAll('label');
    for(let label of labels) {
      label.style.opacity = '1'
    }
}



let button = document.querySelector('.mds-disable__button')
button.addEventListener('click', disable)

let buttonenable = document.querySelector('.mds-enable__button')
buttonenable.addEventListener('click', enable)
