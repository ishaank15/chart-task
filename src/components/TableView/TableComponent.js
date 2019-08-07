import React, { Fragment } from 'react'

class TableComponent extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="tableContainer">
                    <div className="title">Showing 10 of 10</div>
                    <div className="table-box">
                        <table>
                            <TableHeading />
                            <TableBody />
                            <TableBody />
                            <TableBody />
                            <TableBody />
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const TableHeading = () => (
    <thead>

        <tr>
            <td>
                Channel
    </td>
            <td>
                Session
    </td>
            <td>
                Page-Number
    </td>
            <td>
                Avg session
     </td>
            <td>
                Bounce
     </td>
            <td>
                Goals
    </td>
            <td>
                Final
    </td>
        </tr>
    </thead>

)

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>
                    Ishaank
                                </td>
                <td>
                    23
                                </td>
                <td>
                    9560940800
                                </td>
                <td>
                    Ishaank
                                </td>
                <td>
                    23
                                </td>
                <td>
                    95609
                                </td>
                <td>
                    956094
                                </td>
            </tr>
        </tbody>
    )
}

export default TableComponent;