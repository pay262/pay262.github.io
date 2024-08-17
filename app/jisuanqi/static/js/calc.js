/*  ÖÐ¹úÁªÍ¨¼ÆËãÆ÷
 * ¿ª·¢Ê±¼ä£º 2012-07-13
 * ¿ª·¢Õß£º HXL   
 *
 * ÑùÊ½°æ±¾£º v1.0
 * °æ±¾Ê±¼ä£º 2012-07-13
 */
var $jq = jQuery.noConflict();
var DATA_MONTH = 30; // count by month
var DATA_DAY = 1;  // count by day

var UNIT_WEBPAGE = 460800;  // webPage KB/H 1Mbps*1H
var UNIT_TALK = 1382400;  //  QQ MSN etc. 3Mbps*1H
var UNIT_EMAIL = 3317760; // email 7.2Mbps*1H
var UNIT_STOCK = 46080000; // stocks 100Mbps*1H  
var UNIT_MUSIC = 6912000000;  //  music 500Mbps*1H
var UNIT_VIDEO = 13824000000; // video 1000Mbps*1H  
var UNIT_TOTAL = 536870912000; // total 500TB

var UNIT_DAY_STOCK = 24; // stocks h/day  
var UNIT_DAY_WEBPAGE = 24;  // webPage 180 h/day
var UNIT_DAY_EMAIL = 24; // email num/day
var UNIT_DAY_TALK = 24;  //  QQ  h/day
var UNIT_DAY_MUSIC = 24;  //  music 
var UNIT_DAY_VIDEO = 24; // video 
var INIT_FLAG = '1'; // page init flag (0:not init,1:is init)
var COMBOS = [40,60,80,100, 120, 150 ,300, 400, 500 ,650, 750, 950, 1331,2048, 3072];

//ÉèÖÃ×ÜÁ¿ÏÔÊ¾
var setTotalsTitle = function(totalnum){    
    $jq('#totalsTitle').find('span').html((totalnum/(1024)).toFixed(0));
    $jq('#totalsTitle2').find('span').html((totalnum/(1048576)).toFixed(0));
    $jq('#totalsTitle3').find('span').html((totalnum/(1073741824)).toFixed(0));
}; 

//ÉèÖÃÌ×²ÍÍÆ¼ö
var setSuggestCombo = function(totalnum){     
    if(totalnum>0){ 
        var combo = totalnum/1024; 
        if(combo > 3072){
           for(var j in COMBOS){
               $jq('.combo_'+ COMBOS[j]).removeClass('suggest_combo');
           } 
           $jq('.combo_3072').addClass('suggest_combo');
        }else{
            for(var i in COMBOS){
                if(combo <= COMBOS[i]){             
                    $jq('.combo_'+ COMBOS[i]).addClass('suggest_combo');
                }else{
                    $jq('.combo_'+ COMBOS[i]).removeClass('suggest_combo');
                }
            }
        }       
    }else{
        for(var j in COMBOS){
            $jq('.combo_'+ COMBOS[j]).removeClass('suggest_combo');
        }
    }           
};

//ÖØÖÃÇåÁã
var clearForm = function(){   
	   
   $jq('#value_webPages').html('0.0');
   $jq('#value_stocks').html('0.0');
   $jq('#value_talks').html('0.0');
   $jq('#value_videos').html('0');
   $jq('#value_emails').html('0');
   $jq('#value_musics').html('0');
   setTotalBar();
    //ÖØÖÃ¿ØÖÆÓÎ±ê
    $jq( '#slider_webPages').slider({
			range: "min",
			value: 0,
			min: 0,
			step:0.1,
			max: UNIT_DAY_WEBPAGE,
			slide: function( event, ui) {
			    $jq('#value_webPages').html((ui.value).toFixed(1));
			    setTotalBar();
			}
		});  
	$jq( '#slider_stocks').slider({
			range: "min",
			value: 0,
			min: 0,
			step:0.1,
			max: UNIT_DAY_STOCK,
			slide: function( event, ui ) {
			    $jq('#value_stocks').html((ui.value).toFixed(1));
			    setTotalBar();
			}
		});  
	$jq( '#slider_talks').slider({
			range: "min",
			value: 0,
			min: 0,
			step:0.1,
			max: UNIT_DAY_TALK,
			slide: function( event, ui ) {
			    $jq('#value_talks').html((ui.value).toFixed(1));
			    setTotalBar();
			}
		});  
	$jq( '#slider_videos').slider({
			range: "min",
			value: 0,
			min: 0,
			step:1,
			max: UNIT_DAY_VIDEO,
			slide: function( event, ui ) {
			    $jq('#value_videos').html(ui.value);
			    setTotalBar();
			}
		});  
	$jq( '#slider_emails').slider({
			range: "min",
			value: 0,
			min: 0,
			step:1,
			max: UNIT_DAY_EMAIL,
			slide: function( event, ui ) {
			    $jq('#value_emails').html(ui.value);
			    setTotalBar();
			}
		});  
	$jq( '#slider_musics').slider({
			range: "min",
			value: 0,
			min: 0,
			step:1,
			max: UNIT_DAY_MUSIC,
			slide: function( event, ui ) {
			    $jq('#value_musics').html(ui.value);
			    setTotalBar();
			}
		});
 //了解流量弹出层
 $jq(".flowKnow .know").click(function(){
	$jq(this).parents(".flowKnow").hide();
 });
//跳转到流量

$jq(".Dnationalthroughput").children("a").bind({
	mouseover:function(){
		$jq(this).closest("td").css("background","#DEEFF8");
	},
	mouseout:function(){
		$jq(this).closest("td").css("background","#fff");
	},
	click:function(){
	  $jq(".tabOn li").eq(1).addClass("on").siblings().removeClass("on");
	  $jq(".tabConetent .tabDetal").eq(1).show().siblings().hide();
	}
});


//帮助&更多信息
var more = $jq(".helpInfo");
more.hover(function(){
		$jq(".helpTrip").show()
	},
	function(){
		$jq(".helpTrip").hide()
	});
	//tab切换
	function tabChange(obj,detal){
		var goodsTab =$jq(obj);
		var detal = $jq(detal);
	    goodsTab.click(function(){
	        var index =  goodsTab.index(this);
	        $jq(this).removeClass().addClass("on").siblings().removeClass("on");
	        detal.eq(index).show().siblings().hide();
	    })
	}
tabChange(".tabOn li",".tabConetent .tabDetal");
tabChange(".category_nav li",".category_list .category_list_detal");

$jq(".category_nav li").click(function(){
	var _this=$jq(this),index=_this.index(),li=_this.parent().find("li");
	if(index==1||index==2){li.eq(0).addClass("first");li.eq(3).addClass("last");}
});

//套餐
var plan = $jq(".plan li");
plan.hover(
  function(){
    $jq(this).addClass("on");
  },
  function(){
    $jq(this).removeClass("on");
		$jq(".plan li").filter(".of").trigger("mouseenter").removeClass("on");
  });
plan.hover(
  function(){
    var plan = $jq(".plan").find("li");
    var planEq = plan.index(this);
    var protype = $jq(this).attr("pro_type_m");
    var call = $jq(".call");
    var thisPack = $jq(this).text();
    var newstr=thisPack.replace("套餐","");   
    var packageDetalShow = 	$jq(".packageDetalShow:visible");
		
   if(planEq<11&&protype == "A"){
         showLargessInfo(planEq);
         call.text("国内");
         changeColor("colff6600");
         packageDetalShow.html("A计划" +newstr)
        }        
      	else if(planEq > 10 && planEq < 17 && protype == "B"){
          showLargessInfo(planEq);
          call.text("国内");
          changeColor("col0C8FFF");   
          packageDetalShow.html("B计划" +newstr)      
        }
        else if(planEq>16&&planEq<20&&protype == "C"){ 
          showLargessInfo(planEq);
          call.text("本地");
          changeColor("col2FC37B");    
          packageDetalShow.html("C计划" +newstr) 
        }
        else if(planEq>19&&planEq<30){ 
          showLargessInfo(planEq);
          call.text("本地");
          changeColor("colff6600");    
          packageDetalShow.html("iPhone"+newstr) 
        }
        else if(planEq==30){ 
          showLargessInfo(planEq);
          call.text("本地");
          changeColor("colff6600");    
          packageDetalShow.html("20元卡") 
        }
        else if(planEq==31){ 
          showLargessInfo(planEq);
          call.text("本地");
          changeColor("col0C8FFF");    
          packageDetalShow.html("学生36元") 
        }
}).live("click",function(){
		var plan = $jq(".plan li");
		plan.removeClass("of").removeClass("on");
		$jq(this).addClass("of");
})
function changeColor(colorVal){
		 $jq("div[data-type='Dnationalminutes']:visible").removeClass().addClass(colorVal);
         $jq("div[data-type='Dnationalthroughput']:visible").children("a").removeClass().addClass(colorVal);
         $jq("div[data-type='Dnationalmess']:visible").removeClass().addClass(colorVal);
         $jq("div[data-type='Dnationalfee']:visible").removeClass().addClass(colorVal);
         $jq("div[data-type='Danswerfreedesc']:visible").removeClass().addClass(colorVal);
         $jq("div[data-type='Dnationalthfee']:visible").removeClass().addClass(colorVal);
         $jq("div[data-type='Dnationalvideofee']:visible").removeClass().addClass(colorVal);
         $jq("div[data-type='Dotherbus']:visible").removeClass().addClass(colorVal);
}
  function showLargessInfo(planEq){
  		var dataList = packs.packageList[planEq]
        //插入
    	$jq("div[data-type='Dnationalminutes']:visible").text(dataList.voice);
        $jq("div[data-type='Dnationalthroughput']:visible").children("a").text(dataList.flow);
        $jq("div[data-type='Dnationalmess']:visible").text(dataList.sms);
        $jq("div[data-type='Danswerfreedesc']:visible").text(dataList.answer);
        $jq("div[data-type='Dnationalfee']:visible").text(dataList.exceedVoice);
        $jq("div[data-type='Dnationalthfee']:visible").text(dataList.exceedFlow);
        $jq("div[data-type='Dnationalvideofee']:visible").text(dataList.exceedCall);
        $jq("div[data-type='Dotherbus']:visible").text(dataList.other);
        $jq("#Dmamount").text(dataList.prtM);
        $jq("#Dtamounts").text(dataList.prtT);
        $jq("#Dnationalvideominutes").text(dataList.prtTime);
        $jq(".Dadditionalbusdesc:visible").text(dataList.prest);
    }
 var tarDom = $jq("#packageTar ul li");
	tarDom.click(packageShow);
	function packageShow(){
		$jq(".tabOn li").eq(1).addClass("on").siblings().removeClass("on");
	 	$jq(".tabConetent .tabDetal").eq(1).show();
	 	$jq(".tabJi").hide();
		var age = $jq(this);
		var newstr = age.text();
		var packageVal = age.attr("pro_val_m");
		var packageType = age.attr("pro_type_m");
		var proType = $jq(".plan ul li");
		var proVal =  $jq(".plan ul li");
		var shop_a = $jq(".shop_a_box ul li");
		var shop_b = $jq(".shop_b_box ul li");
		var shop_c = $jq(".shop_c_box ul li");
		var shop_a_iphone = $jq(".shop_a_box_iphone ul li");
		var packageDetalShow = $jq('.packageDetalShow');
		var index =  age.index();
		if (packageType=="A") {
			var index = $jq("#type_A li").index(this)
			if (packageVal==proVal.eq(index).attr("pro_val_m")) {
				shop_a.eq(index).addClass("of").siblings().removeClass("of");
				shop_b.removeClass("of");
				shop_c.removeClass("of");
				packageDetalShow.html("A计划" +newstr)
			};
			showLargessInfo(index)
		};
		if (packageType=="B") {
			var index = $jq("#type_B li").index(this)
			if (packageVal==proVal.eq(index).attr("pro_val_m")) {
				shop_b.eq(index).addClass("of").siblings().removeClass("of");
				shop_a.removeClass("of");
				shop_c.removeClass("of");
				packageDetalShow.html("B计划" +newstr)
			};
			index = index + (11)
			showLargessInfo(index)
			
		};
		if (packageType=="C") {
			var index = $jq("#type_C li").index(this);
			if (packageVal==proVal.eq(index).attr("pro_val_m")) {
				shop_c.eq(index).addClass("of");
				shop_a.removeClass("of");
				shop_b.removeClass("of");
				packageDetalShow.html("C计划" +newstr)
			};
			index = index + (17)
			showLargessInfo(index);

		};
		
	}
};

//³õÊ¼»¯Ò³Ãæ
var initForm = function() { 
    //³õÊ¼»¯¼ÆËã·½Ê½Ñ¡Ôñ     	
	clearForm();
}; 

var isIE6 = function(){
    if($jq.browser.msie){
       if(parseInt($jq.browser.version.charAt(0))<=6){
           return true;
       }
   }
   return false;
};

//ÉèÖÃ×Ü±ä¶¯Öµ
var setTotalBar = function(){
    var type = DATA_DAY;
    var foo = $jq('#totals');   
    var bar = foo.find('.bar2');  
    var over = foo.find('.over2'); 

    //ÉèÖÃ×ÜÁ¿³õÊ¼ÑùÊ½	
    bar.css({ top:foo.height()}); 
    over.height(foo.height()- bar.height());    		
    var	OVERAGEMAX = Number(UNIT_TOTAL); 
    var	OVERAGEMAX = Number(UNIT_TOTAL);
    //»ñÈ¡µ±Ç°×ÜÁ¿
	var currentV = Number($jq('#value_webPages').html()) * UNIT_WEBPAGE+
	               Number($jq('#value_stocks').html()) * UNIT_STOCK+
	               Number($jq('#value_talks').html()) * UNIT_TALK+
	               Number($jq('#value_emails').html()) * UNIT_EMAIL; 
				   
	if(type === DATA_DAY){
	    currentV = currentV*parseInt(DATA_MONTH);
	}
	currentV = currentV +  Number($jq('#value_videos').html()) * UNIT_VIDEO+
												 Number($jq('#value_musics').html()) * UNIT_MUSIC; 
	//¼ÆËãµ±Ç°×ÜÁ¿ËùÕ¼°Ù·Ö±È
	var curentP = currentV/OVERAGEMAX; 
	
	var barH = 0;
	if(curentP <= 0){
	    over.height(140);	 
	    barH =  140;
	    bar.css({'background-image':'url(images/btn2.png)'});    
	}else if(1 > curentP > 0){
	    if(isIE6()){
	        //over.height((foo.height())*(1-curentP));
	        //barH = over.height()-11;	
	        //bar.css({'background-image':'url(images/btn2.png)'});    
	    }else{
	        over.height(140*(1-curentP));
	        barH = over.height()-6;	
	        bar.css({'background-image':'url(images/btn2.png)'}); 
	    }        
	}else{
	    over.height(0);
	    barH =-6;
	    bar.css({'background-image':'url(images/btn2_1.png)'});
	}
	//ÉèÖÃ×ÜÁ¿»¬¿éÖµÏÔÊ¾  
	setTotalsTitle(currentV);
	setSuggestCombo(currentV);
    //set bar position 
    bar.css({ top: barH}); 
};
	  
$jq(document).ready(function(){   
       		
    initForm();   
});