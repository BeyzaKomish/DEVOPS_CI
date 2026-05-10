import './App.css'
import Home from './assets/components/home/home.jsx'
import Reservation from './assets/components/reservation/reservation.jsx'
import Pdf from './assets/components/pdf/pdf.jsx'
import { useState } from 'react'
import Student from "./assets/components/student/student.jsx"
import Place from "./assets/components/place/place.jsx"

function App() {
  const [page, setPage] = useState('home');

  const handle = (arg) => {
    setPage(arg);
  };

  return (
      <div>
        <ul>
          <li><a onClick={() => handle('home')} className={page === 'home' ? 'active' : ''}>Home</a></li>
          <li><a onClick={() => handle('place')} className={page === 'place' ? 'active' : ''}>Place</a></li>
          <li><a onClick={() => handle('student')} className={page === 'student' ? 'active' : ''}>Student</a></li>
          <li><a onClick={() => handle('reservation')} className={page === 'reservation' ? 'active' : ''}>Reservation</a></li>
          <li><a onClick={() => handle('pdf')} className={page === 'pdf' ? 'active' : ''}>Pdf</a></li>
        </ul>

        <div className="page-content">
          {page === 'home' && <Home />}
          {page === 'place' && <Place />}
          {page === 'student' && <Student />}
          {page === 'reservation' && <Reservation />}
          {page === 'pdf' && <Pdf />}
        </div>
      </div>
  );
}

export default App;
