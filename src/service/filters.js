// 公共filters

import Vue from 'vue'
import address from '../../config/address.config'

// 过滤器数组
var filters=[
    // 日期转换成 xxxx年xx月xx日 12:12 格式
    {
        name:'dateTransform'
        ,fn:function(val){
                var _date=new Date(val)
                var _year=_date.getFullYear(),
                _month=_date.getMonth()+1,
                _day=_date.getDate(),
                _hour=_date.getHours(),
                _minute=_date.getMinutes()
                function addZero(target){
                    if (target<10){
                        target='0'+target
                    }
                    return target
                }
                return _year+'年'+addZero(_month)+'月'+addZero(_day)+'日  '+addZero(_hour)+':'+addZero(_minute)
            }
    },

    // 图片cdn
    {
        name:'imgCdn',
        fn:function(val,type,status){
            if(status == 2){
                if(val && val.indexOf(',') > -1){
                    var src = val.split(',')[0]
                    return address.IMG_ADDRESS + src
                }else{
                    return address.IMG_ADDRESS + val
                }
            } else {
                var url = type ? address.OLDIMG_ADDRESS : address.IMG_ADDRESS
                if(val && val.indexOf(',') > -1){
                    var src = val.split(',')[0]
                    return url + src
                }else{
                    return url + val
                }
            }
        }
    },
    // 时间截取日期
    {
        name: 'getDate',
        fn: function(val){
            if(val && val.length > 0){
                return val.substr(0, val.indexOf(' '))
            }
        }
    },
    {
        name: 'imgSlice',
        fn: function(val){
            var i = val.indexOf(',')
            return val.slice(0,i)
        }
    }
]

// 注册filters到Vue
for (var i=0; i<filters.length; i++){
    Vue.filter(filters[i].name,filters[i].fn)
}