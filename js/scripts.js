window.onload = function () {
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();

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

        let pythonDiv = document.getElementById("python");
        pythonDiv.setAttribute("class", "hidden");

        let javaScriptDiv = document.getElementById("javaScript");
        javaScriptDiv.setAttribute("class", "hidden");

        let rDiv = document.getElementById("r");
        rDiv.setAttribute("class", "hidden");

        let noRecDiv = document.getElementById("noRec");
        noRecDiv.setAttribute("class", "hidden");


        if (age1.checked && experience2.checked && color1.checked && time3.checked && hobby1.checked) {
            pythonDiv.removeAttribute("class");
        }
        else if (age2.checked && experience1.checked && color3.checked && time2.checked && hobby2.checked) {
            javaScriptDiv.removeAttribute("class");
        }
        else if (age3.checked && experience3.checked && color2.checked && time1.checked && hobby3.checked) {
            rDiv.removeAttribute("class");
        }
        else {
            noRecDiv.removeAttribute("class");
        }
        form.reset();
    }
}