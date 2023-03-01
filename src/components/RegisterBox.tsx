import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { register } from '../api/auth';
import useInput from '../hooks/useInput';

const RegisterBox = () => {
    const [idValue, idValueHandler, removeIdValue] = useInput();
    const [pwValue, pwValueHandler, removePwValue] = useInput();
    const [pwConfirmValue, pwConfirmValueHandler, removePwConfirmValue] = useInput();

    const navigate = useNavigate();

    const onClickRegisterButton = () => {
        if(!idValue || !pwValue || !pwConfirmValue) return alert('Please insert all value!')
        if(idValue)

        // password = passwordconfirm check
        if(pwValue === pwConfirmValue){
            register({id:idValue , password:pwValue}).then((res) => {
                navigate("/login");
                return res;
            }).catch((error) => {
                return error;
            })
        }else{
            alert('Password confirm has been wrong')
        }
    }


    return (
        <StRegisterBox>
            <StContentsDiv>
                <StRegisterTitle>Register</StRegisterTitle>
                <StRegisterDesc>Participate us and enjoy novels!</StRegisterDesc>
                <StLabel>ID</StLabel>
                <StValueInput type="text" value={idValue} onChange={(e)=>{idValueHandler(e)}} />
                <StLabel>Password</StLabel>
                <StValueInput type="password" value={pwValue} onChange={(e)=>{pwValueHandler(e)}} />
                <StLabel>Password Confirm</StLabel>
                <StValueInput type="password" value={pwConfirmValue} onChange={(e)=>{pwConfirmValueHandler(e)}} /> <br />
                <StButton onClick={()=>{onClickRegisterButton()}}>Register</StButton>
            </StContentsDiv>
        </StRegisterBox>
    );
};


export default RegisterBox;


const StRegisterBox = styled.div`
    width : 300px;
    border-radius : 0.25rem;
    background-color : white;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    display : flex;
    flex-direction : column;

    animation: fadein 400ms;

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

const StContentsDiv = styled.div`
    margin : 2rem;
    flex-direction : column;
`

const StRegisterTitle = styled.div`
    width : 100%;
    font-size : 2rem;
    font-family : 'inter';
    font-weight : 900;
`

const StRegisterDesc = styled.div`
    width : 100%;
    font-size : 0.8rem;
    font-family : 'inter';
    font-weight : 400;
    color : #303030;
    margin-top : 0.5rem;
`

const StLabel = styled.div`
    width : 100%;
    font-size : 1rem;
    font-family : 'inter';
    font-weight : 900;
    margin-top : 1rem;
`

const StValueInput = styled.input`
    width : 100%;
    height : 1.5rem;
    margin-top : 0.5rem;
    border : none;
    font-size : 0.8rem;
    font-family : 'inter';
    font-weight : 400;
    border-bottom : 1px solid #bababa;
    padding : 0;
    transition : 500ms;
    &:focus {
        outline : none;
        border-bottom : 1px solid #303030;
    }
`

const StButton = styled.button`
    border : none;
    border-radius : 0.25rem;
    width : 100%;
    height : 2rem;
    margin-top : 1rem;
    background-color : #303030;
    color : white;
    font-family : 'inter';
    font-weight : 900;
    transition : 200ms;
    cursor : pointer;
    &:hover {
        background-color : #636363;
    }
`