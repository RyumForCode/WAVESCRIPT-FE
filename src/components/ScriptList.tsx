import styled from "styled-components";
import ScriptHistory from "./ScriptHistory";
import ScriptPost from "./ScriptPost";

const ScriptList = () => {

    const isUser = true;

    return (
        <StScriptList>
            <ScriptHistory key = '1' id = {'something'}/>
            <ScriptHistory key = '2' id = {'chicken'}/>
            <ScriptHistory key = '3' id = {'Id5'}/>
            {isUser ? <ScriptPost /> : null}
        </StScriptList>
    );
};

export default ScriptList;

const StScriptList = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    margin : auto;
`