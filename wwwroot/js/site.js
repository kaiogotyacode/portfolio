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
    t1.classList.add("podioText");

    var t2 = document.getElementById("t2");
    t2.classList.add("sndText");

    var t3 = document.getElementById("t3");
    t3.classList.add("trdText");
    //t1.classList.remove("podioText");

})

/* ======================================= MENU JS ======================================= */

