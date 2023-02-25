import styled from "styled-components";
import ScriptHistory from "./ScriptHistory";
import ScriptPost from "./ScriptPost";

const ScriptList = () => {
    return (
        <StScriptList>
            <ScriptHistory key = '1'/>
            <ScriptHistory key = '2'/>
            <ScriptHistory key = '3'/>
            <ScriptPost />
        </StScriptList>
    );
};

export default ScriptList;

const StScriptList = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    gap : 1rem;
    margin : auto;
    width : 60%;
`