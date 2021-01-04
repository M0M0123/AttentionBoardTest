import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';
//import logo from './logo.svg';
//import './App.css';
import Chart from './components/Chart'
import MainArea from './MainArea';
import HeaderBar from './components/Header'
import {Container, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }
  getChartData(){
    // Ajax calls here
    this.setState({
      chartDataJA:{
        
        labels: ['Woche 1', 'Woche 2', 'Woche 3', 'Woche 4'],
        datasets:[
          {
            label:'Gemeinsame Aufmerksamkeit',
            data:[
              54,
              35,
              80,
              0,
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 0.1)',
            ]
          }
        ]
      },
      chartDataAA:{
        labels: ['Woche 1', 'Woche 2', 'Woche 3', 'Woche 4'],
        datasets:[
          {
            label:'Aufmerksamkeitsähnlichkeit',
            data:[
              82,
              0,
              0,
              0,
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
            ]
          }
        ]
      },
      chartDataP:{
        labels: ['Woche 1', 'Woche 2', 'Woche 3', 'Woche 4'],
        datasets:[
          {
            label:'Präsenz',
            data:[
              55,
              60,
              90,
              100,
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
            ]
          }
        ]
      },
      chartDataTest:{
        labels: ['Woche 1', 'Woche 2', 'Woche 3', 'Woche 4'],
        datasets:[
          {
            label:'Test',
            data:[
              54,
              35,
              80,
              0,
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.9)',
              'rgba(54, 162, 235, 0.9)',
              'rgba(255, 206, 86, 0.9)',
              'rgba(75, 192, 192, 0.9)',
            ]
          }
        ]
      }
    });
  }


  render() {
    return (
      <div>
        <HeaderBar/>
        <Container fluid>
          <Row>
            <Col xs={2} fluid>
              <Row>
                <Col>
                  <Chart chartData={this.state.chartDataTest}  title='Gemeinsame Aufmerksamkeit' legendPosition="bottom"/>
                </Col>
              </Row>
              <Row >
                <Col>
                  <Chart chartData={this.state.chartDataTest}  title='Gemeinsame Aufmerksamkeit' legendPosition="bottom"/>
                </Col>
              </Row>
              <Row >
                <Col>
                  <Chart chartData={this.state.chartDataTest}  title='Gemeinsame Aufmerksamkeit' legendPosition="bottom"/>
                </Col>
              </Row>
            </Col>

            <Col xs={10}>
              <Row>
                  <Col>
                      <Chart chartData={this.state.chartDataJA}  title='Gemeinsame Aufmerksamkeit' legendPosition="bottom"/>
                  </Col>
                  <Col>
                      <Chart chartData={this.state.chartDataAA}  title='Aufmerksamkeitsähnlichkeit' legendPosition="bottom"/>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <Chart chartData={this.state.chartDataP}    title='Präsenz'   legendPosition="bottom"/>
                  </Col>
                  <Col>
                      <Chart chartData={this.state.chartDataTest}  title='Test' legendPosition="bottom"/>
                  </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
