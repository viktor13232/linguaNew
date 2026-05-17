function changeLanguage(langJsonPath) {
    const json = getData(langJsonPath);
    console.log(json);

    json.then(text => {

        }).catch(error => {
        console.error('Error loading language file:', error);
    });
}
