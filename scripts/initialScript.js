
const enLangJSON = 'langJsons/en.json';
const ruLangJSON = 'langJsons/ru.json';
const lvLangJSON = 'langJsons/lv.json';
const deLangJSON = 'langJsons/de.json';


const enObj = {
    name: "en",
    imgLink: "assets/us.svg",
    number: 1,
    visibleName: "ENG"
}

const ruObj = {
    name: "ru",
    imgLink: "assets/ru.svg",
    number: 2,
    visibleName: "RU"
}
const lvObj = {
    name: "en",
    imgLink: "assets/us.svg",
    number: 3,
    visibleName: "LV"
}
const deObj = {
    name: "en",
    imgLink: "assets/us.svg",
    number: 4,
    visibleName: "DE"
}

const langObjArr = [enObj, ruObj, lvObj, deObj];
initDefaultLanguage();
langChanger();
langNameSort();

//Reading language JSON, depending on selected or naviagator language

function initDefaultLanguage() {
    if(localStorage.getItem("language") == undefined) {
        localStorage.setItem("language", navigator.language);
        location.reload();
    }
}

function langChanger() {
    
    if(localStorage.getItem("language").startsWith("en")){
        changeLanguage(enLangJSON);
        changeBaseLanguage(enLangJSON);
    }
    else if(localStorage.getItem("language").startsWith("ru")) {
        changeLanguage(ruLangJSON);
        changeBaseLanguage(ruLangJSON);
    }
    else if(localStorage.getItem("language").startsWith("de")) {
        changeLanguage(deLangJSON);
        changeBaseLanguage(deLangJSON);
    }
    else if(localStorage.getItem("language").startsWith("lv")) {
        changeLanguage(lvLangJSON);
        changeBaseLanguage(lvLangJSON);
    }
    else {
        changeLanguage(enLangJSON);
        changeBaseLanguage(enLangJSON);
        localStorage.setItem("language", "en");
    }
    
}

//Fetching lang JSON

async function getData(filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error('Network respone error');
        }

        const data = await response.json()
        return data;

    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

// Assigning names to LangSwitch Buttons

function langNameSort() {
    let otherLangsArr = document.querySelectorAll(".otherLangName");
    let counter = 0;


   for(let i = 0; i < langObjArr.length; i++) {
        if(localStorage.getItem("language").startsWith(langObjArr[i].name))
            document.getElementById("currentLangName").innerHTML = langObjArr[i].visibleName;
        else {
            otherLangsArr[counter].innerHTML = langObjArr[i].visibleName;
            otherLangsArr[counter].addEventListener("click", () =>{
                saveChosedLang(langObjArr[i].number)
            });
            counter++;
        }
    } 

}

//Storing chosed lang in memory

function saveChosedLang(number) {
    switch (number) {
        case 1: {
            localStorage.setItem("language", "en");
            location.reload();
            break; 
       }
        case 2: {
            localStorage.setItem("language", "ru");
            location.reload();
            break;
        }
        case 3: {
            localStorage.setItem("language", "lv");
            location.reload();
            break;
        }
        case 4: { 
            localStorage.setItem("language", "de");
            location.reload();
            break;
        }

    }
}
