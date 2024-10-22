function mshow() {
   
    let x = [100,0,-100,0,100];
    let y = [340,340,340,250,340];
    let w=0;

    setInterval(()=>{

        let dist = Math.sqrt((x[w]) * (x[w]) + y[w] * y[w]);
    
    let t1 = Math.acos(x[w] / dist);
    let theta1 = t1 * (180 / Math.PI);
    
    let argument = (dist / 2) / 224;
    let t2 = argument < -1 || argument > 1 ? NaN : Math.acos(argument);
    let theta2 = isNaN(t2) ? 0 : t2 * (180 / Math.PI);
    
    let theta = theta1 + theta2;
    let phi = 180 - (theta2 + 90);
    
    document.getElementById('shoulder1').style.transform = `rotate(${theta}deg)`;
    document.getElementById('elbow1').style.transform = `rotate(${phi*2}deg)`;

    setTimeout(()=>{
        document.getElementById('shoulder2').style.transform = `rotate(${theta}deg)`;
    document.getElementById('elbow2').style.transform = `rotate(${phi*2}deg)`;

    document.getElementById('shoulder3').style.transform = `rotate(${theta}deg)`;
    document.getElementById('elbow3').style.transform = `rotate(${phi*2}deg)`;

    },1250)
    

    document.getElementById('shoulder4').style.transform = `rotate(${theta}deg)`;
    document.getElementById('elbow4').style.transform = `rotate(${phi*2}deg)`;
    
    
   
    console.log(theta1);

    

    if(w>=x.length-1){
        w=0;
    }
    else{
        w++;
    }

    },500)
}


 mshow; 
