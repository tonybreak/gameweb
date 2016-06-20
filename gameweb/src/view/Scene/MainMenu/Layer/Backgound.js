/**
 * Created by zhangjiangwei on 2016/6/20.
 */

var MMBackgoundLayer = cc.layer.extend({
    ctor:function(){
        this.super();
    //    º”‘ÿ±≥æ∞
        this.loadBackgound();
        return true;
    },
    loadBackgound:function(){
        var node = new cc.Sprite("res/image/loadBg.png");
        this.addChild(node);
        node.setPosition(cc.winSize.width/2,cc.winSize.height/2);
    }
})
