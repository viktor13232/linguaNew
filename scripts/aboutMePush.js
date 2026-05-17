function changeLanguage(langJsonPath) {
    const json = getData(langJsonPath);
    console.log(json);

    json.then(text => {
        document.getElementById("aboutMePage__H2").innerHTML = text.aboutMePage.aboutMePage__H2;
        document.getElementById("aboutMePage__P1").innerHTML = text.aboutMePage.aboutMePage__P1;
        document.getElementById("aboutMePage__P2").innerHTML = text.aboutMePage.aboutMePage__P2;
        document.getElementById("aboutMePage__P3").innerHTML = text.aboutMePage.aboutMePage__P3;
        document.getElementById("aboutMePage__P4").innerHTML = text.aboutMePage.aboutMePage__P4;
        }).catch(error => {
        console.error('Error loading language file:', error);
    });
}
