function updatePromoMessageRemove(code){
  $url = 'https://migration-live.hourglasscosmetics.com/discode/hourglasscosmetics.myshopify.com/'+code;
  $.get($url,function (data, textStatus, jqXHR) {
    if(data[0] == 'success'){
      var rcode = data[1];
      var rvariid = data[2];
      //var data1[rvariid] = 1;
      $.post('/cart/update.js',"updates["+rvariid+"]=0").done(function( dataa ) {
        let new_url = $(location).attr("href").split('?')[0],
            variable = new_url.indexOf('?')
		 setTimeout(function() {
           window.location = new_url;
         }, 1000);
      });
    }else{
      let new_url = $(location).attr("href").split('?')[0],
          variable = new_url.indexOf('?')
      setTimeout(function() {
        window.location = new_url;
      }, 1000);
    }
  });
}

function updatePromoMessageNew(code){
  	$url = 'https://migration-live.hourglasscosmetics.com/discode/hourglasscosmetics.myshopify.com/'+code;
    $.get($url,function (data, textStatus, jqXHR) {
      if(data[0] == 'success'){
        var rcode = data[1];
        var rvariid = data[2];
        //var data1[rvariid] = 1;
        $.post('/cart/update.js',"updates["+rvariid+"]=1").done(function( dataa ) {
          let new_url = $(location).attr("href").split('?')[0],
              variable = new_url.indexOf('?')

          if (code != "") {
            let type = variable > -1 ? '&' : "?";
            window.location = new_url + type + 'discount=' + code;
          } else {
            if ($('#error-for-reduction_code').length > 0) {
              setTimeout(function() {
                window.location = new_url;
              }, 1000);
            }
          }
        });
      }else{
        let new_url = $(location).attr("href").split('?')[0],
            variable = new_url.indexOf('?')
        if (code != "") {
          let type = variable > -1 ? '&' : "?";
          window.location = new_url + type + 'discount=' + code;
        } else {
          if ($('#error-for-reduction_code').length > 0) {
            setTimeout(function() {
              window.location = new_url;
            }, 1000);
          }
        }
      }
    });
}

function removePromoAddNew(removecode,code){
  $url = 'https://migration-live.hourglasscosmetics.com/discode/hourglasscosmetics.myshopify.com/'+removecode;
  $.get($url,function (data, textStatus, jqXHR) {
    if(data[0] == 'success'){
      var rcode = data[1];
      var rvariid = data[2];
      //var data1[rvariid] = 1;
      $.post('/cart/update.js',"updates["+rvariid+"]=0").done(function( dataa ) {
        $url = 'https://migration-live.hourglasscosmetics.com/discode/'+code;
        $.get($url,function (data, textStatus, jqXHR) {
          if(data[0] == 'success'){
            var rcode = data[1];
            var rvariid = data[2];
            //var data1[rvariid] = 1;
            $.post('/cart/update.js',"updates["+rvariid+"]=1").done(function( dataa ) {
              let new_url = $(location).attr("href").split('?')[0],
                  variable = new_url.indexOf('?')

              if (code != "") {
                let type = variable > -1 ? '&' : "?";
                window.location = new_url + type + 'discount=' + code;
              } else {
                if ($('#error-for-reduction_code').length > 0) {
                  setTimeout(function() {
                    window.location = new_url;
                  }, 1000);
                }
              }
            });
          }else{
            let new_url = $(location).attr("href").split('?')[0],
                variable = new_url.indexOf('?')
            
            if ($('#error-for-reduction_code').length > 0) {
              setTimeout(function() {
                window.location = new_url;
              }, 1000);
            }
            
            let type = variable > -1 ? '&' : "?";
            window.location = new_url + type + 'discount=' + code;
          }
        });
      });
    }
  });
}

function removePromoAddNew1(removecode,code){
  $url = 'https://migration-live.hourglasscosmetics.com/discode/hourglasscosmetics.myshopify.com/'+code;
  $.get($url,function (data, textStatus, jqXHR) {
    if(data[0] == 'success'){
      var rcode = data[1];
      var rvariid = data[2];
      //var data1[rvariid] = 1;
      $.post('/cart/update.js',"updates["+rvariid+"]=1").done(function( dataa ) {
        $url = 'https://migration-live.hourglasscosmetics.com/discode/'+removecode;
        $.get($url,function (data, textStatus, jqXHR) {
          if(data[0] == 'success'){
            var rcode = data[1];
            var rvariid = data[2];
            //var data1[rvariid] = 1;
            $.post('/cart/update.js',"updates["+rvariid+"]=0").done(function( dataa ) {
				let new_url = $(location).attr("href").split('?')[0],
                variable = new_url.indexOf('?')

                if (code != "") {
                  let type = variable > -1 ? '&' : "?";
                  window.location = new_url + type + 'discount=' + code;
                } else {
                  if ($('#error-for-reduction_code').length > 0) {
                    setTimeout(function() {
                      window.location = new_url;
                    }, 1000);
                  }
                }	
            });
          }else{
            let new_url = $(location).attr("href").split('?')[0],
            variable = new_url.indexOf('?')
        
            if (code != "") {
              let type = variable > -1 ? '&' : "?";
              window.location = new_url + type + 'discount=' + code;
            } else {
              if ($('#error-for-reduction_code').length > 0) {
                setTimeout(function() {
                  window.location = new_url;
                }, 1000);
              }
            }
          }
        });
      });
    }else{
      $url = 'https://migration-live.hourglasscosmetics.com/discode/hourglasscosmetics.myshopify.com/'+removecode;
      $.get($url,function (data, textStatus, jqXHR) {
        if(data[0] == 'success'){
          var rcode = data[1];
          var rvariid = data[2];
          //var data1[rvariid] = 1;
          $.post('/cart/update.js',"updates["+rvariid+"]=0").done(function( dataa ) {
            let new_url = $(location).attr("href").split('?')[0],
                variable = new_url.indexOf('?')

            if (code != "") {
              let type = variable > -1 ? '&' : "?";
              window.location = new_url + type + 'discount=' + code;
            } else {
              if ($('#error-for-reduction_code').length > 0) {
                setTimeout(function() {
                  window.location = new_url;
                }, 1000);
              }
            }	
          });
        }else{
          let new_url = $(location).attr("href").split('?')[0],
              variable = new_url.indexOf('?')

          if (code != "") {
            let type = variable > -1 ? '&' : "?";
            window.location = new_url + type + 'discount=' + code;
          } else {
            if ($('#error-for-reduction_code').length > 0) {
              setTimeout(function() {
                window.location = new_url;
              }, 1000);
            }
          }
        }
      });
    }
  });
}

$(document).ready(function() {
  
  	/*if ($('#error-for-reduction_code').length > 0) {
      var removecode = $('.tag__wrapper').find('.reduction-code__text').text();
      $url = 'https://migration-live.hourglasscosmetics.com/discode/'+removecode;
      $.get($url,function (data, textStatus, jqXHR) {
      if(data[0] == 'success'){
        let new_url = $(location).attr("href").split('?')[0],
              variable = new_url.indexOf('?')
        setTimeout(function() {
          window.location = new_url;
        }, 1000);
      }
    }*/

    // CHECKING IF DISCOUNT IS APPLIED BY CLICKING APPLY BUTTON
    $('body').on('click', 'button[data-trekkie-id="apply_discount_button"]', function(e) {
        $(this).addClass('btn--loading');
        e.preventDefault();
      
      	var removecode = $('.tag__wrapper').find('.reduction-code__text').text();
        let code = $(this).parent().children('.field__input-wrapper').find('input').val().toUpperCase();
      	if(removecode != ""){
          	console.log('remove');
          	removePromoAddNew1(removecode,code);
        }else{
        	updatePromoMessageNew(code);
        }
        //updatePromoMessage(code)
    });

    // REMOVE DISCOUNT CODE BY CLICKING 'X'
    $('body').on('click', '.tag__button', function(e) {
      	var removecode = $('.tag__wrapper').find('.reduction-code__text').text();
        //console.log(removecode);
        updatePromoMessageRemove(removecode);
      	//updatePromoMessage('');
    });
});
