var BackgroundLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		this.init();
	},
	init:function(){
		this._super();
		var winsize = cc.director.getWinSize();
		var centerPos = cc.p(winsize.width/2,winsize.height/2);
		var spriteBG = cc.Sprite.create(res.playBG_png);
		spriteBG.setPosition(centerPos);
		this.addChild(spriteBG);
		var spriteOper = cc.Sprite.create(res.oper_png);
		spriteOper.setPosition(cc.p(winsize.width/2,spriteOper.height/2));
		this.addChild(spriteOper);
	}
});