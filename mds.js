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

let buttons = document.querySelectorAll('button');


function disable(){
  for(let all of buttons){
    let disall = document.querySelector('input, checkbox');
    all.addEventListener('click',()=>{
      disall.setAttribute("disabled" = true)
      console.log(disall);
    })
  }

}
