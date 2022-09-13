'use strict'

const btn = document.querySelector('#btn')

// 1 - usul bu hato ishlaydi yani ikkita bir xil funksiya yozilganda ulardan faqat bittasi ishlaydi
btn.onclick = function(){
    alert('click')
}
btn.onclick = function(){
    alert('click2')
}
// 2 usul bu tog'ri ishlaydi ikkita bir xil funksiya yozilganda ular birgalikda ketma ket ishlaydi
    btn.addEventListener('click', ()=>{
        alert('click')})
    btn.addEventListener('click', ()=>{
        alert('click2')})


    // addEventListener bu funksiya Event xususiyati bor
    btn.addEventListener('monseenter', (event)=>{
        console.log('event.target');
        event.target.remove();
        alert('hover')
    })

let i=0;
const addElement= (event)=>{
    i++
    if(i===3){
        btn.removeEventListener('click', addElement)
    }
    console.log(i);
}
btn.addEventListener('click', addElement)

const cb= (e)=>{
    console.log(e.currentTarget);
}
overlay.addEventListener('click',cb)


// preventDefault() bu metod bizga linkni bosganimizda o'zimiz hohlagan ishni bajarishga imkon beradi 

const link = document.querySelector('a')
link.addEventListener('click', (event)=>{
    event.preventDefault()
    alert('link')
})

const btns = document.querySelectorAll('button')
const logger = ()=> {
    console.log('1')
}

btns.forEach((item)=>{
    item.addEventListener('click', logger, {once:true})
})