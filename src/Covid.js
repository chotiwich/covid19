import React from 'react';
import './Custom.css';
import './App.css';

import {
    CardGroup, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberFormat from 'react-number-format';

class Covid extends React.Component {
    render() {
        let data = this.props.data;
        
        return (
            <div>
                {/* <div>{data.NewConfirmed}</div>
                <div>{data.Recovered}</div> */}
                <Container>
                <div>
                <h1 className = "text-position margin-topic"><br></br> ยืนยันตัวเลขผู้ติดเชื้อ COVID-19 ในประเทศไทย </h1>
                <h4 className = "text-position "> อัปเดตล่าสุด {data.UpdateDate} </h4>
                <br></br>
            </div>
                       
                        <Row>
                                <Col sm="12" md={{ size: 12, offset:0}}>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12" md={{ size: 12, offset:0}}>
                                    <Card body inverse color="Confirmed">
                                        <CardTitle tag="h4"><h4 class="text-position">ติดเชื้อสะสม</h4></CardTitle>
                                        <CardText><h1 class="text-position" ><NumberFormat value={data.Confirmed} displayType={'text'} thousandSeparator={true}/></h1></CardText>
                                        <CardText tag="h5"> <h5 class="text-position" > [+ <NumberFormat value={data.NewConfirmed} displayType={'text'} thousandSeparator={true}/> ]</h5></CardText>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col> 
                                    <Card body inverse color="Hospitalized">
                                        <CardTitle tag="h4"><h4 class="text-position"> กำลังรักษา </h4></CardTitle>
                                        <CardText tag="h1"><h1 class="text-position"><NumberFormat value={data.Hospitalized} displayType={'text'} thousandSeparator={true}/></h1></CardText>
                                        <CardText tag="h5"><h5 class="text-position">[+ <NumberFormat value={data.NewHospitalized} displayType={'text'} thousandSeparator={true}/> ]</h5></CardText>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card body inverse color="Recovered">
                                        <CardTitle tag="h4"><h4 class="text-position"> หายแล้ว </h4></CardTitle>
                                        <CardText tag="h1"><h1 class="text-position"> <NumberFormat value={data.Recovered} displayType={'text'} thousandSeparator={true}/> </h1></CardText>
                                        <CardText tag="h5"><h5 class="text-position"> [+ <NumberFormat value={data.NewRecovered} displayType={'text'} thousandSeparator={true}/> ] </h5></CardText>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card body inverse color="Deaths">
                                        <CardTitle tag="h4"><h4 class="text-position">เสียชีวิต</h4></CardTitle>
                                        <CardText tag="h1"><h1 class="text-position"><NumberFormat value={data.Deaths} displayType={'text'} thousandSeparator={true}/></h1></CardText>
                                         <CardText tag="h5"><h5 class="text-position">[+ <NumberFormat value={data.NewDeaths} displayType={'text'} thousandSeparator={true}/> ] </h5></CardText>
                                    </Card>
                                </Col>
                            </Row>
                        
                </Container>
            </div>
        )
    }
}
export default Covid;