import React from 'react'
import DataTable from 'react-data-table-component';

const columns = [
    {   
        name: 'S/N',
        selector: row => row.id,
    },
    {   
        name: 'Full Name',
        selector: row => row.fullName,
    },
    {   
        name: 'Gender',
        selector: row => row.gender,
    },
    {   
        name: 'DOB',
        selector: row => row.dob,
    },
    {   
        name: 'Email',
        selector: row => row.email,
    },
    {   
        name: 'Phone Number',
        selector: row => row.phone,
    },
    {   
        name: 'Address',
        selector: row => row.address,
    },
    {   
        name: 'Status',
        selector: row => row.status,
    },
   
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
            backgroundColor: "var(--blue-lighter)",
            opacity: .6
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
        fullName:'John Alexandre',
        gender: 'Female',
        dob: '25-10-15',
        patient: 'Christoper Amadi',
        email: 'john@arteries.com',
        phone: '090879876568',
        address: "Lekki, Lagos Nigeria",
        status: 'active',
        

    },
    {
        id: 2,
        fullName:'John Alexandre',
        gender: 'Female',
        dob: '25-10-15',
        patient: 'Christoper Amadi',
        email: 'john@arteries.com',
        phone: '090879876568',
        address: "Lekki, Lagos Nigeria",
        status: 'active',
        

    },
    {
        id: 3,
        fullName:'John Alexandre',
        gender: 'Female',
        dob: '25-10-15',
        patient: 'Christoper Amadi',
        email: 'john@arteries.com',
        phone: '090879876568',
        address: "Lekki, Lagos Nigeria",
        status: 'active',
        

    },
    {
        id: 4,
        fullName:'John Alexandre',
        gender: 'Female',
        dob: '25-10-15',
        patient: 'Christoper Amadi',
        email: 'john@arteries.com',
        phone: '090879876568',
        address: "Lekki, Lagos Nigeria",
        status: 'active',
        

    },
    {
        id: 5,
        fullName:'John Alexandre',
        gender: 'Female',
        dob: '25-10-15',
        patient: 'Christoper Amadi',
        email: 'john@arteries.com',
        phone: '090879876568',
        address: "Lekki, Lagos Nigeria",
        status: 'active',
        

    },
    {
        id: 6,
        fullName:'John Alexandre',
        gender: 'Female',
        dob: '25-10-15',
        patient: 'Christoper Amadi',
        email: 'john@arteries.com',
        phone: '090879876568',
        address: "Lekki, Lagos Nigeria",
        status: 'active',
        

    },
    {
        id: 7,
        fullName:'John Alexandre',
        gender: 'Female',
        dob: '25-10-15',
        patient: 'Christoper Amadi',
        email: 'john@arteries.com',
        phone: '090879876568',
        address: "Lekki, Lagos Nigeria",
        status: 'active',
        

    },
   
]



const PatientTable = ({width, className}) => {
  return (


        <DataTable
            columns={columns}
            customStyles={customStyles}
            data={data}
            width={width} 
            className={className}
            highlightOnHover= {true}
            responsive={true}
            pagination
        />
  )
}

export default PatientTable








