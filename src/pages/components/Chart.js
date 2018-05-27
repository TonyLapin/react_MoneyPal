import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Food', 'Purchases', 'Entertainment', 'Other...'],
        datasets:[
          {
            data:[
              17594,
              481045,
              153060,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              '#4af07c'
            ]
          }
        ]
      },
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    month: "no sure"
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Doughnut
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Costs In '+this.props.labelMonth,
              fontSize:30,
              
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
