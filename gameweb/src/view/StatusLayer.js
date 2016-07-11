var StatusLayer = cc.Layer.extend({
    winsize : cc.winSize,
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        this._super();
        var self = this;
        /**
        *先加载按钮plist文件
        *使用cc.loader.load(url,cb)
        *示例
        *cc.loader.load([s_Cowboy_plist, s_Cowboy_png], function(err, results){
            if(err){
                cc.log("Failed to load %s, %s .", s_Cowboy_plist, s_Cowboy_png);
                return;
            }
            cc.log(s_Cowboy_plist + "--->");
            cc.log(results[0]);
            cc.log(s_Cowboy_png + "--->");
            cc.log(results[1]);
            cc.spriteFrameCache.addSpriteFrames(s_Cowboy_plist);
            var frame = new cc.Sprite("#guard1_01.png");
            self.addChild(frame);
            frame.x = winsize.width/4;
            frame.y = winsize.height/4;
        });
        */
        var plist = "res/image/button/button_plist.plist";
        var pic = "res/image/button/button_png.png"; 
        // var gem = "res/image/button/button_gem.png";
        // var gem2 = "res/image/button/button_gem2.png";//宝石
        // var market = "res/image/button/button_market.png";
        // var market2 = "res/image/button/button_market2.png";
        // var rank = "res/image/button/button_rank.png";
        // var rank2 = "res/image/button/button_rank2.png";
        // var success = "res/image/button/button_success.png";
        // var success2 = "res/image/button/button_success2.png";
        // var task = "res/image/button/button_task.png";
        // var task2 = "res/image/button/button_task2.png";
        // var upgrade = "res/image/button/button_upgrade.png";
        // var upgrade2 = "res/image/button/button_upgrade2.png";

        var res = [plist,pic];

        // 创建并添加按钮
        cc.loader.load(res, function(){
            cc.spriteFrameCache.addSpriteFrames(plist);

            var gemMenuItem = cc.MenuItemSprite.create(
                cc.Sprite.create("#button_gem.png"),
                cc.Sprite.create("#button_gem2.png"),
                self.gemMenuItemCallback,self);
            gemMenuItem.x = 0;

            var marketMenuItem = cc.MenuItemSprite.create(
                cc.Sprite.create("#button_market.png"),
                cc.Sprite.create("#button_market2.png"),
                self.marketMenuItemCallback,self);
            marketMenuItem.x = 80;

            var rankMenuItem = cc.MenuItemSprite.create(
                cc.Sprite.create("#button_rank.png"),
                cc.Sprite.create("#button_rank2.png"),
                self.rankMenuItemCallback,self);
            rankMenuItem.x = 160;

            var taskMenuItem = cc.MenuItemSprite.create(
                cc.Sprite.create("#button_task.png"),
                cc.Sprite.create("#button_task2.png"),
                self.taskMenuItemCallback,self);
            taskMenuItem.x = 240;

            var upgradeMenuItem = cc.MenuItemSprite.create(
                cc.Sprite.create("#button_upgrade.png"),
                cc.Sprite.create("#button_upgrade2.png"),
                self.upgradeMenuItemCallback,self);
            upgradeMenuItem.x = 320;

            var menuItem = cc.Menu.create(gemMenuItem,marketMenuItem,rankMenuItem,taskMenuItem,upgradeMenuItem);
            menuItem.x = 50;
            menuItem.y = 50;
            self.addChild(menuItem,10);
        });
        /*
        *升级界面创建与加载
        *
        */
        this.createUpgradeMenu();
    },
    gemMenuItemCallback:function(){
        console.log('宝石')
    },
    marketMenuItemCallback:function(){
        console.log('商城')
    },
    rankMenuItemCallback:function(){
        console.log('排行')
    },
    taskMenuItemCallback:function(){
        console.log('任务')
    },
    upgradeMenuItemCallback:function(){
        console.log('升级');

    },
    createUpgradeMenu:function(){
        var container = cc.Layer.create();
        var scrollView = cc.ScrollView.create(cc.size(400,600));

        // scrollView.setDirection(1);

        scrollView.setTouchEnabled(true);

        // scrollView.setBouncEnable(true);
        
        // scrollView.setSize(cc.size(winsize.width,200));
        scrollView.x = this.winsize.width/2;
        scrollView.y = this.winsize.height/2;
        // scrollView.setContenSize(cc.size(winsize.width,6*200));

        // scrollView.setAnchorPoint(cc.p(0.5,0.5));

        // scrollView.setContentOffset(cc.p(0,200 - 6 * 200));
         var boxW = 100, boxH = 100;
        var box = new cc.LayerColor(cc.color(255, 255, 0, 255));
        box.anchorX = 0;
        box.anchorY = 0;
        box.x = (this.winsize.width - boxW) / 2;
        box.y = (this.winsize.height - boxH) / 2;
        box.width = boxW;
        box.height = boxH;

        var markrside = 10.0;
        var uL = new cc.LayerColor(cc.color(255, 0, 0, 255));
        box.addChild(uL);
        uL.width = markrside;
        uL.height = markrside;
        uL.x = 0;
        uL.y = boxH - markrside;
        uL.anchorX = 0;
        uL.anchorY = 0;

        var uR = new cc.LayerColor(cc.color(0, 0, 255, 255));
        box.addChild(uR);
        uR.width = markrside;
        uR.height = markrside;
        uR.x = boxW - markrside;
        uR.y = boxH - markrside;
        uR.anchorX = 0;
        uR.anchorY = 0;


        this.addChild(box);
        // this.addChild(scrollView);
       /* var pic1 = "res/image/pic/shop_item_bg_2.png"; 
        var res = [pic1]
        cc.loader.load(res, function(){
            
            container.addChild(cc.Sprite.create(pic1));
        });*/
    }
});