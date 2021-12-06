/**Product Page Code**/
jQuery(document).ready(function(e) {
    jQuery('#share-block').click(function() {
        jQuery('.share-block-content').slideToggle();
    });
    /**Product Product width **/
    jQuery('.favorite-share-main').appendTo('.product_width');
});

/* ====== accordian ====== */
jQuery(".block-title").click(function() {
    jQuery('.block-title').not(jQuery(this)).removeClass('active');
    jQuery('.block-content').not(jQuery(this).next()).slideUp();
    jQuery(this).toggleClass('active');
    jQuery(this).next().slideToggle(250);
});

/**Custom Cart Code**/
jQuery(document).ready(function() {
    jQuery(window).resize(function() {
        jQuery(".block-title").click(function() {
            var offset = jQuery(".accordion-container").offset().top - 65
            jQuery('html,body').scrollTop(offset);
        });
    });
    //jQuery(window).trigger("resize");
});

/**Cart Update Item**/
jQuery(document).ready(function(e) {

    // For Listing page quickview
    jQuery('.wishl-add-wrapper a').attr('href', 'javascirpt:void(0)');
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

        $prodid = $(this).data('productid');
        $('li.bundle-tab.active > .bundle-tab-name > .bundle-tab-name-text > .bundle-tab-shade').html('<b>' + $listtxt + '</b>');
        $('li.bundle-product-item[data-productid=' + $prodid + '] > .bundle-product-info > .bundle-product-shade').html('<b>' + $listtxt + '</b>');

        var $projsondata = JSON.parse(document.getElementById('ProductJson-product-simple').innerHTML);
        //console.log($projsondata);
        $('input[data-id="' + $prodid + '"]').val($projsondata.title + ' - ' + $listtxt);


        /*simple Load*/
        $varientid = $(this).data('id');
        $waitsrc = jQuery('#mydiv').data('url');
        $waitsrc = $waitsrc + '/' + $varientid;
        waitlistingframe($waitsrc);

        //$('#varID').val($varientid);

        if ($(this).data('available') == 0) {
            jQuery('#mydiv').removeClass('disnon');
        } else {
            jQuery('#mydiv').addClass('disnon');
        }
        /*endsimple Load*/

        //jQuery('.single-option-Color').val($listtxt).trigger('change');
        /*var select = document.querySelector('.single-option-Color');
        select.value = $listtxt;
        select.dispatchEvent(new Event('change'));*/

        jQuery('#dynamicimgsrc').attr('src', $listimg);
        jQuery('#colorselect').attr('data-id', $varientid);
        jQuery('#colorselect >span').text($listtxt);

        if ($('img[alt="' + $listtxt + '"]').length > 0) {
            jQuery('.gird-sid > .grid__item').css("display", "none");
            jQuery('img[alt="' + $listtxt + '"]').parent().parent('li').css("display", "block");
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
            $prodid = $(this).data('productid');
            $('.color-pallets-wrap').append('<div class="color-palette palette ' + $noimage + '"><a href="javascript:void(0)" data-title="' + $(this).val() + '" data-available="' + $available + '" data-id="' + $varid + '" data-productid="' + $prodid + '"><img src="' + $image_url + '" alt="Product Color" /><span class="shades_label_overlay">' + $outtext + '' + $(this).text() + '</span></a></div>');
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
        console.log($(this).parent().prev('a'));

    });

});


jQuery(document).ready(function(e) {

    jQuery('.right-shade-pallet .palette a > img').on('click', function() {
        jQuery('.shade-pallet-main').show();
        jQuery('.product-single__photo-wrapper').hide();
    });
    jQuery('.shade-pallet .productsingle-thumbnails li a').on('click', function() {
        jQuery('.shade-pallet-main').hide();
        jQuery('.product-single__photo-wrapper').show();
    });

});

jQuery(window).resize(function() {
    if (jQuery(window).width() < 1000) {
        function checkOffset() {
            if (window.matchMedia("(max-width: 1024px)").matches) {
                if (jQuery('.product.info .product-form-product-template').offset().top + jQuery('.product.info .product-form-product-template').height() >= jQuery('.sticky-addtocart').offset().top - 10) {
                    jQuery('.product.info .product-form-product-template').css({ 'position': 'absolute', 'bottom': '20px', 'padding-left': '20px', 'padding-right': '20px' });
                }
                if (jQuery(document).scrollTop() + window.innerHeight < jQuery('.sticky-addtocart').offset().top) {
                    jQuery('.product.info .product-form-product-template').css({ 'position': 'fixed', 'bottom': '0px', 'padding-left': '0', 'padding-right': '0' });
                    jQuery('.product.info .product-form-product-template').addClass('add-to-cart-fixed');
                } else {
                    jQuery('.product.info .product-form-product-template').removeClass('add-to-cart-fixed');
                }
                //jQuery('.product.info .product-form-product-template').text(jQuery(document).scrollTop() + window.innerHeight);
            }
        }
        jQuery(document).scroll(function() {
            checkOffset();
        });

    }
    jQuery(window).trigger('resize')
});
// Use $j(document).ready() because Magento executes Prototype inline
jQuery(document).ready(function() {

    //jQuery(window).trigger('resize');
    jQuery('#shade-tab .color-shade').click(function() {
        jQuery('#shade-tab .color-shade').removeClass('active');
        jQuery(this).addClass('active');
    })

    /**Mobile Search Bar**/
    jQuery('.snize-input-style').val('');
    jQuery(document).on('click', '.snize-close-button-arrow, .search-header .search-header__input', function() {
        jQuery('.snize-input-style').val('');
    })


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