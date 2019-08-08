import React, { Fragment } from 'react'
import Highcharts from 'highcharts/highstock'
import Chart from './components/Chart'
// import PieComponent from './components/PieChart';
import {LINE_CHART_OPTIONS} from './constants'

class MainCharts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options:  LINE_CHART_OPTIONS
    }
  }

  render() {
    const { options } = this.state;
    return (
      <Fragment>
        <div className="mainChart">
          <div className="mainChart-box">
            <ChartHeader/>
            < Chart options={options} highcharts={Highcharts} />
          </div>
          <div className="mainChart-box">
            <ChartHeader/>
            < Chart options={options} highcharts={Highcharts} />
            {/* < PieComponent /> */}
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