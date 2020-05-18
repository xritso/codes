
var DowntimeGraph1Options = {
            chart: {
                animation: false,
                renderTo: 'DowntimeGraph1',
                type: 'column',
                marginLeft: "80",
                marginRight: "0",
                zoomType: "xy",
                style: {
                    fontFamily: "Arial"
                }
            },
            plotOptions: {
              series: {
              animation: false,
                dataLabels: {
                  enabled: true,
                  format: "{y:.0f}"
                }
              }
            },
            title: {
                text: 'Downtime Hours'
            },
            exporting:false,
            xAxis: {
                categories: [
                "WTG001",
                "WTG002",
                "WTG003",
                "WTG004",
                "WTG005",
                "WTG006",
                "WTG007",
                "WTG008",
                "WTG009",
                "WTG0010"
                ],
                crosshair: false
            },
            yAxis: [
                {
                    title: {
                        text: "(Hours)"
                    },
                    labels: {
                        format: "{value}"
                    },
                    opposite: false,
                    min: 0
                }
            ],
            legend: {
              align: "left",
              x: 50,
              y: 10,
              verticalAlign: "bottom",
              floating: false,
              enabled: true
            },
            credits: {
              enabled: false
            },
            tooltip: {
              shared: true
            },
            
            series: [{
                name: 'Aetos',
                data: $.map([                
                {{%TagEnd("AET-WTG001-PI-Downtime.AD.SUM")}},
                {{%TagEnd("AET-WTG002-PI-Downtime.AD.SUM")}},
                {{%TagEnd("AET-WTG003-PI-Downtime.AD.SUM")}},
                {{%TagEnd("AET-WTG004-PI-Downtime.AD.SUM")}},
                {{%TagEnd("AET-WTG005-PI-Downtime.AD.SUM")}},
                {{%TagEnd("AET-WTG006-PI-Downtime.AD.SUM")}},
                {{%TagEnd("AET-WTG007-PI-Downtime.AD.SUM")}},
                {{%TagEnd("AET-WTG008-PI-Downtime.AD.SUM")}},
                {{%TagEnd("AET-WTG009-PI-Downtime.AD.SUM")}},
                {{%TagEnd("AET-WTG010-PI-Downtime.AD.SUM")}}
                ],
                function (value) {
                    return isNaN(value) ? { y: null } : value;
                    }),
                index: 0,
                color: "#13914e",
                yAxis: 0,
                dashStyle: "Solid",
                marker: {
                    enabled: true,
                    symbol: " "
                },
                tooltip: {
                    valueSuffix: " Hours",
                    valueDecimals: "0"
                },
            }, {
    name: 'Tsitomi',
    data: $.map([                
                {{%TagEnd("TSM-WTG001-PI-Downtime.AD.SUM")}},
                {{%TagEnd("TSM-WTG002-PI-Downtime.AD.SUM")}},
                {{%TagEnd("TSM-WTG003-PI-Downtime.AD.SUM")}},
                {{%TagEnd("TSM-WTG004-PI-Downtime.AD.SUM")}},
                {{%TagEnd("TSM-WTG005-PI-Downtime.AD.SUM")}},
                {{%TagEnd("TSM-WTG006-PI-Downtime.AD.SUM")}},
                {{%TagEnd("TSM-WTG007-PI-Downtime.AD.SUM")}},
                {{%TagEnd("TSM-WTG008-PI-Downtime.AD.SUM")}},
                {{%TagEnd("TSM-WTG009-PI-Downtime.AD.SUM")}},
                {{%TagEnd("TSM-WTG010-PI-Downtime.AD.SUM")}}
                ],
        function (value) {
        return isNaN(value) ? { y: null } : value;
        }),
    index: 0,
    yAxis: 0 ,
    type:"column",
    color: "#0dd947",
    dashStyle: "Solid",
    marker: {
    symbol: "square"
    },
    tooltip: {
    valueSuffix: "Hours",
    valueDecimals: "2"
    },
    }]
    }; 
        

        var DowntimeGraph1Chart = new Highcharts.Chart(DowntimeGraph1Options);
         
    

    

var AvailabilityGraph1Options = {
            chart: {
                animation: false,
                renderTo: 'AvailabilityGraph1',
                type: 'column',
                marginLeft: "80",
                marginRight: "0",
                zoomType: "xy",
                style: {
                    fontFamily: "Arial"
                }
            },
            plotOptions: {
              series: {
              animation: false,
                dataLabels: {
                  enabled: true,
                  format: "{y:.0f}"
                }
              }
            },
            title: {
                text: 'Aetos'
            },
            exporting:false,
            xAxis: {
                categories: [
                "WTG001",
                "WTG002",
                "WTG003",
                "WTG004",
                "WTG005",
                "WTG006",
                "WTG007",
                "WTG008",
                "WTG009",
                "WTG0010"
                ],
                crosshair: false
            },
            yAxis: [
                {
                    title: {
                        text: "(%)"
                    },
                    labels: {
                        format: "{value}"
                    },
                    opposite: false,
                    min: 0,
                    max: 100
                }
            ],
            legend: {
              align: "left",
              x: 50,
              y: 10,
              verticalAlign: "bottom",
              floating: false,
              enabled: true
            },
            credits: {
              enabled: false
            },
            tooltip: {
              shared: true
            },
            
            series: [{
                name: 'Tsitomi',
                data: $.map([                
                {{%TagEnd("AET-WTG001-PI-Availability.AD.AVG")}},
                {{%TagEnd("AET-WTG002-PI-Availability.AD.AVG")}},
                {{%TagEnd("AET-WTG003-PI-Availability.AD.AVG")}},
                {{%TagEnd("AET-WTG004-PI-Availability.AD.AVG")}},
                {{%TagEnd("AET-WTG005-PI-Availability.AD.AVG")}},
                {{%TagEnd("AET-WTG006-PI-Availability.AD.AVG")}},
                {{%TagEnd("AET-WTG007-PI-Availability.AD.AVG")}},
                {{%TagEnd("AET-WTG008-PI-Availability.AD.AVG")}},
                {{%TagEnd("AET-WTG009-PI-Availability.AD.AVG")}},
                {{%TagEnd("AET-WTG010-PI-Availability.AD.AVG")}}
                ],
                function (value) {
                    return isNaN(value) ? { y: null } : value;
                    }),
                index: 0,
                color: "#13914e",
                yAxis: 0,
                dashStyle: "Solid",
                marker: {
                    enabled: true,
                    symbol: " "
                },
                tooltip: {
                    valueSuffix: " MWh",
                    valueDecimals: "0"
                },
            },{
    name: 'Tsitomi',
    data: $.map([                
                {{%TagEnd("TSM-WTG001-PI-Availability.AD.AVG")}},
                {{%TagEnd("TSM-WTG002-PI-Availability.AD.AVG")}},
                {{%TagEnd("TSM-WTG003-PI-Availability.AD.AVG")}},
                {{%TagEnd("TSM-WTG004-PI-Availability.AD.AVG")}},
                {{%TagEnd("TSM-WTG005-PI-Availability.AD.AVG")}},
                {{%TagEnd("TSM-WTG006-PI-Availability.AD.AVG")}},
                {{%TagEnd("TSM-WTG007-PI-Availability.AD.AVG")}},
                {{%TagEnd("TSM-WTG008-PI-Availability.AD.AVG")}},
                {{%TagEnd("TSM-WTG009-PI-Availability.AD.AVG")}},
                {{%TagEnd("TSM-WTG010-PI-Availability.AD.AVG")}}
                ],
        function (value) {
        return isNaN(value) ? { y: null } : value;
        }),
    index: 0,
    yAxis: 0 ,
    type:"column",
    color: "#0dd947",
    dashStyle: "Solid",
    marker: {
    symbol: "square"
    },
    tooltip: {
    valueSuffix: "%",
    valueDecimals: "2"
    },
    }]
     

        var AvailabilityGraph1Chart = new Highcharts.Chart(AvailabilityGraph1Options);
        });
    
        var ProductionGraph1Options = {
            
            chart: {
                renderTo: 'ProductionGraph1',
                type: 'column',
               
                zoomType: "xy",
                style: {
                    fontFamily: "Arial"
                }
            },

            plotOptions: {
                column: {
                    stacking: "normal"
                },
            
                series:{
                    dataLabels: {
                    enabled: true,
                    format: "{y:.1f}"
                    }
                }
            },

            title: {
                text: ' '
            },

            exporting:false,

            xAxis: {
                categories: [ 
                 {{#time-repeater 'Day' 'Hour'}}
                 '{{%ToString(ROW_START_TIME(), "HH:mm")}}', 
                 {{/time-repeater}}
                ],
                crosshair: false
            },

            yAxis: [
                {
                    min: 0,
                    title: {
                        text: "MWh"
                    },
                    labels: {
                        format: "{value}"
                    },
                    opposite: false
                }],
                
            legend: {
              align: "center",
              x: 50,
              y: 0,
              verticalAlign: "bottom",
              floating: false,
              enabled: true
            },

            credits: {
                    enabled: false
            },

            tooltip: {
                    shared: true
            },

            series: [{
                name: 'Aetos',
                data: $.map([
                {{#time-repeater 'Day' 'Hour' }}
                {{%TagEnd("AET-PI-ProducedMWh")}},
                {{/time-repeater}}
                ],

                function (value) {
                    return isNaN(value) ? { y: null } : value;
                    }),
                index: 2,
                color: "#13914e",
                yAxis: 0,
                type: "column",
                dashStyle: "Solid",
                marker: {
                    symbol: "square"
                },
                tooltip: {
                    valueSuffix: " MWh",
                    valueDecimals: "1"
                },

                },
                {
                name: 'Tsitomi',
                data: $.map([
                {{#time-repeater 'Day' 'Hour'}}
                {{%TagEnd("TSM-PI-ProducedMWh")}},
                {{/time-repeater}}
                ],
                function (value) {
                    return isNaN(value) ? { y: null } : value;
                    }),
                index: 2,
                color: "#0dd947",
                yAxis: 0,
                type: "column",
                dashStyle: "Solid",
                marker: {
                    symbol: "square"
                },
                tooltip: {
                    valueSuffix: " MWh",
                    valueDecimals: "1"
                },
            }]
        }
        var ProductionGraph1Chart = new Highcharts.Chart(ProductionGraph1Options);
   
    
        var WindGraph1Options = {
            chart: {
                renderTo: 'WindGraph1',
                type: 'line',
               
                zoomType: "xy",
                style: {
                    fontFamily: "Arial"
                }
            },
            plotOptions: {
               //column: {
                    //stacking: "normal"
                    //},
            
            series:{
                        dataLabels: {
                            enabled: true,
                            format: "{y:.1f}"
                }
              }
            },
            title: {
                text: ' '
            },
            exporting:false,
            xAxis: {
                categories: [ 
                 {{#time-repeater 'Day' 'Hour'}}
                 '{{%ToString(ROW_START_TIME(), "HH:mm")}}', 
                 {{/time-repeater}}
                ],
                crosshair: false
            },
            yAxis: [
                {
                    min: 0,
                    title: {
                        text: "m/s"
                    },
                    labels: {
                        format: "{value}"
                    },
                    opposite: false
                }],
                
            legend: {
              align: "center",
              x: 50,
              y: 0,
              verticalAlign: "bottom",
              floating: false,
              enabled: true
            },
            credits: {
              enabled: false
            },
            tooltip: {
              shared: true
            },


            series: [{
                name: 'Aetos',
                data: $.map([
                {{#time-repeater 'Day' 'Hour' }}
                {{%TagEnd("AET-CALC-AverageWindSpeed")}},
                {{/time-repeater}}
                ],
                function (value) {
                    return isNaN(value) ? { y: null } : value;
                    }),
                index: 2,
                color: "#13914e",
                yAxis: 0,
                type: "line",
                dashStyle: "Solid",
                marker: {
                    symbol: "square"
                },
                tooltip: {
                    valueSuffix: " m/s",
                    valueDecimals: "1"
                },
            },{
                name: 'Tsitomi',
                data: $.map([
                {{#time-repeater 'Day' 'Hour'}}
                {{%TagEnd("TSM-CALC-AverageWindSpeed")}},
                {{/time-repeater}}
                ],
                function (value) {
                    return isNaN(value) ? { y: null } : value;
                    }),
                index: 2,
                color: "#0dd947",
                yAxis: 0,
                type: "line",
                dashStyle: "Solid",
                marker: {
                    symbol: "square"
                },
                tooltip: {
                    valueSuffix: " m/s",
                    valueDecimals: "1"
                },
            }]
        
        var WindGraph1Chart = new Highcharts.Chart(WindGraph1Options);
    