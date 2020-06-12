$(document).ready(function(){
    
    // team-slider
    $('.team-slider-active').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    // brand-slider
    $('.brand-slider-active').owlCarousel({
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        margin:20,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            480:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            }
        }
    });

    // Navbar-nav-active
    $('.navbar-nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // Mixit-up
    var containerEl = document.querySelector('.gallery-body');
    var mixer = mixitup(containerEl, {
        selectors: {
            control: '[our-mixitup-control]'
        }
    });

//logo top
    $('.logo-top').click(function(){
        $("html,body").animate({
            scrollTop:0
        },1500);
    });


    // top-button
    $('.top').click(function(){
        $("html,body").animate({
            scrollTop:0
        },1500);
    });

    $('.top').hide();

    $(window).scroll(function(){
        var ourwindow = $(this).scrollTop();
        if(ourwindow<500){
            $('.top').fadeOut();
        } else{
            $('.top').fadeIn();
        }
    });

    //our-fixed-menu-top
    
    $(window).scroll(function(){
        var ourwindow = $(this).scrollTop();

        if(ourwindow>52){
            $('body').addClass('our-fixed-menu-top');
        } else{
            $('body').removeClass('our-fixed-menu-top');
        }
    })

    // our-menu-target
    $('.navbar-nav a[href^="#"]').click(function(){
        var target = this.hash;
        $('html,body').animate({
            scrollTop:$(target).offset().top-106
        },1500)
    })

    // wow 
    new WOW().init();

    // google map
    function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(23.1675473, 90.2049733), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": .2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(23.1675473, 90.2049733),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }

});












