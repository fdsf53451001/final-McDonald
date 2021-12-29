load_order_info();

function update_order_info(){
    food_list = '';
    food_list+= '<div class="card text-center">';
    food_list+= '<div class="card-header">';
    food_list+= '<span >$'+order_info[order_info.length-1]['total']+'</span>';
    food_list+= '</div>';
    food_list+= '<div class="card-body">';
    for(i=0;i<order_info.length-1;i++){
    food_list+= '<p class="card-text">'+order_info[i]['name']+' x '+order_info[i]['count']+' = $'+order_info[i]['price']+'</p>';
    }
    food_list+= '</div>';
    food_list+= '</div>';
    $('#food-list').html(food_list);
}