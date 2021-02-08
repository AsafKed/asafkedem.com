import React from 'react';
import styled from 'styled-components';
import {
    Page, SubPage, Wrapper, SubPageContainer,
    Divider, Header, Subtitle, LongText
} from '../theme';
import SkillContainer from './SkillContainer.jsx';
import me from '../media/me.jpg';
import BaseHeader from './BaseHeader.jsx';

class BaseCentre extends React.Component {
    render() {
        let comp = Internals(this.props.page)
        return (<div>
            <Page>
                <SubPage> 
                    <BaseHeader />
                    {/* <Internals page={this.props.page}/> */}
                    <Wrapper>
                        <LongText> {this.props.text} </LongText>
                    </Wrapper>

                </SubPage>
            </Page>
        </div>

        );
    }
}

export default BaseCentre;

function Internals(page) {
    let internal = <div>No page loaded</div>;
    if (page === "about") {
        internal = <div>About</div>
    }
    else if (page === "skills") {
        internal = <div>Skills</div>
    }
    else {
        internal = <div>Page doesn't exist!</div>
    }
    return (internal);
}