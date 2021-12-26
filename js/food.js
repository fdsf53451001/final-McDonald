loadFoodType();
loadFoodOption('M1');

function food_choose(food_id){
    // console.log(food_id);
    loadFoodDetail(food_id);
    renderPage();
}

words=['購物車','shopping cart']
words_group = ['選擇','choose']
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
renderPage();