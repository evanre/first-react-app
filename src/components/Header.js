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

const menuItems = [
    'Вызов мастера',
    'Прайс на ремонт',
    'Наши преимущества',
    'Схема работы',
    'Отзывы клиентов',
    'Примеры работ',
    'Контакты'
];

export default class Header extends Component {
    render() {
        return (
            <Row>
                <Col lg={12}>
                    <nav>
                        <Ul>
                            {menuItems.map((item, i) => (
                                <Li key={i.toString()}><Link link="#" text={item}/></Li>
                            ))}
                        </Ul>
                    </nav>
                </Col>
            </Row>
        )
    }
}
