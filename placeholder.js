/**
 * @file
 * placeholder.js
 * Implements Drupal.behaviors
 */

(function($){
  Drupal.behaviors.placeholder = {
    attach: function(context, settings) {      
    $.each(Drupal.settings.placeholder, function(selector, options){
      $(selector + ':not(.placeholder-processed)').addClass('placeholder-processed').placeholder();
      
      // Hide label elements if element has "placeholder-label-hidden" class.
      $(selector).each(function(){
        if ( $(this).hasClass('placeholder-label-hidden') ) {
          $('label[for="' + $(this).attr('id') + '"]').hide();
        }
      });
    });
      
}}})(jQuery);
