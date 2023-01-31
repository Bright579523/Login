import '../App.css'

function Frame() {
    return (
       <div className="box-form">
            <div className="left">
		        <div className="overlay">
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur et est sed felis aliquet sollicitudin</p>
                    <span>
                        <p>login with social media</p>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true">f</i></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
                    </span>
                </div>
	        </div>
       </div>
    );
}

export default Frame;