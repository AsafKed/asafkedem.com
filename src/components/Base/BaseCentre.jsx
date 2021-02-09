import React from 'react';
import styled from 'styled-components';
import {
    Page, SubPage, Wrapper, SubPageContainer,
    Divider, Header, Subtitle, LongText
} from '../../theme';
import BaseHeader from './BaseHeader.jsx';
import BaseAbout from './BaseAbout.jsx'

class BaseCentre extends React.Component {
    render() {
        const renderPage = (page) => {
            if (page === 'about') {
                return (
                    <BaseAbout />
                )
            } else if (page === 'skills') {
                return <button>Skills</button>;
            }
        }

        return (<div>
            <Page>
                <SubPage> 
                    <BaseHeader />
                   {renderPage(this.props.page)}
                </SubPage>
            </Page>
        </div>

        );
    }
}

export default BaseCentre;
