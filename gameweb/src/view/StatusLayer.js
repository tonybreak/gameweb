var StatusLayer = cc.Layer.extend({
	labelCoin:null,
	labelMeter:null,
	coins:0,

	ctor:function(){
		this._super();
		this.init();
	},

	init:function(){
		this._super();
		/*var winsize = cc.director.getWinSize();
		this.labelCoin = cc.LabelTTF.create("Coins:0","Helvetica",20);
		this.labelCoin.setColor(cc.color(0,0,0));
		this.labelCoin.setPosition(cc.p(70,winsize.height-20));
		this.addChild(this.labelCoin);
		this.labelMeter = cc.LabelTTF.create("0M","Helvetica",20);
		this.labelMeter.setPosition(cc.p(winsize.width - 70,winsize.height - 20));
		this.addChild(this.labelMeater);*/
		this.itemArr = new Array();
        // 初始化10个子layer，每一项的显示
        /*for (var i = 0; i < 10; i++) {
            var layer = new cc.LayerColor();
            layer.width = cc.winSize.width/2 -30;
            // layer.width = 100;
            layer.height = 100;
            layer.setColor(cc.color(255, 255, 255, 255));
            this.itemArr.push(layer);
        }
        // 初始化滚动layer，其纵坐标由子layer高度决定
        var scrollLayer = new cc.LayerColor();
        scrollLayer.setColor(cc.color(255, 68, 68, 255));
        scrollLayer.width = cc.winSize.width/2;
        scrollLayer.height = 115 * this.itemArr.length;
        scrollLayer.setPosition(cc.winSize.width/4, cc.winSize.height - scrollLayer.height);
        for (var i = 0; i <  this.itemArr.length; i++) {
            this.itemArr[i].setPosition((scrollLayer.width/2-this.itemArr[i].width/2),15+(this.itemArr[i].height+15)*i);
            scrollLayer.addChild(this.itemArr[i]);
        }
        this.addChild(scrollLayer);*/
	}
})