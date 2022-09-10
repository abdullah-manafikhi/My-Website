window.addEventListener("load" , () => {

    // videos configerations 
    let clsBtn =  document.getElementById("projects__vid__cls");
    let video = document.querySelector(".projects__demo");
    let demos = document.querySelectorAll(".projects__demo__btn")
    let vid = document.querySelector("video") 
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

    // dipalaying sociel cons
    window.addEventListener("scroll" , displaySocialIcons)

    function displaySocialIcons () {
        let sociel = document.querySelectorAll(".sociel i");
        setTimeout(() => {
            console.log(sociel)
          sociel.forEach((icon) => {icon.style.right = "0rem";} )
        } , 2000)
        window.removeEventListener("scroll" , displaySocialIcons)
    }

    //projects tab pannel congigurations
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

    //applying sroll reveal
    ScrollReveal().reveal('.contact__hdr,.sec__head' , {duration: 1000 , distance : '10%' , origin: 'left' });
    ScrollReveal().reveal('.animated__project,.about__p,.about__grid' , {duration: 1000 , scale:1.05 , delay: 500 });

    // alerting that contact me section is not working
    const inputs = document.querySelectorAll('input')

    inputs.forEach((input) => {
        input.addEventListener('click' , () => {
            alert("The contact me section is not working yet please contact me throw my email or Whats app")
        })
    })

    //email and number module config
        //opening module
        let gmail = document.getElementById("gmail__icon")
        let whatsapp = document.getElementById("whatsapp__icon")
        let module = document.querySelector("#module")
        let gmailUrl = document.getElementById("myGmailUrl")
        let whatsappNum = document.getElementById("myWhatsapp")

    console.log(gmailUrl.textContent)

        gmail.addEventListener("click" , openModule)
        whatsapp.addEventListener("click" , openModule)

        function openModule(e){
            e.preventDefault()
            module.style.display = "grid"
            navigator.clipboard.writeText(gmailUrl.textContent);

        }

        //closing module
        let closeBtn = document.querySelector(".close__btn")
        closeBtn.addEventListener("click" , () =>{module.style.display ="none"} )

        //copy gmail url or whatsapp number 
        let copy =[...document.getElementsByClassName("mail__num__copy")]

        
        copy.forEach((item) => {
            item.addEventListener("click" ,(e) => {
                e.preventDefault()
                if(e.target.id === "gmail"){
                    navigator.clipboard.writeText(gmailUrl.textContent);
                    item.textContent = "copied !"
                    item.style.color="green"
                }
                else{
                    navigator.clipboard.writeText(whatsappNum.textContent);
                    item.textContent = "copied !"
                    item.style.color="green"
                }
                
            })
        })

})  