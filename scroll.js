const content = document.querySelectorAll('.content');

const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('active', entry.isIntersecting)
    } )
},{threshold:1,})

content.forEach(card => {
    observer.observe(card)
})