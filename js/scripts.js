$(document).ready(function () {
    ConvertNumberToPersion();

    function ConvertNumberToPersion() {
        var persian = {
            0: '۰',
            1: '۱',
            2: '۲',
            3: '۳',
            4: '۴',
            5: '۵',
            6: '۶',
            7: '۷',
            8: '۸',
            9: '۹'
        };

        function traverse(el) {
            if (el.nodeType == 3) {
                var list = el.data.match(/[0-9]/g);
                if (list != null && list.length != 0) {
                    for (var i = 0; i < list.length; i++)
                        el.data = el.data.replace(list[i], persian[list[i]]);
                }
            }
            for (var i = 0; i < el.childNodes.length; i++) {
                traverse(el.childNodes[i]);
            }
        }
        traverse(document.body);
    }



   $('.danial-hamburger-open-btn').on('click',function(){
          console.log('Show');
          $('nav').css({
              'height':'100%',
              'position':'fixed',
              'z-index':'100',
              'width':'100%',
              'top':'0',
          });
          $('nav ul').css({
              'display':'block',
          });
          $('.danial-hamburger-open-btn').css({'display':'none'});
          $('.danial-hamburger-close-btn').css({'display':'inline-block'});
    
   });
   $('.danial-hamburger-close-btn').on('click',function(){
          console.log('Hide');
          $('nav').css({
              'height':'100%',
              'position':'relative',
              'z-index':'0',
          });
          $('nav ul').css({
              'display':'none',
          });
          $('.danial-hamburger-open-btn').css({'display':'inline-block'});
          $('.danial-hamburger-close-btn').css({'display':'none'});
    
   });



});