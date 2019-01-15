var dom = document.getElementById("panel-txt");
// var dom1 = document.getElementById("panel-txt1");

var myChart = echarts.init(dom,"wonderland");
// var myChart1 = echarts.init(dom1);
window.addEventListener("resize", () => { 
    this.myChart.resize();  
    this.myChart1.resize();  
    this.myChart2.resize(); 
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
            data : ['0','2011','2012'],
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
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            // name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[6870,8800,1290,1100]
        },
        {
            // name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[2666, 2778, 4912, 3767, 6810, 5670, 4820,15073,10687,8432]
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}



// charts2

var dom1 = document.getElementById("panel-txt1");
var myChart1 = echarts.init(dom1);
var app1 = {};
option1 = null;
option1 = {
    tooltip: {
        trigger: 'axis'
    },
    color:['#0b62a4','#7a92a3'],
    xAxis: {
        type: 'category',
        data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        axisTick: {
            show: false
        },
          axisLine: {
            show: false
        }
    },
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
          axisLine: {
            show: false
        }
    },
    {
        splitLine:{
            show:false
        }
    },
    
    {
        min:0,
        max:100,
        splitNumber:25
    }],
    series: [{
        data: [100, 75, 50, 75, 50, 75, 100],
        type: 'bar'
    },
    {
        data: [90, 65, 40, 65, 40, 65, 90],
        type: 'bar'
    }]
};

if (option1 && typeof option1 === "object") {
    myChart1.setOption(option1, true);
}


// charts3
var dom2 = document.getElementById("panel-txt2");
var myChart2 = echarts.init(dom2);
var app2 = {};
option2 = null;
option2 = {

    tooltip: {
        trigger: 'axis'
    },
  
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            }
        }
    },
    xAxis:  {
        type: 'category',
        
        boundaryGap: false,
        data: ['2006','2007','2008','2009','2010','2011','2012'],
        axisTick: {
            show: false
          },
         
          axisLine: {
            show: false
        } 
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            // formatter: '{value} °C'
        },
        axisTick: {
            show: false
        },
          axisLine: {
            show: false
        }
    },
    series: [
        {
            type:'line',
            data:[100,75, 50, 75, 50, 75,100],
            smooth:0.2,
            itemStyle : {  
                                normal : {  
                                    color:'#0b62a4',  
                                    lineStyle:{  
                                        color:'#0b62a4'  
                                    }  
                                }  
                            },  
            lineStyle:{
                normal:{
                    width:4
                }
            },
            symbol:"circle",
            symbolSize:7
            
          
        },
        {
            type:'line',
             data:[90,65, 40, 65, 40, 65,90],
            smooth:0.2,
            itemStyle : {  
                                normal : {  
                                    color:'#7a92a3',  
                                    lineStyle:{  
                                        color:'#7a92a3'  
                                    }  
                                }  
                            },  
            lineStyle:{
                normal:{
                    width:4
                }
            },
            symbol:"circle",
            symbolSize:7
    
        }
    ]
};
;
if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2, true);
}



// charts3
var dom3 = document.getElementById("panel-txt3");
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