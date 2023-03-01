import styled from "styled-components";
import TextareaAutosize from 'react-textarea-autosize';
import { useState } from "react";
import { createNovel } from "../api/script";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

const CreateNewScript = () => {

    const [title, setTitle, removeTitle] = useInput();
    const [genre, setGenre, removeGenre] = useInput();
    const [contributors, setContributors] = useState<string>('');

    const navigate = useNavigate();

    const [inputVal, setInputVal] = useState<string>('');

    const onChangeInputVal = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputVal(e.target.value)
    }

    const onChangeContInput = (e : React.ChangeEvent<HTMLInputElement>) => {
        const contributorsLimit = e.target.value.replace(/[^0-9]/g, '');
        if (Number(contributorsLimit) <= 20 && contributorsLimit.length <= 2) {
            setContributors(contributorsLimit);
        } else if (Number(contributorsLimit) > 20) {
            setContributors('20');
        }
    }

    const onClickPublishButton = () => {
        if (Number(contributors) < 3) {
            setContributors('3');
        }
        createNovel({title, genre, content : inputVal, contributors : Number(contributors)})
        .then((res) => {console.log(res); navigate(`/novel-list`)})
    }

    return (
        <StScriptPostDiv>
            <StPropertyContainer>
                <StTGContainer>
                    <StTitleInput value = {title} onChange = {setTitle} placeholder = 'Insert your novel title'/>
                    <StGenreInput value = {genre} onChange = {setGenre} placeholder = 'Insert the genre'/>
                </StTGContainer>
                <StLimitInputDiv>
                    <StInputLabel>Contributors</StInputLabel>
                    <StInput value = {contributors} onChange = {(e) => {onChangeContInput(e)}} placeholder = "Please input Contributors limit include you(max - 20, min - 3)"/>
                </StLimitInputDiv>
            </StPropertyContainer>
            <StTextareaDiv>
                <StContributor>Id5</StContributor>
                <StTextarea value = {inputVal} onChange = {(e) => {onChangeInputVal(e)}} spellCheck = "false" placeholder = "Once upon a time..."/>
            </StTextareaDiv>
            <StLowerFuncDiv>
                <div>
                    You CANNOT fix or remove your script after someone add the script.<br />If you agree, Please write 'Agree'.
                </div>
                <StContributeButton onClick = {() => {onClickPublishButton()}}>Publish!</StContributeButton>
            </StLowerFuncDiv>
        </StScriptPostDiv>
    );
};

export default CreateNewScript;

const StScriptPostDiv = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    flex-direction : column;
`

const StPropertyContainer = styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;
`

const StTextareaDiv = styled.div`
    display : flex;
    align-items: flex-start;
    gap : 1.5rem;
    min-height : 128px;
    margin-top : 2rem;
    position : relative;
`

const StLowerFuncDiv = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    margin-top : 2rem;
    gap : 1rem;
`

const StLimitInputDiv = styled.div`
    display : flex;
    margin-top : 0.5rem;
`

const StTGContainer = styled.div`
    display : flex;
    justify-content: space-between;
    margin : 2rem 0;
`

const StInputLabel = styled.div`
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 700;
    margin-right : 1rem;
`

const StInput = styled.input`
    border : none;
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 400;
    width : 80%;
    &:focus {
        outline : none;
    }
`

const StTitleInput = styled.input`
    border : none;
    font-family : 'inter';
    font-size : 1.5rem;
    font-weight : 900;
    width : 50%;
    &:focus {
        outline : none;
    }
    &:placeholder {
        color : #a0a0a0;
    }
`

const StGenreInput = styled.input`
    border : none;
    font-family : 'inter';
    font-size : 1.5rem;
    font-weight : 900;
    width : 50%;
    text-align : right;
    &:focus {
        outline : none;
    }
    &:placeholder {
        color : #a0a0a0;
    }
`

const StContributor = styled.div`
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 700;
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