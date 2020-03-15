/* Скрипты календаря */

var months = ['Январь', 'Февраль', 'Март', 'Апрель', "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
var monthsAlt = ['января', 'февраля', 'марта', 'апреля', "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]

function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    var weekday;
    while (date.getMonth() === month) {
        dayc = new Date(date);
        weekday = dayc.getDay();
        if (weekday === 0) {
            weekday = 7
        } else {
            weekday = weekday
        };
        days.push({ 'weekday': weekday, 'day': dayc.getDate(), 'fulldate': dayc.toLocaleDateString() });
        date.setDate(date.getDate() + 1);
    }
    return days;
}

function renderCalendar(m, d, y) {
    var daysThisMonth = getDaysInMonth(m, y);

    var mPrev = m - 1;
    var yPrev = y;

    var mNext = m + 1;
    var yNext = y;

    if (m == 0) {
        mPrev = 11;
        yPrev = y - 1;

        mNext = m + 1;
        yNext = y;
    } else if (m == 11) {
        mPrev = m - 1;
        yPrev = y;

        mNext = 0;
        yNext = y + 1;
    }

    var daysNextMonth = getDaysInMonth(mNext, yNext);
    var daysPrevMonth = getDaysInMonth(mPrev, yPrev);

    $('.zigmund-calendar--days').html('');

    for (var i = 1; i < daysThisMonth[0].weekday; i++) {
        $('.zigmund-calendar--days').prepend('<div class="day-chooser disabled"><span>' + daysPrevMonth[daysPrevMonth.length - i].day + '</span></div>');
    }

    daysThisMonth.forEach(function(el, i) {
        var classes = "";
        if (el.day >= d) {
            classes = "allow"
        } else {
            classes = "disabled"
        }
        $('.zigmund-calendar--days').append('<div class="day-chooser ' + classes + '" data-weekday="' + el.weekday + '" data-date="' + el.fulldate + '" data-text="' + el.day + ' ' + monthsAlt[m] + '"><span>' + el.day + '</span></div>');
        $('.day-chooser').bind('click', function(e) {
            if ($(this).hasClass('allow')) {
                $('.day-chooser').removeClass('active')
                $(this).addClass('active');
                $('.other-date-label').show();
                $('.other-date-label span').text($(this).data('text'));
                $('#date_other').attr('value', $(this).data('date'));
                $('#date_other').click();
                $('label[for="date_tomorrow"]').css('width', ($('.other-date-label').outerWidth() + 18) + 'px')
            } else {
                e.stopPropagation();
            }
        })
    })
    var j = 0;

    if (daysThisMonth[daysThisMonth.length - 1].weekday != 0) {

        for (var i = daysThisMonth[daysThisMonth.length - 1].weekday; i <= 6; i++) {
            $('.zigmund-calendar--days').append('<div class="day-chooser disabled"><span>' + daysNextMonth[j].day + '</span></div>');
            j += 1;
        }
    }
}

var TodayDate = new Date();

var d = TodayDate.getDate();
var m = TodayDate.getMonth();
var y = TodayDate.getFullYear();

if (m == 11) {
    var next_m = 0;
} else {
    var next_m = m + 1;
}
renderCalendar(m, d, y);

$('.zigmund-calendar--thismonth').html(months[m]);
$('.zigmund-calendar--nextmonth').html(months[next_m]);

$('.zigmund-calendar--nextmonth').on('click', function(e) {
    e.stopPropagation();
    $('.zigmund-calendar--nextmonth').addClass('active')
    $('.zigmund-calendar--thismonth').removeClass('active')
    $('.zigmund-calendar--arrow').addClass('back');
    renderCalendar(next_m, 1, y + 1)
})
$('.zigmund-calendar--arrow').on('click', function(e) {
    e.stopPropagation();
    if (!$(this).hasClass('back')) {
        $('.zigmund-calendar--nextmonth').addClass('active')
        $('.zigmund-calendar--thismonth').removeClass('active')
        renderCalendar(next_m, 1, y + 1)
        $(this).addClass('back');
    } else {
        $('.zigmund-calendar--nextmonth').removeClass('active')
        $('.zigmund-calendar--thismonth').addClass('active')
        renderCalendar(m, d, y)
        $(this).removeClass('back');
    }
})

$('.zigmund-calendar--thismonth').on('click', function(e) {
    e.stopPropagation();
    $('.zigmund-calendar--nextmonth').removeClass('active')
    $('.zigmund-calendar--thismonth').addClass('active');
    $('.zigmund-calendar--arrow').removeClass('back');
    renderCalendar(m, d, y)
})

$('.another-day-link').on('click', function(e) {
    $('.zigmund-calendar').toggle();
    e.stopPropagation();
});

$('#date_other').on('click', function(e) {
    $('#date_other').prop('checked', false);
    $('.zigmund-calendar').toggle();
    e.stopPropagation();
});



$('input[name="date"]').on('change', function() {
    $('input[name=date]+label').removeClass('input--error');
    if ($(this).val() == "Сегодня" || $(this).val() == "Завтра") {
        $('.other-date-label').hide();
    }
})

$('body').click(function() {
    $('.zigmund-calendar').hide();
});
$('.time-picker').on('click', function(e) {
    e.preventDefault();
    $('input[name^=class_time]').parent().removeClass('input--error');
    $(this).toggleClass('active');
    var time_input = $(this).children("input:first")
    time_input.prop('checked', !time_input.is(':checked'));

});