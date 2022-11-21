import React from 'react'
import DataTable, {createTheme} from 'react-data-table-component'
import {Button, Row, Col} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfo, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'

const Datastable = () => {
    const ExpandedComponent = ({data}) => <pre>{JSON.stringify(data, null, 2)}</pre>
    const customStyles = {
        headCells: {
            style: {
                fontSize: '16px',
                paddingLeft: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    }
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
        {
            //onClick={}
            cell: () => (
                <>
                    <Button className='btn-sm me-1' color='primary'>
                        <FontAwesomeIcon icon={faInfo} />
                    </Button>
                    <Button className='btn-sm me-1' color='warning'>
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button className='btn-sm' color='danger'>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </>
            ),
            ignoreRowClick: true,
            allowOverflow: false,
            button: true,
        },
    ]
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
    return (
        <div>
            <div className='px-5 mb-4  rounded-3'>
                <h1 className='display-5 fw-bold'>Datatable</h1>
                <DataTable
                    columns={columns}
                    data={data}
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    direction='auto'
                    fixedHeaderScrollHeight='300px'
                    pagination
                    responsive
                    striped
                    subHeaderAlign='right'
                    subHeaderWrap
                    customStyles={customStyles}
                />
            </div>
        </div>
    )
}

export default Datastable
