const active=document.querySelectorAll('.catagories>ul>li');
console.log(active)
let burger=document.querySelector(".burger");
console.log(burger)
const sidebar=document.querySelector(".sidebar")
const collapse=document.querySelector(".close-icon")
const overlay=document.querySelector(".bodyoverlay")
  active.forEach((item)=>{
      console.log(item.innerHTML)
      item.addEventListener("click",()=>{
         active.forEach((items)=>{
          items.classList.remove("active")
         })
         item.classList.add("active")
      })
  })




collapse.addEventListener("click",()=>{
    sidebar.classList.remove("toogle-sidebar")
    sidebar.style.transition="all ease 0.9s"

    overlay.classList.remove("overlay1")
    overlay.style.transition="all ease 0.9s"

})

burger.addEventListener("click",()=>{
    sidebar.classList.add("toogle-sidebar")
    overlay.classList.add("overlay1")


})
