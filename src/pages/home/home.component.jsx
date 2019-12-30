import React, {Profiler} from 'react';
import Directory from "../../components/direcotry/direcotory.component";

import {HomePageContainer} from "./home.styles";

const HomePage = () => {
    return (
        <HomePageContainer>
            <Profiler id={'Directory'} onRender={(id, phase, actualDuration) => {
                console.log({id, phase, actualDuration})
            }}>
                <Directory/>
            </Profiler>
        </HomePageContainer>
    )
};

export default HomePage;
