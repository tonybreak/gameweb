var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    itemArr: null,
    ctor: function () {
        this._super();
        this.itemArr = new Array();
        // 初始化10个子layer，每一项的显示
        for (var i = 0; i < 10; i++) {
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
        this.addChild(scrollLayer);
        //处理事件
        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            // swallowTouches:true,
            onTouchBegan:this.touchbegan,
            onTouchMoved:this.touchmoved,
            onTouchEned:this.touchended
        },this);
        return true;
    },
    touchbegan:function () {
        cc.log("touch began");
        // 记录触摸起始点
    },
    touchmoved:function () {
        cc.log("touch moved");
        // 1.计算手指滑动的纵向距离
        // 2.使scrollLayer的y坐标减去手指滑动的距离
    },
    touchended:function () {
        cc.log("touch ended");
    }

});
