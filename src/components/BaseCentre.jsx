import React from 'react';
import styled from 'styled-components';
import {
    Page, SubPage, Wrapper, SubPageContainer,
    Divider, Header, Subtitle, LongText
} from '../theme';
import SkillContainer from './SkillContainer.jsx';
import me from '../media/me.jpg';
import BaseHeader from './BaseHeader.jsx';

// let Internals = (props) => {
//     const page = props.page;
//     let internal = (<div>No page loaded</div>);
//     if (page === "about") {
//         internal = (<div>About</div>);
//     }
//     else if (page === "skills") {
//         internal = (<div>Skills</div>);
//     }
//     else {
//         internal = (<div>Page doesn't exist!</div>);
//     }
//     return (<div>Test</div>);
// }

function Testy() {
    return (<div>Why</div>);
}
class BaseCentre extends React.Component {
    render() {
        return (<div>
            <Page>
                <SubPage> 
                    <BaseHeader />
                    <Testy/>
                    {/* <Internals page={this.props.page}/> */}
                    <LongText>{this.props.page}</LongText>
                    {/* <Wrapper>
                        <LongText> {this.props.text} </LongText>
                    </Wrapper> */}

                </SubPage>
            </Page>
        </div>

        );
    }
}

export default BaseCentre;

