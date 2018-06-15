'use strict';

module.exports = {
  name: 'ember-cli-facebook-pixel',
  contentFor: function(type, config) {
    if (type === 'head' && config.facebookPixel && config.facebookPixel.enabled && config.facebookPixel.id) {
      return '<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=\'2.0\';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,\'script\',\'https://connect.facebook.net/en_US/fbevents.js\');fbq(\'init\', \'' + config.facebookPixel.id + '\');</script>';
    }
  }
};
