// preload food type
food_type_data = [{"id":"M1","name":"主餐","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BigMac.PNG?raw=true"},{"id":"M2","name":"飲料","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Coca-Cola.PNG?raw=true"},{"id":"M3","name":"點心","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/French_Fries.PNG?raw=true"}];
function update_food_type(){
    append_food = [];
    for(let i=0;i<food_type_data.length;i++){
        append_food += '<li onclick="food_type_choose(\''+food_type_data[i]['id']+'\')"><a href="#">'+food_type_data[i]['name']+'</a><img class="food-type-photo" src="'+food_type_data[i]['img']+'"></li>';
    }
    $('.menu-item').html(append_food);
    renderPage();
}

function food_type_choose(option){
    exit_single_food();
    loadFoodOption(option);
}

// preload food detail
food_detail_data = [{"id":"001","name":"炸蝦天婦羅安格斯黑牛堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Shrimp_Angus_Beef_Burger.PNG?raw=true","avaliable":"0"},{"id":"002","name":"雙蝦天婦羅堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Double_Shrimp_Burger.PNG?raw=true","avaliable":"0"},{"id":"003","name":"薑燒豬肉長堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Ginger_Pork_Burger.PNG?raw=true","avaliable":"1"},{"id":"004","name":"煙燻雞長堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Smoked_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"005","name":"BLT安格斯黑牛堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BLT_Angus_Beef_Burger.PNG?raw=true","avaliable":"1"},{"id":"006","name":"BLT辣脆雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BLT_Spicy_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"007","name":"BLT嫩煎雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BLT_Grilled_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"008","name":"蕈菇安格斯牛堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Mushroom_Angus_Beef_Burger.PNG?raw=true","avaliable":"1"},{"id":"009","name":"凱撒辣脆雞沙拉","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Salad\/Caesar_Salad_wSpicy_Chicken_Filet.PNG?raw=true","avaliable":"1"},{"id":"010","name":"義式烤雞沙拉","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Salad\/Italian_Grilled_Chicken_Salad.PNG?raw=true","avaliable":"1"},{"id":"011","name":"大麥克","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BigMac.PNG?raw=true","avaliable":"1"},{"id":"012","name":"雙層牛肉吉事堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Double_Cheese_Burger.PNG?raw=true","avaliable":"1"},{"id":"013","name":"麥脆雞腿","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/FriedChicken\/McCrispy-Chicken_LegThigh.PNG?raw=true","avaliable":"1"},{"id":"014","name":"麥脆雞翅","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/FriedChicken\/McCrispy-Chicken_Wing.PNG?raw=true","avaliable":"1"},{"id":"015","name":"麥克雞塊(10塊)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/ChickenNuggets\/10pcs_Chicken_McNuggets.PNG?raw=true","avaliable":"1"},{"id":"016","name":"麥克雞塊(6塊)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/ChickenNuggets\/6pcs_Chicken_McNuggets.PNG?raw=true","avaliable":"1"},{"id":"017","name":"嫩煎雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Grilled_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"018","name":"勁辣雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Spicy_Chicken_Filet.PNG?raw=true","avaliable":"1"},{"id":"019","name":"麥香雞","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/McChicken.PNG?raw=true","avaliable":"1"},{"id":"020","name":"麥香魚","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Filet-O-Fish.PNG?raw=true","avaliable":"1"}];
function update_food_detail(){
    append_food = [];
    for (let i = 0; i < food_detail_data.length; i++) {
        if(food_detail_data[i].avaliable==='1'){
            append_food += '<div class="card bg-light singal-food-card">'
            append_food += '<img class="card-img-top" src="'+food_detail_data[i]['img']+'" alt="'+food_detail_data[i]['name']+'" width="140" height="220">'
            append_food += '<div class="card-body">'
            append_food += '<h5 class="card-title">'+food_detail_data[i]['name']+'</h5>'
            // append_food += '<p class="card-text">$價錢</p>'
            append_food += '<a href="#" class="btn btn-primary word-group-0" onclick="food_choose(\''+food_detail_data[i]['id']+'\')">選擇</a>'
            append_food += '</div>'
            append_food += '</div>'
        }
    }
    $('.food-list').html(append_food);
    renderPage();
}


function food_choose(food_id){
    // console.log(food_id);
    loadFoodDetail(food_id);
    
}

single_food_data = [];
function update_single_food(){
    $(".food-list")[0].hidden = true;
    $("#shopingcart-row")[0].hidden = true;
    $(".food-detail-card")[0].style.display = "block";

    // single_food_data=[{"id":"M00001","name":"炸蝦天婦羅安格斯黑牛堡","price":"154","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Shrimp_Angus_Beef_Burger.PNG?raw=true"},{"id":"S10001","name":"炸蝦天婦羅安格斯黑牛堡套餐","price":"269","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Shrimp_Angus_Beef_Burger.PNG?raw=true"}];
    food_detail = '<div class="col-1"></div>';
    for (let i = 0; i < single_food_data.length; i++) {
        food_detail+='<div class="col-5">';
        food_detail+='<div class="card singal-food-card">';
        food_detail+='<img src="'+single_food_data[i]['img']+'" class="card-img-top singal-food-card-image" alt="...">';
        food_detail+='<div class="card-body">';
        food_detail+='<div class="row">';
        food_detail+='<h5>'+single_food_data[i]['name']+'</h5>';
        food_detail+='<h5>'+single_food_data[i]['price']+'元</h5>';
        food_detail+='</div>';
        food_detail+='</div>';
        food_detail+='</div>';
        food_detail+='</div>';
        
    }
    // console.log(food_detail);
    $('#single-food-row').html(food_detail);
    //show food detail here
}

function exit_single_food(){
    $(".food-list")[0].hidden = false;
    $("#shopingcart-row")[0].hidden = false;
    $(".food-detail-card")[0].style.display = "none";
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

update_food_type();
update_food_detail();
loadFoodType();
loadFoodOption('M1');

renderPage();
