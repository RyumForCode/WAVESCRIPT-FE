import styled from "styled-components";
import { plusscriptAdd, scriptBrowseAll, scriptDeleteFirst, scriptEditFirst, scriptInspect } from "../api/script";
import CreateNewScript from "../components/CreateNewScript";
import Footer from "../components/Footer";
import HeaderTitle from "../components/HeaderTitle";
import Wrapper from "../components/Wrapper";

const onClickTestButton = ({id} : {id : number}) => {
    
}

const CreateNovel = () => {
    return (
        <Wrapper>
            <HeaderTitle />
            <StCreateContainer>
                <CreateNewScript />
            </StCreateContainer>
            <button onClick = {() => {onClickTestButton({id : 3})}}>test</button>
            <Footer />
        </Wrapper>
    );
};

export default CreateNovel;

const StCreateContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    margin : auto;
    width : 60%;
`