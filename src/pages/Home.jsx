import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Application, Page, theme } from '../theme'

import HomeName from '../components/Home/HomeName.jsx';
import HomeSelector from '../components/Home/HomeSelector.jsx';
import Footer from '../components/Footer.jsx'

class Home extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <AppContainer>
                    <Page>
                        <HomeName />
                        <HomeSelector />
                    </Page>
                    <Footer />
                </AppContainer>
            </ThemeProvider>
        );
    }
}

export default Home;

const AppContainer = styled.div`
  height: 100vh;
`;