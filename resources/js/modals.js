import { Modal } from 'bootstrap';
let message ='';

let modalsElement = document.getElementById('livewire-bootstrap-modal');
modalsElement.addEventListener('hidePrevented.bs.modal', event => {
    if (confirm(message)) {
        let modal = Modal.getInstance(modalsElement);
        modal.hide();
    }
});
modalsElement.addEventListener('hidden.bs.modal', (e) => {
    Livewire.dispatch('resetModal');
});

Livewire.on('showBootstrapModal', (e) => {
    console.log(e);
    if(e.backdrop=='static'){
        modalsElement.setAttribute('data-bs-backdrop', 'static');
        message = e.message;
    }else{
        modalsElement.removeAttribute('data-bs-backdrop');
    }
    let modal = Modal.getOrCreateInstance(modalsElement)
    modal.show();

});

Livewire.on('hideModal', () => {
    let modal = Modal.getInstance(modalsElement);
    modal.hide();
    Livewire.dispatch('resetModal');


});
