// Credit to https://w3bits.com/javascript-modal/

let createModal = (modalContent) => {
    let modal      = document.createElement('div'),
        modalStyle = document.createElement('style'),
        modalCSS   = '.js-modal{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(0, 0, 0, .8); width: 100%; height: 100%; z-index: 999999; } .js-modal-inner{ background-color: rgba(174, 145, 93, .9); position: relative; padding: 50px; font-size: 24px; max-width: 650px; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #000; border-radius: 10px; font-family: Arial, Tahoma, Helvetica, FreeSans, sans-serif; line-height: normal; text-align: center; }  .js-modal-inner a { color: #000; text-decoration: underline; } .js-modal-close{ position: absolute; top: -10px; right: -10px; background-color: black; color: #eee; border-width: 0; font-size: 10px; height: 24px; width: 24px; border-radius: 100%; text-align: center; font-family: Arial; }',
        modalClose = document.createElement('button'),
        modalInner = document.createElement('div'),
        theBody    = document.getElementsByTagName('body')[0],
        theHead    = document.getElementsByTagName('head')[0];

    modalClose.classList.add('js-modal-close');
    modalClose.innerText = 'X';

    modalInner.classList.add('js-modal-inner');
    modalInner.innerHTML = modalContent;

    modalInner.appendChild(modalClose);

    // Add content and attributes to the modal
    modal.classList.add('js-modal');
    modal.appendChild(modalInner);

    theBody.appendChild(modal);

    // Add the modal styles dynamically
    if (modalStyle.styleSheet) {
        modalStyle.styleSheet.cssText = modalCSS;
    } else {
        modalStyle.appendChild(document.createTextNode(modalCSS));
    }

    theHead.appendChild(modalStyle);

    const keydownEventListener = event => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };

    const closeModal = () => {
        modal.remove();
        modalStyle.remove();
        sessionStorage.setItem('coinhive-modal-shown', '1');
        theBody.removeEventListener('keydown', keydownEventListener)
    };

    // Close the modal on button-click
    modalClose.addEventListener('click', closeModal);

    theBody.addEventListener('keydown', keydownEventListener);
}

if (sessionStorage.getItem('coinhive-modal-shown') === null) {
    // Show it up when loading starts
    window.addEventListener('load', function () {
        /* Remember to escape the characters to their respective valid HTML entities, for eg. ' will become \' */
        createModal('This website attempted to run a cryptominer in your browser. <a href="https://www.troyhunt.com/i-now-own-the-coinhive-domain-heres-how-im-fighting-cryptojacking-and-doing-good-things-with-content-security-policies">Click here for more information</a>.');
    });
}
