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
    // Preserve input typed while the original deferred search is still loading.
    let typedValue = input.value || null;
    input.addEventListener('input', () => { typedValue = input.value; });
    const restoreTypedValue = () => {
        if (typedValue !== null) input.value = typedValue;
    };
    document.addEventListener('DOMContentLoaded', restoreTypedValue, {once: true});
    document.querySelector('script[src*="/assets/suche.js"]')?.addEventListener(
        'load', restoreTypedValue, {once: true}
    );

    // Catch the keyword before the normal search handles the form submission.
    input.form?.addEventListener('submit', event => {
        if (document.readyState !== 'complete') restoreTypedValue();
        if (!isEli(input.value)) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        openEli();
    }, true);

    if (isEli(new URLSearchParams(location.search).get('q'))) openEli();
})();
