document.addEventListener('DOMContentLoaded', function(){
    var header = document.getElementById("header");
    var ms = document.getElementById("models");
    var m3 = document.getElementById("model3");
    var mx = document.getElementById("modelx");
    var my = document.getElementById("modely");
    var model = document.getElementById("model");
    var fast = document.getElementById("fast");
    var speed = document.getElementById("speed");
    var max = document.getElementById("max");
    
    ms.onclick = function() {
    header.style.backgroundImage = "url(images/image-1.png)";
    model.innerHTML = "Model S";
    fast.innerHTML = "1.9s";
    speed.innerHTML = "300";
    max.innerHTML = "396";
    }
    m3.onclick = function() {
        header.style.backgroundImage = "url(images/image-2.png)";
        model.innerHTML = "Model 3";
        fast.innerHTML = "2.7s";
        speed.innerHTML = "450";
        max.innerHTML = "468";
        }
        mx.onclick = function() {
            header.style.backgroundImage = "url(images/image-3.png)";
            model.innerHTML = "Model X";
            fast.innerHTML = "3.4s";
            speed.innerHTML = "150";
            max.innerHTML = "329";
            }
            my.onclick = function() {
                header.style.backgroundImage = "url(images/image-4.png)";
                model.innerHTML = "Model Y";
                fast.innerHTML = "5.0s";
                speed.innerHTML = "500";
                max.innerHTML = "428";
                }
})


