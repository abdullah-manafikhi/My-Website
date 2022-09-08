window.addEventListener("load" , () => {
    
    let clsBtn =  document.getElementById("projects__vid__cls");
    let video = document.querySelector(".projects__demo");
    let demos = document.querySelectorAll(".projects__demo__btn")
    let sociel = document.querySelectorAll(".sociel i");
    let vid = document.querySelector("video") 
    console.log(demos[0].getAttribute('rel'))
    clsBtn.addEventListener("click" , () => {
        video.style.display = "none" ;
    })

    demos.forEach(demo => { demo.addEventListener("click" , () =>   {
        var vidName = demo.getAttribute("rel")
        console.log(vidName)
        vid.src = `assets/videos/${vidName}.mp4` 
        console.log(vid.getAttribute('src'))
        video.style.display = "block" ;
        vid.load();
        })
    })

    window.addEventListener("scroll" , displaySocialIcons)

    function displaySocialIcons () {
        setTimeout(() => {
            console.log(sociel)
          sociel.forEach((icon) => {icon.style.right = "0rem";} )
        } , 2000)
        window.removeEventListener("scroll" , displaySocialIcons)
    }

    const reactTab = document.getElementById("react__tab")
    const jsTab = document.getElementById("js__tab")
    const jsProjects = document.getElementById("js__projects")
    const reactProjects = document.getElementById("react__projects")
    const projectsInitClass = reactProjects.className

    reactTab.addEventListener('click' , () => {
        console.log(reactProjects.style.display)

        if(!reactTab.classList.contains("active")){
            var tabInitClass = reactTab.className
            reactTab.className += " active"
            jsTab.className = tabInitClass
            reactProjects.className = projectsInitClass
            jsProjects.className += ' hidden'
            console.log(reactProjects.className)
            console.log(jsProjects.className)
        }
    })

    jsTab.addEventListener('click' , () => {
        console.log(reactProjects.className)
        if(!jsTab.classList.contains("active")){
            var tabInitClass = jsTab.className 
            reactTab.className = tabInitClass
            jsTab.className += " active"
            jsProjects.className = projectsInitClass
            reactProjects.className += ' hidden'
            console.log(reactProjects.className)
            console.log(jsProjects.className)


        }
        
    })

    ScrollReveal().reveal('.contact__hdr,.sec__head' , {duration: 1000 , distance : '10%' , origin: 'left' });
    ScrollReveal().reveal('.animated__project,.about__p,.about__grid' , {duration: 1000 , scale:1.05 , delay: 500 });


    const inputs = document.querySelectorAll('input')

    inputs.forEach((input) => {
        input.addEventListener('click' , () => {
            alert("The contact me section is not working yet please contact me throw Gmail or Whats app")
        })
    })
})  