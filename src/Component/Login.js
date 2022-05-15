import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
function Login(props) {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [errorUser, setErrorUser] = useState("");
    const [errorPass, setErrorPass] = useState("");
    const navigate = useNavigate();
    const handleUser = (e) => {
        setUser(e.target.value);
    }
    const handlePass = (e) => {
        setPass(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        var check = true;
        if (user == "") {
            setErrorUser("Tên đăng nhập không được bỏ trống");
            check = false;
        }
        else {
            setErrorUser("");
        }
        if (pass == "") {
            setErrorPass("Mật khẩu không được bỏ trống");
            check = false;
        }
        else {
            setErrorPass("");
        }
        if (check == true) {
            navigate('/list');
            let data = {};
            data.user = user;
            data.pass = pass;
            let convert = JSON.stringify(data);
            localStorage.setItem("data", convert);
        }
    }
    return (
        <>
            <div id="wrapper">
                <form onSubmit={handleSubmit} id="form-login">
                    <h1>Đăng nhập</h1>
                    <div className="form-group">
                        <input type="text" placeholder="Tên đăng nhập" value={user} onChange={handleUser} />
                        <p>{errorUser}</p>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Mật khẩu" value={pass} onChange={handlePass} />
                        <p>{errorPass}</p>
                    </div>
                    <div id="login">
                        <input type="submit" value="Đăng nhập" name="form-submit" />
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;