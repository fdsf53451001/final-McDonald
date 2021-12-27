words = ['內用','for here','外帶','to go','中文','中文',"english",'english','請選擇語言','please select language'];
function renderPage(){
    for(i=0;true;i++){
        if($('#word-'+i).length==0){break;}
        $('#word-'+i).html(words[i*2+LANGUAGE_OFFSET]);
    }
}
renderPage();

function changeLanguage(lan){
    setLanguage(lan);
    renderPage();
}