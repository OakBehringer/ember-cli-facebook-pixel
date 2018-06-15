ember-cli-facebook-pixel
==============================================================================

Plugin for ember-cli that injects Facebook Pixel tracking code into HTML <head> content. 

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-facebook-pixel
```


Usage
------------------------------------------------------------------------------

Once your environment is configred to include your Pixel id (and the enabled flag is set to true), the Facebook 
 Pixel tracking code will be injected into your index.html file.
 
A service is provided for simple access to the global `fbq(...)` function inside of your Ember application.
 This service allows you to call the global `fbq(...)` function regardless of your environment - if the 
 Facebook Pixel code hasn't been injected in your head (consequently, the `fbq(...)` function 
 is not available), the service will disregard the function call. 
 
 ```js
// environment.js
 
var ENV = {
	facebookPixel: {
    	enabled: false,
    	id: 'xxxxxxxxxxxxxxx'
    }
};
 
if (environment === 'production') {
	ENV.facebookPixel.enabled = true;
}
 ```
 
```javascript
import { inject } from '@ember/service';

export default Ember.Component.extend({
	facebookPixel: inject(),
	
	actions: {
		buttonClicked() {
			this.get('facebookPixel').fbq('track', 'SomeEventName');
		}
	}
});

```

In the above example, the global `fbq(...)` function will be called in  the production environment, sending 
 `fbq('track', 'SomeEventName')`. If in the development environment, the `fbq('track', 'SomeEventName')` will be
 discarded; only a console.log statement (with the fbq parameters) will be called. 