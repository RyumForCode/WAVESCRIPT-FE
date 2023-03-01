import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../api/auth';
import useInput from '../hooks/useInput';

const LogInBox = () => {

    const [idValue,idValueHandler,idValueRemover] = useInput()
    const [pwValue,pwValueHandler,pwValueRemover] = useInput()
    const [cookies, setCookie, removeCookie] = useCookies(['authorization']);
    
    const navigate = useNavigate();

    const onClickLoginButton = () => {
        if(!idValue || !pwValue) return alert('Fill all field')
        login({id:idValue, password:pwValue}).then((res)=>{
            const authId = res.data.Authorization.split(' ')[1];
            setCookie("authorization", 'Bearer ' + authId);
            navigate('/');
        })
    }

    return (
        <StLoginBox>
            <StContentsDiv>
                <StLoginTitle>Login</StLoginTitle>
                <StLoginDesc>Discover bunch of novels in it!</StLoginDesc>
                <StLabel>ID </StLabel>
                <StValueInput type="text" value={idValue} onChange={(e)=>{idValueHandler(e)}} placeholder = 'Insert your id'/>
                <StLabel>Password</StLabel>
                <StValueInput type="password" value={pwValue} onChange={(e)=>{pwValueHandler(e)}} placeholder = 'Insert your password'/>
                <StButton onClick={()=>{onClickLoginButton()}}>Login</StButton>
            </StContentsDiv>
        </StLoginBox>
    );
};

export default LogInBox;

const StLoginBox = styled.div`
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

const StLoginTitle = styled.div`
    width : 100%;
    font-size : 2rem;
    font-family : 'inter';
    font-weight : 900;
`

const StLoginDesc = styled.div`
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