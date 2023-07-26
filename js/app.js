const arrows = document.querySelector('.left-content');

arrows.addEventListener('click', e => {
    const menuClass = e.target.classList;

    // console.log(menuClass);
    const container = document.querySelector('.app'),
        leftArrow = document.querySelector('.fa-arrow-left'),
        rightArrow = document.querySelector('.fa-arrow-right');

    if (menuClass.contains('fa-arrow-left')) {
        // console.log('Clicked on the arrow');
        container.classList.add('no-menu');

        e.target.style.display = 'none';

        rightArrow.style.display = 'block';
    }
    else if(menuClass.contains('fa-arrow-right')) {
        // console.log('Clicked in another element');
        container.classList.remove('no-menu');

        e.target.style.display = 'none';

        leftArrow.style.display = 'block';
    }
})