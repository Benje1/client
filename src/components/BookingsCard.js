import React from "react";

const BookingsCard = ({booking, deleteBooking}) => {

    const handleDeleteBooking = () => {
        deleteBooking(booking._id)
    }

    return (<>
        <div className="booking-card">
            <h3>{booking.guestName}</h3>
            <p>{booking.guestEmail}</p>
            <button
            type="button"
            onClick={handleDeleteBooking}>Delete Booking</button>
        </div>
    </>)
}

export default BookingsCard