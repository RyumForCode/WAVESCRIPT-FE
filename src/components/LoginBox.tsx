import { useCookies } from 'react-cookie';
import { login } from '../api/auth';
import useInput from '../hooks/useInput';

const LogInBox = () => {

    const [idValue,idValueHandler,idValueRemover] = useInput()
    const [pwValue,pwValueHandler,pwValueRemover] = useInput()
    const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
    

    const onClickLoginButton = () => {
        if(!idValue || !pwValue) return alert('Fill all field')
        login({id:idValue, password:pwValue}).then((res)=>{
            const authId = "Bearer " + res.data.token;
            setCookie("Authorization",authId)
        })
        console.log(cookies);
    }
   

    return (
        <div>
            <h1>WAVESCRIPT</h1>

            <div>
                <h5>Login</h5>
                ID <br /> <input type="text" value={idValue} onChange={(e)=>{idValueHandler(e)}} /> <br />
                Password <br /> <input type="password" value={pwValue} onChange={(e)=>{pwValueHandler(e)}} /> <br />
                <button onClick={()=>{onClickLoginButton()}}>Login</button>
            </div>
        </div>
    );
};

export default LogInBox;
