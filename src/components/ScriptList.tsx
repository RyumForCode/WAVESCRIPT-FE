import styled from "styled-components";
import useIsLogin from "../hooks/useIsLogin";
import ScriptHistory from "./ScriptHistory";
import ScriptPost from "./ScriptPost";

const ScriptList = ({ scriptData } : any) => {

    const [isLogin] = useIsLogin();

    return (
        <StScriptList>
            <ScriptHistory key = '0' id = {scriptData.script.User.id} content = {scriptData.script.content} />
            {scriptData.contributor.map((val : any) => <ScriptHistory key = {val.plusScriptId} id = {val.User.id} content = {val.content} />)}
            {isLogin ? <ScriptPost /> : null}
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