function loadFoodType(){
    $.post({
        url:SERVER_ADDRESS+'foodtype'+LANGUAGE_POSTFIX+'.php',
        },function(jsonResult){
            let result = JSON.parse(jsonResult);
            if(result['sucess']==='true'){
                console.log(result);
            }
        }
    );
    data = [{"id":"M1","name":"主餐","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BigMac.PNG?raw=true"},{"id":"M2","name":"飲料","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Coca-Cola.PNG?raw=true"},{"id":"M3","name":"點心","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/French_Fries.PNG?raw=true"}]
    append_food = [];
    for(let i=0;i<data.length;i++){
        append_food += '<li onclick="food_type_choose(\''+data[i]['id']+'\')"><a href="#">'+data[i]['name']+'</a><img class="food-type-photo" src="'+data[i]['img']+'"></li>';
    }
    $('.menu-item').html(append_food);
    console.log('load food type success');
}

function loadFoodOption(option){
    // $.post({
    //     url:SERVER_ADDRESS+'get_option'+LANGUAGE_POSTFIX+'.php?id='+option+'',
    //     },function(jsonResult){
    //         let result = JSON.parse(jsonResult);
    //         if(result['sucess']==='true'){
    //             console.log(result);
    //         }
    //     }
    // );
    data = []
    if(option==='M1'){
        data=[{"id":"001","name":"炸蝦天婦羅安格斯黑牛堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Shrimp_Angus_Beef_Burger.PNG?raw=true","avaliable":"0"},{"id":"002","name":"雙蝦天婦羅堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Double_Shrimp_Burger.PNG?raw=true","avaliable":"0"},{"id":"003","name":"薑燒豬肉長堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Ginger_Pork_Burger.PNG?raw=true","avaliable":"1"},{"id":"004","name":"煙燻雞長堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Smoked_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"005","name":"BLT安格斯黑牛堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BLT_Angus_Beef_Burger.PNG?raw=true","avaliable":"1"},{"id":"006","name":"BLT辣脆雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BLT_Spicy_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"007","name":"BLT嫩煎雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BLT_Grilled_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"008","name":"蕈菇安格斯牛堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Mushroom_Angus_Beef_Burger.PNG?raw=true","avaliable":"1"},{"id":"009","name":"凱撒辣脆雞沙拉","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Salad\/Caesar_Salad_wSpicy_Chicken_Filet.PNG?raw=true","avaliable":"1"},{"id":"010","name":"義式烤雞沙拉","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Salad\/Italian_Grilled_Chicken_Salad.PNG?raw=true","avaliable":"1"},{"id":"011","name":"大麥克","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/BigMac.PNG?raw=true","avaliable":"1"},{"id":"012","name":"雙層牛肉吉事堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Double_Cheese_Burger.PNG?raw=true","avaliable":"1"},{"id":"013","name":"麥脆雞腿","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/FriedChicken\/McCrispy-Chicken_LegThigh.PNG?raw=true","avaliable":"1"},{"id":"014","name":"麥脆雞翅","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/FriedChicken\/McCrispy-Chicken_Wing.PNG?raw=true","avaliable":"1"},{"id":"015","name":"麥克雞塊(10塊)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/ChickenNuggets\/10pcs_Chicken_McNuggets.PNG?raw=true","avaliable":"1"},{"id":"016","name":"麥克雞塊(6塊)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/ChickenNuggets\/6pcs_Chicken_McNuggets.PNG?raw=true","avaliable":"1"},{"id":"017","name":"嫩煎雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Grilled_Chicken_Burger.PNG?raw=true","avaliable":"1"},{"id":"018","name":"勁辣雞腿堡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Spicy_Chicken_Filet.PNG?raw=true","avaliable":"1"},{"id":"019","name":"麥香雞","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/McChicken.PNG?raw=true","avaliable":"1"},{"id":"020","name":"麥香魚","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Filet-O-Fish.PNG?raw=true","avaliable":"1"}]
    }else if(option==='M2'){
        data=[{"id":"021","name":"冰蜂蜜奶茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Iced_Honey_Milk_Tea.PNG?raw=true","avaliable":"1"},{"id":"022","name":"冰蜂蜜那堤","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Iced_Honey_Latte-L2.PNG?raw=true","avaliable":"1"},{"id":"023","name":"熱蜂蜜那堤","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Honey_Latte-L2.PNG?raw=true","avaliable":"1"},{"id":"024","name":"冰蜂蜜紅茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Honey_Iced_Tea.PNG?raw=true","avaliable":"1"},{"id":"025","name":"經典冰那堤(無糖)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Iced_Latte_(No_sugar).PNG?raw=true","avaliable":"1"},{"id":"026","name":"經典冰美式咖啡(無糖)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/12oz_Iced_Americano_(No_sugar).PNG?raw=true","avaliable":"1"},{"id":"027","name":"經典那堤","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Hot_Latte.PNG?raw=true","avaliable":"1"},{"id":"028","name":"經典美式咖啡","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/12oz_Americano.PNG?raw=true","avaliable":"1"},{"id":"029","name":"阿薩姆冰鮮奶茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Iced_Assam_Latte.PNG?raw=true","avaliable":"1"},{"id":"030","name":"阿薩姆鮮奶茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Cafe\/Assam_Latte.PNG?raw=true","avaliable":"1"},{"id":"031","name":"冰紅茶(無糖)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Sugar-free_Iced_Black_Tea.PNG?raw=true","avaliable":"1"},{"id":"032","name":"冰綠茶(無糖)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Sugar-free_Iced_Green_Tea.PNG?raw=true","avaliable":"1"},{"id":"033","name":"可口可樂","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Coca-Cola.PNG?raw=true","avaliable":"1"},{"id":"034","name":"檸檬紅茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Iced_Tea.PNG?raw=true","avaliable":"1"},{"id":"035","name":"雪碧","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Sprite.PNG?raw=true","avaliable":"1"},{"id":"036","name":"零卡可樂","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Zero_Coke.PNG?raw=true","avaliable":"1"},{"id":"037","name":"柳橙汁","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Orange_Juice.PNG?raw=true","avaliable":"1"},{"id":"038","name":"熱奶茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Hot_Milk_Tea.PNG?raw=true","avaliable":"1"},{"id":"039","name":"熱紅茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Hot_Tea.PNG?raw=true","avaliable":"1"},{"id":"040","name":"冰奶茶","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Iced_Milk_Tea.PNG?raw=true","avaliable":"1"},{"id":"041","name":"玉米湯","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Corn_Soup.PNG?raw=true","avaliable":"1"},{"id":"042","name":"鮮乳","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Beverage\/Milk.PNG?raw=true","avaliable":"1"}]
    }else if(option==='M3'){
        data=[{"id":"043","name":"新經典三拼","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Classic_Platter-New_3_Kind.PNG?raw=true","avaliable":"1"},{"id":"044","name":"勁辣香雞翅(6)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Spicy_Chicken_Wing(6).PNG?raw=true","avaliable":"1"},{"id":"045","name":"酥嫩雞翅(6)","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Tender_Chicken_Wing(6).PNG?raw=true","avaliable":"1"},{"id":"046","name":"勁辣香雞翅","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Spicy_Chicken_Wing.PNG?raw=true","avaliable":"1"},{"id":"047","name":"酥嫩雞翅","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Tender_Chicken_Wing.PNG?raw=true","avaliable":"1"},{"id":"048","name":"OREO冰炫風","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/McFlurry(OREO).PNG?raw=true","avaliable":"1"},{"id":"049","name":"蘋果派","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Apple_Pie.PNG?raw=true","avaliable":"1"},{"id":"050","name":"薯條","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/French_Fries.PNG?raw=true","avaliable":"1"},{"id":"051","name":"蛋捲冰淇淋","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Vanilla_ice_cream.PNG?raw=true","avaliable":"1"},{"id":"052","name":"大四季沙拉","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Desserts\/Salad(L).PNG?raw=true","avaliable":"1"}]
    }
    append_food = [];
    for (let i = 0; i < data.length; i++) {
        if(data[i].avaliable==='1'){
            append_food += '<div class="card bg-light singal-food-card">'
            append_food += '<img class="card-img-top" src="'+data[i]['img']+'" alt="'+data[i]['name']+'" width="140" height="220">'
            append_food += '<div class="card-body">'
            append_food += '<h5 class="card-title">'+data[i]['name']+'</h5>'
            // append_food += '<p class="card-text">$價錢</p>'
            append_food += '<a href="#" class="btn btn-primary word-group-0" onclick="food_choose(\''+data[i]['id']+'\')">選擇</a>'
            append_food += '</div>'
            append_food += '</div>'
        }
    }
    $('.food-list').html(append_food);
    console.log('load food option success');
}

function loadFoodDetail(food_id){
    // $.post({
    //     url:SERVER_ADDRESS+'get_singlefood'+LANGUAGE_POSTFIX+'.php?id=\''+food_id+'\'',
    //     },function(jsonResult){
    //         let result = JSON.parse(jsonResult);
    //         if(result['sucess']==='true'){
    //             console.log(result);
    //         }
    //     }
    // );
    data=[{"id":"M00001","name":"炸蝦天婦羅安格斯黑牛堡","price":"154","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Shrimp_Angus_Beef_Burger.PNG?raw=true"},{"id":"S10001","name":"炸蝦天婦羅安格斯黑牛堡套餐","price":"269","img":"https:\/\/github.com\/pei-ci\/Macdonald_Pictures\/blob\/main\/McD_Menu\/Main\/Burger\/Shrimp_Angus_Beef_Burger.PNG?raw=true"}];
    food_detail=[];
    for (let i = 0; i < data.length; i++) {
        if(data[i].avaliable==='1'){

        }
    }
    $('.main-display').html(food_detail);
    //show food detail here
}