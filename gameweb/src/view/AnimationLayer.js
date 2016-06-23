 var AnimationLayer = cc.Layer.extend({
	 ctor:function () {
		this._super();
		this.init();
	 },
	 init: function () {
		//一次加载纹理图片和解析所有的帧
		cc.spriteFrameCache.addSpriteFrames(res.runner_plist);
		//根据帧缓存来创建sprite
		var sp=new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("run01.png"));
		this.addChild(sp);
		sp.setPosition(240,200);
	}
});