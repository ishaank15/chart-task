import React from 'react'
import MainCharts from './components/Chart';
import StatsDiv from './components/Statistics/StatsDiv'
import TableComponent from './components/TableView/TableComponent'
import Sidebar from './components/Sidebar'
class App extends React.Component {
    render() {
        return (
            <div className="mainComponent">
                    <Sidebar />
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