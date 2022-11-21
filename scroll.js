document.lastScrollPosition = 0;

document.addEventListener('scroll', () => {
    const direction = window.scrollY - document.lastScrollPosition > 0 ? 'down' :'up';
    

    window.lastScrollPosition = window.scrollY;
})