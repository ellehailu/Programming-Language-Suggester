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

}
