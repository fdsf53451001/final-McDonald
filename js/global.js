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

// word data save in own js file
function renderPage(){
    for(i=0;true;i++){
        if($('#word-'+i).length==0){break;}
        $('#word-'+i).html(words[i*2+LANGUAGE_OFFSET]);
    }
    for(i=0;true;i++){
        if($('.word-group-'+i).length==0){break;}
        $('.word-group-'+i).html(words_group[i*2+LANGUAGE_OFFSET]);
    }
}

