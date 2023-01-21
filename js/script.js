let btn = document.querySelector('#black')
let btn2 = document.querySelector('#white')
let btn3 = document.querySelector('#yellow')
let img = document.querySelector('img')

btn.onclick =()=>{
    img.src = 'img/image 10.png' 
}
btn2.onclick=()=>{
    img.src = 'img/image 9.png'
}
btn3.onclick=()=>{
    img.src = 'img/image 8.png'
}

// img.style.width = 1240 + 'px'
// img.style.height = 697 + 'px'

let checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('click',(event) => {
    if (checkbox.classList.contains('on')) {
      checkbox.setAttribute('aria-checked','false');
    }else{
      checkbox.setAttribute('aria-checked', 'true');
    }
    checkbox.classList.toggle('on')   
  })
