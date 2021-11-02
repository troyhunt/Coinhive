// Credit to https://w3bits.com/javascript-modal/

let createModal = (modalContent) => {
  let modal = document.createElement('div'),
    modalStyle = document.createElement('style'),
    modalCSS = '.js-modal{ position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, .8); width: 100%; height: 100%; z-index: 999999; } .js-modal-inner{ background-color: rgba(174, 145, 93, .9); position: relative; padding: 50px; font-size: 24px; max-width: 650px; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #000; border-radius: 10px; font-family: Arial, Tahoma, Helvetica, FreeSans, sans-serif; line-height: normal; text-align: center; }  .js-modal-inner a { color: #000; text-decoration: underline; }',
    theBody = document.getElementsByTagName('body')[0],
    theHead = document.getElementsByTagName('head')[0];

  // Add content and attributes to the modal
  modal.setAttribute('class', 'js-modal');
  modal.innerHTML = '<div class="js-modal-inner">' + modalContent + '</div>';
  theBody.appendChild(modal);

  // Add the modal styles dynamically
  if(modalStyle.styleSheet){
    modalStyle.styleSheet.cssText = modalCSS;
  } else {
    modalStyle.appendChild(document.createTextNode(modalCSS));
  }
  theHead.appendChild(modalStyle);
}

// Show it up when loading starts
window.addEventListener('load', function() {
  let url = 'https://www.troyhunt.com/i-now-own-the-coinhive-domain-heres-how-im-fighting-cryptojacking-and-doing-good-things-with-content-security-policies';
  createModal('This website attempted to run a cryptominer in your browser. <a href="' + url + '">Click here for more information</a>.');
  setTimeout(function(){ location.href=url; }, 5000);
});