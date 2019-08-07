import React from 'react';
import PieChart from "highcharts-react-official";
import Highcharts from 'highcharts/highstock'
import { PIE_SERIES } from '../constants'

const options = {
    chart: {
        type: "pie",
        marginBottom:10,
        marginRight: 100,
    },
    legend: {
        itemMarginBottom: 15,
        itemMarginRight: 20,
        itemStyle: {
            font: '12pt Raleway,Helvetica,sans-serif',
            color: '#A0A0A0',
            fontWeight: "bold",
            padding: "10px"
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#444'
        },
        align: 'right',
        verticalAlign: 'center',
        layout: 'vertical',
        x: 0,
        y: 50,
        squareSymbol: true,
        labelFormatter: function () {
            return `${this.name} - ${this.y}`;
        },
    },
    plotOptions: {
        pie: {
            showInLegend: true,
            innerSize: '70%',
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
            }
        }
    },
    series: PIE_SERIES,
    responsive: {
        rules: [{
            condition: {
                maxWidth: 789
            },
            chartOptions: {
                legend: {
                    enabled: false,
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return `${this.point.name} - ${this.y}`;
                            },
                        }
                    }
                },
            }
        }]
    }
};

const PieComponent  = () => (
    <PieChart highcharts={Highcharts} options={options} />
)

export default PieComponent;