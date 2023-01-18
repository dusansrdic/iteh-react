import Student from './Student'
import axios from 'axios'
import {useState} from 'react';
import {useEffect} from 'react';

function Studenti() {

    const [studenti, setStudenti] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/student').then(res => {
            console.log('Rezultat: ' + res)
            setStudenti(res.data.data)
        });
    }, []);


    const listaStudenta = studenti.map(student => (
        <Student key={student.id} student={student} />
    ))

    return (
        <div className="studenti-lista-div">
            <h1 id="naslov-studenti">Ispod su izlistani svi studenti iz baze koja je kreirana kada je rađen domaći Laravel.</h1>
            {listaStudenta}
        </div>
    );
}

export default Studenti
