import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class MainArea extends Component {
    state = {  }
    render() { 
        return (  
            <Container>
                <Row>
                    <Col>
                    Test1
                    </Col>

                    <Col>
                    Test2
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default MainArea;