//JQuery Module Pattern
"use strict";
AOS.init();
// An object literal
const app = {
  init() {
    app.functionOne();
  },
  functionOne() {
  }
};
$("document").ready(() => {
  AOS.init({disable: 'mobile'});
  let scrollRef = 0
  window.addEventListener('scroll', function () {
    scrollRef <= 10 ? scrollRef++ : AOS.refresh()
  })
});

$("document").ready(() => {
  
  app.init();
  $("document").ready(function(){
    AOS.init({disable: 'mobile'})
    $( ".nav-item" ).bind( "click", function(event) {
      var clickedItem = $( this );
      $( ".nav-item" ).each( function() {
        $( this ).removeClass( "active" );
      });
      clickedItem.addClass( "active" );
    });
  })
});



