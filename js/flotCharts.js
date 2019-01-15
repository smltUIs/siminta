
var dom = document.getElementById("panel-con1");
var dom1 = document.getElementById("panel-con2");
var dom2 = document.getElementById("panel-con3");
var dom3 = document.getElementById("panel-con4");
var dom4 = document.getElementById("panel-con5");
var myChart = echarts.init(dom);
var myChart1 = echarts.init(dom1);
var myChart2 = echarts.init(dom2);
var myChart3 = echarts.init(dom3);
var myChart4 = echarts.init(dom4);
window.addEventListener("resize", () => { 
    this.myChart.resize();  
    this.myChart1.resize();  
    this.myChart2.resize(); 
    this.myChart3.resize(); 
    this.myChart4.resize(); 
    
});
// 颜色
var lightBlue = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(0, 192, 255, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(0, 192, 255, 0.1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}
var darkBlue = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(41, 121, 255, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(41, 121, 255, 0.1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}

function randomData() {
    value = Math.random() * 50;
    return {
        value: Math.round(value)
    }
}
// 时间设置
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function timeSet() {
    var newTime = new Date();
    var m = newTime.getMinutes();
    var s = newTime.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    return [m, s].join(':');
}

var data = [];
var timeData = [];

for (var i = 0; i < 9; i++) {
    timeData.unshift(timeSet());
    data.unshift(randomData());
}
// 指定图表的配置项和数据
var option = {
    tooltip: {
        show: false
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // boundaryGap: 100,
        min: -1,
        max: 9,
        axisLine: {
            lineStyle: {
                color: '#4bbbf8',
                shadowColor: 'rgba(75, 211, 255, 0.5)',
                shadowBlur: 5
            }
        },
        axisTick: {
            interval: (index) => {
                if (index === -1 || index === 9) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        splitLine: {
            show: false
        },
        data: timeData,

    },
    yAxis: [{
        max: 50,
        min: 0,
        axisLine: {
            lineStyle: {
                color: '#4bbbf8',
                shadowColor: 'rgba(75, 211, 255, 0.5)',
                shadowBlur: 5
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 12
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(75, 211, 255, 0.2)',
                type: 'dashed'
            }
        }
    }],
    series: [{
        name: '数量',
        type: 'pictorialBar',
        barCategoryGap: '-60%',
        symbol: 'path://d="M150 0 L75 200 L225 200 Z"',
        label: {
            show: true,
            position: 'top',
            color: '#1798ff',
            fontSize: 14
        },
        itemStyle: {

            color: function(params) {
                return params.dataIndex % 2 ? darkBlue : lightBlue;
            }
        },
        data: data
    }],
    backgroundColor: "#190c12",
};

myChart.setOption(option);
var key = 0;
setInterval(function() {

    timeData.shift();
    timeData.push(timeSet());

    data.shift();
    data.push(randomData());

    // 颜色控制
    key = (key === 1) ? 0 : 1;

    myChart.setOption({
        xAxis: {
            data: timeData
        },
        series: [{
            itemStyle: {
                normal :{
                    color: function(params) {
                        return (params.dataIndex + key) % 2 ? darkBlue : lightBlue;
                    }
                }
            },
            data: data
        }]
    });
}, 1000);














option1 = {
    tooltip : {
        trigger: 'axis',
        showDelay : 0,
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        },
        zlevel: 1
    },
    legend: {
        // data:['sin','cos']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    xAxis : [
        {
            type : 'value',
            scale:true
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true
        }
    ],
    series : [
        {
            // name:'sin',
            type:'scatter',
            large: true,
            symbolSize: 3,
            data: (function () {
                var d = [];
                var len = 10000;
                var x = 0;
                while (len--) {
                    x = (Math.random() * 10).toFixed(3) - 0;
                    d.push([
                        x,
                        //Math.random() * 10
                        (Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
                    ]);
                }
                //console.log(d)
                return d;
            })()
        },
        {
            // name:'cos',
            type:'scatter',
            large: true,
            symbolSize: 2,
            data: (function () {
                var d = [];
                var len = 20000;
                var x = 0;
                while (len--) {
                    x = (Math.random() * 10).toFixed(3) - 0;
                    d.push([
                        x,
                        //Math.random() * 10
                        (Math.cos(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
                    ]);
                }
                //console.log(d)
                return d;
            })()
        }
    ]
};

if (option1 && typeof option1 === "object") {
    myChart1.setOption(option1, true);
}


var weatherIcons = {
    'Sunny': './data/asset/img/weather/sunny_128.png',
    'Cloudy': './data/asset/img/weather/cloudy_128.png',
    'Showers': './data/asset/img/weather/showers_128.png'
};

option2 = {
    title: {
        // text: '天气情况统计',
        // subtext: '虚构数据',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['西凉', '益州','兖州','荆州','幽州']
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
             
                {value:535, name: 'serious0'},
                {value:510, name: 'serious1'},
                {value:634, name: 'serious2'},
                {value:735, name: 'serious3'},
                {value:735, name: 'serious4'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2, true);
}




option3 = {
    angleAxis: {
        type: 'category',
        data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        z: 10
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};
if (option3 && typeof option3 === "object") {
    myChart3.setOption(option3, true);
}



option4 = {
    xAxis: {
        type: 'category',
        data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 20,
        lineStyle: {
            normal: {
                color: 'green',
                width: 4,
                type: 'dashed'
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: 'yellow',
                color: 'blue'
            }
        }
    },
    {
        data: [150, 100, 150, 160, 100, 80, 70],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 20,
        lineStyle: {
            normal: {
                color: 'green',
                width: 4,
                type: 'dashed'
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: 'yellow',
                color: 'blue'
            }
        }
    }]
};
if (option4 && typeof option4 === "object") {
    myChart4.setOption(option4, true);
}