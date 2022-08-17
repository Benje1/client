import React from "react";
import BookingsCard from "./BookingsCard";

const BookingGrid = ({bookings, deleteBooking}) => {
    return(
        <div className="booking-wapper">
            {bookings.map(booking => {
                return (
                    <BookingsCard
                    key={booking._id}
                    booking={booking}
                    deleteBooking={deleteBooking}
                    />
                )
            })}
        </div>
    )


}

export default BookingGrid