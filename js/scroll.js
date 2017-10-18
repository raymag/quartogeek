$(window).scroll(function() {

if ($(this).scrollTop()>12)
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
