import React from 'react'
import DataTable from 'react-data-table-component';

const columns = [
    {   
        name: 'S/N',
        selector: row => row.id || " ",
    },
    {   
        name: 'Provider',
        selector: row => row.provider,
    },
    {   
        name: 'Date',
        selector: row => row.date,
    },
    {   
        name: 'Patient',
        selector: row => row.patient,
    },
    {   
        name: 'Amount',
        selector: row => row.amount,
    },
    {   
        name: 'Status',
        selector: row => row.status,
    },
    {   
        name: 'Action',
        selector: row => row.actions.details,
    }
];

const customStyles = {
    columns: {
        style: {
           backgroundColor: 'black', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

const data = [
    {
        id: 1,
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
        actions: {
            details: "details"
        }

    },
    {
        id: 2,
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
        actions: {
            details: "details"
        }

    },
   
]



const Table = ({width, className, customStyles}) => {
  return (
    <DataTable
        columns={columns}
        customStyles={customStyles}
        data={data}
        width={width} 
        className={className}
        pagination
/>
  )
}

export default Table




