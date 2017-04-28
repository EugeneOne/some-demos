var WangyiMusic = function() {
    this.vender = "网易音乐";
    this.playMusic = "see u again";
}

WangyiMusic.prototype = {
    last: function() {
        this.information = {currentMusic:'Ich will',status:'200|404',message:'上一曲'}
    },
    next: function() {
        this.information = {currentMusic:'see u again',status:'200|404',message:'下一曲'}
    },
    play: function() {
        this.information = {currentMusic:'see u again',status:'200|404',message:'播放'}
    },
    pause: function() {
        this.information = {currentMusic:'see u again',status:'200|404',message:'暂停'}
    }
}

var QQMusic = function() {
    this.vender = "QQ音乐";
    this.playMusic = "not low";
}

QQMusic.prototype = {
    last: function() {
        this.information = {currentMusic:'Ich will',status:'200|404',message:'上一曲'}
    },
    next: function() {
        this.information = {currentMusic:'see u again',status:'200|404',message:'下一曲'}
    },
    play: function() {
        this.information = {currentMusic:'QQ不Low',status:'200|404',message:'播放'}
    },
    pause: function() {
        this.information = {currentMusic:'see u again',status:'200|404',message:'暂停'}
    }
}

var Factory = function(type) {
    switch (type) {
        case "Wangyi":
            return new WangyiMusic();
            break;
        case "QQ":
            return new QQMusic();
            break;
        default:
    }
}

var test = new Factory("QQ");
test.play();
console.log(test.information);
