words=['<i class="bi bi-cart-plus-fill" style="color:whites"></i>購物車','<i class="bi bi-cart-plus-fill" style="color:whites"></i>shopping cart','選擇加價購產品','markup foods','加價購','markup']
words_group = ['選擇','choose','產品特製','choose custom','變更內容','change item','確定','confirm','取消','cancel']

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
        food_detail+='<div class="card singal-food-card" onclick="single_food_choose(\''+single_food_data[i]['id']+'\',\''+single_food_data[i]['name']+'\',\''+single_food_data[i]['price']+'\',\''+single_food_data[0]['id']+'\',\''+single_food_data[0]['name']+'\',\''+single_food_data[i]['img']+'\')" >';
        food_detail+='<img src="'+single_food_data[i]['img']+'" class="card-img-top singal-food-card-image" alt="...">';
        food_detail+='<div class="card-body">';
        food_detail+='<div class="row">';
        food_detail+='<h5>'+single_food_data[i]['name']+'</h5>';
        food_detail+='<h5>$'+single_food_data[i]['price']+'</h5>';
        food_detail+='</div>';
        food_detail+='</div>';
        food_detail+='</div>';
        food_detail+='</div>';
        
    }
    // console.log(food_detail);
    $('#single-food-row').html(food_detail);
    //show food detail here
    renderPage();
}

function exit_single_food(){
    $(".food-list")[0].hidden = false;
    $("#shopingcart-row")[0].hidden = false;
    $(".food-detail-card")[0].style.display = "none";
    $("#combo-detail-card")[0].style.display = "none";
}

function save_current_food_set(){
    order_food = localStorage.getItem('order_food');
    data = JSON.parse(order_food);
    data.push(current_food_set);
    order_food = JSON.stringify(data);
    localStorage.setItem('order_food',order_food);
    exit_single_food();
}

// save current food set
current_food_set = {};
function single_food_choose(id,combo_name,default_price,single_id,single_name,img){
    current_food_set = {combo:0,default_price:0,price:0,count:1,combo_id:-1,combo_name:'',food_list:[{food_id:-1,food_name:'',custom:[],custom_name:[],price:0},{food_id:-1,food_name:'',custom:[],custom_name:[],price:0},{food_id:-1,food_name:'',custom:[],custom_name:[],price:0}],addon_list:[{food_id:-1,food_name:'無加價購',custom:[],custom_name:[],price:0}]};
    $('#combo-food-img1').attr('src',img);
    if(id[0]==='S'){    //combo here
        $(".food-list")[0].hidden = true;
        $(".food-detail-card")[0].style.display = "none";
        $("#combo-detail-card")[0].style.display = "block";
        $("#combo-food-options")[0].style.display = "block";
        loadMainFoodCustom(single_id);
        update_combo_side_data();
        update_combo_drink_data();
        update_combo_addon_data();

        current_food_set['combo'] = 1;
        current_food_set['combo_id'] = id;
        current_food_set['combo_name'] = combo_name;
        current_food_set['food_list'][0]['food_id'] = single_id;
        current_food_set['food_list'][0]['food_name'] = single_name;
        current_food_set['food_list'][0]['price'] = default_price;
        current_food_set['default_price'] = parseInt(default_price);
        current_food_set['price'] = parseInt(default_price);
    }else{  //single here
        $(".food-list")[0].hidden = true;
        $(".food-detail-card")[0].style.display = "none";
        $("#combo-detail-card")[0].style.display = "block";
        $("#combo-food-options")[0].style.display = "none";
        loadMainFoodCustom(single_id);

        current_food_set['combo'] = 0;
        current_food_set['combo_id'] = id;
        current_food_set['combo_name'] = combo_name;
        current_food_set['food_list'][0]['food_id'] = single_id;
        current_food_set['food_list'][0]['food_name'] = single_name;
        current_food_set['food_list'][0]['price'] = default_price;
        current_food_set['default_price'] = parseInt(default_price);
        current_food_set['price'] = parseInt(default_price);
    }
}

function update_main_food_custom(){
    food_custom = '';
    for(i=0;i<main_food_custom_data.length;i++){
        food_custom += '<div class="card" style="width: 18rem;">';
        food_custom += '<img class="card-img-top" src="img/主餐.png" alt="Card image cap" width="140" height="220">';
        food_custom += '<div class="card-body">';
        food_custom += '<h5 class="card-title">'+main_food_custom_data[i]['name']+'</h5>';
        for(j=0;j<main_food_custom_data[i]['option'].length;j++){
            food_custom += '<a href="#" class="btn btn-primary" style="margin-left:5px" onclick="combo_food_custom(0,\''+main_food_custom_data[i]['id']+'\',\''+main_food_custom_data[i]['name']+'\',\''+main_food_custom_data[i]['option'][j]+'\')">'+main_food_custom_data[i]['option'][j]+'</a>';
        }
        food_custom += '</div>';
        food_custom += '</div>';
    }
    $('#hide_cust_main').html(food_custom);
}

function combo_food_custom(food_no,custom_id,custom_name,value){
    for(i=0;i<current_food_set['food_list'][food_no]['custom'].length;i++){
        if(current_food_set['food_list'][food_no]['custom'][i]['id']===custom_id){
            current_food_set['food_list'][food_no]['custom'][i]['value'] = value;
            return;
        }
    }
    current_food_set['food_list'][food_no]['custom'].push({id:custom_id,value:value});

    for(i=0;i<current_food_set['food_list'][food_no]['custom_name'].length;i++){
        if(current_food_set['food_list'][food_no]['custom_name'][i]['id']===custom_name){
            current_food_set['food_list'][food_no]['custom_name'][i]['value'] = value;
            return;
        }
    }
    current_food_set['food_list'][food_no]['custom_name'].push({id:custom_name,value:value});
}

function update_combo_side_data(){
    combo_side = '';
    for(i=0;i<combo_side_data.length;i++){
        combo_side += '<div class="card" style="width: 18rem;">';
        combo_side += '<img class="card-img-top" src="'+combo_side_data[i]['img']+'" alt="Card image cap" width="140" height="220">';
        combo_side += '<div class="card-body">';
        combo_side += '<h5 class="card-title">'+combo_side_data[i]['name']+'</h5>';
        combo_side += '<a href="#" class="btn btn-primary word-group-0" onclick="side_food_select(\''+combo_side_data[i]['FoodID']+'\',\''+combo_side_data[i]['sub_id_list'][0][1]+'\',\''+combo_side_data[i]['name']+'\',\''+combo_side_data[i]['price']+'\',\''+combo_side_data[i]['img']+'\')">選擇</a>';
        combo_side += '</div>';
        combo_side += '</div>';
    }
    $('#hide_side').html(combo_side);
    side_food_select(combo_side_data[0]['FoodID'],combo_side_data[0]['sub_id_list'][0][1],combo_side_data[0]['name'],combo_side_data[0]['price'],combo_side_data[0]['img']);
}

function side_food_select(food_id,single_side_id,food_name,price,img){
    current_food_set['food_list'][1]['food_id'] = food_id;
    current_food_set['food_list'][1]['food_name'] = food_name;
    current_food_set['food_list'][1]['price'] = price;
    // console.log(current_food_set['price'],parseInt(price));
    current_food_set['price'] = parseInt(current_food_set['price']) + parseInt(price);
    $('#combo-food-img2').attr('src',img);
    loadComboSidesCustom(single_side_id);
}

function update_combo_side_custom(){
    food_custom = '';
    for(i=0;i<combo_side_custom_data.length;i++){
        food_custom += '<div class="card" style="width: 18rem;">';
        food_custom += '<img class="card-img-top" src="img/主餐.png" alt="Card image cap" width="140" height="220">';
        food_custom += '<div class="card-body">';
        food_custom += '<h5 class="card-title">'+combo_side_custom_data[i]['name']+'</h5>';
        for(j=0;j<combo_side_custom_data[i]['option'].length;j++){
            food_custom += '<a href="#" class="btn btn-primary" style="margin-left:5px" onclick="combo_food_custom(1,\''+combo_side_custom_data[i]['id']+'\',\''+combo_side_custom_data[i]['name']+'\',\''+combo_side_custom_data[i]['option'][j]+'\')">'+combo_side_custom_data[i]['option'][j]+'</a>';
        }
        food_custom += '</div>';
        food_custom += '</div>';
    }
    $('#hide_cust_side').html(food_custom);
}

function update_combo_drink_data(){
    combo_drink = '';
    for(i=0;i<combo_drink_data.length;i++){
        combo_drink += '<div class="card" style="width: 18rem;">';
        combo_drink += '<img class="card-img-top" src="'+combo_drink_data[i]['img']+'" alt="Card image cap" width="140" height="220">';
        combo_drink += '<div class="card-body">';
        combo_drink += '<h5 class="card-title">'+combo_drink_data[i]['name']+'</h5>';
        combo_drink += '<a href="#" class="btn btn-primary word-group-0" onclick="combo_drink_select(\''+combo_drink_data[i]['FoodID']+'\',\''+combo_drink_data[i]['name']+'\',\''+combo_drink_data[i]['price']+'\',\''+combo_drink_data[i]['img']+'\')">選擇</a>';
        combo_drink += '</div>';
        combo_drink += '</div>';
    }
    $('#hide_drink').html(combo_drink);
    combo_drink_select(combo_drink_data[0]['FoodID'],combo_drink_data[0]['name'],combo_drink_data[0]['price'],combo_drink_data[0]['img']);
    renderPage();
}

current_select_drink = {};
function combo_drink_select(food_id,food_name,price,img){
    current_food_set['food_list'][2]['food_id'] = food_id;
    current_food_set['food_list'][2]['food_name'] = food_name;
    current_food_set['food_list'][2]['price'] = price;
    current_food_set['price'] = parseInt(current_food_set['price']) + parseInt(price);
    $('#combo-food-img3').attr('src',img);
    current_select_drink['img'] = img;
    loadComboDrinksCustom(food_id);
}

function update_combo_drink_custom(){
    food_custom = '';
    for(i=0;i<combo_drink_custom_data.length;i++){
        food_custom += '<div class="card" style="width: 18rem;">';
        food_custom += '<img class="card-img-top" src="'+current_select_drink['img']+'" alt="Card image cap" width="140" height="220">';
        food_custom += '<div class="card-body">';
        food_custom += '<h5 class="card-title">'+combo_drink_custom_data[i]['name']+'</h5>';
        for(j=0;j<combo_drink_custom_data[i]['option'].length;j++){
            food_custom += '<a href="#" class="btn btn-primary" style="margin-left:5px" onclick="combo_food_custom(2,\''+combo_drink_custom_data[i]['id']+'\',\''+combo_drink_custom_data[i]['name']+'\',\''+combo_drink_custom_data[i]['option'][j]+'\')">'+combo_drink_custom_data[i]['option'][j]+'</a>';
        }
        food_custom += '</div>';
        food_custom += '</div>';
    }
    $('#hide_drink_custom').html(food_custom);
}

function update_combo_addon_data(){
    combo_addon = '';
    for(i=0;i<combo_adds_data.length;i++){
        combo_addon += '<div class="card" style="width: 18rem;">';
        combo_addon += '<img class="card-img-top" src="'+combo_adds_data[i]['img']+'" alt="Card image cap" width="140" height="220">';
        combo_addon += '<div class="card-body">';
        combo_addon += '<h5 class="card-title">'+combo_adds_data[i]['name']+'</h5>';
        combo_addon += '<a href="#" class="btn btn-primary word-group-0" onclick="combo_addon_select(\''+combo_adds_data[i]['FoodID']+'\',\''+combo_adds_data[i]['name']+'\',\''+combo_adds_data[i]['price']+'\')">選擇</a>';
        combo_addon += '</div>';
        combo_addon += '</div>';
    }
    $('#hide_addition').html(combo_addon);
    renderPage();
}

function combo_addon_select(food_id,food_name,price){
    current_food_set['addon_list'][0]['food_id'] = food_id;
    current_food_set['addon_list'][0]['food_name'] = food_name;
    current_food_set['addon_list'][0]['price'] = price;
    current_food_set['price'] = parseInt(current_food_set['price']) + parseInt(price);
}

update_food_type();
update_food_detail();
loadFoodType();
loadFoodOption('M1');

renderPage();

loadComboSides();
loadComboDrinks();
loadComboAdds();
