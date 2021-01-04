import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {Container, Row, Col} from 'react-bootstrap'
class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps = {
        title: 'Title',
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }
    



    render () {
      return(
        
          <div className="chart">
                
            <Bar
            data={this.state.chartData}
            width = {10}
            height = {8}
            options={{
                
                title:{
                    display:true,
                    text: this.props.title,
                    fontSize:25
                },
                legend:{
                    display: false,
                    position: 'bottom',
                },
                scales: {
                    yAxes: [
                    {
                        ticks: {
                        min: 0,
                        max: 100
                        }
                    }
                    ]
                }
            }}
            /> 
            
          </div>
      )
    } 
}

export default Chart;