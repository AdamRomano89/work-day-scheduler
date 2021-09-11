$(document).ready(function() {
    // Code jquery

    var currentday = $('#currentDay');
    currentday.html(moment().format('MMMM Do YYYY'));

    $(".saveBtn").click(function() {
        var key = $(this).parent().attr('id'); // get the parent of selected btn amd get the value of id attribute
        var value  = $(this).siblings('.info').val();
        if(value == "") {
            alert("No data to save")
        } else {
            localStorage.setItem(key , value);   
        }
    })

    $(".deleteBtn").click(function() {
        var key = $(this).parent().attr('id'); // get the parent of selected btn amd get the value of id attribute
        $(this).siblings('.info').val("");
        localStorage.setItem(key , "");
    })

    $(".clear").click(function(){
        var sure = confirm("Are You sure you want to delete all data");
        if(sure){
            localStorage.clear()
            loadData();
        }
    })
    function loadData(){
        var arry = [9,10,11,12,1,2,3,4,5]
        for(var i = 0; i<arry.length; i++){
            $("#time-" + arry[i] +" .info").val(localStorage.getItem('time-' + arry[i]));
        }
    }
    loadData();
    var currentHour = moment().format("H");
    var arr = [9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17];
    var time
    for(var i = 0 ; i < arr.length; i++) {
        time = arr[i] 
        if(arr[i]>12){
            time = arr[i]-12
        }

        if(currentHour < arr[i]) {
            $('#time-'+time +' .info').addClass('future');
        } else if(currentHour > arr[i]  ) {
            $('#time-'+time +' .info').removeClass('future');
            $('#time-'+time +' .info').addClass('past');
        } else if(currentHour == arr[i] ) {
            $('#time-'+time +' .info').addClass('present');
        }
    }
});
