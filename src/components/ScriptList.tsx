import styled from "styled-components";
import ScriptHistory from "./ScriptHistory";
import ScriptPost from "./ScriptPost";

const ScriptList = ({ scriptData } : { scriptData : {UserId : string, content : string, createdAt : string, genre : string, scriptId : number, title : string, updatedAt : string } }) => {

    const isUser = true;

    console.log(scriptData)

    return (
        <StScriptList>
            <ScriptHistory key = {scriptData.scriptId} id = {scriptData.UserId} content = {scriptData.content}/>
            {isUser ? <ScriptPost /> : null}
        </StScriptList>
    );
};

export default ScriptList;

const StScriptList = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    margin : auto;
`