

window.addEventListener("load", () => {

    /* ======================================= MENU JS ======================================= */

    alert('Width: ' + innerWidth + '\nHeight: '+ innerHeight)
    var menu = document.getElementById("menu");
    var navOptions = document.getElementById("nav-options");
    var handle = false;

    menu.addEventListener("click", () => {
        if (handle) {
            navOptions.style.cssText += "display: none;";
            menu.style.cssText += "background-color: transparent;color: #ffffff";
            handle = false;
        } else {
            navOptions.style.cssText += "display: flex;";
            menu.style.cssText += "background-color: #f1f2f6;color: #000";

            handle = true;
        }
    });


    //para MD >> toda vez que o Menu tiver o display modificado, forçar o display flex da NAV
    window.addEventListener("resize", () => {
        if (window.innerWidth > 767) {
            navOptions.style.cssText += "display: flex;";
            menu.style.cssText += "background-color: transparent;color: #ffffff";
            handle = false;
        }
        if (window.innerWidth < 767) {
            navOptions.style.cssText += "display: none;";
            menu.style.cssText += "background-color: transparent;color: #ffffff";
            handle = false;
        }
    })

    var t1 = document.getElementById("t1");

    var t2 = document.getElementById("t2");

    var t3 = document.getElementById("t3");

    var fase = 1;
        
    function animacaoAct() {
        //first loop
        if (fase == 1) {
            
                t1.classList.remove("sndText")
                t1.classList.remove("podioText")

                t1.classList.add("podioText");

                t2.classList.remove("trdText");
                t2.classList.remove("sndText");

                t2.classList.add("sndText");

                t3.classList.remove("podioText");
                t3.classList.remove("trdText");

            t3.classList.add("trdText");

            fase++;

         
        } else if (fase == 2) {
         
                t1.classList.remove("podioText")
                t1.classList.add("trdText");

                t2.classList.remove("sndText");
                t2.classList.add("podioText");

                t3.classList.remove("trdText");
                t3.classList.add("sndText");
            fase++;
                  
        } else {
            fase = 1;
        
                t1.classList.remove("trdText")
                t1.classList.add("sndText");

                t2.classList.remove("podioText");
                t2.classList.add("trdText");

                t3.classList.remove("sndText");
                t3.classList.add("podioText");
    
        }

    }

        setInterval(animacaoAct, 5000);

    /* ======================================= MENU JS ======================================= */





    /* ================================= SWITCH LANGUAGE BUTTON ================================= */

    var selectedLanguage = "eng";

    var switchButton = document.getElementById("switch-language");

    var titlePresentation = document.querySelector(".presentation-title");

    var switchLabel = document.querySelector(".label-language");

    var brImage = document.getElementById("BRflag");
    var usImage = document.getElementById("USflag");

    var engVideo = document.getElementById("eng-video");
    var braVideo = document.getElementById("bra-video");


    switchButton.addEventListener("click", ()=>{
        if (selectedLanguage == "eng") {

            //switch to portuguese
            selectedLanguage = "bra";

            titlePresentation.textContent = "Apresentação";
            switchLabel.textContent = "Alterar Idioma";

            engVideo.style.cssText += "display: none";
            braVideo.style.cssText += "display: block";

            usImage.style.cssText += "display: none";
            brImage.style.cssText += "display: block";

            engVideo.pause();


        } else {

            //switch to english
            selectedLanguage = "eng";

            titlePresentation.textContent = "Presentation";
            switchLabel.textContent = "Switch Language";

            engVideo.style.cssText += "display: block";
            braVideo.style.cssText += "display: none";

            usImage.style.cssText += "display: block";
            brImage.style.cssText += "display: none";

            braVideo.pause();

        }
    });


    /* ================================= SWITCH LANGUAGE BUTTON ================================= */


})




