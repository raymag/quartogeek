// Arquivo usado para efeito de desaparecimento de objetos com base em jquery-3
$(window).scroll(function() {

if ($(this).scrollTop()>52)
{
   $('.h1').fadeOut();
}

else
{
 $('.h1').fadeIn();
}
});

$(window).scroll(function() {

if ($(this).scrollTop()>1200)
{
   $('.h2').fadeOut();
}

else
{
 $('.h2').fadeIn();
}
});
