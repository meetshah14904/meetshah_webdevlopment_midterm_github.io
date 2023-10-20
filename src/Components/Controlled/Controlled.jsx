import React, { useState } from 'react';
import './controlled.css';

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    portfolio: '',
    position: 'Security Analyst',
    phone: '',
    relocate: ''
};

function ApplicationForm() {
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2));
    };

    return (
        <form className="form__container" onSubmit={handleSubmit}>
            <label className="form__label">
                First name *:
                <input className="text__input" name="firstName" value={formData.firstName} onChange={handleChange} />
            </label>

            <label className="form__label">
                Last name *:
                <input className="text__input" name="lastName" value={formData.lastName} onChange={handleChange} />
            </label>

            <label className="form__label">
                Email *:
                <input className="email__input" name="email" value={formData.email} onChange={handleChange} />
            </label>

            <label className="form__label">
                Portfolio website:
                <input className="url__input" name="portfolio" value={formData.portfolio} onChange={handleChange} />
            </label>

            <label className="form__label">
                Position you are applying for *:
                <select className="select__input" name="position" value={formData.position} onChange={handleChange}>
                    <option value="Security Analyst">Security Analyst</option>
                    <option value="Tester">Tester</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Front End Developer">Front End Developer</option>
                </select>
            </label>

            <label className="form__label">
                Phone *:
                <input className="tel__input" name="phone" value={formData.phone} onChange={handleChange} />
            </label>

            <div className="radio__input">
                Are you willing to relocate?
                <label><input type="radio" name="relocate" value="Yes" onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="relocate" value="No" onChange={handleChange} /> No</label>
                <label><input type="radio" name="relocate" value="Not sure" onChange={handleChange} /> Not sure</label>
            </div>

            <label className="form__label">
                Reference / Comments / Questions:
                <textarea className="textarea__input" name="comments" onChange={handleChange}></textarea>
            </label>

            <button className="submit__button" type="submit">Send Application</button>
            <button className="reset__button" type="reset" onClick={() => setFormData(initialFormData)}>Reset</button>
        </form>
    );
}

export default ApplicationForm;
