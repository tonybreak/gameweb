var picFrameCache= function () {
    this.flg = 0;
};

var loadingbarproallnum = 0;

picFrameCache.setCachePic = function (res,objcallback,obj) {
    var texCache = cc.textureCache;
    var reslist = res;
    var allnum = 0;
    for(var key = 0 in reslist){
        allnum++;
    }

    loadingbarproallnum = allnum;

    var readnum = 0;

    for(var key = 0 in reslist){
        console.log("reslist:"+reslist[key]);
        // cc.textureCache.addImageAsync(reslist[key],objcallback,obj);
    }
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