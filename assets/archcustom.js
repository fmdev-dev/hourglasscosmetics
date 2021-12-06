// Start: Show on Map button display

jQuery(document).on("click", ".stockist-feature-bg-color", function() {
    setTimeout(function() {}, 2500);
});

jQuery(document).on("click", ".stockist-search-button.button", function() {
    setTimeout(function() {
        jQuery("#show-more-ajax").hide();
    }, 2500);
});

jQuery(document).on(
    "keydown",
    ".stockist-query-entry .stockist-search-field",
    function() {
        setTimeout(function() {
            jQuery("#show-more-ajax").hide();
        }, 2500);
    }
);

jQuery(document).on(
    "click",
    ".stockist-query-entry .stockist-search-field",
    function() {
        setTimeout(function() {
            jQuery("#show-more-ajax").hide();
        }, 2500);
    }
);

jQuery(document).ready(function() {
    jQuery(document).on("click", ".stockist-result-directions-link", function() {
        jQuery("html, body").animate({
                scrollTop: jQuery("#stockist-widget").offset().top - 64
            },
            2500
        );
    });

    setTimeout(function() {
        jQuery(".stockist-result-message-text")
            .parents("body")
            .addClass("locator_l_notdata");
    }, 2000);

    setTimeout(function() {
        jQuery(
            '.stockist-list-result .stockist-result-addr-country:contains("US")'
        ).hide();
        jQuery('.stockist-map .stockist-result-addr-country:contains("US")').hide();
    }, 3000);

    setTimeout(function() {
        jQuery(
            "#_evh-link, .evidon-banner-message .evidon-banner-acceptbutton"
        ).attr("style", "");
        jQuery("#_evh-button, .evidon-banner").show();
    }, 2000);
});

// End: Show on Map button display

// Sticky Header JS
jQuery(window).scroll(function() {
    //theme.raQuickshop.refresh();
    // add 'sticky-header' class to the body tag when the header top is scrolled out of view
    jQuery("#header").toggleClass("sticky-header", jQuery(this).scrollTop() > 10);
    jQuery("body").toggleClass("sticky-content", jQuery(this).scrollTop() > 10);
    jQuery(window).trigger("scroll");
});

$(".buddha-menu-item >.mm-submenu").wrapInner(
    "<li class='mm-submenulist'><ul></ul></li>"
);
/* ====== backtotop ====== */
jQuery(".backtotop").click(function() {
    jQuery("html, body").animate({ scrollTop: 0 }, 800, "linear");
});

jQuery(function() {
    jQuery('#section-bullet a[href*="#"]:not([href="#"])').click(function(e) {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = jQuery(this.hash);
            target = target.length ?
                target :
                jQuery("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                jQuery("html, body").animate({
                        scrollTop: target.offset().top - 64
                    },
                    1000
                );
                return false;
            }
        }
        e.preventDefault();
    });
});

jQuery(document).ready(function(e) {
    jQuery(".search-btn").click(function() {
        jQuery(".search-header").addClass("active skip-active");
    });
    jQuery(document).on("click", ".closesearch", function() {
        jQuery(".search-header").removeClass("active skip-active");
    });
    jQuery(".search-header").append("<span class='closesearch'></span>");
    jQuery(".qty-plus").click(function(e) {
        e.preventDefault();
        var currentVal = parseInt(
            jQuery(this)
            .prev("#Quantity")
            .val()
        );
        if (!currentVal || currentVal == "" || currentVal == "NaN") {
            currentVal = 1;
        }
        jQuery(this)
            .prev("#Quantity")
            .val(currentVal + 1);
    });
    jQuery(".qty-minus").click(function(e) {
        e.preventDefault();
        var currentVal = parseInt(
            jQuery(this)
            .next("#Quantity")
            .val()
        );
        if (currentVal == "NaN") currentVal = 1;
        if (currentVal > 1) {
            jQuery(this)
                .next("#Quantity")
                .val(currentVal - 1);
        }
    });
});

/**Product Page Code**/
jQuery(document).ready(function(e) {
    jQuery(".filterby-info h4").click(function() {
        jQuery(this).toggleClass("current");
        jQuery(".filterby-info .filters-toolbar").slideToggle();
    });

    jQuery(".sortby-filterinfo h4").click(function() {
        jQuery(this).toggleClass("current");
        jQuery(".sortby-filterinfo .sortbyfiter").slideToggle();
    });
});

jQuery(document).ready(function(e) {
    jQuery("#share-block").click(function() {
        jQuery(".share-block-content").slideToggle();
    });
    /**Product Product width **/
    jQuery(".favorite-share-main").appendTo(".product_width");
});

/* ====== accordian ====== */
jQuery(".block-title").click(function() {
    jQuery(".block-title")
        .not(jQuery(this))
        .removeClass("active");
    jQuery(".block-content")
        .not(jQuery(this).next())
        .slideUp();
    jQuery(this).toggleClass("active");
    jQuery(this)
        .next()
        .slideToggle(250);
});
jQuery(".fr-page-tab").click(function() {
    jQuery(".fr-page-tab")
        .not(jQuery(this))
        .removeClass("active");
    jQuery(".fr-page-tab-blurb")
        .not(jQuery(this).next())
        .slideUp();
    jQuery(this).toggleClass("active");
    jQuery(this)
        .next()
        .slideToggle(250);
});

/**Custom Cart Code**/

jQuery(document).ready(function() {
    jQuery(window).resize(function() {
        jQuery(".site-header__cart").on("click", function(e) {
            e.preventDefault();
            jQuery(".mini-cart").addClass("skip-active");
            jQuery(".overlay-wrap").addClass("active");
            jQuery("body")
                .stop()
                .addClass("cartbody");
        });

        jQuery(".block-title").click(function() {
            var offset = jQuery(".accordion-container").offset().top - 65;
            jQuery("html,body").scrollTop(offset);
        });
    });
    jQuery(window).trigger("resize");
});

jQuery(document).on("click", ".skip-link-close", function() {
    jQuery(".site-header__cart").removeClass("skip-active");
    jQuery(".mini-cart").removeClass("skip-active");
    jQuery(".overlay-wrap").removeClass("active");
    jQuery("body").removeClass("cartbody");
});

jQuery(".overlay-wrap").click(function() {
    jQuery(".site-header__cart").removeClass("skip-active");
    jQuery(".mini-cart").removeClass("skip-active");
    jQuery(this).removeClass("active");
});

/**Cart Update Item**/
jQuery(document).ready(function(e) {
    // For Listing page quickview
    var quickViewListing = localStorage["quick-view-listing"];
    if (quickViewListing == "yes") {
        jQuery(".mini-cart")
            .delay("1000")
            .addClass("skip-active");
        jQuery(".overlay-wrap")
            .delay("1000")
            .addClass("active");
        localStorage["quick-view-listing"] = "";
    }
    setTimeout(function() {
        jQuery(".mini-cart")
            .delay("1000")
            .removeClass("skip-active");
        jQuery(".overlay-wrap")
            .delay("1000")
            .removeClass("active");
    }, 5000);

    jQuery(".wishl-add-wrapper a").attr("href", "javascirpt:void(0)");
    jQuery(document).on(
        "click",
        ".qty-edititem-removeitem .cart-item-quantity",
        function(e) {
            jQuery(this)
                .next(".quantity-button")
                .fadeIn();
            e.stopPropagation();
        }
    );
    jQuery(document).on("click", ".quantity-button", function() {
        jQuery(this).fadeOut();
    });
    jQuery(document).on("click", ".cart-sidebar", function() {
        jQuery(".quantity-button").fadeOut();
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
        $(".price", ".mini-cart").each(function() {
            //$(this).html($(this).text());
            $(this).html($theme.Currency.formatMoney(parseInt($(this).text())));
        });

        // format image to small
        $("img", ".mini-cart").each(function() {
            var src = $(this).attr("src");
            src = src.replace(".jpg", "_78x78.jpg"); // if using jpg
            src = src.replace(".jpeg", "_78x78.jpeg"); // if using jpeg
            $(this).attr("src", src);
        });

        $(".mini-cart").show();
    }

    jQuery(document).on("click", ".quntbtn", function() {
        $(".mini-cart").addClass("loading");
        $line = $(this).data("line");
        $quantity = $(this)
            .prev("input")
            .val();
        var data11 = {
            line: $line,
            quantity: $quantity
        };

        var myjon = 0;
        $.ajax({
            async: false,
            type: "GET",
            url: "/cart.js",
            dataType: "json",
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
            $(".Clsmin").after(
                '<div id="minicart-success-message" class="minicart-message">THE MAXIMUM QUANTITY ALLOWED FOR PURCHASE IS 4.</div>'
            );
            $(".mini-cart").removeClass("loading");
        } else {
            jQuery.ajax({
                type: "post",
                url: "/cart/change.js",
                data: data11,
                success: function(data) {
                    updateminicart(data);
                    $varFlag = 0;
                    if (data.item_count <= 0) {
                        $(".site-header__cart-count").addClass("custom-hiden");
                    } else {
                        $(".site-header__cart-count").removeClass("custom-hiden");
                        $.each(data.items, function(index, value) {
                            //alert( index + ": " + value.quantity);
                            $vline = index + 1;
                            if ($line == $vline && value.quantity < $quantity) {
                                $varFlag = 1;
                                $(".mini-out-of-stock")
                                    .eq(index)
                                    .html(
                                        "<strong>There is insufficient stock for this item</strong>"
                                    );
                            }
                        });
                    }
                    $("#CartCount span").text(data.item_count);
                    $(".desktop-cart-count span").text(data.item_count);
                    $("#minicart-success-message").remove();
                    if ($varFlag == 1) {
                        $(".Clsmin").after(
                            '<div id="minicart-success-message" class="minicart-message">Item have insufficient stock.</div>'
                        );
                    } else {
                        $(".Clsmin").after(
                            '<div id="minicart-success-message" class="minicart-message">Item was updated successfully.</div>'
                        );
                    }
                    $(".mini-cart").removeClass("loading");
                },
                fail: function() {
                    alert("request fail..");
                },
                dataType: "json"
            });
        }
    });

    jQuery(document).on("click", ".rembtn", function() {
        $(".mini-cart").addClass("loading");
        $line = $(this).data("line");
        var data11 = {
            line: $line,
            quantity: 0
        };

        var dataCart = jQuery.parseJSON(
            $.ajax({
                url: "/cart.js",
                dataType: "json",
                async: false
            }).responseText
        );
        var cartItem = $line - 1;
        var removedItem = dataCart.items[cartItem];
        var varprice = $theme.Currency.formatMoney(parseInt(removedItem.price));
        varprice = varprice.substring(1, varprice.length);

        window.dataLayer.push({
            event: "removeFromCart",
            ecommerce: {
                remove: {
                    products: [{
                        position: cartItem,
                        id: removedItem.sku,
                        name: removedItem.product_title,
                        quantity: removedItem.quantity,
                        price: varprice,
                        brand: removedItem.vendor,
                        variant: removedItem.variant_title
                    }]
                }
            }
        });

        jQuery.ajax({
            type: "post",
            url: "/cart/change.js",
            data: data11,
            success: function(data) {
                //console.log(data);
                updateminicart(data);
                if (data.item_count <= 0) {
                    $(".site-header__cart-count").addClass("custom-hiden");
                } else {
                    $(".site-header__cart-count").removeClass("custom-hiden");
                }
                $("#CartCount span").text(data.item_count);
                $(".desktop-cart-count span").text(data.item_count);
                $("#minicart-success-message").remove();
                $(".Clsmin").after(
                    '<div id="minicart-success-message" class="minicart-message">Item was removed successfully.</div>'
                );
                $(".mini-cart").removeClass("loading");
            },
            fail: function() {
                alert("request fail..");
            },
            dataType: "json"
        });
    });
});

jQuery(document).ready(function(e) {
    jQuery(".colorsltShare").click(function() {
        jQuery(".more-options .color-pallets-wrap")
            .stop()
            .slideUp();
        jQuery(this)
            .next()
            .stop()
            .slideToggle();
    });

    // Color Palette On Click
    jQuery(document).on("click", ".color-palette a", function() {
        jQuery(".color-pallets-wrap").slideUp();
        $listimg = $(this)
            .find("img")
            .attr("src");
        $listtxt = $(this).data("title");

        /*simple Load*/
        $varientid = $(this).data("id");
        $waitsrc = jQuery("#mydiv").data("url");
        $waitsrc = $waitsrc + "/" + $varientid;
        waitlistingframe($waitsrc);

        $("#varID").val($varientid);

        if ($(this).data("available") == 0) {
            jQuery("#mydiv").removeClass("disnon");
        } else {
            jQuery("#mydiv").addClass("disnon");
        }
        /*endsimple Load*/

        var select = document.querySelector(".single-option-Color");
        select.value = $listtxt;
        select.dispatchEvent(new Event("change"));

        jQuery("#dynamicimgsrc").attr("src", $listimg);
        jQuery("#colorselect >span").text($listtxt);

        if ($('img[alt="' + $listtxt + '"]').length > 0) {
            jQuery(".gird-sid > .grid__item").css("display", "none");

            jQuery("#divthumbtemp > .item-thumb").css("display", "none");
            jQuery("#divmaintemp > .slider-item").css("display", "none");
            jQuery("#divmaintemp > .slider-item").removeClass("current-item");
            jQuery("#divthumbtemp > .item-thumb").removeClass("thumb-active");

            jQuery('img[alt="' + $listtxt + '"]')
                .parent()
                .parent("li")
                .css("display", "block");
            jQuery('img[alt="' + $listtxt + '"]')
                .parent()
                .css("display", "block");

            jQuery('img[alt="' + $listtxt + '"].zoming')
                .eq(0)
                .parent(".slider-item")
                .addClass("current-item");
            jQuery('img[alt="' + $listtxt + '"].thumbzoom')
                .eq(0)
                .parent(".item-thumb")
                .addClass("thumb-active");
            jQuery("#divmain").empty();
            jQuery("#divthumb").empty();
            jQuery('img[alt="' + $listtxt + '"].zoming')
                .parent(".slider-item")
                .clone()
                .appendTo("#divmain");
            jQuery('img[alt="' + $listtxt + '"].thumbzoom')
                .parent(".item-thumb")
                .clone()
                .appendTo("#divthumb");
            var itemlengh = jQuery(".item-thumb-main .item-thumb").length;
            $("#slidermap").attr("data-count", itemlengh);
        }
    });

    function waitlistingframe($waitsrc) {
        $("#mydiv").attr("data-src", "");
        $("#mydiv").attr("data-src", $waitsrc);
        //console.log($waitsrc);
        $("#mydiv").load($waitsrc, function(response, status, xhr) {
            if (status == "error") {
                var msg = "Sorry but there was an error: ";
                console.log(msg + xhr.status + " " + xhr.statusText);
            }
        });
    }

    // For Color Select Option
    jQuery(".single-option-Color option").each(function() {
        //$image = $('.grid__item:has(img[alt="'+$(this).val()+'"])');
        $image_url = $('img[alt="' + $(this).val() + '-color"]').attr("src");
        $noimage = "";
        if (typeof $image_url === "undefined") {
            $noimage = "noimage";
        }
        $outtext = "";
        $available = 1;
        if ($(this).data("instock") == "0") {
            $outtext = "<strong>OUT OF STOCK | </strong>";
            $available = 0;
        }
        $varid = $(this).data("id");
        $(".color-pallets-wrap").append(
            '<div class="color-palette palette ' +
            $noimage +
            '"><a href="javascript:void(0)" data-title="' +
            $(this).val() +
            '" data-available="' +
            $available +
            '" data-id="' +
            $varid +
            '"><img src="' +
            $image_url +
            '" alt="Color" /><span class="shades_label_overlay">' +
            $outtext +
            "" +
            $(this).text() +
            "</span></a></div>"
        );
    });

    // For shade 1 Select Option
    jQuery(".single-option-shade-1 option").each(function() {
        $image_url = $('img[alt="' + $(this).val() + '-shade-1"]').attr("src");
        $noimage = "";
        if (typeof $image_url === "undefined") {
            $noimage = "noimage";
        }
        $varid = $(this).data("productid");
        $(".shade-1-pallets-wrap").append(
            '<div class="shade-1-palette palette ' +
            $noimage +
            '"><a href="javascript:void(0)" data-title="' +
            $(this).val() +
            '" data-productid="' +
            $varid +
            '"><img src="' +
            $image_url +
            '" alt="Shade 1" /><span class="shades_label_overlay">' +
            $(this).text() +
            "</span></a></div>"
        );
    });

    // For shade 2 Select Option
    jQuery(".single-option-shade-2 option").each(function() {
        $image_url = $('img[alt="' + $(this).val() + '-shade-2"]').attr("src");
        $noimage = "";
        if (typeof $image_url === "undefined") {
            $noimage = "noimage";
        }
        $varid = $(this).data("productid");
        $(".shade-2-pallets-wrap").append(
            '<div class="shade-2-palette palette ' +
            $noimage +
            '"><a href="javascript:void(0)" data-title="' +
            $(this).val() +
            '" data-productid="' +
            $varid +
            '"><img src="' +
            $image_url +
            '" alt="Shade 2" /><span class="shades_label_overlay">' +
            $(this).text() +
            "</span></a></div>"
        );
    });

    // For shade 3 Select Option
    jQuery(".single-option-shade-3 option").each(function() {
        $image_url = $('img[alt="' + $(this).val() + '-shade-3"]').attr("src");
        $noimage = "";
        if (typeof $image_url === "undefined") {
            $noimage = "noimage";
        }
        $varid = $(this).data("productid");
        $(".shade-3-pallets-wrap").append(
            '<div class="shade-3-palette palette ' +
            $noimage +
            '"><a href="javascript:void(0)" data-title="' +
            $(this).val() +
            '" data-productid="' +
            $varid +
            '"><img src="' +
            $image_url +
            '" alt="Shade 3" /><span class="shades_label_overlay">' +
            $(this).text() +
            "</span></a></div>"
        );
    });

    // Js Start for custom Pallet option for set properties
    // For shade 1 Select Option
    jQuery(".single-option-shade11 option").each(function() {
        $image_url = $('img[alt="' + $(this).val() + '-shade-1"]').attr("src");
        $noimage = "";
        if (typeof $image_url === "undefined") {
            $noimage = "noimage";
        }
        $varid = $(this).data("productid");
        $(".shade-11-pallets-wrap").append(
            '<div class="shade-11-palette palette ' +
            $noimage +
            '"><a href="javascript:void(0)" data-title="' +
            $(this).val() +
            '" data-productid="' +
            $varid +
            '"><img src="' +
            $image_url +
            '" alt="Shade 11" /><span class="shades_label_overlay">' +
            $(this).text() +
            "</span></a></div>"
        );
    });

    // For shade 2 Select Option
    jQuery(".single-option-shade21 option").each(function() {
        $image_url = $('img[alt="' + $(this).val() + '-shade-2"]').attr("src");
        $noimage = "";
        if (typeof $image_url === "undefined") {
            $noimage = "noimage";
        }
        $varid = $(this).data("productid");
        $(".shade-21-pallets-wrap").append(
            '<div class="shade-21-palette palette ' +
            $noimage +
            '"><a href="javascript:void(0)" data-title="' +
            $(this).val() +
            '" data-productid="' +
            $varid +
            '"><img src="' +
            $image_url +
            '" alt="Shade 21" /><span class="shades_label_overlay">' +
            $(this).text() +
            "</span></a></div>"
        );
    });

    // For shade 3 Select Option
    jQuery(".single-option-shade31 option").each(function() {
        $image_url = $('img[alt="' + $(this).val() + '-shade-3"]').attr("src");
        $noimage = "";
        if (typeof $image_url === "undefined") {
            $noimage = "noimage";
        }
        $varid = $(this).data("productid");
        $(".shade-31-pallets-wrap").append(
            '<div class="shade-31-palette palette ' +
            $noimage +
            '"><a href="javascript:void(0)" data-title="' +
            $(this).val() +
            '" data-productid="' +
            $varid +
            '"><img src="' +
            $image_url +
            '" alt="Shade 31" /><span class="shades_label_overlay">' +
            $(this).text() +
            "</span></a></div>"
        );
    });

    // End js Start for custom Pallet option for set properties
    jQuery(document).on("click", ".variant_image", function() {
        $imgurl = $(this).data("imgurl");
        $imgsec = $(this).data("sectionid");
        $imgwidths = $(this).data("widths");
        if ($imgurl !== "undefined") {
            $imgurl_main = $imgurl;
            $varray = [];
            // For secret
            jQuery.each($imgwidths, function(i, val) {
                $imgstr = $imgurl.replace("300x300", val + "x");
                $imgstr = $imgstr + " " + val + "w";
                $varray.push($imgstr);
            });
            jQuery("img#ProductCardImage-" + $imgsec).attr("src", $imgurl);
            jQuery("img#ProductCardImage-" + $imgsec).attr(
                "srcset",
                $varray.toString()
            );
        }
        $varUrl = $(this).data("url") + "?variant=" + $(this).data("id");
        $(this)
            .parent()
            .prev("a")
            .attr("href", $varUrl);
        $(this)
            .closest(".grid-view-item")
            .find("a.grid-view-item__link")
            .attr("href", $varUrl);
    });
});

jQuery(document).ready(function(e) {
    /***Forgot Password***/
    jQuery("#RecoverPassword").click(function() {
        jQuery("body").addClass("account-forgotpassword");
        jQuery("#RecoverPasswordForm, #CustomerLoginForm").removeClass("hide");
    });

    if (
        jQuery(window.location.hash).length > 0 &&
        jQuery(window.location.hash).attr("id") == "crueltyfreeluxurybeauty"
    ) {
        jQuery("html, body").animate({
            scrollTop: jQuery(window.location.hash).offset().top - 50
        });
    }

    /***Page loader ***/
    jQuery(window).load(function(e) {
        jQuery(".loader-wrap").addClass("desabled");
        jQuery(".snize-no-products-found")
            .closest("body")
            .addClass("snize-no-p-found-body");
    });
    setTimeout(function() {
        jQuery("span:contains(Powered by)").addClass("powered-with");
    }, 7000);
    jQuery(".right-shade-pallet .palette a > img").on("click", function() {
        jQuery(".shade-pallet-main").show();
        jQuery(".product-single__photo-wrapper").hide();
    });
    jQuery(".shade-pallet .productsingle-thumbnails li a").on(
        "click",
        function() {
            jQuery(".shade-pallet-main").hide();
            jQuery(".product-single__photo-wrapper").show();
        }
    );
    jQuery(".search-btn").click(function() {
        jQuery(".search__input").focus();
    });
});

// Use jQuery(document).ready() because Magento executes Prototype inline
jQuery(document).ready(function() {
    jQuery(".top-image").click(function() {
        jQuery(this).addClass("hide_content");
        var currentSrc = jQuery("#youtubevidid").attr("src") + "&autoplay=1&loop=1";
        jQuery("#youtubevidid").attr("src", currentSrc);
    });
});

jQuery(window).resize(function() {
    if (jQuery(window).width() < 1000) {
        function checkOffset() {
            jQuery(".favorite-share-main").appendTo(".pdt-info-share-favi");
            if (window.matchMedia("(max-width: 1024px)").matches) {
                if (
                    jQuery(".product.info .product-form-product-template").offset().top +
                    jQuery(".product.info .product-form-product-template").height() >=
                    jQuery(".sticky-addtocart").offset().top - 10
                ) {
                    jQuery(".product.info .product-form-product-template").css({
                        position: "absolute",
                        bottom: "20px",
                        "padding-left": "20px",
                        "padding-right": "20px"
                    });
                }
                if (
                    jQuery(document).scrollTop() + window.innerHeight <
                    jQuery(".sticky-addtocart").offset().top
                ) {
                    jQuery(".product.info .product-form-product-template").css({
                        position: "fixed",
                        bottom: "0px",
                        "padding-left": "0",
                        "padding-right": "0"
                    });
                    jQuery(".product.info .product-form-product-template").addClass(
                        "add-to-cart-fixed"
                    );
                } else {
                    jQuery(".product.info .product-form-product-template").removeClass(
                        "add-to-cart-fixed"
                    );
                }
            }
        }
        jQuery(document).scroll(function() {
            checkOffset();
        });
    }
    jQuery(window).trigger("resize");
});
// Use $j(document).ready() because Magento executes Prototype inline
jQuery(document).ready(function() {
    jQuery(".top-image").click(function() {
        jQuery(this).addClass("hide_content");
        var currentSrc = jQuery("#youtubevidid").attr("src") + "&autoplay=1&loop=1";
        jQuery("#youtubevidid").attr("src", currentSrc);
    });
    jQuery(".video-left-div").click(function() {
        jQuery(this).addClass("show_video");
        var currentSrc =
            jQuery("#caution-video").attr("src") + "&autoplay=1&loop=1";
        jQuery("#caution-video").attr("src", currentSrc);
    });
    jQuery(window).trigger("resize");
    jQuery("#shade-tab .color-shade").click(function() {
        jQuery("#shade-tab .color-shade").removeClass("active");
        jQuery(this).addClass("active");
    });
    /**Mobile Search Bar**/
    jQuery(".search-header .search-header__input").click(function() {
        jQuery("#shopify-section-header").removeAttr("tabindex");
        jQuery(".js-mobile-nav-toggle").removeClass("mobile-nav--close");
        jQuery(".js-mobile-nav-toggle").addClass("mobile-nav--open");
        jQuery("button.js-mobile-nav-toggle").removeClass("mobile-nav--open");
        jQuery("nav.mobile-nav-wrapper").removeClass("js-menu--is-open");
    });
    jQuery(".snize-input-style").val("");
    jQuery(document).on(
        "click",
        ".snize-close-button-arrow, .search-header .search-header__input",
        function() {
            //      jQuery('.js-mobile-nav-toggle').removeClass('mobile-nav--close');
            jQuery(".snize-input-style").val("");
        }
    );
    jQuery(".search-header .search-header__input").focus(function(e) {
        jQuery("button.js-mobile-nav-toggle").removeClass("mobile-nav--open");
        jQuery("nav.mobile-nav-wrapper").removeClass("js-menu--is-open");
        jQuery(".snize-ac-results")
            .find(".snize-input-style")
            .val("");
        setTimeout(function() {
            jQuery(".snize-ac-results")
                .find(".snize-input-style")
                .focus();
            jQuery(".snize-ac-results")
                .find(".snize-input-style")
                .val("");
        }, 3000);
    });
    jQuery(document).on("click", ".buttons-joinwaitlist", function() {
        setTimeout(function() {
            jQuery(".ra-quickshop-template .ra-product").animate({
                    scrollTop: jQuery(".out-of-stock").offset().top + 200
                },
                3000
            );
            jQuery(document).scrollTop(
                jQuery(".ra-quickshop-template .ra-product").offset().top + 150
            );
        }, 10);
    });
    jQuery(document).on("click", ".add-to-cart-buttons", function() {
        setTimeout(function() {
            jQuery(".ra-quickshop-template .ra-product").animate({
                    scrollTop: jQuery(".out-of-stock").offset().top + 200
                },
                3000
            );
            jQuery(document).scrollTop(
                jQuery(".ra-quickshop-template .ra-product").offset().top + 150
            );
        }, 10);
    });
});
/***Product Vanish***/
jQuery(".banner-right-content a[href='#feature-section']").click(function() {
    jQuery("html,body").animate({
            scrollTop: jQuery("#feature-section").offset().top - 63
        },
        "slow"
    );
});
jQuery(
    ".banner-right-content a[href='#catalog-section'], .caution-product-caption a[href='#catalog-section']"
).click(function() {
    jQuery("html,body").animate({
            scrollTop: jQuery("#catalog-section").offset().top - 63
        },
        "slow"
    );
});
jQuery(".caution-product-caption a[href='#video_caution']").click(function() {
    jQuery("html,body").animate({
            scrollTop: jQuery("#video_caution").offset().top - 63
        },
        "slow"
    );
});
/***Locate Store Start***/
jQuery(document).ready(function() {
    setTimeout(function() {
        jQuery(".stockist-result-list").appendTo(".locatorlist-dtl");
        jQuery("#show-more-div").show();
    }, 2000);
    setTimeout(function() {
        jQuery(".stockist-search-button button").on("click", function(e) {
            jQuery("#show-more-div").hide();
        });
    }, 3000);

    /**Data Load More Start**/
    setTimeout(function() {
        var morebox = jQuery(".stockist-result").length;
        jQuery(".stockist-result")
            .slice(0, 8)
            .show(function() {});
        jQuery(".stockist-result")
            .slice(8, morebox)
            .hide();
        if (jQuery(".stockist-result:hidden").length != 0) {
            jQuery("#show-more-ajax").show();
        }
        jQuery("#show-more-ajax").on("click", function(e) {
            jQuery(".spinerloaddata").addClass("sloaddata-show");
            setTimeout(function() {
                jQuery(".spinerloaddata").removeClass("sloaddata-show");
            }, 400);
            e.preventDefault();
            jQuery(".stockist-result:hidden")
                .slice(0, 8)
                .show();
            if (jQuery(".stockist-result:hidden").length == 0) {
                $("#show-more-ajax").fadeOut("slow");
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



    jQuery("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
        //alert("You are on step "+stepNumber+" now");
        if (stepPosition === 'first') {
            jQuery("#prev-btn").addClass('disabled');
        } else if (stepPosition === 'final') {
            jQuery("#next-btn").addClass('disabled');
        } else {
            jQuery("#prev-btn").removeClass('disabled');
            jQuery("#next-btn").removeClass('disabled');
        }
    });

    jQuery("#prev-btn").on("click", function(event) {
        // Navigate previous
        event.preventdefault()
        jQuery('#smartwizard').smartWizard("prev");
        return true;
    });
    jQuery("#next-btn").on("click", function(event) {
        // Navigate next
        event.preventdefault()
        jQuery('#smartwizard').smartWizard("next");
        return true;
    });
    jQuery("#theme_selector").on("change", function(event) {
        // Change theme
        event.preventdefault()
        jQuery('#smartwizard').smartWizard("theme", jQuery(this).val());
        return true;
    });
    // Set selected theme on page refresh
    jQuery("#theme_selector").change();
    jQuery(document).ready(function() {
        jQuery(document).on('click', '.sw-btn-next', function(e) {
            jQuery('.sw-btn-next.disabled').each(function() {
                jQuery(this).parents('.quizstep-main').addClass('quizstep-completed');
            });

            jQuery('html,body').animate({
                scrollTop: jQuery("#quizstep").offset().top - 100
            }, '5000');
        });

        jQuery(document).on('click', '.sw-btn-prev', function(e) {

            jQuery('html,body').animate({
                scrollTop: jQuery("#quizstep").offset().top - 100
            }, '5000');
        });
 
        jQuery(document).on('click', '#takequize', function(e) {

            jQuery('html,body').animate({
                scrollTop: jQuery("#quizstep").offset().top - 100
            }, '5000');
        });

        /**Arch Brow Collection Start**/
        jQuery(document).on('click', '.ra-close', function() {
            jQuery('.arch-collection').removeClass('overlay-layer');
            jQuery('.arch-collection .ra-quickshop-template').removeClass('is-visible animate-width add-content');

        }); 

});