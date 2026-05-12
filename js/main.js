const API_URL = "http://api.phober.test";

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


    // ====== API integration ======
    var flickityArrow = { x0: 20, x1: 55, y1: 35, x2: 60, y2: 35, x3: 25 };

    function mediaUrl(rel) {
        if (!rel) return '';
        if (/^https?:\/\//i.test(rel)) return rel;
        return API_URL + (rel.charAt(0) === '/' ? '' : '/') + rel;
    }

    function renderDevices(devices) {
        var $container = $('.offers.carousel');
        if (!$container.length || !devices || !devices.length) return;
        try { $container.flickity('destroy'); } catch (e) {}
        $container.empty();
        devices.forEach(function (d, i) {
            var idx = (i % 4) + 1;
            var $cell = $(
                '<div class="carousel-cell item" style="background: url(\'./img/' + idx + '.jpg\')">' +
                    '<div class="device" style="background: url(\'./img/Untitled-' + idx + '.png\');"></div>' +
                    '<div class="content"><h1></h1><p></p></div>' +
                '</div>'
            );
            $cell.find('h1').text(d.name || '');
            $cell.find('p').text((d.type || '') + ' VR sistemi.');
            $container.append($cell);
        });
        $container.flickity({
            pageDots: false,
            prevNextButtons: true,
            cellAlign: 'left',
            contain: true,
            arrowShape: flickityArrow
        });
    }

    function renderGames(games) {
        var $ul = $('.games > ul');
        if (!$ul.length || !games || !games.length) return;
        $ul.empty();
        games.forEach(function (g) {
            var preview = mediaUrl(g.preview) || './img/batmanarkhamvranalisis.jpg';
            var $li = $(
                '<li>' +
                    '<a class="link">' +
                        '<div class="bgr"></div>' +
                        '<div class="cont"><h1></h1><p></p></div>' +
                        '<span class="more">Ətraflı</span>' +
                    '</a>' +
                '</li>'
            );
            $li.find('a.link').attr('href', '/game.html?id=' + encodeURIComponent(g.id));
            $li.find('.bgr').css('background', "url('" + preview + "') center/cover no-repeat");
            $li.find('h1').text(g.name || '');
            $li.find('p').text(g.description || '');
            $ul.append($li);
        });
    }

    function renderTariffPlans(plans, devices) {
        var $container = $('.prices.prices-slider.carousel');
        if (!$container.length || !plans || !plans.length) return;
        try { $container.flickity('destroy'); } catch (e) {}
        $container.empty();

        var byDevice = {};
        plans.forEach(function (p) {
            (byDevice[p.device] = byDevice[p.device] || []).push(p);
        });

        var deviceMap = {};
        (devices || []).forEach(function (d) { deviceMap[d.type] = d; });

        Object.keys(byDevice).forEach(function (devKey) {
            var device = deviceMap[devKey] || { name: devKey, type: devKey };
            var items = byDevice[devKey];
            var $cell = $(
                '<div class="carousel-cell single-photo">' +
                    '<div class="gray-bgr"></div>' +
                    '<div class="purple-bgr main-container">' +
                        '<div class="pics"><div class="single-img"><img src="./img/425.png" alt=""></div></div>' +
                        '<div class="cont">' +
                            '<h1></h1>' +
                            '<p class="p"></p>' +
                            '<div class="price-items"><ul></ul></div>' +
                            '<div class="text-right"><a href="#section6" class="price-reserve">Rezervasiya</a></div>' +
                        '</div>' +
                    '</div>' +
                '</div>'
            );
            $cell.find('h1').text(device.name || devKey);
            $cell.find('.cont > .p').text((device.type || devKey) + ' üçün tariflər');
            var $ul = $cell.find('.price-items ul');
            items.forEach(function (it) {
                var minutes = (it.time || '').replace('MIN_', '') + ' dəq.';
                var tariff = it.tariff === 'MORNING' ? 'Səhər' : (it.tariff === 'EVENING' ? 'Axşam' : it.tariff);
                $ul.append(
                    '<li>' +
                        '<span class="price">' + it.price + ' <sup>azn</sup></span>' +
                        '<span class="descr"><p>' + tariff + '</p><i>' + minutes + '</i></span>' +
                    '</li>'
                );
            });
            $container.append($cell);
        });

        $container.flickity({
            pageDots: false,
            prevNextButtons: true,
            arrowShape: flickityArrow
        });
    }

    function renderPosts(posts) {
        var $container = $('.blog-slider');
        if (!$container.length || !posts || !posts.length) return;
        try { $container.flickity('destroy'); } catch (e) {}
        $container.empty();
        posts.forEach(function (p) {
            var preview = mediaUrl(p.preview || p.image);
            var $cell = $(
                '<div class="carousel-cell">' +
                    '<div class="abs-bgr"></div>' +
                    '<div class="bgr-right"><div class="cont">' +
                        '<h1></h1>' +
                        '<h3></h3>' +
                        '<p></p>' +
                        '<div><a href="#" class="more">Daha ətraflı</a></div>' +
                    '</div></div>' +
                '</div>'
            );
            if (preview) {
                $cell.find('.abs-bgr').css('background', "url('" + preview + "') center/cover no-repeat");
            }
            $cell.find('h1').text(String(p.title || '').toUpperCase());
            $cell.find('h3').text(p.subtitle || p.category || '');
            $cell.find('.cont > p').text(p.excerpt || p.description || '');
            $container.append($cell);
        });
        $container.flickity({
            pageDots: false,
            prevNextButtons: false,
            wrapAround: posts.length > 1
        });
    }

    function apiGet(path) {
        return $.ajax({ url: API_URL + path, method: 'GET', dataType: 'json' });
    }

    function extract(payload) {
        if (!payload) return [];
        if (Array.isArray(payload)) return payload;
        if (Array.isArray(payload.data)) return payload.data;
        return [];
    }

    $.when(
        apiGet('/hardware/devices'),
        apiGet('/hardware/games?size=12&page=1'),
        apiGet('/hardware/tariff-plans'),
        apiGet('/hardware/posts?size=4&page=1')
    ).done(function (devicesRes, gamesRes, plansRes, postsRes) {
        var devices = extract(devicesRes && devicesRes[0]);
        var games   = extract(gamesRes   && gamesRes[0]);
        var plans   = extract(plansRes   && plansRes[0]);
        var posts   = extract(postsRes   && postsRes[0]);

        renderDevices(devices);
        renderGames(games);
        renderTariffPlans(plans, devices);
        renderPosts(posts);
    }).fail(function (xhr) {
        if (window.console) {
            console.error('API request failed:', xhr && xhr.status, xhr && xhr.statusText, 'API_URL=' + API_URL);
        }
    });
})(jQuery)