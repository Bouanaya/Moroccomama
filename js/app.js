function navigatorLink() {
    const element =document.getElementById("linkselect");
    const selectLink = element.value ; 
    if (selectLink) {
        window.location.href = selectLink;
        
    }
    
}