words = ['內用','for here','外帶','to go','中文','chinese',"英文",'english','請選擇語言','please select language'];

function setLanguage(lan){
    localStorage.setItem('language',lan);
    if(lan=='zh_tw'){
        LANGUAGE_OFFSET = 0;
    }else if(lan=='en'){
        LANGUAGE_OFFSET = 1;
    }else{
        LANGUAGE_OFFSET = 1;
    }
    renderPage();
}

function renderPage(){
    $('#word-0').html(words[0*2+LANGUAGE_OFFSET]);
    $('#word-1').html(words[1*2+LANGUAGE_OFFSET]);
    $('#word-2').html(words[2*2+LANGUAGE_OFFSET]);
    $('#word-3').html(words[3*2+LANGUAGE_OFFSET]);
    $('#word-4').html(words[4*2+LANGUAGE_OFFSET]);
}

setLanguage(localStorage.getItem('language'));