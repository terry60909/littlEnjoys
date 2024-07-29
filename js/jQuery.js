$(function () {
    let divWidth = $('#main').width();
    let imgCount = $('#content li').length;
 
    for(let i = 0; i < imgCount; i++){
     $('#contentButton').append(`<li></li>`)
     }
     $('#contentButton li:first').addClass('clicked')
 
     $('#content li').width(divWidth)
     
     $('#content').width(divWidth * imgCount)
         
     let index = 0;
     let timer = setInterval(moveToNext, 5000)
 
     $('#contentButton li').click(function(){
        clearInterval(timer)
 
         index = $(this).index()
 
        $('#content').animate({
         left: divWidth * index * -1
        })
 
        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')
 
        timer = setInterval(moveToNext, 5000)
     })
 
     function moveToNext(){
         if(index < imgCount - 1){
             index += 1
         }else{
             index = 0
         }
         
         $('#content').animate({
             left: divWidth * index * -1
            })
 
            $(`#contentButton li:eq(${index})`).addClass('clicked')
            $('#contentButton li').not(`:eq(${index})`).removeClass('clicked')
     }
 
 });
 
 
 
 
 
    //   $(document).ready(function(){
    //          $('figure').click(function(){
    //              let picSrc = $(this).find('img').attr('src')
    //              $('#pic').attr('src',picSrc)
    //              $(this).addClass('active')
    //              $('figure').not(this).removeClass('active')
    //          })
    //      })