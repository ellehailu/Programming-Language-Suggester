window.onlanguagechange = function(){
    const form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
    
        let pythonDiv = document.getElementById("python");
        pythonDiv.setAttribute("class", "hidden");

        let javaScriptDiv = document.getElementById("javaScript");
        javaScriptDiv.setAttribute("class", "hidden");

        let rDiv = document.getElementById("r");
        rDiv.setAttribute("class", "hidden");
    }

    //logic
    //if pythonDiv
    //     Python conditions
    //     some programming experience
    //     pursue a career in tech
    //     yellow
    //     10 + hours
    //     18-25

    //else if javaScriptDiv
    //javaScript conditions
    //      no programming experience
    //      pursue a design careers
    //      green
    //      5 - 10 hours
    //      26-35
    

    //else if rDiv
    //r conditions
    //      some programming experience
    //      enhance research skills
    //      blue
    //      35-45

    //else
}
