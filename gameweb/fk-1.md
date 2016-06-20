@@疯狂打怪兽
version::1.0
copy--http://play.11h5.com/legend/game.html
制作加载界面及loading

##配置环境

##制作加载进度场景


1. 加载资源列表
 加载素材PNG，加音效，加JSON，加。。
 2.加载方式

 3.屏幕自适应
//main文件注释
/**
"项目的简要说明"
 project.json文件的内容，是游戏的全局配置，修改它以定制一些行为。
 {
“project_type”：“JavaScript”，//“project_type”表明项目的程序语言，可以忽略这个
“debugmode”：1，//“debugmode”可能值：
 // 0 -没有消息将被打印。
 // 1 cc.error，cc.assert，cc.warn，cc.log将打印在控制台。
 // 2 cc.error，cc.assert，cc.warn将打印在控制台。
 // 3 cc.error，cc.assert将打印在控制台。
 // 4 cc.error，cc.assert，cc.warn，cc.log将打印在画布上，仅适用于Web。
 // 5 cc.error，cc.assert，cc.warn将打印在画布上，仅适用于Web。
 // 6 cc.error，cc.assert将打印在画布上，仅适用于Web。
"showfps"：真，//左下角的FPS的信息将显示在“showfps”等于true，否则将被隐藏。
"帧率"：60，//“帧率”为您的游戏设置想要的帧速率，但真正的FPS取决于你游戏的实现和运行环境。
"gameCanvas"设置画布元素ID，只有对网站有用。
"rendermode"设置渲染器类型，唯一有用网站：
 由发动机自动选择的0
 // 1被迫使用画布渲染
 // 2被迫使用WebGL渲染，但在移动浏览器忽略
 "enginedir"：“框架/ cocos2d-html5 /”，
 //在调试模式中，如果你用整个引擎来开发你的游戏，你应该指定相对路径“enginedir”，
 但是如果你使用的是一个单一的引擎文件，你可以忽略它。
 "模块"：[“cocos2d”]，
 "jslist"：[
   在您的游戏设置js文件列表。
 ]
}
*/


//提高显示效果
cc.view.enableRetina(false);
//调用视图
cc.view.adjustViewPort(true);
//设置分辨率策略和设计分辨率大小
cc.view.setDesignResolutionSize(480, 800, cc.ResolutionPolicy.FIXED_WIDTH);
//游戏将被调整当浏览器的大小改变
cc.view.resizeWithBrowserSize(true);

<script src="cocos2d-html5/CCBoot.js"></script>
第一次页面备份

<!DOCTYPE>
<html>
<head>
    <meta charset="utf-8">
    <title>疯狂打怪兽</title>
    <!-- 浏览器视图缩放参数设置-->
    <meat name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
    <!-- 开启网站对webapp程序的支持-->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <!--强制竖屏-->
    <meta name="screen-orientation" content="portrait"/>
    <!--以下为强制全屏-->
    <meta name="full-screen" content="true"/>
    <meta name="x5-fullscreen" content="true"/>
    <meta name="360-fullscreen" content="true"/>
    <style>
        html,body{
            -ms-touch-action:none;
            background:#000;
            padding: 0;
            border: 0;
            margin: 0;
            height: 100%;
        }
        div,canvas{
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -khtml-user-select: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
    </style>
    <script src="lib/zepto.min.js"></script>
    <!--引用load-->
    <!--<script src="lib/loading.js"></script>-->
    <!-- 引用cocos引擎包-->
    <!--<script src="cocos2d-html5/CCBoot.js"></script>-->
    <script src="lib/cocos2d-js-v3.11.js"></script>
</head>
<body>
    <canvas id="gameCanvas" width="480" height="800"></canvas>
    <script src="src/main.js"></script>
</body>
</html>
第一次js代码
 /* if(!cc.sys.isNative && document.getElementById("cocosLoading"))
        document.body.removeChild(document.getElementById("cocosLoading"));
    cc.game.onStart = function(){
        //提高显示效果
        cc.view.enableRetina(false);
        //调用视图
        cc.view.adjustViewPort(true);
        //设置分辨率策略和设计分辨率大小
        //cc.view.setDesignResolutionSize(480, 800, cc.ResolutionPolicy.FIXED_WIDTH);
        //游戏将被调整当浏览器的大小改变
        cc.view.resizeWithBrowserSize(true);
        //load resources
        cc.LoaderScene.preload("g_resources", function () {
            cc.director.runScene(new MenuScene());
        });
    };
    cc.game.run("gameCanvas");*/

window.onload = function(){
}
第一次project.json备份
{
    "project_type": "javascript",

    "debugMode" : 1,
    "showFPS" : true,
    "frameRate" : 60,
    "id" : "gameCanvas",
    "renderMode" : 0,
    "engineDir":"lib/cocos2d-html5",

    "modules" : ["cocos2d"],

    "jsList" : [
        "src/resource.js",
        "src/app.js"
    ]
}