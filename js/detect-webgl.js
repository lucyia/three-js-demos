/**
 * Detects whether the browser supports WebGL; if not it creates and displays a message; otherwise nothing happens.
 * The code is based upon a "Detecting WebGL support" from Three.js Cookbook.
 */

(function testWebGL(){

  if ( !detectWebGL() ){

    createLightBox('WebGL is not supported.');

  }

  function createLightBox(messageText){

    // wrapping div
    var lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.classname = 'white-content';
    // style
    lightbox.style['position'] = 'absolute';
    lightbox.style['width'] = '100%';
    lightbox.style['height'] = '40px';
    lightbox.style['top'] = '25%';
    lightbox.style['left'] = '0%';
    lightbox.style['padding'] = '20px';
    lightbox.style['border'] = '1px solid black';
    lightbox.style['text-align'] = 'center';

    // message to be shown
    var message = document.createElement('div');
    message.id = 'message';
    message.classname = 'err-message';
    message.textContent = messageText;

    // button for hiding the lightbox
    var close = document.createElement('a');
    close.href = 'javascript:void(0)';
    close.textContent = 'Close';
    close.addEventListener('click', hideLightBox);

    // appending to document
    lightbox.appendChild(message);
    lightbox.appendChild(close);
    document.body.appendChild(lightbox);

  }

  function hideLightBox() {

    document.getElementById('lightbox').style.display = 'none';

  }

  function detectWebGL() {

    var testCanvas = document.createElement('canvas');
    var webgl;

    // if exceptions are thrown, indicate webgl is null
    try {
      webgl = testCanvas.getContext('webgl');
    } catch (e) {
      webgl = null;
    }

    // if null, try experimental
    if ( webgl === null ) {
      try {
        webgl = testCanvas.getContext('experimental-webgl');
      } catch ( e ) {
        webgl = null;
      }
    }

    // if webgl is set, return true; otherwise false
    if ( webgl ) {
      return true;
    } else {
      return false;
    }

  }

})();
