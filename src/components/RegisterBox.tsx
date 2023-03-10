import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { register } from '../api/auth';
import useInput from '../hooks/useInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterBox = () => {
    const [idValue, idValueHandler, removeIdValue] = useInput();
    const [pwValue, pwValueHandler, removePwValue] = useInput();
    const [pwConfirmValue, pwConfirmValueHandler, removePwConfirmValue] = useInput();
    const noValueNotify = () => toast.error("Please fill all values!", {position: "top-center", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light"});
    const pwNotify = () => toast.error("Please check your password!", {position: "top-center", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light"});
    const idLengthNotify = () => toast.error("Please check ID rules!", {position: "top-center", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light"});
    const pwLengthNotify = () => toast.error("Please check password rules!", {position: "top-center", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "light"});

    const navigate = useNavigate();

    const onClickRegisterButton = () => {
        if(!idValue || !pwValue || !pwConfirmValue) return noValueNotify();
        if(idValue.length < 5 || idValue.length > 10) return idLengthNotify();
        if(pwValue.length < 8) return pwLengthNotify();

        // password = passwordconfirm check
        if(pwValue === pwConfirmValue){
            register({id:idValue , password:pwValue}).then((res) => {
                navigate("/login");
                return res;
            }).catch((error) => {
                return error;
            })
        }else{
            pwNotify();
        }
    }


    return (
        <StRegisterBox>
            <StContentsDiv>
                <StRegisterTitle>Register</StRegisterTitle>
                <StRegisterDesc>Participate us and enjoy novels!</StRegisterDesc>
                <StLabel>ID</StLabel>
                <StValueInput type="text" value={idValue} onChange={(e)=>{idValueHandler(e)}} placeholder = 'Lowercase & Number only, 5 ~ 10'/>
                <StLabel>Password</StLabel>
                <StValueInput type="password" value={pwValue} onChange={(e)=>{pwValueHandler(e)}} placeholder = 'At least 8 charactor'/>
                <StLabel>Password Confirm</StLabel>
                <StValueInput type="password" value={pwConfirmValue} onChange={(e)=>{pwConfirmValueHandler(e)}} placeholder = 'Type same password'/>
                <StButton onClick={()=>{onClickRegisterButton()}}>Register</StButton>
            </StContentsDiv>
            <ToastContainer />
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