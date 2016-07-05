var picFrameCache= function () {
    this.flg = 0;
};

var loadingbarproallnum = 0;
/**
*               
* picName : "mobs1",
* picPlist : res.mobs1_plist,
* url : "res/image/pic/guard/mobs1.png",
* picName图片在plist中的名称     
*/

picFrameCache.setCachePic = function (obj,cb) {
    var url = (obj.url) ? ( obj.url ) : ( null );
    var picName =  (obj.picName) ? (obj.picName) : ( null );
    var picPlist =  (obj.picPlist) ? (obj.picPlist) : ( null );
    var l = obj.l;
    var self = this;
    cc.textureCache.addImage(url,function(){
        //创建精灵帧缓冲
        cc.spriteFrameCache.addSpriteFrames(picPlist);
        spriteFrames = [];
        for(var n=0;n<=l;n++){
            var png = obj.picName+"_0"+n+".png";
            var frames = cc.spriteFrameCache.getSpriteFrame(png);
            if(frames) {
                spriteFrames.push(frames);
            }
        }
        animation = new cc.Animation(spriteFrames,0.2);
        // var animation2 = new cc.Animation(spriteFrames, 0.2, 2);
        action = cc.animate(animation);
        sp = new cc.Sprite.create(frames);
        self.addChild(sp,4);
        return sp;
    });
};

picFrameCache.setCachePlist = function (plist) {
    for(var key = 0 in plist){
        console.log("plist:"+plist[key]);
        cc.spriteFrameCache.addSpriteFrames(plist[key]);
    }
};

picFrameCache.getCache = function (name) {
    var frame;
    frame = cc.SpriteFrameCache.getSpriteFrame(name);
    return frame;
};

picFrameCache.getCache = function (plist) {
    cc.SpriteFrameCache.removeSpriteFramesFromFile(plist);
};

/**异步加载动画资源
*
var self = this;
var winsize = cc.director.getWinSize();
var s_Cowboy_plist = "res/guard1.plist";
var s_Cowboy_png = "res/guard1.png";
cc.loader.load([s_Cowboy_plist, s_Cowboy_png], function(err, results){
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