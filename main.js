const endDate = "21 April 2024 12:22 AM"

document.getElementById("end-date").innerText = endDate; 
const inputs = document.querySelectorAll("input");

const clock = () => {
    let end = new Date(endDate);
    let now = new Date();
    let diffrent = (end - now) / 1000; //mili second theke second//
    
    if(diffrent < 0) return;

/*
1 day = 24 hrs

1 hr = 60 min

60 min = 3600 sec
*/

    inputs[0].value = Math.floor( diffrent / 3600 / 24);
    inputs[1].value = Math.floor(diffrent / 3600) % 24;
    inputs[2].value = Math.floor(diffrent / 60) % 60;
    inputs[3].value = Math.floor(diffrent) % 60;
}

clock();

setInterval(
    ()=>{
        clock()
    },
    1000
);

