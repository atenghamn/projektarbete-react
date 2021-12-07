import React from "react";
import "./Mastery.css";
import { useState, useEffect} from "react";

const Mastery = () => {

    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    const [placeHolder, setPlaceHolder] = useState("");




    useEffect(()=> {
      
    }, [hours, days]);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const hoursADay= e.target[0].value;
        setHours(hoursADay);
        daysToGo(hoursADay);
        resetSearch();        
    }

    const resetSearch = ()=>{
        setPlaceHolder("");
    }
  

    const convertToNumb = (numb) => {
        // Convert and make sure we cant get text or negative numbers
    }

    function daysToGo (numb){
       const a = 10000/numb;
       setDays(a);
    }


    return (
        <div className="mastery">
            
            <div className="staticText">
                <h1 className="mTitle">MASTERY</h1>
                <p className="mDes">What is it you wanna do? Learn to code? Play the flute? Make films?
                    whatever it is the only way to achive it is to practice. 
                    It's said that  we need 10 000 hours to master something. Therefore I 
                    created this page to help you visualize youre goal. Just enter how many
                    hours a day you're willing to practice and the computer will calculate
                    how long it will take for you to reach your goal.
                </p>
            </div>


            <div className="calculator">
                <div>If you practice {hours} hours a day</div>
                <div>It will take you {days} days to master your craft</div>
            </div>

            <form onSubmit={handleSubmit} className="form">
                <label>
                    <input type="text"  onChange={(e) => setPlaceHolder(e.target.value)} value={placeHolder} className="form-control" />
                </label>
                <button className="btn btn-warning">Submit</button>  
            </form>



        </div>
    );
};


export default Mastery;