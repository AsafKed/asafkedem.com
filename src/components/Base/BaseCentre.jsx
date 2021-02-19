import React from 'react';
import styled from 'styled-components';
import {
    Page, SubPage
} from '../../theme';

import BaseHeader from './BaseHeader.jsx';
import BaseAbout from './BaseAbout.jsx';
import BaseSkills from './BaseSkills.jsx';
import Menu from '../Menu';

class BaseCentre extends React.Component {
    render() {
        const renderPage = (page) => {
            if (page === 'about') {
                return (
                    <BaseAbout />
                )
            } else if (page === 'skills') {
                return (
                <BaseSkills />
                )
            }
        }

        return (<div>
            <Page>
                <Wrapper>
                    <Menu />
                    <SubPage> 
                        <BaseHeader />
                    {renderPage(this.props.page)}
                    </SubPage>
                </Wrapper>
            </Page>
        </div>

        );
    }
}

export default BaseCentre;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
