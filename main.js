function mshow() {
    let event = window.event;
    let x = event.clientX;
    let y = event.clientY;

    let dist = Math.sqrt((x) * (x) + y * y);
    
    let t1 = Math.acos(x / dist);
    let theta1 = t1 * (180 / Math.PI);
    
    let argument = (dist / 2) / 224;
    let t2 = argument < -1 || argument > 1 ? NaN : Math.acos(argument);
    let theta2 = isNaN(t2) ? 0 : t2 * (180 / Math.PI);
    
    let theta = theta1 + theta2;
    let phi = 180 - (theta2 + 90);
    
    document.getElementById('shoulder').style.transform = `rotate(${theta}deg)`;
    document.getElementById('elbow').style.transform = `rotate(${phi*2}deg)`;
    document.getElementById("point").style.margin = `${y}px ${x+450}px`;
    document.getElementById("cords").innerHTML = `cords=(${x}, ${y}) φ=${Math.round(phi*2)}° θ=${Math.round(theta)}°`;
    
   
    console.log(theta1);
}


 mshow; 
