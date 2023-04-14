// get the input from the text input
$(document).ready(function() {
    $('#d-term-input').keydown(function(event) {
        if (event.keyCode == 13) {
            var model = $('#d-term-input').val()
            clearInput()
            switch (model){
                case String(model.match(/^echo.*$/)): 
                    echo(model)
                    break
                case 'whoami':
                    whoami()
                    break
                case 'getResume':
                    getResume()
                    break
                case 'clear':
                    clear()
                    break
                case 'printResume':
                    printResume()
                    break
                case 'help':
                    help()
                    break
                case 'docs':
                    docs()
                    break
                default:
                    printDefault()
            }
        }
    });
});

function echo(model){
    let s = model.substring(4,model.length)
    $("#term-add").append("<div>$ "+s+"</div>")
}

function whoami(){
    $("#term-add").append("<div>$ Ajinkya Bhushan</div>")
}

function getResume(){
    $("#term-add").append("<div>$ Opened Resume on a new tab...</div>")
    window.open("/terminal/assets/Resume.pdf")
}

function printResume(){
    $("#term-add").append("<div>$ Opened Resume on a new tab with print prompt...</div>")
    var w = window.open("/terminal/assets/Resume.pdf")
    w.print()
}

function getEducation(){

}

function getHobbies(){

}

function getSocials(){

}

function clearInput(){
    $("#d-term-input").val("")
}

function printDefault(){
    $("#term-add").append("<div>$ sh : command not found</div>")
}

function clear(){
    $("#term-add div").empty()   
}

function help(){
    $("#term-add").append("<div class= \"text-center\">Help section <br> Please use the documenation guide either by pressing \"Documentation\" tab on the navbar or typing 'docs' on the console. </div>")
}

function docs(){
    window.open("/terminal/doc.html","_self");
}