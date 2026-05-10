import {useEffect} from "react";
import axios from "axios";

const Pdf = () =>
{
    useEffect(() => {document.title = "PDF";
        getAllStudents("http://localhost:8080/student/pdf");
    }, []);


    const getAllStudents = async (url) => {
        try {
            await axios.get(url);
            alert("PDF successfully generated on your Desktop!");
        } catch (error) {
            console.error("PDF generation failed:", error);
            alert("Failed to generate PDF.");
        }
    };


    return(
        <div>
            <h1> Students list is generated ad 'students_report.pdf' on your Desktop. </h1>
        </div>
    )
}
export default Pdf