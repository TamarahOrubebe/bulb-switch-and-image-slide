 function showImage() {
    let x = document.getElementById('clickme');
     let z = document.getElementById('image');

     if (x.innerHTML === "SWITCH OFF") {        
	 z.src ="./img/bulboff.jpg";
         x.innerHTML = 'SWITCH ON'

    } else if ( x.innerHTML === "SWITCH ON") {
         z.src = "./img/bulbon.jpg";
         x.innerHTML = 'SWITCH OFF'
     }


 }

