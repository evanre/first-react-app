import React, { Component } from 'react';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';

import styled from 'styled-components';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

const backgroundUrl = process.env.PUBLIC_URL + '/img/bg.jpg';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 50px;
    background-color: #242424;
    opacity: 0.8;
`;

const MenuWrapper = styled.div`
    height: 90px;
    padding: 20px 0;
`;

const MainWrapper = styled.main`
    padding: 130px 0;
    background-image: url(${backgroundUrl});
    background-repeat: no-repeat;
    background-size: cover;
`;

class App extends Component {
  render() {
    return (
        <div className="App">
            <HeaderWrapper>
                <Grid>
                    <Header />
                </Grid>
            </HeaderWrapper>
            <MenuWrapper>
                <Grid>
                    <Menu />
                </Grid>
            </MenuWrapper>
            <MainWrapper>
                <Grid>
                    <Main />
                </Grid>
            </MainWrapper>
        </div>
    );
  }
}

export default App;
