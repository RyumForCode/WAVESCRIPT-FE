import { useCookies } from 'react-cookie';
import { login } from '../api/auth';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import { FaUserAlt } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';


const LogInBox = () => {

    const [idValue,idValueHandler,idValueRemover] = useInput()
    const [pwValue,pwValueHandler,pwValueRemover] = useInput()
    const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);

    const navigate = useNavigate();

    const onClickLoginButton = (e:any) => {
        e.preventDefault();
        if(!idValue || !pwValue) return alert('Fill all field')
        login({id:idValue, password:pwValue}).then((res)=>{
            const authId = "Bearer " + res.data.token;
            setCookie("Authorization",authId)
            navigate("/");
        })
        console.log(cookies);
    }
                                 

    return (
        <StMain>
            <LoginBox>
                <LoginTitle>Login</LoginTitle>
                <InputBox>
                    <IdIcon /><IdInput type="text" placeholder='ID' value={idValue} onChange={(e)=>{idValueHandler(e)}} /> <br />
                    <PwIcon /><PwInput type="password" placeholder='password' value={pwValue} onChange={(e)=>{pwValueHandler(e)}} /> <br />
                    <InputBtn onClick={(e)=>{onClickLoginButton(e)}}>Login</InputBtn>
                </InputBox>
            </LoginBox>
        </StMain>
    );
};

export default LogInBox;


const StMain = styled.div `
    width:100%; height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LoginBox = styled.div `
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
    
const LoginTitle = styled.h5 `
    position:absolute;
    top:60px; left:60px;
    font-size:1.8rem;
    font-family: 'SBAggroB';
`

const InputBox = styled.div`
   font-size:1.2rem;
   font-weight:600;
   margin-top:80px;
`

const IdIcon = styled(FaUserAlt)`
    margin-right:20px;
    font-size:1.5rem;
`

const PwIcon = styled(HiLockClosed)`
    margin-right:20px;
    font-size:1.5rem;
`
const IdInput = styled.input `
    width:400px; height:60px;
    background:white;
    border:none;
    border-radius:10px;
    margin-bottom:40px;
    font-size:1.2rem;
    padding-left:20px;
`

const PwInput = styled.input `
    width:400px; height:60px;
    background:white;
    border:none;
    border-radius:10px;
    margin-bottom:90px;
    font-size:1.2rem;
    padding-left:20px;
`

const InputBtn = styled.button `
    width:470px; height:60px;
    background: rgb(40,65,149);
    background: linear-gradient(129deg, rgba(40,65,149,1) 0%, rgba(69,61,156,1) 36%, rgba(79,56,168,1) 72%, rgba(97,70,166,1) 100%);
    border:none;
    border-radius:10px;
    font-size:1.6rem;
    padding-left:20px;
    color:white;
    cursor:pointer;

    &:hover{  
        border: 3px solid #4c38a1;
        background:none;
        transition:.5s;
        color:#2e2e2e;
`