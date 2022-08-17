import React, {useEffect, useState} from "react";
import BookingForm from "../components/form";
import HotelServices from "../services/HotelSevices";
import BookingGrid from "../components/BookingsGrid";


const HotelContainer = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        HotelServices.getBookings()
        .then(bookings => setBookings(bookings))
    }, [])

    const createBooking = (newBooking) => {
        HotelServices.postBooking(newBooking)
        .then(savedBooking => setBookings([...bookings, savedBooking]))
    }

    const deleteBooking = (idToDelete) => {
        HotelServices.deleteBooking(idToDelete)
        .then(() => {
            setBookings(bookings.filter(booking => booking._id !== idToDelete))
        })
    }

    return(<>
    <h1>Hello world</h1>
    <BookingForm createBooking={createBooking}/>
    <BookingGrid bookings={bookings} deleteBooking={deleteBooking}/>
    </>)
}

export default HotelContainer;