import styled from "styled-components";
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from "react";

const ScriptPost = () => {

    const [inputVal, setInputVal] = useState<string>('');

    const onChangeInputVal = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputVal(e.target.value)
    }

    return (
        <StScriptPostDiv>
            <StSectionLine />
            <StTextareaDiv>
                <StContributor>Id5</StContributor>
                <StTextarea value = {inputVal} onChange = {(e) => {onChangeInputVal(e)}} spellCheck = "false" placeholder = "Once upon a time..."/>
            </StTextareaDiv>
            <StLowerFuncDiv>
                <StContributorCounter>5 contributor left!</StContributorCounter>
                <StContributeButton>Contribute!</StContributeButton>
            </StLowerFuncDiv>
        </StScriptPostDiv>
    );
};

export default ScriptPost;

const StSectionLine = styled.hr`
    width : 100%;
    color : black;
`

const StScriptPostDiv = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    flex-direction : column;
    margin-top : 1.5rem;
    position : relative;
`

const StLowerFuncDiv = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    margin-top : 2rem;
    gap : 1rem;
`

const StTextareaDiv = styled.div`
    display : flex;
    align-items: flex-start;
    gap : 1.5rem;
    margin-top : 1.5rem;
    min-height : 128px;
`

const StContributor = styled.div`
    font-weight : 700;
    font-family : 'inter';
    font-size : 1rem;
    line-height : 2rem;
    position : absolute;
    left : -6rem;
`

const StTextarea = styled(TextareaAutosize)`
    width : 100%;
    resize : none;
    border : none;
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 400;
    line-height : 2rem;
    padding : 0;
    &:focus {
        outline : none;
    }
`

const StContributorCounter = styled.div`
    width : 100%;
    display : flex;
    justify-contents : center;
    flex-direction : column;
`

const StContributeButton = styled.button`
    border : none;
    border-radius : 0.25rem;
    background-color : #303030;
    color : white;
    font-family : 'inter';
    font-weight : 700;
    font-size : 1rem;
    width : 15rem;
    height : 2rem;
    transition : 200ms;
    &:hover {
        background-color : #606060;
    }
`