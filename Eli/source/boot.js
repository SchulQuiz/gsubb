import('./scene.js').catch(error => {
    console.error(error);
    document.querySelector('#loading').hidden = true;
    document.querySelector('#error').hidden = false;
});
