import React, {Component} from 'react';

import Slider from './Slider'

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    line-height: 50px;
    
    span {
        display: block;
        font-size: 24px;
        line-height: 30px;
    }
`;

const LightText = styled.div`
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    margin-top: 54px;
`;

const CallBtn = styled.button`
    background-color: #ffa14b;
    border: 0;
    border-radius: 40px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    margin-top: 32px;
    padding: 15px 20px;
    transition: background-color 200ms ease;

    &:hover,
    &:focus {
        background-color: #b37134;
    }
`;

export default class Main extends Component {
    render() {
        return (
            <Row>
                <Col lg={6}>
                    <Repair>
                        Качественный ремонт
                        <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <LightText>
                        Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло, стоимостью 1000 рблей, с установкой в подарок!
                    </LightText>
                    <CallBtn>
                        Отправить заявку!
                    </CallBtn>
                </Col>
                <Col lg={6}>
                    <Slider />
                </Col>
            </Row>
        )
    }
}
