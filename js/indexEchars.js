var dom = document.getElementById("panel-image");
// var dom = document.getElementById("panel-txt");
var myChart = echarts.init(dom,"wonderland");
window.addEventListener("resize", () => { 
    this.myChart.resize();  
    // this.myChart2.resize();  
    this.myChart3.resize(); 
    
});
var app = {};
option = null;
option = {
    title: {
        // text: '堆叠区域图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        // data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['0','2011','2012','2013','2014','2015','2016'],
            axisTick: {
                show: false
            },
              axisLine: {
                show: false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            min:0,
            max:30000,
            axisTick: {
                show: false
            },
              axisLine: {
                show: false
            }
        }
    ],
    series : [
        {
            // name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[8000, 12786, 10433, 13334, 8999,6000,6000],
            smooth:0.3
        },
        {
            // name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[6870,8800,1290,1100,10687,8432,9099,7899],
            smooth:0.3

        },
        {
            // name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[2666, 2778, 4912, 3767, 6810, 5670, 4820,2900],
            smooth:0.3

        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var dom3 = document.getElementById("panel-chart");
var myChart3 = echarts.init(dom3);
var app3 = {};
option3 = null;
app.title = '环形图';

option3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:300, name:'Download Sales'},
                {value:200, name:'In-Store Salse'},
                {value:150, name:'Mail-Order Sales'}
            ]
        }
    ]
};
;
if (option3 && typeof option3 === "object") {
    myChart3.setOption(option3, true);
}
      