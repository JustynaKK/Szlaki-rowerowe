import React from 'react';
import { NavLink } from 'react-router-dom';

class Contact extends React.Component {
    render() {
        return (
            <div className='contact'>
                <div className="wrapper">
                    <h2>Kontakt</h2>
                    <form action="#">
                            <input type="text" placeholder="Imię i nazwisko" name="username" required/>
                                <input type="email" placeholder="Adres Email" name="email" required/>
                                <input type="tel" placeholder="Numer teefonu" name="phone" required/>
                                    <textarea name="message"placeholder="Treść wiadomości.." required>

                                    </textarea>


                        <div className="checkbox-wrapper">
                            <input type="checkbox"/>
                            <p>Wyslij kopię maila do mnie</p>
                        </div>
                                    {/*<div className="checkbox-wrapper">*/}

                                        {/*<label className={'labelCheckbox'} for="sendCopy">*/}
                                            {/*<input type="checkbox" id="sendCopy"/>Wyslij kopię maila do mnie*/}
                                        {/*</label>*/}




                                    {/*</div>*/}
                                    <button>Wyślij wiadomość</button>
                        </form>
                </div>

            </div>
        )
    }
}



export default Contact;
