var item_data=[
 {url:"https://s6.postimg.org/w2i224phd/almonds_1740176_1920.png",
  name:"堅果",
  price: 20,
  bought: 0,
  show: false
},{url:"https://s6.postimg.org/7n9u12qkh/bread_1915886_1920.png",
  name:"麵包",
  price: 30,
   bought: 0,
   show: false
},
 {url:"https://s6.postimg.org/8mwglse81/federal-carrots-1083235_1920.png",
  name:"紅蘿蔔",
  price: 30,
  bought: 0,
  show: false
},
 {url:"https://s6.postimg.org/psmsf4q2p/dish_1883501_1920.png",
  name:"水果",
  price: 30,
  bought: 0,
  show: false
},
 {url:"https://s6.postimg.org/wkd7hzf29/egg_1505021_1920.png",
  name:"蛋",
  price: 30,
  bought: 0,
  show: false
},
 {url:"https://s6.postimg.org/hfdf9gzcx/meet-1154341_1920.png",
  name:"肉",
  price: 30,
  bought: 0,
  show: false
}
    ];

var app=new Vue({
  el:"#app",
  data:{
    title:"SuperMarket",
    items:item_data,
    card:{
      card_number:"",
      card_holder:"",
      expires:"",
      ccv:""
         },
    shipping: $('.stuff li').length>=0?200:0
  },
  methods:{
    close: function(){      $('.board').css('filter','blur(0em)')
      $('.fa-shopping-cart').css('display','inline');
      $('.checkout').hide();
    },
    show: function(callback){
      $('.board').css('filter','blur(0.1em)');
      $('.fa-shopping-cart').css('display','none');
      $('.checkout').show();
      callback && callback();
    },
    minus: function(index){
      var item=this.$data.items[index];
    if(item.bought>1){
      item.bought-=1;
    }else if(item.bought==1){
      item.bought-=1;
      item.show=false;
    }else{
      item.bought==0;
    }},
    plus: function(index){
      var item=this.$data.items[index];
      item.bought+=1;
      item.show=true;
    },
    neaten_slick: function(){
      //$('#slick-slide10').trigger('click');
     $('.slick-disabled').trigger('click');
    }
  }
  ,
  computed:{
    total: function(){
      var array=this.$data.items,
          length=array.length,
          shipping=this.$data.shipping,
          sum=shipping;
      for(i=0;i<length;i++){
        sum+=
         array[i].price*array[i].bought;
      }
      return sum;
    }

  }
  
}
);

$(document).ready(function(){
  $('.items').slick({
    dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
  });
$('.boxes').slick({
        dots: true,
        infinite: false,
        speed: 100,
        slidesToShow: 1,
  });
  $('.checkout').hide();
});