 var AnimationLayer = cc.Layer.extend({
	 ctor:function () {
		this._super();
		this.init();
	 },
	 init: function () {
		//һ�μ�������ͼƬ�ͽ������е�֡
		cc.spriteFrameCache.addSpriteFrames(res.runner_plist);
		//����֡����������sprite
		var sp=new cc.Sprite(cc.spriteFrameCache.getSpriteFrame("run01.png"));
		this.addChild(sp);
		sp.setPosition(240,200);
	}
});