
function update_shopingcart(){
    order_food=JSON.parse(localStorage.getItem('order_food'));
    console.log(order_food);
    shopingcart_data='';
    for(i=0;i<order_food.length;i++){
        if(order_food[i]['combo']==1){  //combo
            shopingcart_data += '<div class="row">';
            shopingcart_data += '<div class="card text-center">';
            shopingcart_data += '<div class="card-header">';
            shopingcart_data += order_food[i]['combo_name']+'<span> $'+order_food[i]['price']+'</span>';
            shopingcart_data += '</div>';
            shopingcart_data += '<div class="card-body">';
            shopingcart_data += '<p class="card-text">'+order_food[i]['food_list'][0]['food_name']+'</p>';
            shopingcart_data += '<p class="card-text">'+order_food[i]['food_list'][1]['food_name']+'</p>';
            shopingcart_data += '<p class="card-text">'+order_food[i]['food_list'][2]['food_name']+'</p>';
            shopingcart_data += '<p class="card-text">'+order_food[i]['addon_list'][0]['food_name']+'</p>';
            shopingcart_data += '<a href="#" class="btn btn-primary" style="width:100px">確認</a>';
            shopingcart_data += '<button class="btn btn-outline-success"><i class="bi bi-plus-circle"></i></button>';
            shopingcart_data += '<span>'+order_food[i]['count']+'</span>';
            shopingcart_data += '<button class="btn btn-outline-success"><i class="bi bi-dash-circle"></i></button>';
            shopingcart_data += '<a href="#" class="btn btn-danger" style="width:100px">刪除</a>';
            shopingcart_data += '</div>';
            shopingcart_data += '</div>';
            shopingcart_data += '</div>';
        }else if(order_food[i]['combo']==0){  //single food
            shopingcart_data += '<div class="row">';
            shopingcart_data += '<div class="card text-center">';
            shopingcart_data += '<div class="card-header">';
            shopingcart_data += order_food[i]['combo_name']+'<span> $'+order_food[i]['price']+'</span>';
            shopingcart_data += '</div>';
            shopingcart_data += '<div class="card-body">';
            shopingcart_data += '<p class="card-text">'+order_food[i]['food_list'][0]['food_name']+'</p>';
            shopingcart_data += '<a href="#" class="btn btn-primary" style="width:100px">確認</a>';
            shopingcart_data += '<button class="btn btn-outline-success"><i class="bi bi-plus-circle"></i></button>';
            shopingcart_data += '<span>1</span>';
            shopingcart_data += '<button class="btn btn-outline-success"><i class="bi bi-dash-circle"></i></button>';
            shopingcart_data += '<a href="#" class="btn btn-danger" style="width:100px">刪除</a>';
            shopingcart_data += '</div>';
            shopingcart_data += '</div>';
            shopingcart_data += '</div>';
        }
    }
    $('#food-list').html(shopingcart_data);
}
update_shopingcart();