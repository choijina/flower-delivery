$(function(){

  // button effect
  let effect_3d = $('.effect_3d');
  
  effect_3d.each(function(){
    let test = $(this).text();
    let html = 
    `<span class="parent">
        <span>${test}
          <span class="abs">${test}</span>
        </span>
      </span>`;
    $(this).html(html);
  });

  // mobile menu
  $('.mobile_menu_toggle').click(function(){
    $('body').addClass('menu_active')
  });
  $('#mobile_nav #close').click(function(){
    $('body').removeClass('menu_active')
  });

  // cart
  $('#cart_toggle_btn').add($('.mobile_cart')).click(function(e){
    e.preventDefault();
    $('body').addClass('cart_active')
  });
  $('#shopping_cart .close').click(function(e){
    e.preventDefault();
    $('body').removeClass('cart_active')
  });

  // review slide
  const swiper = new Swiper('.review_slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  $('.review_slide .prev').click(function(){
    swiper.slidePrev();
  });
  $('.review_slide .next').click(function(){
    swiper.slideNext();
  });
});
