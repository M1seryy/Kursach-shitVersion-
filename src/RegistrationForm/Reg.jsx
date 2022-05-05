import '../RegistrationForm/Reg.css';

const Reg = () =>
{
    return(
    <div id='wrapper'>
        <div id="registration-form">
                <div class='fieldset'>

                    <form action="#" method="post" data-validate="parsley">
                        <div class='row'>
                            <label for='firstname'>Username</label>
                            <input type="text" placeholder="Username" name='usernameReg' id='usernameReg' data-required="true" data-error-message="Your First Name is required" />

                        </div>
                        <div class='row'>
                            <label for="email">Password</label>
                            <input type="text" placeholder="Password" id='passwordReg' name='email' data-required="true" data-type="email" data-error-message="Your E-mail is required" />

                        </div>
                        <div class='row'>
                        </div>
                        <a id='reg' href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a>
                    </form>
                </div>
            </div>
        </div>
        
    
        


    );
    
}


export default Reg;