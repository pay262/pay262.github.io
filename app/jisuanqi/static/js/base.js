/* javascript Document
 * 样式说明： 周翔
 * 开发时间： 2011-6-23
 * 开发者：  周翔
 * 维护者： 周翔
 *
 * 样式版本： v1.0
 * 版本时间： 2011-6-23
 * 注意事项： 所有功能js写在这里
 */
jQuery(document).ready(function(){
	var $ = jQuery;
	
	!$('.sectionT')[0]||(function(){
		$( '.sectionT' ).find('dt').eq(2).css({backgroundPosition:'0 -40px'});
		$( '.sectionT' ).find('dt').eq(4).css({backgroundPosition:'0 -80px'});
		$( '.sectionT' ).find('dt').eq(1).css({backgroundPosition:'0 -120px'});
		$( '.sectionT' ).find('dt').eq(3).css({backgroundPosition:'0 -160px'});
		$( '.sectionT' ).find('dt').eq(5).css({backgroundPosition:'0 -200px'});
		//$( '.liuliang_two' ).find('.liuliang_two_onL,.liuliang_two_on').hide().end().find('.btn').css('left','194px');
		$( '.liuliang_two' ).find('.liuliang_two_on').css({width:'199px'}).end().find('.btn').css('left','0px');
	})();

	!$('.sectionS')[0]||(function(){
		$( '.sectionS' ).find('li').eq(1).css({backgroundPosition:'0 -23px'});
		$( '.sectionS' ).find('li').eq(2).css({backgroundPosition:'0 -46px'});
		$( '.sectionS' ).find('li').eq(4).css({backgroundPosition:'0 -69px'});
		$( '.sectionS' ).find('li').eq(5).css({backgroundPosition:'0 -92px'});
		$( '.sectionS' ).find('li').eq(6).css({backgroundPosition:'0 -115px'});
	})();

});


