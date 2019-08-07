import React, { Fragment } from 'react'
import Highcharts from 'highcharts/highstock'
import Chart from './Chart'

const chartOptions = {
  title: {
    text: ''
  },
  series: [{
    data: [1, 2, 3],

  }]
}

class MainCharts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options:  chartOptions
    }
  }

  render() {
    const { options } = this.state;
    return (
      <Fragment>
        <div class="mainChart">
          <div class="mainChart-box">
            <ChartHeader/>
            < Chart options={options} highcharts={Highcharts} />
          </div>
          <div class="mainChart-box">
            < Chart options={options} highcharts={Highcharts} />
          </div>
        </div>
      </Fragment>
    )
  }
}

const ChartHeader = () => (
  <div className="heading">
    <span className="title">Sessions</span>
    <span className="sideText">
      <span>76473 </span>
      <span>+87%</span>
    </span>
  </div>
)
export default MainCharts;