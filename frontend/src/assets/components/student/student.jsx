import {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './student.css';


const Student=()=>{
    const [students,setStudents ]=useState([]);
    const [newStudent, setNewStudent] = useState({
        name: "",
        department: ""
    });

    useEffect(() => {document.title = "Students List";
        getAllStudents("http://localhost:8080/student/all");
    }, []);


    const getAllStudents=async (url) =>{
        await axios.get(url)
            .then((res)=>setStudents(res.data))
            .catch((err)=>console.log(err));
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const addStudent=async()=>{
        try {
            const response = await axios.post(
                "http://localhost:8080/student/add",
                newStudent,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            setStudents(prev => [...prev, response.data]);
            setNewStudent({ name: "", department: "" });
        } catch (error) {
            console.log("AxiosError", error);
        }
    };
    return(
        <div className="student-container">
            <h2>Student List</h2>


            <div className="add-student-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newStudent.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={newStudent.department}
                    onChange={handleInputChange}
                />
                <button onClick={addStudent}>Add Student</button>
            </div>


            <Table striped bordered hover className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Department</th>
                </tr>
                </thead>
                <tbody>

                {students.map((student)=>(
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.department}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}
export default Student