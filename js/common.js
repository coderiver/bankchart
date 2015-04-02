head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });
	//tabs
	$(".js-nav-btn").click(function () {
	// This will have the category
		var id = $(this).data("btn"),
		// All items
			$item = $('.js-drop');

	// Current item is should be active
		var $currItem = $('.js-drop[data-drop=' + id + ']');
		$('.js-drop[data-drop=' + id + ']').addClass('is-active');
	// Remove the active class for other items
		$item.not($currItem).removeClass('is-active');
		$('.nav__item').removeClass('is-active');
		$(this).parent('.nav__item').addClass('is-active');
		return false;
	});
	$(".js-tab").click(function () {
		var id = $(this).data("id"),
			$item = $('.js-tab-block');
		var $currItem = $('.js-tab-block[data-block=' + id + ']');
		$('.js-tab-block[data-block=' + id + ']').addClass('is-active');
		$item.not($currItem).removeClass('is-active');
		$('.js-tab').removeClass('is-active');
		$(this).addClass('is-active');
		$('.tabs__box').slideDown('fast');
		return false;
	});


	//select
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-select-list").hide();
	        $(".js-select").removeClass("is-active");
	    });
	    function selectList() {
	        var select = $(".js-select");
	        var select_list = $(".js-select-list");
	        $("body").on("click", ".js-select", function(event){
	            if ($(this).hasClass("is-active")) {
	                select.removeClass("is-active");
	                select_list.hide();
	            }
	            else {
	                select.removeClass("is-active");
	                select_list.hide();
	                $(this).find(".js-select-list").show();
	                $(this).addClass("is-active");
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-select-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-select").find(".js-select-text").text(text);
	            $(this).parents(".js-select").find(".js-select-input").val(id);
	            $(this).parent().hide();
	            $(this).parents(".js-select").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    
	    selectList();
	    $("body").on("click", ".js-select", function(event){
	        event.stopPropagation();
	    });
	    
	});

	$('.js-menu-btn').on('click', function() {
		if ($('.js-menu').hasClass('is-active')) {
			$('body').removeClass('is-m-body');
			$('.js-menu').removeClass('is-active');
		}
		else {
			$('body').addClass('is-m-body');
			$('.js-menu').addClass('is-active');
		};
		return false;
	});
	$('.overlay').on('click', function() {
		$('body').removeClass('is-m-body');
		$('.js-menu').removeClass('is-active');
	});

	$('.js-m-btn').on('click', function() {
		$('.js-m-drop').slideUp('fast');
		if ($(this).hasClass('is-active')) {
			$('.js-m-btn').removeClass('is-active');
			$(this).removeClass('is-active');
			$(this).parent('.m-nav__item').find('.js-m-drop').slideUp('fast');
		}
		else {
			$('.js-m-btn').removeClass('is-active');
			$(this).addClass('is-active');
			$(this).parent('.m-nav__item').find('.js-m-drop').slideDown('fast');
		}		
		return false;
	});
	$(window).resize(function() {
		if ($(window).width() < 875) {
			$('.js-sidebar').appendTo('.js-sidebar-nav');
		};
	});	
	$(window).load(function() {
		if ($(window).width() < 875) {
			$('.js-sidebar').appendTo('.js-sidebar-nav');
		};
	});	
	$(window).resize(function() {
		if ($(window).width() > 875) {
			$('.js-sidebar').appendTo('.sidebar');
		};
	});	
	$(window).load(function() {
		if ($(window).width() > 875) {
			$('.js-sidebar').appendTo('.sidebar');
		};
	});	

	//scroll
	(function($){
		$(window).load(function(){			
			$(".js-scroll").mCustomScrollbar({
				axis:"x",
				scrollButtons:{enable:true},
				theme:"my-theme",
				scrollbarPosition:"outside",
				callbacks:{
				    onTotalScroll:function(){
				   		$(this).parents('.tables-wrap').find('.js-scroll').addClass('is-left');
				 		$(this).parents('.tables-wrap').find('.js-scroll').removeClass('is-right');
				    },
				    onTotalScrollBack: function(){
				   		$(this).parents('.tables-wrap').find('.js-scroll').removeClass('is-left');
				 		$(this).parents('.tables-wrap').find('.js-scroll').addClass('is-right');
				    }
				}
			});
			$('.m-table').each(function() {
				if ($(this).width() > $(this).parents('.js-scroll').width()) {
					$(this).parents('.js-scroll').addClass('is-right');
				}
				else {
					$(this).parents('.js-scroll').removeClass('is-right');		
				};
			});			
		});
		$(window).load(function(){			
			$(".js-menu").mCustomScrollbar({
				axis:"y",
				scrollButtons:{enable:true},
				theme:"my-theme",
				scrollbarPosition:"outside"
			});			
		});
		$(window).resize(function() {
			$('.js-scroll').mCustomScrollbar('destroy');
			$(".js-scroll").mCustomScrollbar({
				axis:"x",
				scrollButtons:{enable:true},
				theme:"my-theme",
				scrollbarPosition:"outside",
				callbacks:{
				    onTotalScroll:function(){
				   		$(this).parents('.tables-wrap').find('.js-scroll').addClass('is-left');
				 		$(this).parents('.tables-wrap').find('.js-scroll').removeClass('is-right');
				    },
				    onTotalScrollBack: function(){
				   		$(this).parents('.tables-wrap').find('.js-scroll').removeClass('is-left');
				 		$(this).parents('.tables-wrap').find('.js-scroll').addClass('is-right');
				    }
				}
			});
			$('.m-table').each(function() {
				if ($(this).width() > $(this).parents('.js-scroll').width()) {
					$(this).parents('.js-scroll').addClass('is-right');
				}
				else {
					$(this).parents('.js-scroll').removeClass('is-right');		
				};
			});		
		});
	})(jQuery);
	

});