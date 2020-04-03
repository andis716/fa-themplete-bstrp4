// window scroll animate
$(window).scroll(function () {
  var wScroll = $(this).scrollTop(); // variable window scroll

  // web price list
  if (wScroll > $('.web').offset().top - 300) {
    $('.web .web-list-price').each(function (i) {
      setTimeout(function () {
        $('.web .web-list-price').eq(i).addClass('wmuncul');
      }, 400 * (i + 1));
    });
  };

  // content design
  if (wScroll > $('.design').offset().top - 300) {
    $('.design .img-fluid').addClass('dkanan');
    $('.design .teks').addClass('dkiri');
  };

  // desin price list
  if (wScroll > $('.des').offset().top - 250) { // satu content
    $('.des .des-list-price').addClass('dmuncul');
  };

  // content social
  if (wScroll > $('.social').offset().top - 300) {
    $('.social .img-fluid').addClass('skanan');
    $('.social .teks').addClass('skiri');
  };

  // social media price list 
  if (wScroll > $('.soc').offset().top - 300) {
    $('.soc .soc-list-price').each(function (i) {
      setTimeout(function () {
        $('.soc .soc-list-price').eq(i).addClass('smuncul');
      }, 200 * (i + 1));
    });
  };

  // content vidiofoto
  if (wScroll > $('.vidiofoto').offset().top - 300) {
    $('.vidiofoto .img-fluid').addClass('vkanan');
    $('.vidiofoto .teks').addClass('vkiri');
  };

}); // tutup window scroll