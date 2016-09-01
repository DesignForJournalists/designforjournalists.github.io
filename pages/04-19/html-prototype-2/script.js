function toggleDesktop() {
    if (document.getElementById("frame").className == "outer-frame") {
        document.getElementById("frame").className = "outer-frame desktop";
    }
}
function toggleMobile() {
    if (document.getElementById("frame").className == "outer-frame desktop") {
        document.getElementById("frame").className = "outer-frame";
    }
}