function changeLanguage(langJsonPath) {
    const json = getData(langJsonPath);
    console.log(json);

    json.then(text => {

        // introduction
        document.getElementById("introduction__h2").innerHTML = text.introduction.introduction__h2;
        document.getElementById("introduction__p").innerHTML = text.introduction.introduction__p;

        //Offer
        document.getElementById("offer__h2").innerHTML = text.offer.offer__h2;
        document.getElementById("offer__p").innerHTML = text.offer.offer__p;

        //MLcards
        document.getElementById("mlCards__musicH2").innerHTML = text.musicLangCards.mlCards__musicH2;
        document.getElementById("mlCards__musicP").innerHTML = text.musicLangCards.mlCards__musicP;
        document.getElementById("mlCards__languageH2").innerHTML = text.musicLangCards.mlCards__languageH2;
        document.getElementById("mlCards__languageP").innerHTML = text.musicLangCards.mlCards__languageP;

        //Steps
        document.getElementById("steps__h2").innerHTML = text.steps.steps__h2;
        document.getElementById("steps__cardOneP").innerHTML = text.steps.steps__cardOneP;
        document.getElementById("steps__cardTwoP").innerHTML = text.steps.steps__cardTwoP;
        document.getElementById("steps__cardThreeP").innerHTML = text.steps.steps__cardThreeP;

        //Testimonial
        document.getElementById("testimonial__h2").innerHTML = text.testimonial.testimonial__h2;
        

    }).catch(error => {
        console.error('Error loading language file:', error);
    });
}
