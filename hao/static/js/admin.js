
//加载完毕判断是否初始化排序
$(document).ready(function() {
    if(!load_sort){return;}
    $(".sortable").sortable({
        revert: false, // 拖拽结束后返回原位置
        cursor: "move", // 拖拽时显示移动光标
        cancel: '.url-card[id="0"]', // 禁止拖拽元素(防止拖拽<查看全部>)
        update: function(event, ui) {
            if(!/^\d+$/.test($(this).attr('id'))){
                layer.msg('不支持对该分类排序',{icon: 5});
                return false;
            }
            // 当排序结束时执行的回调函数
            var sortedIDs = $(this).sortable("toArray");
            var formData = new FormData();
            var sortable = $(this);
            $.each(sortedIDs, function(index, value) {
              formData.append('data[' + index + '][]', value);
              formData.append('data[' + index + '][]', index + 1);
            });
            
            $.ajax({
                url: get_api('write_link','order'),
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(data) {
    		        if(data.code == 1) {
		        	    layer.msg('操作成功',{icon: 6,time: 2000});
    		        } else {
		                layer.msg(data.msg || '操作失败',{icon: 5});
		                sortable.sortable("cancel");
    		        }
                },
                error: function(xhr, textStatus, errorThrown) {
                    layer.msg('请求失败',{icon: 5});
                    sortable.sortable("cancel");
                }
            });
        }
    });
});

layui.use(['dropdown'], function() {
	var dropdown = layui.dropdown;
    //取基本URL,是否支持复制
    var baseUrl = Get_baseUrl();
    var isSupported = ClipboardJS.isSupported();
	//右键菜单
	dropdown.render({
		elem: '.url-card',
		trigger: 'contextmenu' //右键事件
        ,data: [{
			title: '访问',
			templet: '<i class="fa fa-external-link"> </i> {{d.title}}',
			id: 1
		},{
// 			title: '详情',
// 			templet: '<i class="fa fa-internet-explorer" > </i>  {{d.title}}',
// 			id: 5
// 		},{
			title: '复制',
			templet: '<div class="copybtn"><i class="fa fa-copy"> </i> {{d.title}}</div>',
			id: 2
		},{
			title: '编辑',
			templet: '<i class="fa fa-pencil-square-o"> </i> {{d.title}}',
			id: 3
		},{
			title: '删除',
			templet: '<i class="fa fa-trash-o" style="padding-right: 3px;"> </i> {{d.title}}',
			id: 4
		}],
		click: function(data, othis) {
			var elem    = $(this.elem),
				listId  = elem.attr('id');
			    listUrl = $('#'+listId + ' a').attr("href");
			    //console.log(elem, listUrl, listUrl);
			    //console.log(listId,listUrl);
			switch(data.id) {
				case 1: //访问
					window.open(listUrl, '_blank');
					break;
				case 5: //详情
				    window.open('./index.php?c=click&u=' + u +'&id=' + listId,"target");
					break;
				case 2: //复制
				    if(isSupported){
				        let url = listUrl.substr(0, 11) == "./index.php" ? baseUrl + listUrl.slice(11) : listUrl;
				        ClipboardJS.copy(url);
                        layer.msg('复制成功', {icon: 1});
				    }else{
				        layer.msg('复制失败,您的浏览器不支持', {icon: 5});
				    }
					break;
				case 3: //编辑
				    if(listId > 0){
				        openLayer('./index.php?c=admin&source=tpl&page=link_edit&u=' + u +'&id=' + listId,'编辑链接');
				    }else{
				        layer.msg('不支持操作的类型', {icon: 5});
				    }
					break;
				case 4: //删除
				    if(listId < 1){
				        layer.msg('不支持操作的类型', {icon: 5});
				        return;
				    }
					layer.confirm('一定要删除吗？', {
						btn: ['删除', '取消']
					}, function() {
						deleteUrl(listId,elem);
					}, function() {
						layer.msg('取消删除！', {time: 600});
					});
					break;
			}
		}
	});
	
	//右下角添加
	$("#addUrl").click(function(){
	    openLayer('./?c=admin&page=link_add&u='+u+'&source=tpl','添加链接');
    });
    
    var openLayer = function(url,title,width = 800,height = 600) {
        var index = layer.open({
            type: 2,
            title: title,
            shadeClose: true,
            scrollbar: false,
            content: url,
            area: [ 
                Math.min($(window).width() - 20, width) + 'px', 
                Math.min($(window).height() - 20, height) + 'px'
            ],
            success: function(layero, index) {
                // 获取弹出层的 iframe 对象
                var iframe = layero.find('iframe').get(0);
                //加载完毕事件
                $(iframe).ready(function() {
                    layer.style(index, {display: 'block'}); //显示窗口
                    layer.close(loading); //关闭加载提示
                    iframeAuto(); //调整窗口
                });
                // 创建MutationObserver实例
                var observer = new MutationObserver(function(mutationsList, observer) {
                    iframeAuto();
                });
                // 监视iframe内部内容的变化
                observer.observe(iframe.contentDocument.body, { subtree: true, childList: true });
            }
        });
        
        layer.style(index, { display: 'none' }); // 初始隐藏窗口
        let loading = layer.msg('正在加载中,请稍后..', {icon: 16,time: 1000*300,shadeClose: false});
        
        // 监听窗口大小变化
        $(window).on('resize', function() { iframeAuto(); });
        
        function iframeAuto() {
            layer.iframeAuto(index); //调整iframe高度
            let iframe = $("body").find("#layui-layer-iframe" + index); //iframe 元素
            let iframeHeight = parseInt($(iframe).css("height")); //获取iframe的高度置
            let topValue = parseInt($("#layui-layer" + index).css("top")); //获取窗口顶边
            let visibleHeight = $(window).height() - topValue - 23;  //计算可视区高度
            $("#layui-layer" + index).css({ "width": Math.min($(window).width() - 20, width) }); //设置弹出窗口的宽度
            if(iframeHeight > visibleHeight) { //检查高度是否超出可视区
                $("#layui-layer" + index).css({ "top": "0", "height": "100%" }); //调整顶部和窗口高度
                $(iframe).css("height", $(window).height() - 53 ); //调整iframe高度
            }
        }
    };
    
});

//删除链接
function deleteUrl(id,elem) {
	$.post(get_api('write_link','del'), {
		lid: id
	}, function(data, status) {
		if(data.code == 1) {
			layer.msg('删除成功！',{icon: 6,time: 2000});
			//elem.remove();
			$('.url-card[id="' + id + '"]').remove();
		} else {
			layer.msg(data.msg,{icon: 5});
		}
	});
};

//取API地址
function get_api(method,type=null){
    return './index.php?c=api&method=' + method + (type?'&type='+type:'') + '&u=' + u ;
}

//取基本URL
function Get_baseUrl() {
    let url = window.location.href,
        hostname = window.location.hostname,
        protocol = window.location.protocol,
        port = window.location.port,
        pathname = window.location.pathname;
        pathname = pathname.substring(0, pathname.lastIndexOf("/") + 1),
        baseUrl = protocol + "//" + hostname + (port ? ":" + port : "") + pathname;
    return baseUrl;
}