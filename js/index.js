words = ['內用','for here','外帶','to go','中文','中文',"english",'english','請選擇語言','please select language'];
words_group = []

function choose_for_here(){
    localStorage.setItem('where_use',1);
    send_generate_order(0,1);
}

function choose_to_go(){
    localStorage.setItem('where_use',0);
    send_generate_order(0,0);
}

function on_orderid_generated(){
    location.href="food.html";
}

function changeLanguage(lan){
    setLanguage(lan);
    renderPage();
}

function init(){
    localStorage.setItem('order_food',JSON.stringify([]));
    localStorage.setItem('order_id','');
}

renderPage();

init();