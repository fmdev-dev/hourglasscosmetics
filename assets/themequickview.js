window.theme = window.theme || {};
theme.QuickshopJs = function() {
  
    //$('.selector-wrapper').hide();
    $('.product-single__thumbnails-item .product-single__thumbnail--product-quickview-template:eq(0)').addClass('active-thumb'); //select 1st thumnail
    $('.product-single__thumbnail--product-quickview-template').click(function(e) {
        $('.product-single__thumbnail--product-quickview-template').removeClass('active-thumb');
        $('.product-single__photo-wrapper > .product-single__photo').addClass('hide');
        $(this).addClass('active-thumb');
        $('#FeaturedImageZoom-product-quickview-template-' + $(this).data('thumbnail-id')).removeClass('hide');
    });
    $('.swatch :radio').change(function() {
        var optionIndex = $(this).closest('.swatch').attr('data-option-index');
        var optionValue = $(this).val();
        $(this)
            .closest('form')
            .find('.single-option-selector-product-quickview-template')
            .eq(optionIndex)
            .val(optionValue)
            .trigger('change');
    });
    $('.single-option-selector-product-quickview-template').change(function() {
        var atoptions = [];
        $(".single-option-selector-product-quickview-template").each(function(index) { atoptions.push($(this).val()); });
        var selected_option = atoptions.join(" / ");
        var Proddata = JSON.parse(document.getElementById('ProductJson-product-quickview-template').innerHTML);
        var prodvariants = Proddata.variants;
        var available = false;
        var prices = '';
        prodvariants.forEach(function(element) {
            if (element.public_title == selected_option) {
                $('#ProductSelect-product-quickview-template option:selected').removeAttr('selected');
                $("#ProductSelect-product-quickview-template").val(element.id);
                $('.product-single__photo-wrapper > .product-single__photo').addClass('hide');
                $('#FeaturedImageZoom-product-quickview-template-' + element.featured_image.id).removeClass('hide');
                $('.product-single__thumbnail--product-quickview-template').removeClass('active-thumb');
                $(".product-single__thumbnail--product-quickview-template[data-thumbnail-id='" + element.featured_image.id + "']").addClass('active-thumb');
                available = element.available;
                prices = Shopify.formatMoney(parseFloat(element.price));
            }
        });
        if (available) {
            $(".product-form__cart-submit span").html("Add to cart");
            $('button.product-form__cart-submit').removeAttr("aria-disabled");
            $('button.product-form__cart-submit').removeAttr("disabled");
            $('#shopify-section-product-quickview-template').find('.price-item').html(prices);
            $('.price__regular').show();
            $('.price-item__label').show();
        } else {
            $(".product-form__cart-submit span").html("Unavailable");
            $('button.product-form__cart-submit').attr("disabled", "disabled");
            $('button.product-form__cart-submit').attr("aria-disabled", "true");
            $('#shopify-section-product-quickview-template').find('.price-item').html('&nbsp;');
            $('.price__regular').hide();
            $('.price-item__label').hide();
            $('.product-single__thumbnail--product-quickview-template').removeClass('active-thumb');
        }
    });
};
window.theme = window.theme || {};
theme.raQuickshop = function() {
    $.getScript("//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js").done(function() {
        quickView();

        /*setTimeout(function() {
          // Quickview Close button
          $(document).on('click', '.quick-close-btn, .quick-overlay', function() {
            $("#quick-view").toggle();
          });
        }, 1000);*/
  
    });

    function quickView() {
      	/*$(document).on('click', '.quick-close-btn, .quick-overlay', function() {
          $("#quick-view").toggle();
        });*/
        /*$(document).on('click', '.quick-view', function() {
            if ($('#quick-view').length == 0) { $("body").append('<div id="quick-view" style="display: block;"></div>'); }
            var product_handle = $(this).data('handle');
            $('#quick-view').addClass(product_handle);
            $.ajax({
                url: "/products/" + product_handle + "?view=atquickview",
                success: function(data) {
                    $("#quick-view").empty();
                    $("#quick-view").append("<div class='quick-overlay'></div>").append(data);
                    $("#quick-view").show();
                    theme.customerTemplates.init();
                    theme.QuickshopJs();
                    Shopify.AjaxifyCart.init({ cartCountSelector: '#CartCount span' });
                  
                }
            });

            /* ===============QTY CODE==============*/

            /*jQuery(document).ready(function(e) {
                setTimeout(function() {
                  
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
                }, 1000);
            });


        });*/
    }
};
window.theme.raQuickshop();
  
function quickviewopton(newhandle){
      if ($('#quick-view').length == 0) { $("body").append('<div id="quick-view" style="display: block;"></div>'); }
      var product_handle = newhandle;
      $('#quick-view').addClass(product_handle);
      $.ajax({
        url: "/products/" + product_handle + "?view=atquickview",
        success: function(data) {
          $("#quick-view").empty();
          $("#quick-view").append("<div class='quick-overlay'></div>").append(data);
          $("#quick-view").show();
          theme.customerTemplates.init();
          theme.QuickshopJs();
          Shopify.AjaxifyCart.init({ cartCountSelector: '#CartCount span' });
        }
      });
      
      /* ===============QTY CODE==============*/
      jQuery(document).ready(function(e) {
        setTimeout(function() {

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
        }, 1000);
      });
    }