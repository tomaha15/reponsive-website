window.addEventListener('DOMContentLoaded', setup);

function setup() {
    const options = {
        rootMargin: '0px 0px -400px 0px'
    }


    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    }, options)

    const content = document.querySelectorAll('.content');

    content.forEach(content => observer.observe(content));
}