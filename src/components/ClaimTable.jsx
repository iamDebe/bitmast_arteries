import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import Button from './Button';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {CloudIcon, DashboardIcon, NewclaimIcon, PaidclaimIcon, RejectedclaimIcon} from "../components/Icons";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';



// export const ClaimStateTab = ({params1, params2, params3, params4, params5, params6}) => {
//   const [isActive, setIsActive] = useState(1)
  

//  const handleShowActiveTable = (index)=>{
//   //event.currentTarget.classList.toggle('active');
//       setIsActive(index)
//  }

// return (

//   <Wrapper>
//       <li 
//           className={`type-title6 ${isActive === 1 ? "active" : ""}`} 
//           onClick={()=>handleShowActiveTable(1)}>{params1}
//       </li>
//       <li 
//           className={`type-title6 ${isActive === 2 ? "active" : ""}`} 
//           onClick={()=>handleShowActiveTable(2)}>{params2}
//       </li>
//       <li 
//           className={`type-title6 ${isActive === 3 ? "active" : ""}`} 
//           onClick={()=>handleShowActiveTable(3)}>{params3}
//       </li>
//       <li 
//           className={`type-title6 ${isActive === 4 ? "active" : ""}`} 
//           onClick={()=>handleShowActiveTable(4)}>{params4}
//       </li>
//       <li 
//           className={`type-title6 ${isActive === 5 ? "active" : ""}`} 
//           onClick={()=>handleShowActiveTable(5)}>{params5}
//       </li>
//       <li 
//           className={`type-title6 ${isActive === 6? "active" : ""}`} 
//           onClick={()=>handleShowActiveTable(6)}>{params6}
//       </li>
//   </Wrapper>
// )
// }


const columns = [
    {   
        name: 'Provider',
        selector: row => row.provider,
        width: "150px"
      },
    // {   
    //     name: 'ID',
    //     selector: row => row.iD,
    //     
    // },
    {   
        name: 'Date',
        selector: row => row.date,
        width: "90px"
                
    },
    {   
        name: 'Patient',
        selector: row => row.patient,
        width: "150px"
        
        
    },
    {   
        name: 'Amount',
        selector: row => row.amount,
        width: "90px"
        
        
    },
    {   
        name: 'Status',
        selector: row => row.status,
        width: "90px"
        
    },
    {   
        name: 'Action',
        cell: row => [
        <Button 
        bg="var(--blue-light)"
        textcolor="white"
        fontsize=".8rem"
        padding=".5rem 1.5rem"
        margin="0rem .3rem 0rem 0rem"
        onClick={()=>alert([row.provider, row.date, row.patient, row.amount, row.status])}
        lefticon={<RemoveRedEyeOutlinedIcon size="small" />}
      />, 
        <Button 
          bg="var(--green-main)"
          textcolor="white"
          fontsize=".8rem"
          padding=".5rem 1.5rem"
          margin="0rem .3rem 0rem 0rem"
          onClick={()=>alert([row.provider, row.date, row.patient, row.amount, row.status])}
          lefticon={<ModeEditOutlineOutlinedIcon size="small" />}
        />,   
        <Button 
          bg="var(--red-main)"
          textcolor="white"
          fontsize=".8rem"
          padding=".5rem 1.5rem"
          margin="0rem .3rem 0rem 0rem"
          onClick={()=>alert(row.id)}
          lefticon={<DeleteSweepOutlinedIcon size="small"/>}
        />, 
       
          
         
          ],
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
            backgroundColor: "var(--blue-lighter)",
            opacity: .6,
            textAlign: "center"
        },
    },
    cells: {
        style: {
            padding: '.2rem 0rem', // override the cell padding for data cells
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
        status: 'resolved',
       

    },
    {
        id: 2,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'denied',
       

    },
    {
        id: 3,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'pending',
       

    },
    {
        id: 4,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
       

    },
    {
        id: 5,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
       

    },
    {
        id: 6,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'draft',
       

    },
    {
        id: 7,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
       

    },
    {
        id: 8,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
       

    },
    {
        id: 9,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
       

    },
    {
        id: 10,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
       

    },
    {
        id: 11,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
       

    },
    {
        id: 12,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
       

    },
    {
        id: 13,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
       

    },
    {
        id: 14,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'active',
       

    },
    {
        id: 15,
        iD:'100672',
        provider: 'Leadway Insurance',
        date: '25-10-15',
        patient: 'Christoper Amadi',
        amount: `NGN ${2000}`,
        status: 'pending',
       

    }
   
]

const ClaimTable = ({width, className, handleShowModal}) => {
  const [isActive, setIsActive] = useState(1)
  const [filteredData, setFilteredData] = useState(data);

    // useEffect(()=>{
      const active = data.filter(datainstance => {
          return datainstance.status === "active".toLowerCase()
        })
        
      const pending = data.filter(datainstance => {
          return datainstance.status === "pending".toLowerCase()
      })
      const resolved = data.filter(datainstance => {
          return datainstance.status === "resolved".toLowerCase()
      })
      const denied = data.filter(datainstance => {
          return datainstance.status === "denied".toLowerCase()
      })
      const draft = data.filter(datainstance => {
          return datainstance.status === "draft".toLowerCase()
      })

      const handleShowActiveTable = (index)=>{
        setIsActive(index)
  
        if(isActive === 1){
          setFilteredData(data)
          }else if(isActive === 2){
            setFilteredData(active)
          }else if(isActive === 3){
            setFilteredData(pending)
          }else  if(isActive === 4){
            setFilteredData(resolved)
          }else if(isActive === 5){
            setFilteredData(denied)
          }else{
            setFilteredData(draft)
          }
     }
      
    // }, [])
    

      
  return (

      <>
      <FlexRow>
          <Wrapper>
          <li 
            className={`type-title6 ${isActive === 1 ? "active" : ""}`} 
            onClick={()=>handleShowActiveTable(1)}
          >
              All
          </li>
          <li 
            className={`type-title6 ${isActive === 2 ? "active" : ""}`} 
            onClick={()=>handleShowActiveTable(2)}
            >
              Active
          </li>
          <li 
            className={`type-title6 ${isActive === 3 ? "active" : ""}`} 
            onClick={()=>handleShowActiveTable(3)}
          >
              Pending
          </li>
          <li 
              className={`type-title6 ${isActive === 4 ? "active" : ""}`} 
              onClick={()=>handleShowActiveTable(4)}>
                Resolved
          </li>
          <li 
              className={`type-title6 ${isActive === 5 ? "active" : ""}`} 
              onClick={()=>handleShowActiveTable(5)}>
                Denied
          </li>
          <li 
              className={`type-title6 ${isActive === 6? "active" : ""}`} 
              onClick={()=>handleShowActiveTable(6)}>
                Draft
          </li>
          </Wrapper>
          <BtnWrapper >
              <Button
                  lefticon={<CloudIcon />}
                  bg="transparent"
                  textcolor="var(--blue-main)"
                  className="type-btn"
                  padding="0.5rem 1rem"
                  border="1px solid var(--blue-main)"
                  >
                  Export XSL
              </Button> 
              <Button
                  lefticon={<AddOutlinedIcon />}
                  bg="var(--blue-main)"
                  textcolor="white"
                  className="type-btn"
                  padding="0.5rem 1rem"
                  onClick={handleShowModal}

                  >
                  New Claim
              </Button> 
          </BtnWrapper>
      </FlexRow>
        <DataTable
            columns={columns}
            customStyles={customStyles}
            data={filteredData}
            width={width} 
            fixedHeader
            fixedHeaderScrollHeight='435px'
            selectableRows
            selectableRowsHighlight
            className={className}
            // highlightOnHover= {true}
            responsive={true}
            pagination
        />
      </>
  )
}

export default ClaimTable


const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0rem 0rem 2rem 0rem;
  
`;

const BtnWrapper = styled.div`
    display:flex;
    gap: 1rem;
`;

const Wrapper = styled.div`
  border: 1px solid var(--blue-main);
  display: flex;
  align-items: center;

  li{
      list-style: none;
      border-right: 1px solid var(--blue-main);
      padding: 0.75rem 1rem;
      cursor: pointer;
      &:nth-child(1){
          padding: 0.75rem 2rem;
      }
      &:nth-child(6){
          border-right:none;

      }
  }

 

  .active{
      background-color: var(--blue-main);
      color: var(--white);
  }
  .inactive{
      background-color: transparent;
      color: black;
  }
`;










