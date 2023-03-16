console.log("script running......")
document.querySelector('.cross').getElementsByClassName.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
   if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.ham').getElementsByClassName.display='inline'
    document.querySelector('.cross').getElementsByClassName.display='none'
   }
   else{
    
    document.querySelector('.ham').getElementsByClassName.display='none'
    setTimeout(() => {
        document.querySelector('.cross').getElementsByClassName.display='inline'  
    }, 350);
   }
})