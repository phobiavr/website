(function($){
    if($.fancybox !== undefined){
        $.fancybox.defaults.animationEffect = "fade";
    }
    function initMap() {
        if($('#map').length > 0){
            var uluru = {lat: -25.363, lng: 131.044};
            var map = new google.maps.Map(document.getElementById('map'), {

                zoom: 15,
                styles:[
                    {
                        "featureType": "all",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#081e3f"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "gamma": 0.01
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "saturation": -31
                            },
                            {
                                "lightness": -33
                            },
                            {
                                "weight": 2
                            },
                            {
                                "gamma": 0.8
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 30
                            },
                            {
                                "saturation": 30
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "saturation": 20
                            },
                            {
                                "color": "#2364c8"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#005ae1"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 20
                            },
                            {
                                "saturation": -20
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 10
                            },
                            {
                                "saturation": -30
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "saturation": 25
                            },
                            {
                                "lightness": 25
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#081e3f"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#081e3f"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#081e3f"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "lightness": -20
                            }
                        ]
                    }
                ]

                ,
                center: uluru
            });
            var marker = new google.maps.Marker({
                position: uluru,
                map: map
            });
        }

    }
    initMap();

    function initFullPage(){
        if($("#fullpage").length > 0){
            $("#fullpage").fullpage({
                anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage'],
                menu: '#menu',
                verticalCentered:false,
                lockAnchors: false,
                responsive:900
            });
        }
    }
    if($(window).height() >= 900){
        initFullPage();
    }
    $(window).resize(function () {
        if($(this).height() < 900){
            $.fn.fullpage.destroy('all')
        }else{
            initFullPage();
        }
    });
    var prevImg = '<?xml version=\'1.0\' encoding=\'utf-8\'?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"> <g> <path style="fill:#000" d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/> </g> </svg>'
    var prevImgWhite = '<?xml version=\'1.0\' encoding=\'utf-8\'?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"> <g> <path style="fill:#fff" d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/> </g> </svg>'
    var nextImg = '<?xml version=\'1.0\' encoding=\'utf-8\'?> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path style="fill:#000" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/></g></svg>'
    var nextImgWhite = '<?xml version=\'1.0\' encoding=\'utf-8\'?> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path style="fill:#fff" d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/></g></svg>'
    if($('.home-slider.owl-carousel').length > 0){
        $('.home-slider.owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots:true,
            navText: [prevImgWhite,nextImgWhite],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

    }
    if($('.offers.owl-carousel').length > 0) {
        $('.offers.owl-carousel').owlCarousel({
            loop: true,
            margin: 26,
            nav: true,
            dots: true,
            navText: [prevImg, nextImg],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
    }


    if($('.about-videos.owl-carousel').length > 0){
        $('.about-videos.owl-carousel').owlCarousel({
            items:1,
            loop:true,
            margin:0,
            video:true,
            lazyLoad:true,
            center:true,
            dotsContainer:"#custom-dots1"
        });
        $('.vr-info .about-videos.owl-carousel').owlCarousel({
            items:1,
            loop:true,
            margin:0,
            video:true,
            lazyLoad:true,
            center:true,
            dotsContainer:"#custom-dots2"
        });
    }
    if($('.screens-slider').length>0){
        $('.screens-slider.owl-carousel').owlCarousel({
            loop:true,
            margin:13,
            items:5,
            navText: [prevImgWhite,nextImgWhite],
        });
    }

    if($('.partners-slider').length > 0){
        $('.partners-slider.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            items:5,
            navText: [prevImgWhite,nextImgWhite],
        });
    }

    $(document).on('click','#change',function () {
        $(".vr-info-bgr").toggleClass('active');
        $(".about-container").toggleClass('slide-about');
        $(".vr-info").toggleClass('slide-vr');

    });

    if($('.prices-slider').length > 0){
        $('.prices-slider.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            items:1,
            navText: [prevImgWhite,nextImgWhite],
        })
    }
    $(".blog-items-carousel").flickity({
        pageDots: false,
        cellAlign: 'left',
        contain: true,
        arrowShape: {
            x0: 20,
            x1: 55, y1: 35,
            x2: 60, y2: 35,
            x3: 25
        }
    });
    $(".prices").flickity({
        pageDots: false,
        arrowShape: {
            x0: 20,
            x1: 55, y1: 35,
            x2: 60, y2: 35,
            x3: 25
        }
    });

    $('.fs-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: false,
        autoPlay: 5000,
        draggable: false,
        arrowShape: {
            x0: 20,
            x1: 55, y1: 35,
            x2: 60, y2: 35,
            x3: 25
        }
    });
    $('.blog-inner-slider').flickity({
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false,
        autoPlay: 5000,
        draggable: false,
        arrowShape: {
            x0: 20,
            x1: 55, y1: 35,
            x2: 60, y2: 35,
            x3: 25
        }
    });

    $(".blog-slider").flickity({
        pageDots: false,
        prevNextButtons:false,
        wrapAround:true
    });
    $(".blog-inner-gallery-slider").flickity({
        pageDots: false,
        prevNextButtons:false,
        wrapAround:true
    });
    $(".offers").flickity({
        pageDots: false,
        prevNextButtons:true,
        cellAlign: 'left',
        contain: true,
        arrowShape: {
            x0: 20,
            x1: 55, y1: 35,
            x2: 60, y2: 35,
            x3: 25
        }
    });
    // var home = new Swiper ('.swiper-container', {
    //     direction: 'horizontal',
    //     loop: true,
    //     pagination: '.swiper-pagination',
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    // })
    //
    // var offers = new Swiper ('.offers.swiper-container', {
    //     // Optional parameters
    //     direction: 'horizontal',
    //     spaceBetween: 29,
    //     slidesPerView: 4,
    //     loop: true,
    //     slidesPerGroup: 4,
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //
    // })


    // $('.loop').owlCarousel({
    //     center: true,
    //     items:2,
    //     loop:true,
    //     margin:10,
    //     responsive:{
    //         600:{
    //             items:4
    //         }
    //     }
    // });
})(jQuery)