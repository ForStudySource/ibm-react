// using DOM


// document.addEventListener('DOMContentLoaded', function (e) {

//     console.log('DOM ready..');
    
//     var box = document.querySelector('.jumbotron');
//     var hideBtn = document.querySelector('.btn-danger');
//     var showBtn = document.querySelector('.btn-primary');

//     hideBtn.addEventListener('click', function (e) {
//         box.style.display = 'none';
//     });

//     showBtn.addEventListener('click', function (e) {
//         box.style.display = '';
//     });

// })


// using jQuery


/*

     syntax to use jQuery

     $('selctor').action1().action2();

*/

$(document).ready(function () { 

    var box = $('.jumbotron');
    $('.btn-danger').click(function () { 
        box.hide(5000);
    })
    $('.btn-primary').click(function () { 
        box.show(5000);
    })

});