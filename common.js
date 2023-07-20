function loadPage(pageName) {
    const contentDiv = document.getElementById('content');
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            contentDiv.innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', pageName, true);
    xhttp.send();
}
