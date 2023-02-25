import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';

const RegisterBox = () => {
    const [idValue, setIdValue] = useState<string>('');
    const [pwValue, setPwValue] = useState<string>('');
    const [pwConfirmValue,setPwConfirmValue] = useState<string>('');

    const navigate = useNavigate();

    const onChangeIdValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setIdValue(e.target.value)
    }

    const onChangePwValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPwValue(e.target.value)
    }

    const onChangePwConfirmValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPwConfirmValue(e.target.value)
    }

    const onClickRegisterButton = () => {
        if(!idValue || !pwValue || !pwConfirmValue) return

        // password = passwordconfirm check
        if(pwValue === pwConfirmValue){
            register({id:idValue , password:pwValue})

            setIdValue("")
            setPwValue("")
            setPwConfirmValue("")
            navigate("/login")
        }else{
            alert('Password confirm has been wrong')
        }
    }


    return (
        <div>
            <h1>WAVESCRIPT</h1>

            <div>
                <h5>Register</h5>
                ID <br /> <input type="text" value={idValue} onChange={(e)=>{onChangeIdValue(e)}} /> <br />
                Password <br /> <input type="password" value={pwValue} onChange={(e)=>{onChangePwValue(e)}} /> <br />
                Password Confirm<br /> <input type="password" value={pwConfirmValue} onChange={(e)=>{onChangePwConfirmValue(e)}} /> <br />
                <button onClick={()=>{onClickRegisterButton()}}>Register</button>
            </div>
        </div>
    );
};


export default RegisterBox;