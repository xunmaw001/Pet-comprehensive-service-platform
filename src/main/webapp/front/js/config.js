
var projectName = '宠物综合服务平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的订单',
	url: '../shop-order/list.html'
},

{
	name: '我的地址',
	url: '../shop-address/list.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '宠物寄养',
	url: './pages/chongwujiyang/list.html'
}, 
{
	name: '在线门诊',
	url: './pages/zaixianmenzhen/list.html'
}, 
{
	name: '商品信息',
	url: './pages/shangpinxinxi/list.html'
}, 

{
	name: '通知公告',
	url: './pages/news/list.html'
},
{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/ssm51k00/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


cartFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["查看","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["查看","删除"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"buttons":["查看","删除"],"menu":"宠物信息","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"宠物寄养","menuJump":"列表","tableName":"chongwujiyang"}],"menu":"宠物寄养管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"在线门诊","menuJump":"列表","tableName":"zaixianmenzhen"}],"menu":"在线门诊管理"},{"child":[{"buttons":["查看","删除"],"menu":"在线挂号","menuJump":"列表","tableName":"zaixianguahao"}],"menu":"在线挂号管理"},{"child":[{"buttons":["查看","删除"],"menu":"宠物诊疗","menuJump":"列表","tableName":"chongwuzhenliao"}],"menu":"宠物诊疗管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商品信息","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商品分类","menuJump":"列表","tableName":"shangpinfenlei"}],"menu":"商品分类管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"通知公告","tableName":"news"}],"menu":"系统管理"},{"child":[{"buttons":["查看","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看","删除","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看","删除"],"menu":"已完成订单","tableName":"orders/已完成"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"宠物寄养列表","menuJump":"列表","tableName":"chongwujiyang"}],"menu":"宠物寄养模块"},{"child":[{"buttons":["查看","在线挂号"],"menu":"在线门诊列表","menuJump":"列表","tableName":"zaixianmenzhen"}],"menu":"在线门诊模块"},{"child":[{"buttons":["查看"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"宠物信息","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"宠物寄养","menuJump":"列表","tableName":"chongwujiyang"}],"menu":"宠物寄养管理"},{"child":[{"buttons":["查看"],"menu":"在线挂号","menuJump":"列表","tableName":"zaixianguahao"}],"menu":"在线挂号管理"},{"child":[{"buttons":["查看"],"menu":"宠物诊疗","menuJump":"列表","tableName":"chongwuzhenliao"}],"menu":"宠物诊疗管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"宠物寄养列表","menuJump":"列表","tableName":"chongwujiyang"}],"menu":"宠物寄养模块"},{"child":[{"buttons":["查看","在线挂号"],"menu":"在线门诊列表","menuJump":"列表","tableName":"zaixianmenzhen"}],"menu":"在线门诊模块"},{"child":[{"buttons":["查看"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["查看","审核","删除","宠物诊疗"],"menu":"在线挂号","menuJump":"列表","tableName":"zaixianguahao"}],"menu":"在线挂号管理"},{"child":[{"buttons":["查看","删除"],"menu":"宠物诊疗","menuJump":"列表","tableName":"chongwuzhenliao"}],"menu":"宠物诊疗管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"宠物寄养列表","menuJump":"列表","tableName":"chongwujiyang"}],"menu":"宠物寄养模块"},{"child":[{"buttons":["查看","在线挂号"],"menu":"在线门诊列表","menuJump":"列表","tableName":"zaixianmenzhen"}],"menu":"在线门诊模块"},{"child":[{"buttons":["查看"],"menu":"商品信息列表","menuJump":"列表","tableName":"shangpinxinxi"}],"menu":"商品信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"医生","tableName":"yisheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
