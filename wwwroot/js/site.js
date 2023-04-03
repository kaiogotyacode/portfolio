/* ======================================= MENU JS ======================================= */

window.addEventListener("load", () => {
      

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


})

/* ======================================= MENU JS ======================================= */

