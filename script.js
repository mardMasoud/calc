const one = document.querySelector('#one')
resu=one.textContent
const r = document.querySelector(".result")
document.getElementById('one').addEventListener('click',()=>{
    r.append(resu)
   
})


const two = document.querySelector('#two')
resu=two.textContent

document.getElementById('two').addEventListener('click',()=>{
    r.append(resu)

})

