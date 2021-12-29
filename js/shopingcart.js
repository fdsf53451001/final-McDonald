order_food=[];
function load_order_food(){
    order_food = localStorage.getItem('order_food');
    order_food = JSON.parse(order_food);
}

function save_order_food(){
    localStorage.setItem('order_food',JSON.stringify(order_food));
}

function update_shopingcart(){
    check_price();
    shopingcart_data='';
    for(i=0;i<order_food.length;i++){
        if(order_food[i]['combo']==1){  //combo
            shopingcart_data += '<div class="row">';
            shopingcart_data += '<div class="card text-center">';
            shopingcart_data += '<div class="card-header">';
            shopingcart_data += order_food[i]['combo_name']+'<span> $'+order_food[i]['price']+' x'+order_food[i]['count']+'</span>';
            shopingcart_data += '</div>';
            shopingcart_data += '<div class="card-body">';
            shopingcart_data += '<p class="card-text">'+order_food[i]['food_list'][0]['food_name']+'</p>';
            shopingcart_data += '<p class="card-text">'+order_food[i]['food_list'][1]['food_name']+'</p>';
            shopingcart_data += '<p class="card-text">'+order_food[i]['food_list'][2]['food_name']+'</p>';
            shopingcart_data += '<p class="card-text">'+order_food[i]['addon_list'][0]['food_name']+'</p>';
            shopingcart_data += '<a class="btn btn-primary" style="width:100px" onclick="save_food_count()">確認</a>';
            shopingcart_data += '<button class="btn btn-outline-success" onclick="change_food_count(\''+i+'\',\'1\')"><i class="bi bi-plus-circle"></i></button>';
            shopingcart_data += '<span id="food-count-'+i+'">'+order_food[i]['count']+'</span>';
            shopingcart_data += '<button class="btn btn-outline-success" onclick="change_food_count(\''+i+'\',\'-1\')"><i class="bi bi-dash-circle"></i></button>';
            shopingcart_data += '<a class="btn btn-danger" style="width:100px" onclick="delete_food(\''+i+'\')">刪除</a>';
            shopingcart_data += '</div>';
            shopingcart_data += '</div>';
            shopingcart_data += '</div>';
        }else if(order_food[i]['combo']==0){  //single food
            shopingcart_data += '<div class="row">';
            shopingcart_data += '<div class="card text-center">';
            shopingcart_data += '<div class="card-header">';
            shopingcart_data += order_food[i]['combo_name']+'<span> $'+order_food[i]['price']+' x'+order_food[i]['count']+'</span>';
            shopingcart_data += '</div>';
            shopingcart_data += '<div class="card-body">';
            shopingcart_data += '<p class="card-text">'+order_food[i]['food_list'][0]['food_name']+'</p>';
            shopingcart_data += '<a class="btn btn-primary" style="width:100px" onclick="save_food_count()">確認</a>';
            shopingcart_data += '<button class="btn btn-outline-success" onclick="change_food_count(\''+i+'\',\'1\')"><i class="bi bi-plus-circle"></i></button>';
            shopingcart_data += '<span id="food-count-'+i+'">'+order_food[i]['count']+'</span>';
            shopingcart_data += '<button class="btn btn-outline-success" onclick="change_food_count(\''+i+'\',\'-1\')"><i class="bi bi-dash-circle"></i></button>';
            shopingcart_data += '<a class="btn btn-danger" style="width:100px" onclick="delete_food(\''+i+'\')">刪除</a>';
            shopingcart_data += '</div>';
            shopingcart_data += '</div>';
            shopingcart_data += '</div>';
        }
    }
    shopingcart_data += '<div class="row">';
    shopingcart_data += '<div class="card text-center">';
    shopingcart_data += '<div class="card-header">';
    shopingcart_data += '總價<span id="total-price"> $'+get_total_price()+'元</span>';
    shopingcart_data += '</div>';
    $('#food-list').html(shopingcart_data);
}

function change_food_count(number,edit_count){
    current_count = parseInt(order_food[number]['count']);
    edit_count = parseInt(edit_count);
    if(current_count+edit_count>0){
        order_food[number]['count']=current_count + edit_count;
    }else{
        // order_food.splice(number,1);
        order_food[number]['count']=0;
    }
    $('#food-count-'+number).html(order_food[number]['count']);
}

function delete_food(number){
    order_food[number]['count']=0;
    save_food_count();
}

function save_food_count(){
    for(i=0;i<order_food.length;i++){
        if(order_food[i]['count']==0){
            order_food.splice(i,1);
        }
    }
    save_order_food();
    load_order_food();
    update_shopingcart();
}

function check_price(){
    for(i=0;i<order_food.length;i++){
        if(order_food[i]['combo']==1){
            order_food[i]['price'] = 0;
            order_food[i]['price'] += parseInt(order_food[i]['food_list'][0]['price']);
            order_food[i]['price'] += parseInt(order_food[i]['food_list'][1]['price']);
            order_food[i]['price'] += parseInt(order_food[i]['food_list'][2]['price']);
            // console.log(parseInt(order_food[i]['food_list'][0]['price']),parseInt(order_food[i]['food_list'][1]['price']),parseInt(order_food[i]['food_list'][2]['price']));
            order_food[i]['price'] += parseInt(order_food[i]['addon_list'][0]['price']);
            
        }else{
            order_food[i]['price'] = 0;
            order_food[i]['price'] += parseInt(order_food[i]['food_list'][0]['price']);
        }
    }
}

function get_total_price(){
    check_price();
    total_price = 0;
    for(i=0;i<order_food.length;i++){
        total_price += order_food[i]['price']*order_food[i]['count'];
    }
    return total_price;
}

load_order_food();
update_shopingcart();