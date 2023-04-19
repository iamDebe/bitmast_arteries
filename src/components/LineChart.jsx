
import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip } from "chart.js";
import InputField from "./forms/InputField";
import SelectField from "./forms/SelectField";



 ChartJS.register(
              LineElement,
              CategoryScale,
              LinearScale,
              PointElement,
              Legend,
              Tooltip
          )


//  const employeeData = [
//   {
//       id: 1,
//       year: 2016,
//       userGain: 60,
//       userLost: 823
//   },
//   {
//       id: 2,
//       year: 2017,
//       userGain: 20,
//       userLost: 825
//   },
//   {
//       id: 3,
//       year: 2018,
//       userGain: 15,
//       userLost: 826
//   },
//   {
//       id: 4,
//       year: 2019,
//       userGain: 10,
//       userLost: 823
//   }
// ]
const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Male',
      data: [0, 10, 20, 26, 30, 25, 10, 5, 0 ],
      backgroundColor: 'white',
      borderColor: '#34A3A4',
      pointBorderColor: '#34A3A4',
      hoverBackgroundColor: 'white',
      fill: true,
      tension: 0.2
    },
    {
      label: 'Female',
      data: [0, 8, 15, 25, 27, 30, 25, 15, 10, 2],
      backgroundColor: 'white',
      borderColor: '#EC3D06',
      pointBorderColor: '#858C94',
      pointBorderColor: '#EC3D06',
      hoverBackgroundColor: 'white',
      fill: true,
      tension: 0.2
    }],
   
  }


  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        displayColors: true,
        yAlign: 'bottom'
      }
    },
    scales: {
      y:{
        beginAtZero: true,
        grid: {
          display: true,
        }
      },
      x:{
        beginAtZero: true,
        grid: {
          display: false,
        }
      }
    }
  }
  

 
    return ( 
        <Wrapper> 
            <div className="Chart-details">
                <div className="title "><h5 className="type-title6">Patients Stats.</h5></div>
                <DatePickerWrapper>
                  <SelectField
                    id="date"
                    type="date"
                    borderradius="none" 
                    padding="0.5rem 1rem "
                  >
                    <option value="" selected disabled>This Year</option>
                  </SelectField>
                </DatePickerWrapper>
            </div>
            <Line 
                data={data}
                options={options}
            />
        </Wrapper>
     );
}
 
export default LineChart;

const Wrapper = styled("div")`
  width: 65%;
  background-color: var(--white);
  padding: 1rem 1rem;
  border-radius: .2rem;

  .Chart-details{
    display: flex;
    justify-content: space-between;
  }

`;

const DatePickerWrapper = styled.div`
  
`;