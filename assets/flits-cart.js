!function(t,n){t=t||"docReady";var e=[],o=!1,d=!1;function a(){if(!o){o=!0;for(var t=0;t<e.length;t++)e[t].fn.call(window,e[t].ctx);e=[]}}function c(){"complete"===document.readyState&&a()}(n=n||window)[t]=function(t,n){if("function"!=typeof t)throw new TypeError("callback for docReady(fn) must be a function");o?setTimeout(function(){t(n)},1):(e.push({fn:t,ctx:n}),"complete"===document.readyState?setTimeout(a,1):d||(document.addEventListener?(document.addEventListener("DOMContentLoaded",a,!1),window.addEventListener("load",a,!1)):(document.attachEvent("onreadystatechange",c),window.attachEvent("onload",a)),d=!0))}}("flits_docReady",window);
if (!window.flitsApp || typeof window.flitsApp == "undefined") {
  window.flitsApp = {};
}
window.flitsApp.moneyFormats={USD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} USD"},EUR:{money_format:"&euro;{{amount}}",money_with_currency_format:"&euro;{{amount}} EUR"},GBP:{money_format:"&pound;{{amount}}",money_with_currency_format:"&pound;{{amount}} GBP"},CAD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} CAD"},ALL:{money_format:"Lek {{amount}}",money_with_currency_format:"Lek {{amount}} ALL"},DZD:{money_format:"DA {{amount}}",money_with_currency_format:"DA {{amount}} DZD"},AOA:{money_format:"Kz{{amount}}",money_with_currency_format:"Kz{{amount}} AOA"},ARS:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} ARS"},AMD:{money_format:"{{amount}} AMD",money_with_currency_format:"{{amount}} AMD"},AWG:{money_format:"Afl{{amount}}",money_with_currency_format:"Afl{{amount}} AWG"},AUD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} AUD"},BBD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} Bds"},AZN:{money_format:"m.{{amount}}",money_with_currency_format:"m.{{amount}} AZN"},BDT:{money_format:"Tk {{amount}}",money_with_currency_format:"Tk {{amount}} BDT"},BSD:{money_format:"BS${{amount}}",money_with_currency_format:"BS${{amount}} BSD"},BHD:{money_format:"{{amount}}0 BD",money_with_currency_format:"{{amount}}0 BHD"},BYR:{money_format:"Br {{amount}}",money_with_currency_format:"Br {{amount}} BYR"},BZD:{money_format:"BZ${{amount}}",money_with_currency_format:"BZ${{amount}} BZD"},BTN:{money_format:"Nu {{amount}}",money_with_currency_format:"Nu {{amount}} BTN"},BAM:{money_format:"KM {{amount_with_comma_separator}}",money_with_currency_format:"KM {{amount_with_comma_separator}} BAM"},BRL:{money_format:"R$ {{amount_with_comma_separator}}",money_with_currency_format:"R$ {{amount_with_comma_separator}} BRL"},BOB:{money_format:"Bs{{amount_with_comma_separator}}",money_with_currency_format:"Bs{{amount_with_comma_separator}} BOB"},BWP:{money_format:"P{{amount}}",money_with_currency_format:"P{{amount}} BWP"},BND:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} BND"},BGN:{money_format:"{{amount}} лв",money_with_currency_format:"{{amount}} лв BGN"},MMK:{money_format:"K{{amount}}",money_with_currency_format:"K{{amount}} MMK"},KHR:{money_format:"KHR{{amount}}",money_with_currency_format:"KHR{{amount}}"},KYD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} KYD"},XAF:{money_format:"FCFA{{amount}}",money_with_currency_format:"FCFA{{amount}} XAF"},CLP:{money_format:"${{amount_no_decimals}}",money_with_currency_format:"${{amount_no_decimals}} CLP"},CNY:{money_format:"&#165;{{amount}}",money_with_currency_format:"&#165;{{amount}} CNY"},COP:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} COP"},CRC:{money_format:"&#8353; {{amount_with_comma_separator}}",money_with_currency_format:"&#8353; {{amount_with_comma_separator}} CRC"},HRK:{money_format:"{{amount_with_comma_separator}} kn",money_with_currency_format:"{{amount_with_comma_separator}} kn HRK"},CZK:{money_format:"{{amount_with_comma_separator}} K&#269;",money_with_currency_format:"{{amount_with_comma_separator}} K&#269;"},DKK:{money_format:"{{amount_with_comma_separator}}",money_with_currency_format:"kr.{{amount_with_comma_separator}}"},DOP:{money_format:"RD$ {{amount}}",money_with_currency_format:"RD$ {{amount}}"},XCD:{money_format:"${{amount}}",money_with_currency_format:"EC${{amount}}"},EGP:{money_format:"LE {{amount}}",money_with_currency_format:"LE {{amount}} EGP"},ETB:{money_format:"Br{{amount}}",money_with_currency_format:"Br{{amount}} ETB"},XPF:{money_format:"{{amount_no_decimals_with_comma_separator}} XPF",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} XPF"},FJD:{money_format:"${{amount}}",money_with_currency_format:"FJ${{amount}}"},GMD:{money_format:"D {{amount}}",money_with_currency_format:"D {{amount}} GMD"},GHS:{money_format:"GH&#8373;{{amount}}",money_with_currency_format:"GH&#8373;{{amount}}"},GTQ:{money_format:"Q{{amount}}",money_with_currency_format:"{{amount}} GTQ"},GYD:{money_format:"G${{amount}}",money_with_currency_format:"${{amount}} GYD"},GEL:{money_format:"{{amount}} GEL",money_with_currency_format:"{{amount}} GEL"},HNL:{money_format:"L {{amount}}",money_with_currency_format:"L {{amount}} HNL"},HKD:{money_format:"${{amount}}",money_with_currency_format:"HK${{amount}}"},HUF:{money_format:"{{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} Ft"},ISK:{money_format:"{{amount_no_decimals}} kr",money_with_currency_format:"{{amount_no_decimals}} kr ISK"},INR:{money_format:"Rs. {{amount}}",money_with_currency_format:"Rs. {{amount}}"},IDR:{money_format:"{{amount_with_comma_separator}}",money_with_currency_format:"Rp {{amount_with_comma_separator}}"},ILS:{money_format:"{{amount}} NIS",money_with_currency_format:"{{amount}} NIS"},JMD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} JMD"},JPY:{money_format:"&#165;{{amount_no_decimals}}",money_with_currency_format:"&#165;{{amount_no_decimals}} JPY"},JEP:{money_format:"&pound;{{amount}}",money_with_currency_format:"&pound;{{amount}} JEP"},JOD:{money_format:"{{amount}}0 JD",money_with_currency_format:"{{amount}}0 JOD"},KZT:{money_format:"{{amount}} KZT",money_with_currency_format:"{{amount}} KZT"},KES:{money_format:"KSh{{amount}}",money_with_currency_format:"KSh{{amount}}"},KWD:{money_format:"{{amount}}0 KD",money_with_currency_format:"{{amount}}0 KWD"},KGS:{money_format:"лв{{amount}}",money_with_currency_format:"лв{{amount}}"},LVL:{money_format:"Ls {{amount}}",money_with_currency_format:"Ls {{amount}} LVL"},LBP:{money_format:"L&pound;{{amount}}",money_with_currency_format:"L&pound;{{amount}} LBP"},LTL:{money_format:"{{amount}} Lt",money_with_currency_format:"{{amount}} Lt"},MGA:{money_format:"Ar {{amount}}",money_with_currency_format:"Ar {{amount}} MGA"},MKD:{money_format:"ден {{amount}}",money_with_currency_format:"ден {{amount}} MKD"},MOP:{money_format:"MOP${{amount}}",money_with_currency_format:"MOP${{amount}}"},MVR:{money_format:"Rf{{amount}}",money_with_currency_format:"Rf{{amount}} MRf"},MXN:{money_format:"$ {{amount}}",money_with_currency_format:"$ {{amount}} MXN"},MYR:{money_format:"RM{{amount}} MYR",money_with_currency_format:"RM{{amount}} MYR"},MUR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} MUR"},MDL:{money_format:"{{amount}} MDL",money_with_currency_format:"{{amount}} MDL"},MAD:{money_format:"{{amount}} dh",money_with_currency_format:"Dh {{amount}} MAD"},MNT:{money_format:"{{amount_no_decimals}} &#8366",money_with_currency_format:"{{amount_no_decimals}} MNT"},MZN:{money_format:"{{amount}} Mt",money_with_currency_format:"Mt {{amount}} MZN"},NAD:{money_format:"N${{amount}}",money_with_currency_format:"N${{amount}} NAD"},NPR:{money_format:"Rs{{amount}}",money_with_currency_format:"Rs{{amount}} NPR"},ANG:{money_format:"&fnof;{{amount}}",money_with_currency_format:"{{amount}} NA&fnof;"},NZD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} NZD"},NIO:{money_format:"C${{amount}}",money_with_currency_format:"C${{amount}} NIO"},NGN:{money_format:"&#8358;{{amount}}",money_with_currency_format:"&#8358;{{amount}} NGN"},NOK:{money_format:"kr {{amount_with_comma_separator}}",money_with_currency_format:"kr {{amount_with_comma_separator}} NOK"},OMR:{money_format:"{{amount_with_comma_separator}} OMR",money_with_currency_format:"{{amount_with_comma_separator}} OMR"},PKR:{money_format:"Rs.{{amount}}",money_with_currency_format:"Rs.{{amount}} PKR"},PGK:{money_format:"K {{amount}}",money_with_currency_format:"K {{amount}} PGK"},PYG:{money_format:"Gs. {{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"Gs. {{amount_no_decimals_with_comma_separator}} PYG"},PEN:{money_format:"S/. {{amount}}",money_with_currency_format:"S/. {{amount}} PEN"},PHP:{money_format:"&#8369;{{amount}}",money_with_currency_format:"&#8369;{{amount}} PHP"},PLN:{money_format:"{{amount_with_comma_separator}} zl",money_with_currency_format:"{{amount_with_comma_separator}} zl PLN"},QAR:{money_format:"QAR {{amount_with_comma_separator}}",money_with_currency_format:"QAR {{amount_with_comma_separator}}"},RON:{money_format:"{{amount_with_comma_separator}} lei",money_with_currency_format:"{{amount_with_comma_separator}} lei RON"},RUB:{money_format:"&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",money_with_currency_format:"&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"},RWF:{money_format:"{{amount_no_decimals}} RF",money_with_currency_format:"{{amount_no_decimals}} RWF"},WST:{money_format:"WS$ {{amount}}",money_with_currency_format:"WS$ {{amount}} WST"},SAR:{money_format:"{{amount}} SR",money_with_currency_format:"{{amount}} SAR"},STD:{money_format:"Db {{amount}}",money_with_currency_format:"Db {{amount}} STD"},RSD:{money_format:"{{amount}} RSD",money_with_currency_format:"{{amount}} RSD"},SCR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} SCR"},SGD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} SGD"},SYP:{money_format:"S&pound;{{amount}}",money_with_currency_format:"S&pound;{{amount}} SYP"},ZAR:{money_format:"R {{amount}}",money_with_currency_format:"R {{amount}} ZAR"},KRW:{money_format:"&#8361;{{amount_no_decimals}}",money_with_currency_format:"&#8361;{{amount_no_decimals}} KRW"},LKR:{money_format:"Rs {{amount}}",money_with_currency_format:"Rs {{amount}} LKR"},SEK:{money_format:"{{amount_no_decimals}} kr",money_with_currency_format:"{{amount_no_decimals}} kr SEK"},CHF:{money_format:"SFr. {{amount}}",money_with_currency_format:"SFr. {{amount}} CHF"},TWD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} TWD"},THB:{money_format:"{{amount}} &#xe3f;",money_with_currency_format:"{{amount}} &#xe3f; THB"},TZS:{money_format:"{{amount}} TZS",money_with_currency_format:"{{amount}} TZS"},TTD:{money_format:"${{amount}}",money_with_currency_format:"${{amount}} TTD"},TND:{money_format:"{{amount}}",money_with_currency_format:"{{amount}} DT"},TRY:{money_format:"{{amount}}TL",money_with_currency_format:"{{amount}}TL"},UGX:{money_format:"Ush {{amount_no_decimals}}",money_with_currency_format:"Ush {{amount_no_decimals}} UGX"},UAH:{money_format:"₴{{amount}}",money_with_currency_format:"₴{{amount}} UAH"},AED:{money_format:"Dhs. {{amount}}",money_with_currency_format:"Dhs. {{amount}} AED"},UYU:{money_format:"${{amount_with_comma_separator}}",money_with_currency_format:"${{amount_with_comma_separator}} UYU"},VUV:{money_format:"${{amount}}",money_with_currency_format:"${{amount}}VT"},VEF:{money_format:"Bs. {{amount_with_comma_separator}}",money_with_currency_format:"Bs. {{amount_with_comma_separator}} VEF"},VND:{money_format:"{{amount_no_decimals_with_comma_separator}}&#8363;",money_with_currency_format:"{{amount_no_decimals_with_comma_separator}} VND"},XBT:{money_format:"{{amount_no_decimals}} BTC",money_with_currency_format:"{{amount_no_decimals}} BTC"},XOF:{money_format:"CFA{{amount}}",money_with_currency_format:"CFA{{amount}} XOF"},ZMW:{money_format:"K{{amount_no_decimals_with_comma_separator}}",money_with_currency_format:"ZMW{{amount_no_decimals_with_comma_separator}}"}},window.flitsApp.formatMoney=function(o,m){"string"==typeof o&&(o=o.replace(".",""));var t="",_=/\{\{\s*(\w+)\s*\}\}/,a=m||"${{amount}}";function n(o,m){return void 0===o?m:o}function r(o,m,t,_){if(m=n(m,2),t=n(t,","),_=n(_,"."),isNaN(o)||null==o)return 0;var a=(o=(o/100).toFixed(m)).split(".");return a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+t)+(a[1]?_+a[1]:"")}switch(a.match(_)[1]){case"amount":t=r(o,2);break;case"amount_no_decimals":t=r(o,0);break;case"amount_with_comma_separator":t=r(o,2,".",",");break;case"amount_no_decimals_with_comma_separator":t=r(o,0,".",",")}return a.replace(_,t)};
window.flitsApp.credit_on_cart = function(){
  this.that = this;
  this.get_credit_url = "/get_credit";
  this.apply_credit_url = "/credit/apply_credit";
  this.div_code_class = "flits-credit-code-div";
  this.flits_token = ""
  this.customer_url = "";
  this.cart_data = {}; 		

                              this.get_ajax_obj = function () {
                              if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
                              return new XMLHttpRequest();
                             } else if (window.ActiveXObject) { // IE 6 and older
                               return new ActiveXObject("Microsoft.XMLHTTP");
                             }
};
this.set_automatic_code = function(){
  var checkout_selectors = ["input[name='checkout']", "button[name='checkout']", "[href$='checkout']"];

  checkout_selectors.forEach(function (selector) {
    var els = document.querySelectorAll(selector);
    if (typeof els == "object" && els) {
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (typeof el.addEventListener != "function") {
          return;
        }
        var cloneNode = document.getElementById('flits-cart-automatic-code').children[0].cloneNode(true);
        el.parentElement.insertBefore(cloneNode,el.parentElement.firstChild)

        el.addEventListener("click", function (ev) {
          //                    ev.preventDefault();
          var btn = this;
          var that = window.flitsApp.credit_on_cart_obj;

          that.get_discount_code(ev, btn);
        }, false);

      }
    }
  });
};	
this.serialize = function (obj) {
  var str = [];
  for (var p in obj){
    if (obj.hasOwnProperty(p)) {
      if(typeof obj[p] == "object" || typeof obj[p] == "array"){
        for(var key in obj[p]){
          str.push(encodeURIComponent(p+"["+key+"]") + "=" + encodeURIComponent(obj[p][key]));
        }
      }else{
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }

    }
  }
  return str.join("&");
};
this.parseHTML = function(str){
  if(!str){
    return document.createElement( 'div' );
  }
  var el = document.createElement( 'html' );
  el.innerHTML = "<html><head><title>titleTest</title></head><body><div>"+str+"</div></body></html>";
  return el.querySelector('body div');
};
this.generate_code = function(data){
  var moneyFormat = "$ {{ amount }}";
  if(document.querySelector("#flits-shop-money-format")){
	moneyFormat = document.querySelector("#flits-shop-money-format").value;
  }
  var that = this;
  var total_credits = data.total_credits;
  var rules = data.rules;
  var result = "";
  if(rules.length > 0){
    result += "<select name='flits-want-to-use-credit'>"
    +"<option value='-1'>"+window.flitsApp.multilang_cart.spent_rules.select_store_credit_option+"</option>";
  }

  for(var i = 0; i < rules.length; i++){
    var credits = rules[i].applicable_credits;
    var rule_id = rules[i].rule.id
    var option_text = "You can use ##credits## credits out of ##total_credits##.";        
    switch(rules[i].rule.rule.column.name){
      case 'cart_value':
        option_text = window.flitsApp.multilang_cart.spent_rules.credit_cart_percentage.replace('##credits##',window.flitsApp.formatMoney(Math.abs(credits),moneyFormat).replace(/((\,00)|(\.00))$/g, ''));
        option_text = option_text.replace('##total_credits##',window.flitsApp.formatMoney(Math.abs(total_credits),moneyFormat).replace(/((\,00)|(\.00))$/g, ''));            
        break;
      default :
        option_text = option_text.replace('##credits##',window.flitsApp.formatMoney(Math.abs(credits),moneyFormat).replace(/((\,00)|(\.00))$/g, ''));
        option_text = option_text.replace('##total_credits##',window.flitsApp.formatMoney(Math.abs(total_credits),moneyFormat).replace(/((\,00)|(\.00))$/g, ''));   
        break;
    }
    result += "<option value='"+rule_id+"'>"+option_text+"</option>";
  }
  if(rules.length > 0){
    result += "</select>";    
  }
  return that.parseHTML(result);
};
this.get_code = function(cart_data){
  var that = window.flitsApp.credit_on_cart_obj; 
  var cart_url = that.customer_url+that.get_credit_url;
  var cart_code_ajax = that.get_ajax_obj();
  cart_code_ajax.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        var res = JSON.parse(this.responseText);
        if(res.is_credit_on_cart == "0"){
          return ;
        }
        var code = that.generate_code(res.code);

        var our_div_code = document.querySelectorAll("."+that.div_code_class);
        for(var i = 0;i < our_div_code.length ;i++){
          our_div_code[i].append(code.cloneNode(true));
        }
      } else {
        if (typeof error == "function") {

        }
      }
    }
  };
  cart_code_ajax.open("POST", cart_url, true);
  cart_code_ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  Object.defineProperty(cart_data, 'cart_token',
                        Object.getOwnPropertyDescriptor(cart_data, 'token'));
  delete cart_data['token'];
    var remove_attribute = ["product_description","title","url","handle","product_type","product_title"];

    for (var i = 0; i < cart_data.items.length; i++) {
      for(var j = 0 ; j < remove_attribute.length; j ++){
        if(!that.isNull(cart_data.items[i][remove_attribute[j]])){
          delete cart_data.items[i][remove_attribute[j]];
        }
      }
    }
  var params = that.serialize({
    token: that.flits_token,
    cart: btoa(unescape(encodeURIComponent(JSON.stringify(cart_data))))
  });

  cart_code_ajax.send(params);
}
this.init = function(){
  this.customer_url = document.getElementById("flits-customer-url").value;
  this.flits_token = document.getElementById("flits-token").value;
  this.apply_credit_url = this.customer_url + this.apply_credit_url;
  var automatic_code = 0;
  if(document.getElementById('flits-is-cart-automatic')){
    automatic_code = document.getElementById('flits-is-cart-automatic').value;
  }
  if(automatic_code == 1){
    this.set_automatic_code();
  }   
  this.getCartData(this.get_code,function(){
    console.error('cannot get cart data');
  });
}
this.getCookie = function (cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}; 	
this.getCartData = function (success, error) {
  var that = this;
  var cart_url = "/cart.json";
  var cart_ajax = that.get_ajax_obj();
  cart_ajax.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        if (typeof success == "function") {
          var res = JSON.parse(this.responseText);
          success(res);
        }
      } else {
        if (typeof error == "function") {
          error();
        }
      }
    }
  };
  cart_ajax.open("GET", cart_url, true);
  cart_ajax.send();
};
this.get_discount_code = function (event, btn) {

  var that = this;
  var is_checkbox = false;

  var element = btn.closest('form').querySelector("[name='flits-want-to-use-credit']");
  var spent_rule_id = -1;	
  if(element && element.tagName.toString().toLowerCase() == "select"){
    is_checkbox = false;
  }
  else{
    is_checkbox = true;
  }

  if (is_checkbox && element.checked) {
    event.preventDefault();
  }else if(!is_checkbox && element.value !== "-1"){
    spent_rule_id = element.value;
    event.preventDefault();
  } else {
    return true;
  }

  var old_text = btn.innerHTML;
  var new_text = window.flitsApp.multilang.applying_credit_message;

  if (btn.tagName.toString().toLowerCase() == "input") {
    old_text = btn.value;
    btn.value = new_text;
  } else {
    old_text = btn.innerHTML;
    btn.innerHTML = new_text;
  }
  btn.setAttribute('disabled', true);
  that.getCartData(function (cart) {
    var URL = "/credit/apply_credit";
    var token = document.getElementById("flits-token").value;
    URL = document.getElementById("flits-customer-url").value + URL;
    var ajax = that.get_ajax_obj();
    ajax.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        var res = JSON.parse(this.responseText);
        if (btn.tagName.toString().toLowerCase == "input") {
          btn.value = old_text;
        } else {
          btn.innerHTML = old_text;
        }

        btn.setAttribute("disabled", false);
        if (res.status) {
          location.href = "/checkout?discount=" + res.code;
        }
      }
    };
    ajax.open("POST", URL, true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    Object.defineProperty(cart, 'cart_token',
                          Object.getOwnPropertyDescriptor(cart, 'token'));
    delete cart['token'];
    var remove_attribute = ["product_description","title","url","handle","product_type","product_title"];

    for (var i = 0; i < cart.items.length; i++) {
      for(var j = 0 ; j < remove_attribute.length; j ++){
        if(!that.isNull(cart.items[i][remove_attribute[j]])){
          delete cart.items[i][remove_attribute[j]];
        }
      }
    }

    var params = "token=" + token + "&data=" + btoa(unescape(encodeURIComponent(JSON.stringify(cart))))+"&spent_rule_id="+spent_rule_id;
    ajax.send(params);
  }, function () {
    location.href = "/checkout";
  });
};
this.isNull = function(x){
  return (typeof x == "undefined" || x == null || x.toString().trim() == "");
};
this.add_click_event = function(){
  $(document).on('click','[name="checkout"]',function(ev){
    var btn = this;
    var that = window.flitsApp.credit_on_cart_obj;

    that.get_discount_code(ev, btn);
  });
};
this.init();
}

flits_docReady(function () {
  window.flitsApp.credit_on_cart_obj = new window.flitsApp.credit_on_cart();
});