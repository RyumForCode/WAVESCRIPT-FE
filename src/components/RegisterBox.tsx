import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import styled from 'styled-components';
import { FaUserAlt } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";



const RegisterBox = () => {
    // init
    const [idValue, setIdValue] = useState<string>('');
    const [pwValue, setPwValue] = useState<string>('');
    const [pwConfirmValue,setPwConfirmValue] = useState<string>('');

    // error
    const [idMessage, setIdMessage] = useState<string>('')
    const [passwordMessage, setPasswordMessage] = useState<string>('')
    const [pwConfirmMessage, setpwConfirmMessage] = useState<string>('')

    // validation
    const [isId, setIsId] = useState<boolean>(false)
    const [isPassword, setIsPassword] = useState<boolean>(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false)

    // navigate
    const navigate = useNavigate();

    // ID
    const onChangeIdValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setIdValue(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 10) {
            setIdMessage('5글자 이상 10글자 미만으로 입력해주세요.')
            setIsId(false)
        } else {
            setIdMessage('올바른 ID 형식입니다.')
            setIsId(true)
        }
      }, [])

    // Pw
    const onChangePwValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value
        setPwValue(passwordCurrent)

        if (!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
            setIsPassword(false)
        } else {
            setPasswordMessage('안전한 비밀번호입니다.')
            setIsPassword(true)
        }
    }, [])
    
    // Pw Confrim
    const onChangePwConfirmValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          const passwordConfirmCurrent = e.target.value
          setPwConfirmValue(passwordConfirmCurrent)
    
          if (pwValue === passwordConfirmCurrent) {
            setpwConfirmMessage('비밀번호를 동일하게 입력하셨습니다.')
            setIsPasswordConfirm(true)
          } else {
            setpwConfirmMessage('비밀번호를 다르게 입력하셨습니다.')
            setIsPasswordConfirm(false)
          }
        },
        [pwValue]
      )

    // form  
    const onClickRegisterButton = (e:any) => {
        e.preventDefault();
        if(!idValue || !pwValue || !pwConfirmValue) return
            setIdValue("")
            setPwValue("")
            setPwConfirmValue("")
            navigate("/login");
    
        if(pwValue === pwConfirmValue){
            register({id:idValue , password:pwValue})
         }
    }

    const isAllValid = isId && isPassword && isPasswordConfirm;
    

    return (
        <StMain>
            <JoinBox>
                <ResisterTitle>Register</ResisterTitle>
                    <InputBox onSubmit={(e)=>{onClickRegisterButton(e)}}>
                        <IdIcon /><IdInput type="text" placeholder='ID' value={idValue} onChange={(e)=>{onChangeIdValue(e)}} /> <br />
                        {idValue.length > 0 && <IdSpan className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</IdSpan>} <br />

                        <PwIcon /><PwInput type="password" placeholder='Password' value={pwValue} onChange={(e)=>{onChangePwValue(e)}} /> <br />
                        {pwValue.length > 0 && (
                        <PwSpan className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</PwSpan>
                        )} <br />

                        <PwConfirmIcon /><PwconfirmInput placeholder='Password Confirm' type="password" value={pwConfirmValue} onChange={(e)=>{onChangePwConfirmValue(e)}} /> <br />
                        {pwConfirmValue.length > 0 && (
                        <PwConSpan className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{pwConfirmMessage}</PwConSpan>
                        )} <br />    
                    
                        <InputBtn type='submit' disabled={!isAllValid}>Register</InputBtn>
                </InputBox>
            </JoinBox>
        </StMain>
    );
};


export default RegisterBox;

const StMain = styled.div `
    width:100%; height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const JoinBox = styled.div `
    position:relative;
    top:-150px;
    width:670px; height:670px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--box-color);
    border-radius:30px;
`

const ResisterTitle = styled.h5 `
    position:absolute;
    top:40px; left:60px;
    font-size:1.8rem;
    font-family: 'SBAggroB';
`

const InputBox = styled.form`
   font-size:1.2rem;
   font-weight:600;
   margin-top:140px;
`
const IdIcon = styled(FaUserAlt)`
    margin-right:20px;
    font-size:1.5rem;
`

const PwIcon = styled(HiLockClosed)`
    margin-right:20px;
    font-size:1.5rem;
`

const PwConfirmIcon = styled(IoMdCheckmark)`
    margin-right:20px;
    font-size:1.5rem;
`


const IdInput = styled.input `
    width:400px; height:50px;
    background:white;
    border:none;
    border-radius:10px;
    margin-bottom:25px;
    font-size:1.2rem;
    padding-left:20px;
`

const PwInput = styled.input `
    width:400px; height:50px;
    background:white;
    border:none;
    border-radius:10px;
    margin-bottom:25px;
    font-size:1.2rem;
    padding-left:20px;
`

const PwconfirmInput = styled.input `
    width:400px; height:50px;
    background:white;
    border:none;
    border-radius:10px;
    margin-bottom:50px;
    font-size:1.2rem;
    padding-left:20px;
`

const InputBtn = styled.button `
    width:470px; height:60px;
    background: rgb(40,65,149);
    background: linear-gradient(129deg, rgba(40,65,149,1) 0%, rgba(69,61,156,1) 36%, rgba(79,56,168,1) 72%, rgba(97,70,166,1) 100%);
    border:none;
    border-radius:10px;
    margin-bottom:25px;
    font-size:1.6rem;
    padding-left:20px;
    color:white;
    cursor:pointer;

    &:hover{  
        border: 3px solid #4c38a1;
        background:none;
        transition:.5s;
        color:#2e2e2e;
    }
`

const IdSpan = styled.span `
    position:absolute;
    top:265px; left:22%;
    font-size:1rem;

    &.success {
      color: #4c38a1;
    }
    &.error {
        color: rgb(239, 77, 77);
    }
`

const PwSpan = styled.span `
    position:absolute;
    top:365px; left:22%;
    color:rgb(229, 84, 84);
    font-size:1rem;

    &.success {
        color: #4c38a1;
      }
      &.error {
        color: rgb(239, 77, 77);
      }
`

const PwConSpan = styled.span `
    position:absolute;
    top:465px; left:22%;
    color:rgb(229, 84, 84);
    font-size:1rem;

    &.success {
        color: #4c38a1;
      }
      &.error {
        color: rgb(239, 77, 77);
      }
`