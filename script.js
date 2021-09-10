$(document).ready(function() {
    // Code jquery

    var currentday = $('#currentDay');
    currentday.html(moment().format('MMMM Do YYYY'));

    $(".saveBtn").click(function() {
        var key = $(this).parent().attr('id'); // get the parent of selected btn amd get the value of id attribute
        var value  = $(this).siblings('.info').val();
        localStorage.setItem(key , value);
    })

    $("#time-9 .info").val(localStorage.getItem('time-9'));
    $("#time-10 .info").val(localStorage.getItem('time-10'));
    $("#time-11 .info").val(localStorage.getItem('time-11'));
    $("#time-12.info").val(localStorage.getItem('time-12'));
    $("#time-1 .info").val(localStorage.getItem('time-1'));
    $("#time-2 .info").val(localStorage.getItem('time-2'));
    $("#time-3 .info").val(localStorage.getItem('time-3'));
    $("#time-4 .info").val(localStorage.getItem('time-4'));
    $("#time-5 .info").val(localStorage.getItem('time-5'));


    var currentHour = moment().format('H');
    var arr = [9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17];
    var time
    for(var i = 0 ; i < arr.length; i++) {
        time = arr[i] 
        if(arr[i]>12){
            time = arr[i]-12
        }
        console.log(time);
        if(currentHour < time) {
            $('#time-'+time +' .info').addClass('future');
        } else if(currentHour > time  ) {
            $('#time-'+time +' .info').removeClass('future');
            $('#time-'+time +' .info').addClass('past');
        } else if(currentHour == time ) {
            $('#time-'+time +' .info').addClass('present');
        }
    }
    

    
});