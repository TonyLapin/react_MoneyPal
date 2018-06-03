import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    month: "no sure",
  }

  render(){
    const { labelMonth,
            displayTitle,
            displayLegend,
            legendPosition,
          } = this.props;

    const textChartTitle = labelMonth ? 'Costs In '+labelMonth : 'All Costs'
    const textChartTitle2 = labelMonth ? 'In '+labelMonth : 'All Period'

    const chartData = {
        labels: ['Food', 'Purchases', 'Entertainment', 'Other...'],
        datasets:[
          {
            data:[this.props.food,this.props.purchases,this.props.entertainment,this.props.other],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              '#4af07c'
            ]
          }
        ]
    };
    const chartData2 = {
      labels: ['Received money', '', 'Spent money'],
      datasets:[
        {
          data:[this.props.incomesChart,0,this.props.costsChart],
          backgroundColor:[
            '#2be013',
            '#f44336',
            '#f44336',
          ]
        }
      ]
    };

    return (
      <div className="chart">
        <Doughnut
          data={chartData}
          options={{title:{
                      display: displayTitle,
                      text: textChartTitle,
                      fontSize: 30},
                    legend:{
                      display: displayLegend,
                      position: legendPosition}
          }}
        />
        <hr/>
        <Bar
          data={chartData2}
          options={{
            title:{
              display: displayTitle,
              text: textChartTitle2,
              fontSize:25
            },
            legend:{
              display: displayLegend,
              position: legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;