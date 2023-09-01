import {useState, useEffect} from "react";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [staff, setStaff] = useState('');
    const [bio, setBio] = useState('');
    const [checked, setChecked] = useState('');

    return (
        <>
            <form className='form'>
                <h2>Sign Up</h2>
                <label for="name">Name:
                    <input id="name" type="text" value={name}/>
                </label>
                <br/>
                <label for="email">Email:
                    <input id="email" type="text" value={email}/>
                </label>
                <br/>
                <label for="phone">Phone:
                    <input id="phone" type="text" value={phone}/>
                </label>
                <br/>
                <label for="phoneType">Phone Type:
                    <input id="phoneType" type="text" value={phoneType}/>
                </label>
                <br/>
                    Student<input id="staff-student" type="radio" name="staff" value="student"/> 
                    Instructor<input id="staff-instructor" type="radio" name="staff" value="instructor"/>
                <br/>
                <label for="bio">Bio:
                    <input id="bio" type="textarea" value={bio}/>
                </label>
                <br/>
                Receive Email Notifications:<input id="checked" type="checkbox" value="yes"/>

                <br/>

            </form>
        </>
    )
}

export default Form;