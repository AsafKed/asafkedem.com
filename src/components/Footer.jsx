import React from 'react';
import styled from 'styled-components';
import { theme, Clickable, IMG } from '../theme';
import at from '../media/at.png';
import linkedin from '../media/linkedin.png';

class Footer extends React.Component {
    render() {
        return (
            <div>
                {/* <Phantom/> */}
                <Foot>
                    <Clickable href="mailto:asafkedem97@gmail.com">
                        <Img src={at} />
                    </Clickable>
                    <Clickable href="https://www.linkedin.com/in/asafkedem/">
                        <Img src={linkedin} />
                    </Clickable>
                </Foot>
            </div>
        );
    }
}
export default Footer;

const Foot = styled.div`
    background: ${theme.bg};
    text-align: "center";
    position: "fixed";
    left: "0";
    bottom: "0";
    height: 8vh;
    width: "100%";
    display: flex;
    justify-content: flex-end;
`;

const Img = styled(IMG)`
    max-height: 4vh;
    margin: 2vh;
`;