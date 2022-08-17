const baseURL = 'http://localhost:9000/api/bookings/'

const HotelServices = {
    getBookings(){
        return fetch(baseURL)
        .then(res => res.json())
    },

    postBooking(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    deleteBooking(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }

    
}

export default HotelServices