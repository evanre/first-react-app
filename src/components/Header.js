import React, {Component} from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Link from './Link'

const Ul = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 50px;
    text-align: center;
`;

const Li = styled.li`
    & + & {
        border-left: 1px dotted #fff;
    }
`;

export default class Header extends Component {
    render() {
        return (
            <Row>
                <Col lg={12}>
                    <nav>
                        <Ul>
                            <Li><Link link="#" text="Вызов мастера"/></Li>
                            <Li><Link link="#" text="Прайс на ремонт"/></Li>
                            <Li><Link link="#" text="Наши преимущества"/></Li>
                            <Li><Link link="#" text="Схема работы"/></Li>
                            <Li><Link link="#" text="Отзывы клиентов"/></Li>
                            <Li><Link link="#" text="Примеры работ"/></Li>
                            <Li><Link link="#" text="Контакты"/></Li>
                        </Ul>
                    </nav>
                </Col>
            </Row>
        )
    }
}
