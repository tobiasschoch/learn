'use strict';

// JQUERY INIT
$(document).ready(function () {
  console.log('%cFACHHOCHSCHULE NORDWESTSCHWEIZ - BOOTSTRAP STYLEGUIDE V4 \uD83D\uDE00', 'color:white; font-weight:bold; background-color:black;padding:2px 5px;');
  // COOKIE HINWEIS
  var show;
  if (this.cookie.indexOf('status=true') < 0) {
    show = function () {
      $('#modal').modal('show');
    };
    var timer = window.setTimeout(show, 5000);
  }
  document.cookie = "status=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

  // CAROUSEL
  $('.carousel').carousel('pause');

  // HERO CAROUSEL
  $('.hero').carousel('pause');

  // INITIALIZE SELECT2
  $('.sel2').select2({
    theme: 'bootstrap4',
    placeholder: 'Select an option',
    allowClear: true,
    closeOnSelect: false,
    search: true
  });

  // BACK-TO-TOP
	// var back_to_top_button = ['<a href="#top" class="back-to-top"></a>'].join('');
	// $('body').append(back_to_top_button);

	// $(function () {
	// 	$(window).scroll(function () {
	// 		if ($(this).scrollTop() > 100) {
    //     $('.back-to-top').css({
    //       'right': '2%'
    //     });
	// 		} else {
	// 			$('.back-to-top').css({
    //       'right': '-100px'
    //     });
	// 		}
	// 	});

	// 	$('.back-to-top').click(function () {
	// 		$('body,html').animate({
	// 			scrollTop: 0
	// 		}, 800);
	// 		return false;
	// 	});
	// });

});

$(function($) {
  $('body').scrollspy({ target: '#list-example' });

  // PAAS - OPEN SEARCH
  $('.search-button').click(function() {
    $('.pas.search-overlay').addClass('active');
  });

  // PAAS - CLOSE SEARCH
  $('.pas.search-overlay span.close-search').click(function () {
    $('.pas.search-overlay').removeClass('active');
  });

  // COPY TO CLIPBOARD
  $('.btn-clipboard').tooltip({
    trigger: 'click',
    placement: 'bottom'
  });

  function setTooltip(message) {
    $('.btn-clipboard').tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }

  function hideTooltip() {
    setTimeout(function() {
      $('.btn-clipboard').tooltip('hide');
      clipboard.destroy();
    }, 1000);
  }

  // PAAS NAVIGATION PARENT HOVER COLOR
  $('.pas .nav-link').hover(function() {
    $(this).parent().parent().prev('.dropdown-toggle').css('background', '#deded9');
  });

  $('.pas .nav-link').mouseout(function() {
    $(this).parent().parent().prev('.dropdown-toggle').css('background', 'none');
  });

  // MODAL
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
  });

  $('.carousel').carousel();
  var caption = $('div.item:nth-child(1) .carousel-caption');
  $('.new-caption-area').html(caption.html());
  caption.css('display', 'none');

  $(".carousel").on('slide.bs.carousel', function (evt) {
      var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
      $('.new-caption-area').html(caption.html());
      caption.css('display', 'none');
  });

  // POPOVERS
  $('.btn-lg').popover({
    container: 'body'
  });

  // TOOLTIP
  $('[data-toggle="tooltip"]').tooltip();

  // ACCORDION
  $('.collapse').on('show.bs.collapse', function () {
      $(this).siblings('.accordion-header').addClass('isOpen');
    });

  $('.collapse').on('hide.bs.collapse', function () {
      $(this).siblings('.accordion-header').removeClass('isOpen');
  });

  $('button::after').click(function() {
      if ($(this).css('transform') == 'transform: rotate(45deg);' ) {
          $(this).css("transform","rotate(45deg)");
      } else {
          $(this).css('transform', '');
      }
  });

  // INSTANTIATE CLIPBOARD
  var clipboard = new ClipboardJS('.btn-clipboard');

  clipboard.on('success', function(e) {
    setTooltip('Copied!');
    hideTooltip();
  });

  clipboard.on('error', function(e) {
    setTooltip('Failed!');
    hideTooltip();
  });
});
