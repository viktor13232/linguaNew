function changeBaseLanguage(langJsonPath) {
    const json = getData(langJsonPath);
    console.log(json);

    json.then(text => {
        // Header
        document.getElementById("topNav_courses").innerHTML = text.head.topNav_courses;
        document.getElementById("topNav__coursesLanguage").innerHTML = text.head.topNav__coursesLanguage;
        document.getElementById("topNav__coursesMusic").innerHTML = text.head.topNav__coursesMusic;
        document.getElementById("topNav__myApproach").innerHTML = text.head.topNav__myApproach;
        document.getElementById("topNav__aboutMe").innerHTML = text.head.topNav__aboutMe;
        document.getElementById("topNav__FAQ").innerHTML = text.head.topNav__FAQ;
        document.getElementById("topNav__contactMe").innerHTML = text.head.topNav__contactMe;
        document.getElementById("hero__h4One").innerHTML = text.head.hero__h4One;
        document.getElementById("hero__h4Two").innerHTML = text.head.hero__h4Two;
        document.getElementById("hero__apply").innerHTML = text.head.hero__apply;

        
        //Footer
        document.getElementById("footer__home").innerHTML = text.footer.footer__home;
        

    }).catch(error => {
        console.error('Error loading language file:', error);
    });
}
