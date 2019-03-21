$(document).ready(function () {


    $('#btn_fixed').click(function (event) {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
    })

    $(function (up) {
        var btn = up('.a_btn_fixed');
        up(window).scroll(function () {
            btn['fade' + (up(this).scrollTop() > 300 ? 'In' : 'Out')](50);
        });
    });

    $('.btn-registraion').click(function (event) {
        var target_pack = $('.package_list').offset().top;
        $('body,html').animate({
            scrollTop: target_pack
        }, 700);
    })

    $('.header_content_button').click(function (event) {
        var target_pack = $('.title_with_bottom_woman').offset().top;
        $('body,html').animate({
            scrollTop: target_pack
        }, 700);
    })

    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });


    $('.plus').on('click', function () {
        $(this).parent().find('.answer_description').toggle(300);
        $(this).css({
            'transform': 'rotate(-45deg)'
        });

    })

    // $('#form').validate();

    jQuery(function () {
        $('#form').validatr();
    });

})


// $(document).ready(function () {

//     var jVal = {
//         'name_input': function () {
//             $('body').append('<div id"name_form" class="info"></div>');
//             var nameForm = $('#name_form');
//             var ele = $('#name_input');
//             var pos = ele.offset();
//             nameForm.css({
//                 top: pos.top - 3,
//                 left: pos.left + ele.width() + 15
//             });
//             if (ele.val().length < 5) {
//                 jVal.errors = true;
//                 nameForm.removeClass('correct').addClass('error').html('at least 5 cherecters').show();
//                 ele.removeClass('normal').addClass('wrong');
//             } else {
//                 nameForm.removeClass('error').addClass('correct').html('OK').show();
//                 ele.removeClass('wrong').addClass('normal');
//             }
//         }
//     };
//     $('#name_input').change(jVal.name_input);
//     console.log('nameForm');
// })

// section_form

// name_input

// form_bottom_woman