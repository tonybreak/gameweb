var AnimationLayer = cc.Layer.extend({
	ctor:function(){
		this._super();
		this.init();
	},
	init:function(){
		this._super();
		var spriteRunner = cc.Sprite.create(res.runner_png);
		// spriteRunner.attr(x:80,y:85);
		this.addChild(spriteRunner);
	}
});