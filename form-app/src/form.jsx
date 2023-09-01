import {useState, useEffect} from "react";

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [staff, setStaff] = useState('');
    const [bio, setBio] = useState('');
    const [checked, setChecked] = useState('');

    const [errorMessages, setErrorMessages] = useState([]);

    const handleChange = field => {
        return (e) => {
            switch(field) {
                case 'name': 
                    setName(e.target.value);
                    break;
                case 'email': 
                    setEmail(e.target.value);
                    break;
                case 'phone': 
                    setPhone(e.target.value);
                    break; 
                case 'phoneType':
                    setPhoneType(e.target.value);
                    break;
                case 'staff': 
                    setStaff(e.target.value); 
                    break;
                case 'bio': 
                    setBio(e.target.value); 
                    break;
                case 'checked': 
                    setChecked(e.target.value); 
                    break;
                default:
                    break;
            }
        }
    }


    const validate = () => {

        const errors = [];

        if(name.length === 0) {
            errors.push("Name cannot be blank.");
        }

        if(!email.includes('@') && email.includes('.')) {
            errors.push("Email must be in a valid format.");
        }

        if(phone && phone.length !== 10) {
            errors.push("Phone number must be 10 digits long");
        }

        if (phone && !(phoneType)) {
            errors.push("Must select phone type.");
        } else if (phoneType && !phone) {
            errors.push("Phone type selected, but no phone number inputted.");
        }


        if (!(staff)) {
            errors.push("Please select student or instructor");
        }

        if (bio.length < 1 || bio.length > 280) {
            errors.push("Must include bio, max length 280 characters");
        }

        return errors;


    }

    return (
        <>
            <form className='form'>
                <h2>Sign Up</h2>
                <label for="name">Name:
                    <input id="name" type="text" value={name} onChange={handleChange('name')}/>
                </label>
                <br/>
                <label for="email">Email:
                    <input id="email" type="text" value={email} onChange={handleChange('email')}/>
                </label>
                <br/>
                <label for="phone">Phone Number:
                    <input id="phone" type="text" value={phone} onChange={handleChange('phone')}/>
                </label>
                <br/>
                <select
                    name='phoneType'
                    value={phoneType}
                >
                    <option value="" disabled hidden >Select Phone Type</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                </select>
                <br/>
                    Student<input id="staff-student" type="radio" name="staff" value="student"/> 
                    Instructor<input id="staff-instructor" type="radio" name="staff" value="instructor"/>
                <br/>
                <label for="bio">Bio:
                    <input id="bio" type="textarea" value={bio}/>
                </label>
                <br/>
                Receive Email Notifications:<input id="checked" name="checked" type="checkbox" value="yes"/>

                <br/>

                <button >Submit</button>

            </form>
        </>
    )
}

export default Form;