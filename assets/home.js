    // Sticky Header JS
    jQuery(window).scroll(function() {
        //theme.raQuickshop.refresh();
        // add 'sticky-header' class to the body tag when the header top is scrolled out of view
        jQuery('#header').toggleClass('sticky-header', jQuery(this).scrollTop() > 10);
        jQuery('body').toggleClass('sticky-content', jQuery(this).scrollTop() > 10);
      	jQuery('.body-wishlist-banner #header').toggleClass('sticky-header', jQuery(this).scrollTop() > 143);
        jQuery('.body-wishlist-banner').toggleClass('sticky-content', jQuery(this).scrollTop() > 143);
        jQuery(window).trigger("scroll");
    });

    $(".buddha-menu-item >.mm-submenu").wrapInner("<li class='mm-submenulist'><ul></ul></li>");
    /* ====== backtotop ====== */
    jQuery(".backtotop").click(function() {
        jQuery('html, body').animate({ scrollTop: 0 }, 800, 'linear');
    });

    jQuery(function() {
        jQuery('#section-bullet a[href*="#"]:not([href="#"])').click(function(e) {
          	var sec_height = 64;
            
            /* RHW GIFT LIST LANDING PAGE */
            var sid = $(this).attr('id');
          	if(sid=="anchorbullet-2") { sec_height = 0; }
            
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    jQuery('html, body').animate({
                        scrollTop: target.offset().top - sec_height
                    }, 1000);
                    return false;
                }
            }
            e.preventDefault();
        });

    });

    jQuery(document).ready(function(e) {

        jQuery('.search-btn').click(function() {
            jQuery('.search-header').addClass('active skip-active');

        });
        jQuery(document).on('click', '.closesearch', function() {
            jQuery('.search-header').removeClass('active skip-active');
        });
        jQuery(".search-header").append("<span class='closesearch'></span>");
    });

    /**Custom Cart Code**/

    jQuery(document).ready(function() {
        jQuery(window).resize(function() {
            jQuery('.site-header__cart').on('click', function(e) {
                e.preventDefault();
                jQuery('.mini-cart').addClass('skip-active');
                jQuery('.overlay-wrap').addClass('active');
                jQuery('body').stop().addClass('cartbody');
            });
        });
        jQuery(window).trigger("resize");
    });


    jQuery(document).on('click', '.skip-link-close', function() {
        jQuery('.site-header__cart').removeClass('skip-active');
        jQuery('.mini-cart').removeClass('skip-active');
        jQuery('.overlay-wrap').removeClass('active');
        jQuery('body').removeClass('cartbody');
    });

    jQuery('.overlay-wrap').click(function() {
        jQuery('.site-header__cart').removeClass('skip-active');
        jQuery('.mini-cart').removeClass('skip-active');
        jQuery(this).removeClass('active');
    });

    /**Cart Update Item**/
    jQuery(document).ready(function(e) {

        // For Listing page quickview
        var quickViewListing = localStorage['quick-view-listing'];
        if (quickViewListing == "yes") {
            jQuery('.mini-cart').delay('1000').addClass('skip-active');
            jQuery('.overlay-wrap').delay('1000').addClass('active');
            localStorage['quick-view-listing'] = "";
        }
        setTimeout(function() {
            jQuery('.mini-cart').delay('1000').removeClass('skip-active');
            jQuery('.overlay-wrap').delay('1000').removeClass('active');
        }, 5000);

        jQuery(document).on('click', '.qty-edititem-removeitem .cart-item-quantity', function(e) {
            jQuery(this).next('.quantity-button').fadeIn();
            e.stopPropagation();
        });
        jQuery(document).on('click', '.quantity-button', function() {
            jQuery(this).fadeOut();
        });
        jQuery(document).on('click', '.cart-sidebar', function() {
            jQuery('.quantity-button').fadeOut();
        });

        $uscore = _;
        $theme = window.theme;

        function updateminicart(data) {
            var template = $("#minicart-template").html();
            var tmpl = $variable.template(template);
            //console.log(data);
            // populate cart data
            $(".mini-cart").html(tmpl({ cart: data }));

            // format all prices
            $('.price', '.mini-cart').each(function() {
                //$(this).html($(this).text());
                $(this).html($theme.Currency.formatMoney(parseInt($(this).text())));
            });

            // format image to small
            $('img', '.mini-cart').each(function() {
                var src = $(this).attr('src');
                src = src.replace('.jpg', '_78x78.jpg'); // if using jpg
                src = src.replace('.jpeg', '_78x78.jpeg'); // if using jpeg
                $(this).attr('src', src);
            });

            $('.mini-cart').show();
        }


        jQuery(document).on('click', '.quntbtn', function() {
            $(".mini-cart").addClass("loading");
            $line = $(this).data('line');
            $quantity = $(this).prev('input').val();
            var data11 = {
                line: $line,
                quantity: $quantity
            };

            var myjon = 0;
            $.ajax({
                async: false,
                type: 'GET',
                url: '/cart.js',
                dataType: 'json',
                success: function(data) {
                    $.each(data.items, function(k, v) {
                        $vquty = $quantity;
                        console.log($vquty);
                        if (parseInt($vquty) > 4) {
                            myjon = 1;
                        }
                    });
                }
            });

            if (myjon == 1) {
                $("#minicart-success-message").remove();
                $('.Clsmin').after('<div id="minicart-success-message" class="minicart-message">THE MAXIMUM QUANTITY ALLOWED FOR PURCHASE IS 4.</div>');
                $('.mini-cart').removeClass("loading");
            } else {
                jQuery.ajax({
                    type: 'post',
                    url: '/cart/change.js',
                    data: data11,
                    success: function(data) {
                        updateminicart(data);
                        $varFlag = 0;
                        if (data.item_count <= 0) {
                            $('.site-header__cart-count').addClass('custom-hiden');
                        } else {
                            $('.site-header__cart-count').removeClass('custom-hiden');
                            $.each(data.items, function(index, value) {
                                //alert( index + ": " + value.quantity);
                                $vline = index + 1;
                                if ($line == $vline && value.quantity < $quantity) {
                                    $varFlag = 1;
                                    $('.mini-out-of-stock').eq(index).html("<strong>There is insufficient stock for this item</strong>");
                                }
                            });
                        }
                        $('#CartCount span').text(data.item_count);
                        $('.desktop-cart-count span').text(data.item_count);
                        $("#minicart-success-message").remove();
                        if ($varFlag == 1) {
                            $('.Clsmin').after('<div id="minicart-success-message" class="minicart-message">Item have insufficient stock.</div>');
                        } else {
                            $('.Clsmin').after('<div id="minicart-success-message" class="minicart-message">Item was updated successfully.</div>');
                        }
                        $('.mini-cart').removeClass("loading");
                    },
                    fail: function() {
                        alert('request fail..');
                    },
                    dataType: 'json'
                });
            }
        });

        jQuery(document).on('click', '.rembtn11', function() {
            $(".mini-cart").addClass("loading");
            $line = $(this).data('line');
            var data11 = {
                line: $line,
                quantity: 0
            };

            var dataCart = jQuery.parseJSON(
                $.ajax({
                    url: '/cart.js',
                    dataType: "json",
                    async: false
                }).responseText);
            var cartItem = $line - 1;
            var removedItem = dataCart.items[cartItem];
            var varprice = $theme.Currency.formatMoney(parseInt(removedItem.price));
            varprice = varprice.substring(1, varprice.length);

            window.dataLayer.push({
                "event": "removeFromCart",
                "ecommerce": {
                    "remove": {
                        "products": [{
                            "position": cartItem,
                            "id": removedItem.sku,
                            "name": removedItem.product_title,
                            "quantity": removedItem.quantity,
                            "price": varprice,
                            "brand": removedItem.vendor,
                            "variant": removedItem.variant_title
                        }]
                    }
                }
            });

            jQuery.ajax({
                type: 'post',
                url: '/cart/change.js',
                data: data11,
                success: function(data) {
                    //console.log(data);
                    updateminicart(data);
                    if (data.item_count <= 0) {
                        $('.site-header__cart-count').addClass('custom-hiden');
                    } else {
                        $('.site-header__cart-count').removeClass('custom-hiden');
                    }
                    $('#CartCount span').text(data.item_count);
                    $('.desktop-cart-count span').text(data.item_count);
                    $("#minicart-success-message").remove();
                    $('.Clsmin').after('<div id="minicart-success-message" class="minicart-message">Item was removed successfully.</div>');
                    $('.mini-cart').removeClass("loading");
                },
                fail: function() {
                    alert('request fail..');
                },
                dataType: 'json'
            });
        });
    });
    /**End miniCart Update Item**/

    jQuery(document).ready(function(e) {
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

    jQuery(window).resize(function() {
        jQuery(window).trigger('resize')
    });

    // Use $j(document).ready() because Magento executes Prototype inline
    jQuery(document).ready(function() {

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
		setTimeout(function() {
        jQuery(document).on('click', '.mobile-product-detail-show', function() {
            jQuery('.mobile-product-detail-show span').toggleClass('active');
            jQuery('.product-bundle .accordion-container').slideToggle();
        })
        jQuery('#header .site-nav li a[aria-label="About"]').parents('.buddha-menu-item').addClass('about-custom-drowdown');
    }, 1000);
    });