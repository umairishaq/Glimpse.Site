$().ready(function () {
    $('#mobile-menu-button').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('open')) {
           $(this).removeClass('open');
           $('#nav-container').animate({'height':'56px'}, 500);
        } else {
            $('#nav-container').animate({'height':'375px'}, 500);
            $(this).addClass('open');
        }
    });
    if (navigator.appName.indexOf("Internet Explorer")!=-1) {
      $("body").addClass("ie");
    }
    $('.notes-link').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open').parent().find('.release-notes').toggleClass('open');

    });
});

