import React, {useState} from "react";

const BookingForm = ({createBooking}) => {
    const [guestName, setName] = useState('')
    const [guestEmail, setEmail] = useState('')
    const [checkedInStatus, setCheckedIn] = useState(false)

    const handleNameChange = event => setName(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)
    const handleCheckedInChange = event => {if (event.target.value === "true") 
        {setCheckedIn(true)} else {setCheckedIn(false)}}

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const guest = {
            guestName,
            guestEmail,
            checkedInStatus
        }
        createBooking(guest)
        setEmail(' ')
        setName(' ')
        setCheckedIn(false)
    }

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="guestName" value={guestName} onChange={handleNameChange} required/>

        <label htmlFor="email">Email:</label>
        <input type="text" id="guestEmail" value={guestEmail} onChange={handleEmailChange} required/>

        <label htmlFor="checked-in">Checked In?</label>
        <select id="checkedInStatus" onChange={handleCheckedInChange}>
            <option id="false" value="false">No</option>
            <option id="true" value="true">Yes</option>
        </select>

        <input type="submit" name="submit" value="save" />
    </form>
    )
}

export default BookingForm