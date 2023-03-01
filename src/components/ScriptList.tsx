import { Cookies } from "react-cookie";
import styled from "styled-components";
import useIsLogin from "../hooks/useIsLogin";
import ScriptHistory from "./ScriptHistory";
import ScriptPost from "./ScriptPost";
import jwt_decode from "jwt-decode";
import { useRef } from "react";

const ScriptList = ({ scriptData } : any) => {

    const [isLogin] = useIsLogin();
    const cookies = new Cookies();
    const isWritten = useRef<boolean>(false);

    const cookieData : {exp : number, iat : number, userId : string} = jwt_decode(cookies.get('authorization').split(' ')[1]);

    if(scriptData.script.User.id === cookieData.userId) {
        isWritten.current = true;   
    }

    for(let i = 0; i < scriptData.contributor.length; i++) {
        if(scriptData.contributor[i].User.id === cookieData.userId) {
            isWritten.current = true;
        }
    }

    return (
        <StScriptList>
            <ScriptHistory key = '0' id = {scriptData.script.User.id} content = {scriptData.script.content} />
            {scriptData.contributor.map((val : any) => <ScriptHistory key = {val.plusScriptId} id = {val.User.id} content = {val.content} />)}
            {isLogin && !(((scriptData.contributor.length + 1)/scriptData.script.contributors) >= 1) && !isWritten.current ? <ScriptPost /> : null}
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