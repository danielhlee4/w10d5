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

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = validate();

        if (errors.length) {
            setErrorMessages(errors);
        } else {
            let user = {
                name,
                email,
                phone,
                phoneType,
                staff,
                bio,
                checked
            };
            console.log(user);
            setErrorMessages([])
        }
    };

    const showErrors = () => {
        if (!errorMessages.length) {
            return null;
        } else {
            return (
                <ul>
                    {errorMessages.map(error => <li>{error}</li>)}
                </ul>
            )
        }
    };

    const validate = () => {

        const errors = [];

        if(name.length === 0) {
            errors.push("Name cannot be blank.");
        }

        if(email && (!email.includes('@') || !email.includes('.'))) {
            errors.push("Email must be in a valid format.");
        } else if (!email) {
            errors.push("Email cannot be blank.");
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
            {showErrors()}
            <form className='form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor="name">Name:
                    <input id="name" type="text" value={name} onChange={handleChange('name')}/>
                </label>
                <br/>
                <label htmlFor="email">Email:
                    <input id="email" type="text" value={email} onChange={handleChange('email')}/>
                </label>
                <br/>
                <label htmlFor="phone">Phone Number:
                    <input id="phone" type="text" value={phone} onChange={handleChange('phone')}/>
                </label>
                <br/>
                <select
                    name='phoneType'
                    value={phoneType}
                    onChange={handleChange('phoneType')}
                >
                    <option value="" disabled hidden >Select Phone Type</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                </select>
                <br/>
                    Student<input id="staff-student" type="radio" name="staff" onChange={handleChange('staff')} value="student"/> 
                    Instructor<input id="staff-instructor" type="radio" name="staff" onChange={handleChange('staff')} value="instructor"/>
                <br/>
                <label htmlFor="bio">Bio:
                    <input id="bio" type="textarea" onChange={handleChange('bio')} value={bio}/>
                </label>
                <br/>
                Receive Email Notifications:<input id="checked" name="checked" type="checkbox" onChange={handleChange('checked')} value="yes"/>

                <br/>

                <button >Submit</button>

            </form>
        </>
    )
}

export default Form;