import React from 'react'
import StudentKontakt from './StudentKontakt';

function KontaktStana() {

    function posalji(poruka) {
        alert('Student: ' + poruka.ime + ' ' + poruka.prezime + ' je uputio sledecu poruku: ' + poruka.poruka + ' sa mejl adrese: ' + poruka.email )
    }

    return (
        <div className="kontakt-strana-main-div">
            <StudentKontakt submit={posalji} />
        </div>
    );
}

export default KontaktStana
