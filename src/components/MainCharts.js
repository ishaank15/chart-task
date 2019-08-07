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
      options: {
        series: chartOptions.series
      }
    }
  }

  render() {
    const { options } = this.state;
    return (
      <Fragment>
        <div className="mainChart">
          <div className="mainChart-box">
          < Chart options = { options } highcharts = { Highcharts } />
          </div>
          <div className="mainChart-box">
          < Chart options = { options } highcharts = { Highcharts } />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default MainCharts;