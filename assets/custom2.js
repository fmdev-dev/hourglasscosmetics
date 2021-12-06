    // Start: Show on Map button display 



    jQuery(document).ready(function(e) {
        jQuery(".qty-plus").click(function(e) {
            e.preventDefault();
            var currentVal = parseInt(jQuery(this).prev("#Quantity").val());
            if (!currentVal || currentVal == "" || currentVal == "NaN") {
                currentVal = 1;
            }
            jQuery(this).prev("#Quantity").val(currentVal + 1);
        });
        jQuery(".qty-minus").click(function(e) {
            e.preventDefault();
            var currentVal = parseInt(jQuery(this).next("#Quantity").val());
            if (currentVal == "NaN") currentVal = 1;
            if (currentVal > 1) {
                jQuery(this).next("#Quantity").val(currentVal - 1);
            }
        });
    });


    jQuery(document).ready(function(e) {

        jQuery('.colorsltShare').click(function() {
            jQuery('.more-options .color-pallets-wrap').stop().slideUp()
            jQuery(this).next().stop().slideToggle();
        });

        // Color Palette On Click
        jQuery(document).on('click', '.color-palette a', function() {

            jQuery('.color-pallets-wrap').slideUp();
            $listimg = $(this).find('img').attr('src')
            $listtxt = $(this).data('title');

            /*simple Load*/
            $varientid = $(this).data('id');
            $waitsrc = jQuery('#mydiv').data('url');
            $waitsrc = $waitsrc + '/' + $varientid;
            waitlistingframe($waitsrc);

            $('#varID').val($varientid);

            if ($(this).data('available') == 0) {
                jQuery('#mydiv').removeClass('disnon');
            } else {
                jQuery('#mydiv').addClass('disnon');
            }
            /*endsimple Load*/

            var select = document.querySelector('.single-option-Color');
            select.value = $listtxt;
            select.dispatchEvent(new Event('change'));

            jQuery('#dynamicimgsrc').attr('src', $listimg);
            jQuery('#colorselect >span').text($listtxt);

            if ($('img[alt="' + $listtxt + '"]').length > 0) {
                jQuery('.gird-sid > .grid__item').css("display", "none");

                jQuery('img[alt="' + $listtxt + '"]').parent().parent('li').css("display", "block");
                jQuery('img[alt="' + $listtxt + '"]').parent().css("display", "block");
                $("#zoomresult").attr('data-text', $listtxt);
            }
        });

        function waitlistingframe($waitsrc) {
            $('#mydiv').attr('data-src', '');
            $('#mydiv').attr('data-src', $waitsrc);
            //console.log($waitsrc);
            $('#mydiv').load($waitsrc, function(response, status, xhr) {
                if (status == "error") {
                    var msg = "Sorry but there was an error: ";
                    console.log(msg + xhr.status + " " + xhr.statusText);
                }
            });
        }

        // For Color Select Option
        jQuery('.single-option-Color option').each(
            function() {
                //$image = $('.grid__item:has(img[alt="'+$(this).val()+'"])');
                $image_url = $('img[alt="' + $(this).val() + '-color"]').attr('src');
                $noimage = '';
                if (typeof $image_url === 'undefined') {
                    $noimage = 'noimage';
                }
                $outtext = '';
                $available = 1;
                if ($(this).data('instock') == '0') {
                    $outtext = '<strong>OUT OF STOCK | </strong>';
                    $available = 0;
                }
                $varid = $(this).data('id');
                $('.color-pallets-wrap').append('<div class="color-palette palette ' + $noimage + '"><a href="javascript:void(0)" data-title="' + $(this).val() + '" data-available="' + $available + '" data-id="' + $varid + '"><img src="' + $image_url + '" alt="Product Color" /><span class="shades_label_overlay">' + $outtext + '' + $(this).text() + '</span></a></div>');
            });

        // For shade 1 Select Option
        jQuery('.single-option-shade-1 option').each(
            function() {
                $image_url = $('img[alt="' + $(this).val() + '-shade-1"]').attr('src');
                $noimage = '';
                if (typeof $image_url === 'undefined') {
                    $noimage = 'noimage';
                }
                $varid = $(this).data('productid');
                $('.shade-1-pallets-wrap').append('<div class="shade-1-palette palette ' + $noimage + '"><a href="javascript:void(0)" data-title="' + $(this).val() + '" data-productid="' + $varid + '"><img src="' + $image_url + '" alt="Product Shade 1" /><span class="shades_label_overlay">' + $(this).text() + '</span></a></div>');
            });

        // For shade 2 Select Option
        jQuery('.single-option-shade-2 option').each(
            function() {
                $image_url = $('img[alt="' + $(this).val() + '-shade-2"]').attr('src');
                $noimage = '';
                if (typeof $image_url === 'undefined') {
                    $noimage = 'noimage';
                }
                $varid = $(this).data('productid');
                $('.shade-2-pallets-wrap').append('<div class="shade-2-palette palette ' + $noimage + '"><a href="javascript:void(0)" data-title="' + $(this).val() + '" data-productid="' + $varid + '"><img src="' + $image_url + '" alt="Product Shade 2" /><span class="shades_label_overlay">' + $(this).text() + '</span></a></div>');
            });

        // For shade 3 Select Option
        jQuery('.single-option-shade-3 option').each(
            function() {
                $image_url = $('img[alt="' + $(this).val() + '-shade-3"]').attr('src');
                $noimage = '';
                if (typeof $image_url === 'undefined') {
                    $noimage = 'noimage';
                }
                $varid = $(this).data('productid');
                $('.shade-3-pallets-wrap').append('<div class="shade-3-palette palette ' + $noimage + '"><a href="javascript:void(0)" data-title="' + $(this).val() + '" data-productid="' + $varid + '"><img src="' + $image_url + '" alt="Product Shade 3" /><span class="shades_label_overlay">' + $(this).text() + '</span></a></div>');
            });

        // Js Start for custom Pallet option for set properties   
        // For shade 1 Select Option
        jQuery('.single-option-shade11 option').each(
            function() {
                $image_url = $('img[alt="' + $(this).val() + '-shade-1"]').attr('src');
                $noimage = '';
                if (typeof $image_url === 'undefined') {
                    $noimage = 'noimage';
                }
                $varid = $(this).data('productid');
                $('.shade-11-pallets-wrap').append('<div class="shade-11-palette palette ' + $noimage + '"><a href="javascript:void(0)" data-title="' + $(this).val() + '" data-productid="' + $varid + '"><img src="' + $image_url + '" alt="Product Shade 11" /><span class="shades_label_overlay">' + $(this).text() + '</span></a></div>');
            });

        // For shade 2 Select Option
        jQuery('.single-option-shade21 option').each(
            function() {
                $image_url = $('img[alt="' + $(this).val() + '-shade-2"]').attr('src');
                $noimage = '';
                if (typeof $image_url === 'undefined') {
                    $noimage = 'noimage';
                }
                $varid = $(this).data('productid');
                $('.shade-21-pallets-wrap').append('<div class="shade-21-palette palette ' + $noimage + '"><a href="javascript:void(0)" data-title="' + $(this).val() + '" data-productid="' + $varid + '"><img src="' + $image_url + '" alt="Product Shade 21" /><span class="shades_label_overlay">' + $(this).text() + '</span></a></div>');
            });

        // For shade 3 Select Option
        jQuery('.single-option-shade31 option').each(
            function() {
                $image_url = $('img[alt="' + $(this).val() + '-shade-3"]').attr('src');
                $noimage = '';
                if (typeof $image_url === 'undefined') {
                    $noimage = 'noimage';
                }
                $varid = $(this).data('productid');
                $('.shade-31-pallets-wrap').append('<div class="shade-31-palette palette ' + $noimage + '"><a href="javascript:void(0)" data-title="' + $(this).val() + '" data-productid="' + $varid + '"><img src="' + $image_url + '" alt="Product Shade 31" /><span class="shades_label_overlay">' + $(this).text() + '</span></a></div>');
            });

        // End js Start for custom Pallet option for set properties       
        jQuery(document).on('click', '.variant_image', function() {
            $imgurl = $(this).data('imgurl');
            $imgsec = $(this).data('sectionid');
            $imgwidths = $(this).data('widths');
            if ($imgurl !== "undefined") {
                $imgurl_main = $imgurl
                $varray = [];
                // For secret
                jQuery.each($imgwidths, function(i, val) {
                    $imgstr = $imgurl.replace("300x300", val + 'x');
                    $imgstr = $imgstr + ' ' + val + 'w';
                    $varray.push($imgstr);
                });
                jQuery('img#ProductCardImage-' + $imgsec).attr('src', $imgurl);
                jQuery('img#ProductCardImage-' + $imgsec).attr('srcset', $varray.toString());
            }
            $varUrl = $(this).data('url') + '?variant=' + $(this).data('id');
            $(this).parent().prev('a').attr('href', $varUrl);
            $(this).closest(".grid-view-item").find('a.grid-view-item__link').attr('href', $varUrl);
        });
    });

    jQuery(document).ready(function(e) {
        /***Forgot Password***/
        jQuery('#RecoverPassword').click(function() {
            jQuery('body').addClass('account-forgotpassword');
            jQuery('#RecoverPasswordForm, #CustomerLoginForm').removeClass('hide');
        });

        if (jQuery(window.location.hash).length > 0 && jQuery(window.location.hash).attr('id') == 'crueltyfreeluxurybeauty') {
            jQuery('html, body').animate({ scrollTop: jQuery(window.location.hash).offset().top - 50 });
        };

        /***Page loader ***/
        jQuery(window).load(function(e) {
            jQuery('.loader-wrap').addClass('desabled');
            jQuery('.snize-no-products-found').closest('body').addClass('snize-no-p-found-body');
        });
        setTimeout(function() {
            jQuery("span:contains(Powered by)").addClass('powered-with');
        }, 7000);
        jQuery('.right-shade-pallet .palette a > img').on('click', function() {
            jQuery('.shade-pallet-main').show();
            jQuery('.product-single__photo-wrapper').hide();
        });
        jQuery('.shade-pallet .productsingle-thumbnails li a').on('click', function() {
            jQuery('.shade-pallet-main').hide();
            jQuery('.product-single__photo-wrapper').show();
        });
        jQuery('.search-btn').click(function() {
            jQuery('.search__input').focus()
        });
    });

    // Use jQuery(document).ready() because Magento executes Prototype inline
    jQuery(document).ready(function() {
        jQuery('.top-image').click(function() {
            jQuery(this).addClass('hide_content');
            var currentSrc = jQuery('#youtubevidid').attr("src") + "&autoplay=1&loop=1";
            jQuery('#youtubevidid').attr("src", currentSrc);
        });
    });

    jQuery(window).resize(function() {
            if (jQuery(window).width() < 1000) {
                function checkOffset() {
                    jQuery('.favorite-share-main').appendTo('.pdt-info-share-favi');
                    if (window.matchMedia("(max-width: 1024px)").matches) {
                        if (jQuery('.product.info .product-form-product-template').offset().top + jQuery('.product.info .product-form-product-template').height() >= jQuery('.sticky-addtocart').offset().top - 10) {
                            jQuery('.product.info .product-form-product-template').css({ 'position': 'absolute', 'bottom': '160px', 'padding-left': '20px', 'padding-right': '20px' });

                        }
                        if (jQuery(document).scrollTop() + window.innerHeight < jQuery('.sticky-addtocart').offset().top) {
                            jQuery('.product.info .product-form-product-template').css({ 'position': 'fixed', 'bottom': '0px', 'padding-left': '0', 'padding-right': '0' });
                            jQuery('.product.info .product-form-product-template').addClass('add-to-cart-fixed');
                        } else {
                            jQuery('.product.info .product-form-product-template').removeClass('add-to-cart-fixed');
                        }
                    }
                }
                jQuery(document).scroll(function() {
                    checkOffset();
                });
            }
            jQuery(window).trigger('resize')
        })
        // Use $j(document).ready() because Magento executes Prototype inline
    jQuery(document).ready(function() {
        jQuery('.top-image').click(function() {
            jQuery(this).addClass('hide_content');
            var currentSrc = jQuery('#youtubevidid').attr("src") + "&autoplay=1&loop=1";
            jQuery('#youtubevidid').attr("src", currentSrc);
        });
        jQuery('.video-left-div').click(function() {

            jQuery(this).addClass('show_video');
            var currentSrc = jQuery('#caution-video').attr("src") + "&autoplay=1&loop=1";
            jQuery('#caution-video').attr("src", currentSrc);
        });
        jQuery(window).trigger('resize');
        jQuery('#shade-tab .color-shade').click(function() {
                jQuery('#shade-tab .color-shade').removeClass('active');
                jQuery(this).addClass('active');
            })
            /**Mobile Search Bar**/
        jQuery('.search-header .search-header__input').click(function() {
            jQuery('#shopify-section-header').removeAttr('tabindex');
            jQuery('.js-mobile-nav-toggle').removeClass('mobile-nav--close');
            jQuery('.js-mobile-nav-toggle').addClass('mobile-nav--open');
            jQuery('button.js-mobile-nav-toggle').removeClass('mobile-nav--open');
            jQuery('nav.mobile-nav-wrapper').removeClass('js-menu--is-open');
        });
        jQuery('.snize-input-style').val('');
        jQuery(document).on('click', '.snize-close-button-arrow, .search-header .search-header__input', function() {
            //      jQuery('.js-mobile-nav-toggle').removeClass('mobile-nav--close');
            jQuery('.snize-input-style').val('');

        });
        jQuery('.search-header .search-header__input').focus(function(e) {
            jQuery('button.js-mobile-nav-toggle').removeClass('mobile-nav--open');
            jQuery('nav.mobile-nav-wrapper').removeClass('js-menu--is-open');
            jQuery('.snize-ac-results').find('.snize-input-style').val('');
            setTimeout(function() {
                jQuery('.snize-ac-results').find('.snize-input-style').focus();
                jQuery('.snize-ac-results').find('.snize-input-style').val('');
            }, 3000);
        });
        jQuery(document).on('click', '.buttons-joinwaitlist', function() {
            setTimeout(function() {
                jQuery('.ra-quickshop-template .ra-product').animate({
                    scrollTop: jQuery('.out-of-stock').offset().top + 200
                }, 3000);
                jQuery(document).scrollTop(jQuery(".ra-quickshop-template .ra-product").offset().top + 150);
            }, 10);
        });
        jQuery(document).on('click', '.add-to-cart-buttons', function() {
            setTimeout(function() {
                jQuery('.ra-quickshop-template .ra-product').animate({
                    scrollTop: jQuery('.out-of-stock').offset().top + 200
                }, 3000);
                jQuery(document).scrollTop(jQuery(".ra-quickshop-template .ra-product").offset().top + 150);
            }, 10);
        });
    });
    /***Product Vanish***/
    jQuery(".banner-right-content a[href='#feature-section']").click(function() {
        jQuery('html,body').animate({
                scrollTop: jQuery("#feature-section").offset().top - 63
            },
            'slow');
    });
    jQuery(".banner-right-content a[href='#catalog-section'], .caution-product-caption a[href='#catalog-section']").click(function() {
        jQuery('html,body').animate({
                scrollTop: jQuery("#catalog-section").offset().top - 63
            },
            'slow');
    });
    jQuery(".caution-product-caption a[href='#video_caution']").click(function() {
        jQuery('html,body').animate({
                scrollTop: jQuery("#video_caution").offset().top - 63
            },
            'slow');
    });
    /***Locate Store Start***/
    jQuery(document).ready(function() {
        setTimeout(function() {
            jQuery('.stockist-result-list').appendTo('.locatorlist-dtl');
            jQuery('#show-more-div').show();
        }, 2000);
        setTimeout(function() {

            jQuery(".stockist-search-button button").on('click', function(e) {
                jQuery('#show-more-div').hide()
            });
        }, 3000);

        /**Data Load More Start**/
        setTimeout(function() {
            var morebox = jQuery('.stockist-result').length;
            jQuery(".stockist-result").slice(0, 8).show(function() {});
            jQuery(".stockist-result").slice(8, morebox).hide();
            if (jQuery(".stockist-result:hidden").length != 0) {
                jQuery("#show-more-ajax").show();
            }
            jQuery("#show-more-ajax").on('click', function(e) {
                jQuery('.spinerloaddata').addClass('sloaddata-show');
                setTimeout(function() {
                    jQuery('.spinerloaddata').removeClass('sloaddata-show');
                }, 400);
                e.preventDefault();
                jQuery(".stockist-result:hidden").slice(0, 8).show();
                if (jQuery(".stockist-result:hidden").length == 0) {
                    $("#show-more-ajax").fadeOut('slow');
                }
            });
        }, 2000);

        /**Data Load More End**/
        // Replace a tag link from wishlist page
        jQuery("a.flits-btn").attr("href", "https://www.hourglasscosmetics.com/collections/makeup");
        jQuery('.flits-order-details-value:contains("W")').parents('.flits-order-row').addClass('orderrow-custom');
        /**Bundle Code**/
        setTimeout(function() {
            jQuery(document).on('click', '.mobile-product-detail-show', function() {
                jQuery('.mobile-product-detail-show span').toggleClass('active');
                jQuery('.product-bundle .accordion-container').slideToggle();
            })
            jQuery('#header .site-nav li a[aria-label="About"]').parents('.buddha-menu-item').addClass('about-custom-drowdown');
        }, 1000);

        jQuery('.ourmission-video').click(function() {
            jQuery(this).addClass('hide_content');
            var currentSrc = jQuery('#youtubevidid').attr("src") + "&autoplay=1&loop=1";
            jQuery('#youtubevidid').attr("src", currentSrc);
        });

        jQuery('.howtoplay-item').click(function() {
            jQuery(this).addClass('hide_content');
            var currentSrc = jQuery(this).find('.youtubevidid').attr("src") + "?autoplay=1&loop=1";
            jQuery(this).find('.youtubevidid').attr("src", currentSrc);
        });


    });