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
    const cookieData = useRef<any>(null);
    const lastUser = useRef<any>(null);

    isWritten.current = false;

    if (cookies.get('authorization')) {
        cookieData.current = jwt_decode(cookies.get('authorization').split(' ')[1]);
    } else {
        cookieData.current = '';
    }

    if(scriptData.script.User.id === cookieData.current.userId) {
        isWritten.current = true;
    }

    for(let i = 0; i < scriptData.contributor.length; i++) {
        if(scriptData.contributor[i].User.id === cookieData.current.userId) {
            isWritten.current = true;
        }
    }

    if (scriptData.contributor.length > 0) {
        lastUser.current = scriptData.contributor[scriptData.contributor.length - 1].User.id;
    } else {
        lastUser.current = scriptData.script.User.id;
    }

    return (
        <StScriptList>
            <ScriptHistory key = '0' id = {scriptData.script.User.id} content = {scriptData.script.content} />
            {isLogin && !(((scriptData.contributor.length + 1)/scriptData.script.contributors) >= 1) && !isWritten.current ? <ScriptPost/> : null}
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