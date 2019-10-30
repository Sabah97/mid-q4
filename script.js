/* Add your script here */

//Task 1
$("#list").click(function(){
    $.ajax({
        url:'http://skeleton.mernbook.com/api/users',
        method: 'GET'
       
    }).done(function(response){
        response.forEach(element=>{
            let user=$('<p>').text(element.name)
            $('#users').append(user)
        })
        //console.log(response);
    }).fail(function(response){
        console.log(response);
    })
})