@@�������
version::1.0
copy--http://play.11h5.com/legend/game.html
�������ؽ��漰loading

##���û���

##�������ؽ��ȳ���


1. ������Դ�б�
 �����ز�PNG������Ч����JSON���ӡ���
 2.���ط�ʽ

 3.��Ļ����Ӧ
//main�ļ�ע��
/**
"��Ŀ�ļ�Ҫ˵��"
 project.json�ļ������ݣ�����Ϸ��ȫ�����ã��޸����Զ���һЩ��Ϊ��
 {
��project_type������JavaScript����//��project_type��������Ŀ�ĳ������ԣ����Ժ������
��debugmode����1��//��debugmode������ֵ��
 // 0 -û����Ϣ������ӡ��
 // 1 cc.error��cc.assert��cc.warn��cc.log����ӡ�ڿ���̨��
 // 2 cc.error��cc.assert��cc.warn����ӡ�ڿ���̨��
 // 3 cc.error��cc.assert����ӡ�ڿ���̨��
 // 4 cc.error��cc.assert��cc.warn��cc.log����ӡ�ڻ����ϣ���������Web��
 // 5 cc.error��cc.assert��cc.warn����ӡ�ڻ����ϣ���������Web��
 // 6 cc.error��cc.assert����ӡ�ڻ����ϣ���������Web��
"showfps"���棬//���½ǵ�FPS����Ϣ����ʾ�ڡ�showfps������true�����򽫱����ء�
"֡��"��60��//��֡�ʡ�Ϊ������Ϸ������Ҫ��֡���ʣ���������FPSȡ��������Ϸ��ʵ�ֺ����л�����
"gameCanvas"���û���Ԫ��ID��ֻ�ж���վ���á�
"rendermode"������Ⱦ�����ͣ�Ψһ������վ��
 �ɷ������Զ�ѡ���0
 // 1����ʹ�û�����Ⱦ
 // 2����ʹ��WebGL��Ⱦ�������ƶ����������
 "enginedir"�������/ cocos2d-html5 /����
 //�ڵ���ģʽ�У���������������������������Ϸ����Ӧ��ָ�����·����enginedir����
 ���������ʹ�õ���һ����һ�������ļ�������Ժ�������
 "ģ��"��[��cocos2d��]��
 "jslist"��[
   ��������Ϸ����js�ļ��б�
 ]
}
*/


//�����ʾЧ��
cc.view.enableRetina(false);
//������ͼ
cc.view.adjustViewPort(true);
//���÷ֱ��ʲ��Ժ���Ʒֱ��ʴ�С
cc.view.setDesignResolutionSize(480, 800, cc.ResolutionPolicy.FIXED_WIDTH);
//��Ϸ����������������Ĵ�С�ı�
cc.view.resizeWithBrowserSize(true);

<script src="cocos2d-html5/CCBoot.js"></script>
��һ��ҳ�汸��

<!DOCTYPE>
<html>
<head>
    <meta charset="utf-8">
    <title>�������</title>
    <!-- �������ͼ���Ų�������-->
    <meat name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
    <!-- ������վ��webapp�����֧��-->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <!--ǿ������-->
    <meta name="screen-orientation" content="portrait"/>
    <!--����Ϊǿ��ȫ��-->
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
    <!--����load-->
    <!--<script src="lib/loading.js"></script>-->
    <!-- ����cocos�����-->
    <!--<script src="cocos2d-html5/CCBoot.js"></script>-->
    <script src="lib/cocos2d-js-v3.11.js"></script>
</head>
<body>
    <canvas id="gameCanvas" width="480" height="800"></canvas>
    <script src="src/main.js"></script>
</body>
</html>
��һ��js����
 /* if(!cc.sys.isNative && document.getElementById("cocosLoading"))
        document.body.removeChild(document.getElementById("cocosLoading"));
    cc.game.onStart = function(){
        //�����ʾЧ��
        cc.view.enableRetina(false);
        //������ͼ
        cc.view.adjustViewPort(true);
        //���÷ֱ��ʲ��Ժ���Ʒֱ��ʴ�С
        //cc.view.setDesignResolutionSize(480, 800, cc.ResolutionPolicy.FIXED_WIDTH);
        //��Ϸ����������������Ĵ�С�ı�
        cc.view.resizeWithBrowserSize(true);
        //load resources
        cc.LoaderScene.preload("g_resources", function () {
            cc.director.runScene(new MenuScene());
        });
    };
    cc.game.run("gameCanvas");*/

window.onload = function(){
}
��һ��project.json����
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