window.eventHub = {
    events: {},
    //发布 到eventhub 使用方式 window.eventHub.emit('xxx',data)
    emit(eventName, data){
        for(let key in this.events){
            if(key === eventName){
                let functionList = this.events[key]
                functionList.map((fn)=>{
                    fn.call(undefined, data)
                })
            }
        }
    },
    // 从eventhub上订阅，使用方式 window.eventHub.on('xxx',data=>{})
    on(eventName, fn){
        if(this.events[eventName] === undefined){
            this.events[eventName] = []
        }
        this.events[eventName].push(fn)
    },
}

// events 存放的key 是事件名，value 是数组，数组里面是不同的函数，
// 意味着一个事件触发的时候会在不同的地方进行调用数组里对应的函数

window.eventHub.emit('xxx',123)
window.eventHub.on('xxx',data=>{
    console.log(data); // 123
})
