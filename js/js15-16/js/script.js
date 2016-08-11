$(function () {
    var API_KEY = '2694108-82b78d019d259a0c5f0ac4c39';

    $('.btn').on('click', search);

    $('.search').keypress(function () {
        if (event.keyCode == 13) {
            search;
        } else return;
    });

    function search(e) {
        e.preventDefault();
        $('.result img').remove();
        var $searchKey = $('.search').val();

        // if ('XDomainRequest' in window && window.XDomainRequest !== null) {

        //     var xdr = new XDomainRequest(); // Use Microsoft XDR
        //     xdr.open('get', 'https://api.riffsy.com/v1/search?tag=alex');
        //     xdr.onload = function () {
        //         var dom  = new ActiveXObject('Microsoft.XMLDOM'),
        //             data = $.parseJSON(xdr.responseText);

        //         dom.async = false;

        //         console.log(data);
        //            var $results = data.results;
        //            console.log($results);
        //            for (var i=0; i < $results.length; i++) {
        //                 // $('.result').append('<img src="' + $results[i].previewURL + '">');
        //                 $('.result').append('<img src="' + $results[i].url + '">');
        //                 // $('.result').append('<img src="' + $results[i].media[0].preview + '">');
        //            }

        //         // if (JSON == null || typeof (JSON) == 'undefined') {
        //         //     JSON = $.parseJSON(data.firstChild.textContent);
        //         // }

        //         successCallback(data); // internal function
        //     };

        //     xdr.onerror = function() {
        //         _result = false;  
        //     };

        //     xdr.send();
        // } else { 
            jQuery.support.cors = true;
            $.ajax({
                url: 'https://pixabay.com/api/?key=' + API_KEY + '&q='+ $searchKey + '&image_type=photo',
                // url: 'https://api.riffsy.com/v1/search?tag=' + $searchKey + '&key=LIVDSRZULELA',
        //         type: "GET",
        //         xhr:  (window.ActiveXObject) ?
        // function() {
        //         try {
        //             return new window.ActiveXObject("Microsoft.XMLHTTP");
        //         } catch(e) {}
        //     } :
        //     function() {
        //         return new window.XMLHttpRequest();
        //     },
                // url: 'https://api.riffsy.com/v1/search?tag=' + $searchKey,
                // dataType: 'json',
                dataType: 'jsonp',
                success: function (data) {
                   // var $results = data.hits;

                   updCont(data)
                   
               },
               error: function(){
                alert('Error request')
                }
            });
        }
        $('.search').val('');

        function updCont(data){
            console.log(data);
            var $results = data.hits;
                   // var $results = data.results;
                   console.log($results);
                   for (var i=0; i < $results.length; i++) {
                        $('.result').append('<img src="' + $results[i].previewURL + '">');
                        // $('.result').append('<img src="' + $results[i].url + '">');
                        // $('.result').append('<img src="' + $results[i].media[0].preview + '">');
                   }
        }

        
    // }


 // if ('XDomainRequest' in window && window.XDomainRequest !== null) {

 //        var xdr = new XDomainRequest(); // Use Microsoft XDR
 //        xdr.open('get', url);
 //        xdr.onload = function () {
 //            var dom  = new ActiveXObject('Microsoft.XMLDOM'),
 //                JSON = $.parseJSON(xdr.responseText);

 //            dom.async = false;

 //            if (JSON == null || typeof (JSON) == 'undefined') {
 //                JSON = $.parseJSON(data.firstChild.textContent);
 //            }

 //            successCallback(JSON); // internal function
 //        };

 //        xdr.onerror = function() {
 //            _result = false;  
 //        };

 //        xdr.send();
 //    } 

 //    // IE7 and lower can't do cross domain
 //    else if (navigator.userAgent.indexOf('MSIE') != -1 &&
 //             parseInt(navigator.userAgent.match(/MSIE ([\d.]+)/)[1], 10) < 8) {
 //       return false;
 //    }    

 //    // Do normal jQuery AJAX for everything else          
 //    else {
 //        $.ajax({
 //            url: url,
 //            cache: false,
 //            dataType: 'json',
 //            type: 'GET',
 //            async: false, // must be set to false
 //            success: function (data, success) {
 //                successCallback(data);
 //            }
 //        });
 //    }

    // OOP task
// function Human(name, age, state, height, weight) {
//     this.name = name;
//     this.age = age;
//     this.state = state;
//     this.height = height;
//     this.weight = weight;
// }

// var human = new Human('Alex', 29, 'male', 181, 81);
// console.log(human);
// console.log('--------------------------------');

// function Worker(name, age, state, height, weight, company, salary){
//     Human.apply(this, arguments);
//     this.company = company;
//     this.salary = salary;
//     this.work = function(){
//         console.log(this.name + ' works');
//     }
// }
// Worker.prototype = human;

// var newWorker = new Worker('Yurii', 22, 'male', 183, 87, 'Google', 10000);
// console.log(newWorker);
// newWorker.work();
// console.log('--------------------------------');

// function Student(name, age, state, height, weight, university, award){
//     Human.apply(this, arguments);
//     this.university = university;
//     this.award = award;
//     this.watchSeries = function(){
//         console.log(this.name + ' watches TV series');
//     }
// }
// Student.prototype = human;

// var newStudent = new Student('Yana', 26, 'feemale', 183, 87, 'Harvard', 5000);
// console.log(newStudent);
// newStudent.watchSeries();

});



