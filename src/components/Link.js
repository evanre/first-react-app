import React, {Component} from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: ${props => props.active ? 'pink' : '#fff'};
    display: block;
    font-size: 14px;
    font-weight: 300;
    padding: 5px 15px;
    text-align: center;

    &:hover,
    &:hover {
        color: #8d8d8d;
        text-decoration: none;
    }
`;

export default class Link extends Component {
    render() {
        return (
            <StyledLink className={this.props.active ? 'active' : ''} href={this.props.link}>{this.props.text}</StyledLink>
        )
    }
}
