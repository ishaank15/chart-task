import React, { Fragment } from 'react'
import {FaSortDown} from 'react-icons/fa'
class StatsDiv extends React.Component {
  render() {
    const n = 6;
    return (
      <Fragment>
        <div className="statData">
            {[...Array(n)].map((e, i) => <StatBox key={i}/>)}
        </div>
      </Fragment>
    )
  }
}

const StatBox = () => {
  return (
    <div className="statData-box">
      <div className="count"> 12,696</div>
      <div className="subTitle">Sessions</div>
      <div className="buttonForm"> <FaSortDown/>15%</div>
    </div>
  )
}
export default StatsDiv;