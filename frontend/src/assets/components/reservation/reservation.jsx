import React, { useEffect, useState } from 'react';
import './reservation.css';

const Reservation = () => {
    const [reservations, setReservations] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({
        students: '',
        places: '',
        date: '',
        duration: ''
    });

    useEffect(() => {document.title = "Reservations List";
        fetch("http://localhost:8080/reservation/all")
            .then(res => res.json())
            .then(data => setReservations(data))
            .catch(err => console.error("Fetch error:", err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDate = form.date + "T00:00:00";
        const formattedDuration = form.duration + ":00";
        const payload = {
            students: { id: Number(form.students) },
            places: { placeid: Number(form.places) },
            date: formattedDate,
            duration: formattedDuration
        };



        fetch("http://localhost:8080/reservation/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to add reservation");
                return res.json();
            })
            .then(() => {

                return fetch("http://localhost:8080/reservation/all");
            })
            .then(res => res.json())
            .then(data => {
                setReservations(data);
                setShowForm(false);
                setForm({
                    students: '',
                    places: '',
                    date: '',
                    duration: '',
                });
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    };

    const handleChange = (e) =>
    {
        const {name, value} = e.target;
        setForm((prevForm) =>
            ({
                ...prevForm,
                [name]: value
            }));
    };
    console.log("Reservations raw data:", reservations);
    return (
        <>
            <div className="reservation-container">
                <h2>Reservations</h2>
                <table className="reservation-table">
                    <thead>
                    <tr>
                        <th>Reservation</th>
                        <th>Student</th>
                        <th>Place</th>
                        <th>Date</th>
                        <th>Duration</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reservations.map((res, i) => (
                        <tr key={i}>
                            <td>{res.id}</td>
                            <td>{res.student_id}</td>
                            <td>{res.place_id}</td>
                            <td>{new Date(res.date).toLocaleDateString()}</td>
                            <td>{res.duration}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button onClick={() => setShowForm(true)} className="reserve-btn">+ Reserve A Seat</button>
            </div>


            {showForm && (
                <div className="modal show">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowForm(false)}>&times;</span>
                        <form onSubmit={handleSubmit}>
                            <label>Student</label>
                            <input name="students" value={form.students} onChange={handleChange} required />

                            <label>Place</label>
                            <input name="places" value={form.places} onChange={handleChange} required />

                            <label>Date</label>
                            <input type="date" name="date" value={form.date} onChange={handleChange} required />

                            <label>Duration</label>
                            <input type="time" name="duration" value={form.duration} onChange={handleChange} required />

                            <div className="form-actions">
                                <button type="submit">Reserve</button>
                                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Reservation;
