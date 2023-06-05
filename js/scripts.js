function handleRadio(event) {
    event.preventDefault();
    const radioSelectionAge = document.querySelector("input[name='ageRange']:checked").values;
    const radioSelectionExperience = document.querySelector("input[name='experience']:checked").values;
    const radioSelectionColor = document.querySelector("input[name='favColor]:checked").values;
    const radioSelectionTime = document.querySelector("input[name='time']:checked").values;
    const radioSelectionHobby = document.querySelector("input[name='hobby']:checked").values;
}
window.addEventListener("load", function (){
    document.getElementById("radio-form").addEventListener("submit", handleRadio);
})
        let pythonDiv = document.getElementById("python");
        pythonDiv.setAttribute("class", "hidden");

        let javaScriptDiv = document.getElementById("javaScript");
        javaScriptDiv.setAttribute("class", "hidden");

        let rDiv = document.getElementById("r");
rDiv.setAttribute("class", "hidden");
        
let noRecDiv = document.getElementById("noRec");
noRecDiv.setAttribute("class", "hidden");
    
let age1 = document.getElementById("age1");
let age2 = document.getElementById("age2");
let age3 = document.getElementById("age3");

let experience1 = document.getElementById("experience1");
let experience2 = document.getElementById("experience2");
let experience3 = document.getElementById("experience3");

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");

let time1 = document.getElementById("time1");
let time2 = document.getElementById("time2");
let time3 = document.getElementById("time3");

let hobby1 = document.getElementById("hobby1");
let hobby2 = document.getElementById("hobby2");
let hobby3 = document.getElementById("hobby3");

if(age1.checked && experience2.checked && color1.checked && time3.checked & hobby1.checked) {
    pythonDiv
}
    
else if (age2.checked && experience1.checked && color3.checked && time2.checked & hobby2.checked) {
    javaScriptDiv
}

else if (age3.checked && experience3.checked && color2.checked && time1.checked & hobby3.checked) {
    rDiv
}

else {
    noRecDiv
}