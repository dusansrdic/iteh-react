import { useState } from 'react'

function StudentKontakt(props) {

    const [poruka, setPoruka] = useState({
        ime: '',
        prezime: '',
        email: '',
        poruka: ''
    })


    return (
        <div className="contact-forma-main-div">
            <h2 className="kontaktirajte-studente-h2">Kontaktirajte fakultet</h2>
            <div className="element">
                <label htmlFor="form-label">Vase ime</label>
                <input type="text" className="form-control" value={poruka.ime} onChange={e => setPoruka({ ...poruka, ime: e.target.value })} />
            </div>
            <div className="element">
                <label htmlFor="form-label">Vase prezime</label>
                <input type="text" className="form-control" value={poruka.prezime} onChange={e => setPoruka({ ...poruka, prezime: e.target.value })} />
            </div>
            <div className="element">
                <label htmlFor="form-label">Vasa mejl adresa</label>
                <input type="email" className="form-control" value={poruka.email} onChange={e => setPoruka({ ...poruka, email: e.target.value })} />
            </div>
            <div className="element">
                <label htmlFor="form-label">Unesite poruku</label>
                <textarea type="text" className="form-control" value={poruka.poruka} onChange={e => setPoruka({ ...poruka, poruka: e.target.value })} />
            </div>
            <button type="button" onClick={() => props.submit(poruka)} className="btn btn-primary" id="btn_save">Kontaktiraj i prikazi</button>
        </div>
    );
}

export default StudentKontakt;