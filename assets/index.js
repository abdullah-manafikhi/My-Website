window.addEventListener("load" , () => {
    
    let clsBtn =  document.getElementById("projects__vid__cls");
    let video = document.querySelector(".projects__demo");
    let demos = document.querySelectorAll(".projects__demo__btn")

    clsBtn.addEventListener("click" , () => {
        video.style.display = "none" ;
    })

    demos.forEach(demo => { demo.addEventListener("click" , () =>{
            video.style.display = "block" ;
        })
    }
    )

})  