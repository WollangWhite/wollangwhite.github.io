var js = ""

function type() {
    js = "ty"
    if (js=="ty") {
        document.getElementById("type").style.boxShadow="inset 6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("if").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        
    }
}

function if_else() {
    js = "if"
    if (js=="if") {
        document.getElementById("if").style.boxShadow="inset 6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("type").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
       
    }
}


function i_clear() {
    js = ""
    
    document.getElementById("type").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
    document.getElementById("if").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
    
}