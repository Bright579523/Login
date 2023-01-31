import '../App.css'

function Box() {
    return (
        <div className='box-form'>
            <div className="right">
                <h5>Login</h5>
                <p>Don't have an account? <a href="#">Creat Your Account</a> it takes less than a minute</p>
                <div className="inputs">
                    <input type="text" placeholder="user name"/>
                    <br/>
                    <input type="password" placeholder="password"/>
                </div>
                
                            <br/><br/>
                
                <div className="remember-me--forget-password">

                <label>
                    <input type="checkbox" name="item" checked/>
                    <span className="text-checkbox">Remember me</span>
                </label>
                    <p>forget password?</p>
                </div>
            
                            <br/>
                <button>Login</button>

            </div>
        </div>
    );
};


export default Box;