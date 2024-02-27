$('.mobile-menu').click(function (event) {
    event.stopPropagation(); // Prevent click from immediately propagating to body
    $(this).toggleClass('burger-active');
    $('body').toggleClass('scroll-disabled');
    $('.mobile-header-menu').toggleClass('mobile-header-menu-active');
  
    $('.mobile-header-menu ul').find('ul').slideUp();
  });
  
  $('.mobile-header-menu ul .has-child a').click(function (event) {
    event.stopPropagation(); // Prevent this click from propagating to body
    $(this).parent().children('ul').slideToggle();
  });
  
  // Add this new event listener
  $(document).click(function (event) {
    var $target = $(event.target);
    if(!$target.closest('.mobile-menu').length && 
       !$target.closest('.mobile-header-menu').length &&
       $('.mobile-header-menu').hasClass('mobile-header-menu-active')) {
      $('.mobile-menu').removeClass('burger-active');
      $('body').removeClass('scroll-disabled');
      $('.mobile-header-menu').removeClass('mobile-header-menu-active');
      $('.mobile-header-menu ul').find('ul').slideUp();
    }
  });

function updatePrice() {
    var priceRange = document.getElementById("priceRange");
    var priceOutput = document.getElementById("priceOutput");
    var currentPrice = document.getElementById("currentPrice");

    var formattedValue = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY'
    }).format(priceRange.value);

    priceOutput.innerHTML = formattedValue;
    currentPrice.innerHTML = "Seçilen Fiyat: " + formattedValue;
}

var swiper = new Swiper(".references-slider", {
    slidesPerView: 10,
    spaceBetween: 10,
    loop: true,  
    pagination: {
        el: ".references-slider-pagination",
        clickable: true,
    },
    breakpoints: {
        
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        467: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
});


