import React from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { GlobalStyles } from "../globalStyles";


ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)
 const employeeData = [
  {
      id: 1,
      year: 2016,
      userGain: 50,
      userLost: 823
  },
  {
      id: 2,
      year: 2017,
      userGain: 15,
      userLost: 825
  },
  {
      id: 3,
      year: 2018,
      userGain: 15,
      userLost: 826
  },
  {
      id: 4,
      year: 2019,
      userGain: 10,
      userLost: 823
  }
]
const DoughnutChart = () => {
  const data = {
    labels: ['Drug', 'Medication', 'Proced.'],
    datasets: [{
      label: 'Revenue',
      data: employeeData.map((data)=>data.userGain),
      backgroundColor: [
        '#34A3A4',
        '#EC3D06',
        '#A4A4A4',
        '#f7f7f7',
        
      ],
      borderColor: [
        '#100F32',
        'rgba(16, 15, 50, 0.6)',
        'rgba(16, 15, 50, 0.4)',
        'rgba(16, 15, 50, 0.05)'
      ],
      borderJoinStyle: 'round',
      borderWidth: 0
    }]
  }

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'start'
        
      }
    }
  }


//   sliceThickness
  const sliceThickness = {
    id: 'sliceThickness',
    beforeDatasetsDraw(chart, plugins){
      chart.getDatasetMeta(0).data[0].outerRadius = 90
      chart.getDatasetMeta(0).data[1].outerRadius = 90
      chart.getDatasetMeta(0).data[2].outerRadius = 90
      chart.getDatasetMeta(0).data[3].outerRadius = 85
    }
  }
 
//   config
//   const config = {
//     type: 'doughnut',
//     data: data,
//     options: {
//       maintenanceAspectRatio: true,
     
//     },
  
//   };

 

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions){
      const {ctx, data} = chart;
      ctx.save();
      ctx.font = 'bold 30px Circular Std';
      ctx.fillColor = 'red';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('80%', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
  }
  }
    return ( 
        <Wrapper> 
            <div>
                <h5 className="type-title6">Revenue Analytics</h5>
            </div>
            <Doughnut 
                data={data}
                height={400}
                plugins={[textCenter, sliceThickness]}
                options={options}
            />
        </Wrapper>
     );
}
 
export default DoughnutChart;

const Wrapper = styled.div`
  width: 32%;
  background-color: var(--white);
  padding: 1rem 1rem;
  border-radius: .2rem;

 
`;