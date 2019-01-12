import React, {Component} from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repare = styled.p`
    color: #464646;
    font-size: 18px;
    font-weight: 300;
`;

const WorkingHours = styled.div`
    color: #2a2a2a;
    font-size: 12px;
    font-weight: 300;
    line-height: 22px;

    strong {
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight: 700;
    }
`;

class Address extends Component {
    render() {
        return (
            <strong>{this.props.addr}</strong>
        )
    }
}

const Calls = styled.div`
    color: #2a2a2a;
    font-size: 12px;
    font-weight: 300;
    line-height: 22px;

    strong {
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight: 700;
    }
`;

class TelNumber extends Component {
    render() {
        return (
            <strong>{this.props.tel}</strong>
        )
    }
}

const CallButton = styled.button`
    background-color: #3fc7db;
    border-radius: 30px;
    padding: 10px 15px 11px;
    border: 0;
    color: #fff;
    font-size: 14px;
    transition: background-color 200ms ease;

    &:hover,
    &:focus {
        background-color: #35a8b9;
    }
`;

export default class Menu extends Component {
    render() {
        return (
            <Row>
                <Col lg={3}>
                    <Repare>Ремонт айфонов в сервисном центре и на выезде</Repare>
                </Col>
                <Col lg={3} lgOffset={1}>
                    <WorkingHours>
                        Пн-пт с 10 до 20, вс с 11 до 18
                        <Address addr="Ленинская, 301"/>
                    </WorkingHours>
                </Col>
                <Col lg={3}>
                    <Calls>
                        Звонки принимаются 24 часа
                        <TelNumber tel="8 (846) 922 55 44"/>
                    </Calls>
                </Col>
                <Col lg={2}>
                    <CallButton>Заказать звонок!</CallButton>
                </Col>
            </Row>
        )
    }
}
