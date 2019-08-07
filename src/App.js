import React, { Fragment } from 'react'
import MainCharts from './components/Chart';
import StatsDiv from './components/Statistics/StatsDiv'
import TableComponent from './components/TableView/TableComponent'
import { FaTachometerAlt, FaChartBar, FaSearch, FaEnvelope } from 'react-icons/fa';

class App extends React.Component {
    render() {
        return (
            <div className="mainComponent">
                <div className="sideBar">
                    <div className="icon active"> <FaTachometerAlt/></div>
                    <div className="icon"> <FaSearch/></div>
                    <div className="icon"> <FaChartBar/></div>
                    <div className="icon"> <FaEnvelope/></div>
                    <div className="icon"> <FaTachometerAlt/></div>
                    <div className="icon"> <FaSearch/></div>
                    <div className="icon"> <FaChartBar/></div>
                    <div className="icon"> <FaEnvelope/></div>
                </div>
                <div className="mainChartWrap">
                    <MainCharts />
                    <StatsDiv />
                    <TableComponent />
                </div>
                </div>
        )
    }
}

export default App;