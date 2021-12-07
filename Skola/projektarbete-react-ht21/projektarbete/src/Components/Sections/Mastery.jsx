import React from "react";
import "./Mastery.css";
import { useState } from "react";

const Mastery = () => {

    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    const [years, setYears] = useState(0);
    const [placeHolder, setPlaceHolder] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const hoursADay= e.target[0].value;
        convertToNumb(hoursADay);
        setHours(hoursADay);
        daysToGo(hoursADay);
        resetSearch();        
    }

    const resetSearch = ()=>{
        setPlaceHolder("");
    }
  

    const convertToNumb = (numb) => {
        if (isNaN(numb)){
            alert("Please enter a number");
        } else if (numb < 0) {
            alert("Please enter a positive number!");
        } else if (numb > 24) {
            alert("Keep it realistic... under 24 hours");
        }
    }

    function daysToGo (numb){
       const hoursDivByTenK = 10000/numb;
       const numbYears = hoursDivByTenK / 365;
       const numbDays = hoursDivByTenK % 365
       setYears(Math.trunc(numbYears));
       setDays(Math.round(numbDays));
    }


    return (
        <div className="mastery">
            
            <div className="staticText">
                <h1 className="mTitle">MASTERY</h1>
                <p className="mDes">What is it you wanna do? Learn to code? Play the flute? Make films?
                    Whatever it is the only way to achive it is to practice. 
                    It's said that  we need 10 000 hours to master something. Therefore I 
                    created this to help you visualize your goal. Just enter how many
                    hours a day you're willing to practice and see
                    how long it will take you to reach your goal.
                </p>
            </div>


            <div className="calculator">
                <div>If you practice {hours} hours a day</div>

                <div>It will take you {years} years and {days} days to master your craft</div>
            </div>

            <form onSubmit={handleSubmit} className="form">
                <label>
                    <input type="number"  onChange={(e) => setPlaceHolder(e.target.value)} value={placeHolder} className="form-control" />
                </label>
                <button className="btn btn-dark">Submit</button>  
            </form>



        </div>
    );
};


export default Mastery;