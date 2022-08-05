import React from 'react';
import './details.css';
import Amrita from './img/amrita.jpg';
import fjee from './img/fjee.jpg';
import kkr from './img/kkr.png';
import timp from './img/timp.png';


export default function Details(){
    return(
        
        <div className='details reveal '>
            <h1><style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');
</style>Education</h1>

<table className='edu'>
    <tr className='table-heading'><style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
</style>
        <td>Name of Institution</td>
        <td>Year of Study</td>
        <td>Certificate Recieved</td>
        <td></td>
    </tr>
    <style>
@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
</style>
    <tr className='table-heading'>
        <td><p>Amrita School of Engineering</p></td>
        <td><p>2020-2024(currently)</p></td>
        <td><p>Bachelor of Technology in CSE</p></td>
        <td><img src={Amrita} alt="Amrita" height="64px" width="64px"></img></td>
    </tr>
    <tr className='table-heading'>
        <td><p>FIIT-JEE</p></td>
        <td><p>2018-2020</p></td>
        <td><p>Intermediate Certificate from BIE, AP.</p></td>
        <td><img src={fjee} alt="FIITJEE" height="64px" width="64px"></img></td>
    </tr>
    <tr className='table-heading'>
        <td><p>Dr.KKR Gowtham School-Anandapuram</p></td>
        <td><p>2016-2018</p></td>
        <td><p>10th Certificate from CBSE</p></td>
        <td><img src={kkr} alt="KKR" height="64px" width="64px"></img></td>
    </tr>
    <tr className='table-heading'>
        <td><p>ETASI Timpany Senior Secondary School</p></td>
        <td><p>2007-2016</p></td>
        <td><p>--</p></td>
        <td><img src={timp} alt="Timpany" height="64px" width="64px"></img></td>
    </tr>
</table>
        </div>
    );
}
