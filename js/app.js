function navigatorLink() {
    const element =document.getElementById("linkselect");
    const selectLink = element.value ; 
    if (selectLink) {
        window.location.href = selectLink;
        
    }
    
}
function selectLinks() {
    const elementSelect =document.getElementById("select-sign");
    const select = elementSelect.value ; 
    if (select) {
        window.location.href = select;
        
        
    }
    
}