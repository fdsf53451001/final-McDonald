order_food=[];
function load_order_food(){
    order_food = localStorage.getItem('order_food');
    order_food = JSON.parse(order_food);
}

function deal_order(){
    for(i=0;i<order_food.length;i++){
        if(order_food[i]['combo']==1){  //combo
            send_add_combo_food(order_food[i]['food_list'][0]['food_id'],order_food[i]['food_list'][1]['food_id'],order_food[i]['food_list'][2]['food_id'],order_food[i]['count']);
            if(order_food[i]['addon_list'][0]['food_id']!=-1){  // have addon food
                send_combo_addon(order_food[i]['addon_list'][0]['food_id'],1);
            }
        }else if(order_food[i]['combo']==0){  //single food
            send_add_single_food(order_food[i]['food_id'],order_food[i]['count']);
        }
    }
}

var timer=5;
function countdown()
      {
        timer=timer-1;

        if(timer==3){
          var e = document.getElementById('test');
           e.style.display = 'block';
        }
        if(timer==0)
          document.location="finsh.html";
      }


window.setInterval(countdown,1000);
load_order_food();
deal_order();