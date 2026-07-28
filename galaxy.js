
//planets
document.addEventListener("DOMContentLoaded", () => {
    const thrthrPlanet = document.getElementById("thrthr");
    
    if (thrthrPlanet) {
        
        thrthrPlanet.addEventListener("click", () => {
            window.location.href = "thrthr.html"; 
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const nimnimPlanet = document.getElementById("nimnim");
    
    if (nimnimPlanet) {
        
        nimnimPlanet.addEventListener("click", () => {
            window.location.href = "nimnim.html"; 
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const noniPlanet = document.getElementById("noni");
    
    if (noniPlanet) {
        
        noniPlanet.addEventListener("click", () => {
            window.location.href = "noni.html"; 
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const rhrhPlanet = document.getElementById("rhrh");
    
    if (rhrhPlanet) {
        
        rhrhPlanet.addEventListener("click", () => {
            window.location.href = "rahrah.html"; 
        });
    }
});


//messages
document.addEventListener("DOMContentLoaded", () => {
    const thrthrAlien = document.getElementById("thrthr-alien");
    
    if (thrthrAlien) {
        
        thrthrAlien.addEventListener("click", () => {
            document.getElementById("thrthr-message").style.display='flex';
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const nimnimAlien = document.getElementById("nimnim-alien");
    
    if (nimnimAlien) {
        
        nimnimAlien.addEventListener("click", () => {
            document.getElementById("nimnim-message").style.display='flex';
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const rhrhAlien = document.getElementById("rahrah-alien");
    
    if (rhrhAlien) {
        
        rhrhAlien.addEventListener("click", () => {
            document.getElementById("rahrah-message").style.display='flex';
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const noniAlien = document.getElementById("noni-alien");
    
    if (noniAlien) {
        
        noniAlien.addEventListener("click", () => {
            document.getElementById("noni-message").style.display='flex';
        });
    }
});

