var PlayScene = cc.Scene.extend({
	onEnter:function(){
		this._super();
		console.log("初始化主场景")
		this.addChild(new BackgroundLayer());
		// this.addChild(new AnimationLayer());
		// this.addChild(new StatusLayer());
	}
})