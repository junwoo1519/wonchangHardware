import React from "react";
import styled from "styled-components";
import {GlobalStyled} from "./styled/GlobalStyle";

const App = function () {

    return (
        <Container className={"App"}>
            <GlobalStyled/>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;