var picFrameCache= function () {
    this.flg = 0;
};

var loadingbarproallnum = 0;

//异步加载
picFrameCache.setCachePic = function (res,objcallback,obj) {
    //异步加载游戏资源P
    var texCache = cc.textureCache;
    //遍历加载资源
    var reslist = res;
    var allnum = 0;
    for(var key = 0 in reslist){
        allnum++;
    }

    loadingbarproallnum = allnum;

    var readnum = 0;

    for(var key = 0 in reslist){
        cc.textureCache.addImageAsync(reslist[key],objcallback,obj);
    }
};

//资源加载
picFrameCache.setCachePlist = function (plist) {
    for(var key = 0 in plist){
        console.log("plist:"+plist[key]);
        cc.spriteFrameCache.addSpriteFrames(plist[key]);
    }
};

//获取Frame
picFrameCache.getCache = function (name) {
    var frame;
    frame = cc.SpriteFrameCache.getSpriteFrame(name);
    return frame;
};

//移除Plist
picFrameCache.getCache = function (plist) {
    cc.SpriteFrameCache.removeSpriteFramesFromFile(plist);
};