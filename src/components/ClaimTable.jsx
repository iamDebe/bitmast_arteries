import React from 'react'
import DataTable from 'react-data-table-component';
import styled from 'styled-components';

const columns = [
    {   
        name: 'Provider',
        selector: row => row.provider,
    },
    {   
        name: 'ID',
        selector: row => row.iD,
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
  // rows: {
  //   style: {
      
  // },
    
    columns: {
        style: {
           backgroundColor: 'red', // override the row height
        },
    },
  
    headCells: {
        style: {
            padding: '.2rem 1rem',
            backgroundColor: "var(--blue-lightest)"
        },
    },
    cells: {
        style: {
            padding: '.2rem 1rem', // override the cell padding for data cells
        },
    },
};

const data = [
    {
        id: 1,
        iD:'100672',
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
        iD:'100672',
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



const ClaimTable = ({width, className}) => {
  return (


        <DataTable
            columns={columns}
            customStyles={customStyles}
            data={data}
            width={width} 
            className={className}
            highlightOnHover= {true}
            responsive={true}
        />
  )
}

export default ClaimTable








