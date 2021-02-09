import React from 'react';
import {
    SkillBG, SkillFG
} from '../../../theme';

class SkillLevel extends React.Component {
    render() {
        const w = this.props.width * 200;
        const styles = {
            width: w+"px"
        };
        
        return (
            <SkillBG>
                <SkillFG style={styles}/>
            </SkillBG>
        );
    }
}

export default SkillLevel;
