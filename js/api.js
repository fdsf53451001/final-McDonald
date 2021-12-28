function loadFoodType(){
    $.post({
        url:SERVER_ADDRESS+'foodtype'+LANGUAGE_POSTFIX+'.php',
        },function(jsonResult){
            console.log('load food type success');
            // console.log(jsonResult);
            food_type_data=jsonResult;
            update_food_type();
        }
    );
    // data = [{"id":"M1","name":"主餐","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BigMac.PNG?raw=true"},{"id":"M2","name":"飲料","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Coca-Cola.PNG?raw=true"},{"id":"M3","name":"點心","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/French_Fries.PNG?raw=true"}]
    
}

function loadFoodOption(option){
    $.post({
        url:SERVER_ADDRESS+'get_option'+LANGUAGE_POSTFIX+'.php?id=\''+option+'\'',
        },function(jsonResult){
            // console.log(jsonResult);
            console.log('load food option success');
            food_detail_data = jsonResult;
            update_food_detail();
        }
    );
    // data = []
    // if(option==='M1'){
    //     data=[{"id":"001","name":"炸蝦天婦羅安格斯黑牛堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Shrimp_Angus_Beef_Burger.PNG?raw=true","avaliable":"0"},{"id":"002","name":"雙蝦天婦羅堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Double_Shrimp_Burger.PNG?raw=true","avaliable":"0"},{"id":"003","name":"薑燒豬肉長堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Ginger_Pork_Burger.PNG?raw=true","avaliable":"1"},{"id":"004","name":"煙燻雞長堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Smoked_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"005","name":"BLT安格斯黑牛堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BLT_Angus_Beef_Burger.PNG?raw=true","avaliable":"1"},{"id":"006","name":"BLT辣脆雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BLT_Spicy_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"007","name":"BLT嫩煎雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BLT_Grilled_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"008","name":"蕈菇安格斯牛堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Mushroom_Angus_Beef_Burger.PNG?raw=true","avaliable":"1"},{"id":"009","name":"凱撒辣脆雞沙拉","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Salad\/Caesar_Salad_wSpicy_Chicken_Filet.PNG?raw=true","avaliable":"1"},{"id":"010","name":"義式烤雞沙拉","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Salad\/Italian_Grilled_Chicken_Salad.PNG?raw=true","avaliable":"1"},{"id":"011","name":"大麥克","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BigMac.PNG?raw=true","avaliable":"1"},{"id":"012","name":"雙層牛肉吉事堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Double_Cheese_Burger.PNG?raw=true","avaliable":"1"},{"id":"013","name":"麥脆雞腿","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/FriedChicken\/McCrispy-Chicken_LegThigh.PNG?raw=true","avaliable":"1"},{"id":"014","name":"麥脆雞翅","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/FriedChicken\/McCrispy-Chicken_Wing.PNG?raw=true","avaliable":"1"},{"id":"015","name":"麥克雞塊(10塊)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/ChickenNuggets\/10pcs_Chicken_McNuggets.PNG?raw=true","avaliable":"1"},{"id":"016","name":"麥克雞塊(6塊)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/ChickenNuggets\/6pcs_Chicken_McNuggets.PNG?raw=true","avaliable":"1"},{"id":"017","name":"嫩煎雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Grilled_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"018","name":"勁辣雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Spicy_Chicken_Filet.PNG?raw=true","avaliable":"1"},{"id":"019","name":"麥香雞","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/McChicken.PNG?raw=true","avaliable":"1"},{"id":"020","name":"麥香魚","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Filet-O-Fish.PNG?raw=true","avaliable":"1"}]
    // }else if(option==='M2'){
    //     data=[{"id":"021","name":"冰蜂蜜奶茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Iced_Honey_Milk_Tea.PNG?raw=true","avaliable":"1"},{"id":"022","name":"冰蜂蜜那堤","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Iced_Honey_Latte-L2.PNG?raw=true","avaliable":"1"},{"id":"023","name":"熱蜂蜜那堤","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Honey_Latte-L2.PNG?raw=true","avaliable":"1"},{"id":"024","name":"冰蜂蜜紅茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Honey_Iced_Tea.PNG?raw=true","avaliable":"1"},{"id":"025","name":"經典冰那堤(無糖)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Iced_Latte_(No_sugar).PNG?raw=true","avaliable":"1"},{"id":"026","name":"經典冰美式咖啡(無糖)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/12oz_Iced_Americano_(No_sugar).PNG?raw=true","avaliable":"1"},{"id":"027","name":"經典那堤","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Hot_Latte.PNG?raw=true","avaliable":"1"},{"id":"028","name":"經典美式咖啡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/12oz_Americano.PNG?raw=true","avaliable":"1"},{"id":"029","name":"阿薩姆冰鮮奶茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Iced_Assam_Latte.PNG?raw=true","avaliable":"1"},{"id":"030","name":"阿薩姆鮮奶茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Assam_Latte.PNG?raw=true","avaliable":"1"},{"id":"031","name":"冰紅茶(無糖)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Sugar-free_Iced_Black_Tea.PNG?raw=true","avaliable":"1"},{"id":"032","name":"冰綠茶(無糖)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Sugar-free_Iced_Green_Tea.PNG?raw=true","avaliable":"1"},{"id":"033","name":"可口可樂","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Coca-Cola.PNG?raw=true","avaliable":"1"},{"id":"034","name":"檸檬紅茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Iced_Tea.PNG?raw=true","avaliable":"1"},{"id":"035","name":"雪碧","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Sprite.PNG?raw=true","avaliable":"1"},{"id":"036","name":"零卡可樂","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Zero_Coke.PNG?raw=true","avaliable":"1"},{"id":"037","name":"柳橙汁","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Orange_Juice.PNG?raw=true","avaliable":"1"},{"id":"038","name":"熱奶茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Hot_Milk_Tea.PNG?raw=true","avaliable":"1"},{"id":"039","name":"熱紅茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Hot_Tea.PNG?raw=true","avaliable":"1"},{"id":"040","name":"冰奶茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Iced_Milk_Tea.PNG?raw=true","avaliable":"1"},{"id":"041","name":"玉米湯","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Corn_Soup.PNG?raw=true","avaliable":"1"},{"id":"042","name":"鮮乳","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Milk.PNG?raw=true","avaliable":"1"}]
    // }else if(option==='M3'){
    //     data=[{"id":"043","name":"新經典三拼","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Classic_Platter-New_3_Kind.PNG?raw=true","avaliable":"1"},{"id":"044","name":"勁辣香雞翅(6)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Spicy_Chicken_Wing(6).PNG?raw=true","avaliable":"1"},{"id":"045","name":"酥嫩雞翅(6)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Tender_Chicken_Wing(6).PNG?raw=true","avaliable":"1"},{"id":"046","name":"勁辣香雞翅","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Spicy_Chicken_Wing.PNG?raw=true","avaliable":"1"},{"id":"047","name":"酥嫩雞翅","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Tender_Chicken_Wing.PNG?raw=true","avaliable":"1"},{"id":"048","name":"OREO冰炫風","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/McFlurry(OREO).PNG?raw=true","avaliable":"1"},{"id":"049","name":"蘋果派","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Apple_Pie.PNG?raw=true","avaliable":"1"},{"id":"050","name":"薯條","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/French_Fries.PNG?raw=true","avaliable":"1"},{"id":"051","name":"蛋捲冰淇淋","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Vanilla_ice_cream.PNG?raw=true","avaliable":"1"},{"id":"052","name":"大四季沙拉","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Salad(L).PNG?raw=true","avaliable":"1"}]
    // }
    
}

function loadFoodDetail(food_id){
    $.post({
        url:SERVER_ADDRESS+'get_singlefood'+LANGUAGE_POSTFIX+'.php?id=\''+food_id+'\'',
        },function(jsonResult){
            console.log('load food detail success');
            single_food_data = jsonResult;
            update_single_food();
        }
    );
    
}

combo_side_data = [{"FoodID":"S20001","name":"麥克雞塊(4)+中薯(-$15)","price":"-15","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/side_meal_ok\/%E9%9B%9E%E5%A1%8A+%E8%96%AF%E6%A2%9D.png?raw=true","sub_id_list":[["雞塊","A00015"],["薯條","A00009"]]},{"FoodID":"S20002","name":"麥脆雞腿(原)+中薯","price":"0","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/side_meal_ok\/%E9%9B%9E%E8%85%BF+%E8%96%AF%E6%A2%9D.png?raw=true","sub_id_list":[["原味雞腿","M00013"],["薯條","A00009"]]},{"FoodID":"S20003","name":"麥脆雞腿(辣)+中薯","price":"0","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/side_meal_ok\/%E9%9B%9E%E8%85%BF+%E8%96%AF%E6%A2%9D.png?raw=true","sub_id_list":[["辣味雞腿","M00014"],["薯條","A00009"]]},{"FoodID":"S20004","name":"經典中薯(-$60)","price":"-60","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/side_meal_ok\/%E4%B8%AD%E8%96%AF.png?raw=true","sub_id_list":[["薯條","A00009"]]},{"FoodID":"S20005","name":"經典大薯(-$47)","price":"-47","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/side_meal_ok\/%E5%A4%A7%E8%96%AF.png?raw=true","sub_id_list":[["薯條","A00010"]]},{"FoodID":"S20006","name":"清爽沙拉(-$60)","price":"-60","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/side_meal_ok\/%E6%B2%99%E6%8B%89.png?raw=true","sub_id_list":[["沙拉","S20006"]]},{"FoodID":"S20007","name":"麥克雞塊(-$53)","price":"-53","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/side_meal_ok\/%E9%9B%9E%E5%A1%8A.png?raw=true","sub_id_list":[["雞塊","A00015"]]}];
function loadComboSides(){
    $.post({
        url:SERVER_ADDRESS+'combo_side'+LANGUAGE_POSTFIX+'.php',
        },function(jsonResult){
            console.log('load combo side success');
            combo_side_data = jsonResult;
        }
    );
}

combo_side_custom_data = [{"id":"A002","name":"沾醬","type":"0","typeName":"integer","defaultNum":"1","option":["蜂蜜芥末醬包","泰式香辣醬包","糖醋醬包","不要醬包"]}];
function loadComboSidesCustom(food_id){
    console.log(food_id);
    $.post({
        url:SERVER_ADDRESS+'get_customer'+LANGUAGE_POSTFIX+'.php?id=\''+food_id+'\'',
        },function(jsonResult){
            console.log('load combo side success');
            combo_side_custom_data = jsonResult;
            update_combo_side_custom();
        }
    );
}

combo_drink_data = [];
function loadComboDrinks(){
    $.post({
        url:SERVER_ADDRESS+'combo_drink'+LANGUAGE_POSTFIX+'.php',
        },function(jsonResult){
            console.log('load combo drink success');
            combo_drink_data = jsonResult;
        }
    );
}

combo_adds_data = [];
function loadComboAdds(){
    $.post({
        url:SERVER_ADDRESS+'combo_add'+LANGUAGE_POSTFIX+'.php',
        },function(jsonResult){
            console.log('load combo adds success');
            combo_adds_data = jsonResult;
        }
    );
}

main_food_custom_data = [];
function loadMainFoodCustom(food_id){
    $.post({
        url:SERVER_ADDRESS+'get_customer'+LANGUAGE_POSTFIX+'.php?id=\''+food_id+'\'',
        },function(jsonResult){
            console.log('load food custom success');
            main_food_custom_data = jsonResult;
            update_main_food_custom();
        }
    );
}

