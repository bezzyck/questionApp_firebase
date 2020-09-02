// validation input.value
export  function valid(value) {
    return value.length >= 10
}

// Creat Auth modal window
export function createModal (title, content) {
    // initialize modal element
    const modalEl = document.createElement('div');
    modalEl.style.width = '400px';
    modalEl.style.height = '300px';
    modalEl.style.padding = '20px';
    modalEl.style.textContent = 'center';
    modalEl.style.margin = '100px auto';
    modalEl.style.backgroundColor = '#fff';

    const html = `
    <h1>${title}</h1>
    <div class="modal__content">${content}</div>
    `
    modalEl.innerHTML = html;

    // show modal
    mui.overlay('on', modalEl);
}