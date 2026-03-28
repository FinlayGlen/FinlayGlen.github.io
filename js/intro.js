let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{F_}", ms: 100 },
    { t: "{FI_}", ms: 100 },
    { t: "{FIN_}", ms: 100 },
    { t: "{FINL_}", ms: 100 },
    { t: "{FINLA_}", ms: 100 },
    { t: "{FINLAY_}", ms: 100 },
    { t: "{FINLAY }", ms: 200 },
    { t: "{FINLAY_}", ms: 200 },
    { t: "{FINLAY }", ms: 200 },
    { t: "{FINLAY_}", ms: 200 },
    { t: "{FINLAY}", ms: 200 },
    { t: "{FINLAY}", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();