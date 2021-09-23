let IsOpen = false;

$('.nav__menu').click(function () {
    if (IsOpen === false) {
        $('.nav__nav-links').css('display' , 'flex');
        IsOpen = true;
    }
    else {
        $('.nav__nav-links').css('display' , 'none');
        IsOpen = false;
    }
})