import {useState, useEffect} from 'react'
import axios from 'axios'
import './place.css'

const Place=()=>{
    const [places,setPlaces]=useState([]); 
    const [newPlace, setNewPlace] = useState({
        building: '',
        floor: '',
        room: '',
        seat: ''
    });

    useEffect(() => {document.title = "Places List";
        getAllPlaces("http://localhost:8080/place/all")
    }, []);
    const getAllPlaces=async (url)=> {
        await axios.get(url)
            .then((res)=>setPlaces(res.data))
            .catch((err)=>console.log(err));
    };
    const handleInputChange = (e) => { //This is a generic input handler, it updates the correct
        const { name, value } = e.target; // field in the form whenever the user types something
        setNewPlace(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const addPlace=async()=>{
        try {
            const response = await axios.post(
                "http://localhost:8080/place/add",
                newPlace,
                {

                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            setPlaces(prev => [...prev, response.data]);
            setNewPlace({ building: "", floor: "", room: "", seat: "" }); // Formu temizle
        } catch (error) {
            console.log("AxiosError", error);
        }
    };

    return(
        <div className="place-container">
            <h2>Place List</h2>

            <div className="add-place-form">
                <input
                    type="text"
                    name="building"
                    placeholder="Building"
                    value={newPlace.building}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="floor"
                    placeholder="Floor"
                    value={newPlace.floor}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="room"
                    placeholder="Room"
                    value={newPlace.room}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="seat"
                    placeholder="Seat"
                    value={newPlace.seat}
                    onChange={handleInputChange}
                />
                <button onClick={addPlace}>Add Place</button>
            </div>
            <table className="place-table">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Building</th>
                    <th scope="col">Floor</th>
                    <th scope="col">Room</th>
                    <th scope="col">Seat</th>
                </tr>
                </thead>
                <tbody>
                {places.map((place)=>(
                    <tr key={place.id}>
                        <td>{place.placeid}</td>
                        <td>{place.building}</td>
                        <td>{place.floor}</td>
                        <td>{place.room}</td>
                        <td>{place.seat}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Place