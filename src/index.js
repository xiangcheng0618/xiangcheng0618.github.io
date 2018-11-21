class LaserCache {
    constructor(){
        this.list ={}  //空对象
    }
    set(key, value) {
        this.list[key] =value //设置一个值
    }
    get (key) {
        return this.list[key] //获取一个值
    }
    clear(){
        this.list ={}
    }
}

window.LaserCache =LaserCache