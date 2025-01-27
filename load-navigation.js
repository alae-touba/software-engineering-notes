const BASE_URL = ['localhost', '127.0.0.1'].includes(location.hostname)  ? '' : '/software-engineering-notes';
fetch(`${BASE_URL}/navigation.html`)
    .then(r => r.text())
    .then(html => document.body.insertAdjacentHTML('afterbegin', html));