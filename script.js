
$(document).ready(function () {
    // listener for click events on the save button.
$('.saveBtn').on('click', handleSave);
function handleSave() {
    let plan = $(this).siblings('.description').val();
    let hour = $(this).parent().attr('id');

    localStorage.setItem(hour, plan);
}

    // code applys the past, present, or future class to each time
    // block by comparing the id to the current hour.
function applyColor() {
    let currentTime =  dayjs().hour();
    console.log('current time: ' + currentTime);

    $('.time-block').each(function () {
        let planHour = parseInt($(this).attr('id').split('-')[1]);

        if (planHour < currentTime) {
            $(this).addClass('past');
        } else if (planHour === currentTime) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
        });
    
}

applyColor();
    // code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    

// sets and displays current time in header field
setInterval(setTime, 1000);

function setTime() {
var today = dayjs();
 $('#currentDay').text(today.format('MMM D, YYYY hh:mm:ss'));
}
});
 