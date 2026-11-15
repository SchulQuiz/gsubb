/* ELI: independent shortcut. Remove this file and its script tag to disable it. */
(() => {
    'use strict';
    const input = document.querySelector('#search');
    if (!input) return;

    const isEli = value => String(value || '').trim().toLowerCase() === 'eli';
    const destination = new URL(
        location.protocol === 'file:' ? '../Eli/index.html' : '../Eli/',
        location.href
    ).href;
    const openEli = () => location.replace(destination);

    // Catch the keyword before the normal search handles the form submission.
    input.form?.addEventListener('submit', event => {
        if (!isEli(input.value)) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        openEli();
    }, true);

    if (isEli(new URLSearchParams(location.search).get('q'))) openEli();
})();
