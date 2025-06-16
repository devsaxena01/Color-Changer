const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach((btn)=>{
    btn.addEventListener('click' , (e)=>{
        // console.log(e);
        // console.log(e.target);
        if(e.target.id=='Grey'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=='Orange'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=='Blue'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=='Yellow'){
            body.style.backgroundColor=e.target.id
        }
    })
})