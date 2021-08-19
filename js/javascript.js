/*global $, document, window, Clipboard*/

$(document).ready(function () {
    "use strict";
    //DEFILEMENT SMOOTH SUR LIENS
    $("a").click(function () {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: ($(hash).offset().top - 150)
            }, 700, function () {
                window.location.hash = hash;
                $('.side-menu').removeClass('off-nav-mod');
                $('.hidden').fadeOut();
                $('body').css({
                    overflow: 'auto'
                });
                $('nav').fadeIn();
            });
        }
    });


    //SWIPE MENU
    function isMobile() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    }
    if (isMobile() === true) {
        $("body").swipe({
            swipeStatus: function (event, phase, direction, distance) {
                if (distance > 100 && direction === "left") {
                    $(".side-menu").addClass("off-nav-mod");
                    $('.hidden').fadeIn();
                    $('nav').fadeOut();
                    $('body').css({
                        overflow: 'hidden'
                    });
                    return false;
                }
                if (distance > 50 && direction === "right") {
                    $(".side-menu").removeClass("off-nav-mod");
                    $('.hidden').fadeOut();
                    $('nav').fadeIn();
                    $('body').css({
                        overflow: 'auto'
                    });
                    return false;
                }
            },
            threshold: 100,
            cancelThreshold: 10
        });
    }

    //OUVRE MENU BURGER
    $('.burger').click(function () {
        $('.hidden').fadeIn();
        $('.side-menu').addClass('off-nav-mod');
        $('nav').fadeOut();
        $('body').css({
            overflow: 'hidden'
        });
    });

    //FERME MENU BURGER CLIC FERMER
    $('.close').click(function () {
        $('.side-menu').removeClass('off-nav-mod');
        $('.hidden').fadeOut();
        $('nav').fadeIn();
        $('body').css({
            overflow: 'auto'
        });
    });

    //FERME MENU BURGER CLIC N'IMPORTE OU
    $('.hidden').click(function () {
        $('.side-menu').removeClass('off-nav-mod');
        $('.hidden').fadeOut();
        $('nav').fadeIn();
        $('body').css({
            overflow: 'auto'
        });
    });


    $(window).scroll(function () {
        var posScroll = $(document).scrollTop();
        //APPARITION/DISPARITION NAV
        if (posScroll >= ($('#about').position().top - 300)) {
            $('nav').css({
                position: 'fixed',
                animation: 'animnav1 0.2s',
                background: '#323232',
                height: '50px'
            });
            $('h1').css({
                lineHeight: '15px',
                fontSize: '18px'
            });
            $('h1 span').css({
                fontSize: '13px'
            });
            $('.right-nav').css({
                top: '0'
            });
            $('.right-nav a').css({
                fontSize: '14px',
                color: '#f0f0f0'
            });
            $('.right-nav a hr').css({
                margin: '1px'
            });
            $('.burger').css({
                top: '15px'
            });
        } else {
            $('nav').css({
                position: 'absolute',
                animation: 'none',
                background: "transparent",
                height: '80px'
            });
            $('h1').css({
                lineHeight: '20px',
                fontSize: '21px'
            });
            $('h1 span').css({
                fontSize: '14px'
            });
            $('.right-nav').css({
                top: '0'
            });
            $('.right-nav a').css({
                fontSize: '15px',
                color: '#fff'
            });
            $('.right-nav a hr').css({
                margin: '2px'
            });
            $('.burger').css({
                top: '25px'
            });
        }
        //APPARITION/DISPARITION DU LIEN VERS HAUT
        if (posScroll >= 550) {
            $('.totop').css('opacity', '1');
        } else {
            $('.totop').css('opacity', '0');
        }
    });

    //OUVRE CV ET REMPLACE A PROPOS PAR CV
    $('.mon-cv-link').click(function () {
        $('.prop').fadeOut(function () {
            $('.curri').fadeIn(function () {});
            $('.curri').css({
                display: 'flex'
            });
        });
        $('.h3-1').fadeOut(function () {
            $('.h3-2').fadeIn();
            $('.download-cv').fadeIn();
        });
        $('.prop-mobile').fadeOut(function () {
            $('.curri-mobile').fadeIn();
        });
        $('.mon-cv').addClass('mon-cv-mod');
        //REMONTE LA DIV A PROPOS EN OUVRAN CV
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: ($('#about').offset().top - 150)
        }, 400, function () {
            window.location.hash = hash;
            $('.side-menu').removeClass('off-nav-mod');
        });
    });

    //FERME LE CV ET REMPLACE CV PAR A PROPOS
    $('.about-link').click(function () {
        $('.mon-cv').removeClass('mon-cv-mod');
        $('.curri').fadeOut(function () {
            $('.prop').fadeIn();
        });
        $('.download-cv').fadeOut();
        $('.h3-2').fadeOut(function () {
            $('.h3-1').fadeIn();
        });
        $('.curri-mobile').fadeOut(function () {
            $('.prop-mobile').fadeIn();
        });
        toggle(".front", ".front-des");
        toggle(".adobe", ".adobe-des");
        toggle(".francais", ".fr-des");
        toggle(".anglais", ".en-des");
    });

    //FONCTION TOGGLE LES DESCRIPTIONS
    function toggle(a, b) {
        $(a).css({
            animation: 'none'
        });
        $(b).fadeOut(200, function () {
            $(a).fadeIn();
        });
    }

    //FONCTION AFFICHER LES DESCRIPTIONS
    function comp(a, b){
        $(a).css({
            animation: 'animcomp 0.3s ease-in-out'
        });
        $(a).fadeOut(200, function () {
            $(b).fadeIn().css({
                display: 'flex',
                animation: 'animdes 0.3s ease-in-out'
            });
        });
    }
    
    //FONCTION MASQUER LES DESCRIPTIONS
    function des(a, b){
        $(b).css({
            animation: 'none'
        });
        $(a).fadeOut(200, function () {
            $(b).fadeIn();
        });
    }

    //APPARITION DESCRIPTION COMPETENCES
    $('.front').click(function () {
        comp(".front", ".front-des");
        toggle(".adobe", ".adobe-des");
        toggle(".francais", ".fr-des");
        toggle(".anglais", ".en-des");
    });
    $('.front-des').click(function () {
        des(".front-des", ".front");
    });
    $('.adobe').click(function () {
        comp(".adobe", ".adobe-des");
        toggle(".front", ".front-des");
        toggle(".francais", ".fr-des");
        toggle(".anglais", ".en-des");
    });
    $('.adobe-des').click(function () {
        des(".adobe-des", ".adobe");
    });
    $('.francais').click(function () {
        comp(".francais", ".fr-des");
        toggle(".front", ".front-des");
        toggle(".adobe", ".adobe-des");
        toggle(".anglais", ".en-des");
    });
    $('.fr-des').click(function () {
        des(".fr-des", ".francais");
    });
    $('.anglais').click(function () {
        comp(".anglais", ".en-des");
        toggle(".front", ".front-des");
        toggle(".francais", ".fr-des");
        toggle(".adobe", ".adobe-des");
    });
    $('.en-des').click(function () {
        des(".en-des", ".anglais");
    });


    //COPIE ADRESSE MAIL DANS CLIPBOARD ET FADEOUT
    var clipboard = new Clipboard('.mail-select');
    clipboard.on('success', function (e) {
        $('.mail-modal').fadeIn(200);
        $('.mail-modal').delay(2500).fadeOut();
        $('.mail-infos').fadeOut(200, function () {
            $('.mail p').eq(0).fadeIn();
        });
        e.clearSelection();
    });

    //AFFICHE OPTIONS MAIL CLIC IMAGE
    $('.mail-infos div a').click(function () {
        $('.mail-infos').fadeOut(200, function () {
            $('.mail p').eq(0).fadeIn();
        });
    });
    $('.mail img').click(function () {
        if ($('.mail p').eq(0).css("display") === "none") {
            $('.mail-infos').fadeOut(200, function () {
                $('.mail p').eq(0).fadeIn();
            });
        } else {
            $('.mail p').eq(0).fadeOut(200, function () {
                $('.mail-infos').fadeIn();
                $('.mail-infos div').css({animation: "animmailinfos 0.4s 0.2s backwards"})
            });
        }
    });
});
