var prolang = ""

function i_c() {
    prolang = "C"
    if (prolang=="C") {
        document.getElementById("c").style.boxShadow="inset 6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("py").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("java").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("html").style.boxShadow="6px 3px 0px 0px rgba(0, 0, 0, 0.3)"
    }
}

function i_py() {
    prolang = "PY"
    if (prolang=="PY") {
        document.getElementById("py").style.boxShadow="inset 6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("java").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("c").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("html").style.boxShadow="6px 3px 0px 0px rgba(0, 0, 0, 0.3)"
    }
}

function i_java() {
    prolang = "JAVA"
    if (prolang=="JAVA") {
        document.getElementById("java").style.boxShadow="inset 6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("c").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("html").style.boxShadow="6px 3px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("py").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
    }
}

function i_html() {
    prolang = "HTML"
    if (prolang=="HTML") {
        document.getElementById("html").style.boxShadow="inset 6px 3px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("c").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("java").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
        document.getElementById("py").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
    }
}

function i_clear() {
    prolang = ""
    
    document.getElementById("c").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
    document.getElementById("java").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
    document.getElementById("py").style.boxShadow="6px 2.5px 0px 0px rgba(0, 0, 0, 0.3)"
    document.getElementById("html").style.boxShadow="6px 3px 0px 0px rgba(0, 0, 0, 0.3)"
}