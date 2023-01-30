


function insertNumber(number){

  var display =  $("#text-result").val();

   $("#text-result").val(display + number);    
 
}
function clearData(){                                   // c

    $("#text-result").val(" ");
}
function calculate(){                                   // =

   var result = eval( $("#text-result").val());         // why display does not understand
    $("#text-result").val(result);
}

function deleteNumber(){                                // Delete

    $("#text-result").val($("#text-result").val().slice(0,-1));
}