var picFrameCache= function () {
    this.flg = 0;
};

var loadingbarproallnum = 0;

//�첽����
picFrameCache.setCachePic = function (res,objcallback,obj) {
    //�첽������Ϸ��ԴP
    var texCache = cc.textureCache;
    //����������Դ
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

//��Դ����
picFrameCache.setCachePlist = function (plist) {
    for(var key = 0 in plist){
        console.log("plist:"+plist[key]);
        cc.spriteFrameCache.addSpriteFrames(plist[key]);
    }
};

//��ȡFrame
picFrameCache.getCache = function (name) {
    var frame;
    frame = cc.SpriteFrameCache.getSpriteFrame(name);
    return frame;
};

//�Ƴ�Plist
picFrameCache.getCache = function (plist) {
    cc.SpriteFrameCache.removeSpriteFramesFromFile(plist);
};