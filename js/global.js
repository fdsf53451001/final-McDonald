var SERVER_ADDRESS = 'https://macdonald.eastus.cloudapp.azure.com/api/';

var LANGUAGE_OFFSET = 0;
// 0=zh_tw, 1=en

var LANGUAGE_POSTFIX = '';
// ''=zh_tw, '_en'=en

function setLanguage(lan){
    localStorage.setItem('language',lan);
    if(lan=='zh_tw'){
        LANGUAGE_OFFSET = 0;
        LANGUAGE_POSTFIX = '';
    }else if(lan=='en'){
        LANGUAGE_OFFSET = 1;
        LANGUAGE_POSTFIX = '_en';
    }else{
        LANGUAGE_OFFSET = 1;
        LANGUAGE_POSTFIX = '_en';
    }
}

setLanguage(localStorage.getItem('language'));

