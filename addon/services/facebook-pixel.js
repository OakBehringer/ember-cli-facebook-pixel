import Service from '@ember/service';

export default Ember.Service.extend({

  /**
   * This function will only send Facebook Pixel stuff along if the fbq global is found (safe for use in dev)
   */
  fbq: function() {
    if (typeof(fbq) !== 'undefined') {
      return fbq(...arguments);
    }
    else {
      console.log('fbq not found, function not called: ', ...arguments);
    }

    return null;
  }

});
