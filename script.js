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

//Task2
$('#add').click(function(){
    let user={name:'', email:'', password: ''}
    user.name=$('#name').val()
    user.email=$('#email').val()
    user.password=$('#password').val()
    $.ajax({
        method: 'POST',
        url:'http://skeleton.mernbook.com/api/users',
        data:user
    }).done(function(response){
        $('#name').val('')
        $('#email').val('')
        $('#password').val('')
        $('#error').text('User created')
       // console.log(response);

}).fail(function(response){
   $('#error').text(response.responseJSON.error)
})
})