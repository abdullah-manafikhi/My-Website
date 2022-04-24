window.addEventListener("load" , () => {
    
    let clsBtn =  document.getElementById("projects__vid__cls");
    let video = document.querySelector(".projects__demo");
    let demos = document.querySelectorAll(".projects__demo__btn")
    let sociel = document.querySelectorAll(".sociel i");
    
console.log(sociel)
    clsBtn.addEventListener("click" , () => {
        video.style.display = "none" ;
    })

    demos.forEach(demo => { demo.addEventListener("click" , () =>   {
            video.style.display = "block" ;
        })
    })

    window.addEventListener("scroll" , xy)

    function xy () {
        setTimeout(() => {
            console.log(sociel)
          sociel.forEach((icon) => {icon.style.right = "0rem";} )
        } , 2000)
        window.removeEventListener("scroll" , xy)
    }
})  