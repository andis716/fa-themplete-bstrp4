
// btn scroll to top
$(document).ready(function () {
  var btn = $('.arrow-widget');
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 800) {
      btn.show();
    } else {
      btn.hide();
    }
  });
  btn.click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1200);
  });
});

// shrink navbar
$(document).on("scroll", function () {
  if ($(document).scrollTop() > 80) {
    $("nav").addClass("shrink");
  } else {
    $("nav").removeClass("shrink");
  }
});
// Akhir shrink

// ketik
new TypeIt('#example4', {
  speed: 100,
  strings: [''],
  loop: true
}).go();

// Lazy load
$(function () {
  $("img.lazy").lazyload({
    effect: "fadeIn"
  }); // untuk dipasang di <img src='xxxx'>
  $("div.lazy").lazyload({
    effect: "fadeIn"
  }); // untuk dipasang sebagai background / div
});

// window load
$(window).on('load', function () {
  $('.panel .icon').each(function (i) {
    setTimeout(function () {
      $('.panel .icon').eq(i).addClass('imuncul');
      
    },300 * (i+1));
  });
  
});


// Lightbox design
$(document).ready(function () {
  $('li img').on('click', function () {
    var src = $(this).attr('src');
    var img = '<img src="' + src + '" class="img-fluid"/>';

    //start of new code new code
    var index = $(this).parent('li').index();

    var html = '';
    html += img;
    html += '<div style="height:25px;clear:both;display:block;">';
    html += '<a class="controls next" href="' + (index + 2) + '">next &raquo;</a>';
    html += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';
    html += '</div>';

    $('#myModal').modal();
    $('#myModal').on('shown.bs.modal', function () {
      $('#myModal .modal-body').html(html);
      //new code
      $('a.controls').trigger('click');
    })
    $('#myModal').on('hidden.bs.modal', function () {
      $('#myModal .modal-body').html('');
    });




  });
})


$(document).on('click', 'a.controls', function () {
  var index = $(this).attr('href');
  var src = $('ul.row li:nth-child(' + index + ') img').attr('src');

  $('.modal-body img').attr('src', src);

  var newPrevIndex = parseInt(index) - 1;
  var newNextIndex = parseInt(newPrevIndex) + 2;

  if ($(this).hasClass('previous')) {
    $(this).attr('href', newPrevIndex);
    $('a.next').attr('href', newNextIndex);
  } else {
    $(this).attr('href', newNextIndex);
    $('a.previous').attr('href', newPrevIndex);
  }

  var total = $('ul.row li').length + 1;
  //hide next button
  if (total === newNextIndex) {
    $('a.next').hide();
  } else {
    $('a.next').show()
  }
  //hide previous button
  if (newPrevIndex === 0) {
    $('a.previous').hide();
  } else {
    $('a.previous').show()
  }


  return false;
});

// Show Password
$(document).ready(function () {

  $('#icon-click').click(function () {
    $('#icon').addClass('fa-eye-slash');

    var input = $('#password');
    if (input.attr('type') === 'password') {
      input.attr('type', 'text');
    } else {
      $('#icon').addClass('fa-eye');
      input.attr('type', 'password');

    }
  });
});


