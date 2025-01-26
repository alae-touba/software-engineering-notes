fetch('/software-engineering-notes/navigation.html')
    .then(r => r.text())
    .then(html => document.body.insertAdjacentHTML('afterbegin', html));