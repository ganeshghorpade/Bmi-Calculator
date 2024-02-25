import './comp.css'
import {useState} from 'react';
import image from './run.png';
import image3 from './pic3.png';


function Home() {
    const[height,setHeight] = useState("");
    const[weight,setWeight] = useState("");
    const[error,setError] = useState();
    /*  */
    const result = document.querySelector('#results'); 
    const result2 = document.querySelector('#resultstwo'); 
    
    const cal = ()=>{
        if(!height || isNaN(height) || !weight || isNaN(weight)){
            setError(true);
            return false;
        }
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi} kg/m<sup>2</sup></span>` 

        if(bmi<18.6){
            result2.innerHTML=  `<span style="color:skyblue;">Underweight</span>`
        }else if(bmi>18.6 && bmi<24.9){
            result2.innerHTML=  `<span style="color:green;">Normal</span>`
        }else if(bmi>25 && bmi<29.9){
            result2.innerHTML=  `<span style="color:orange">OverWeight</span>`
        }else if(bmi>30 && bmi<34.9){
                result2.innerHTML=  `<span style="color:red">Obesity</span>`
        }else{
             result2.innerHTML=  `<span style="color:rgb(218, 15, 15);">Extremely Obesity</span>`
    }
    }

return (
<>
<img className='logo' src={image} alt="" />
<div className='card-b'>
    <h2 className="heading">BMI Calculator</h2>
    <form>
    <div className="container">
    <p><label htmlFor="">Height in Cm : <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)} id="height" /></label><br />
    {error && !height &&<span className="lp">Enter the Valid Height</span>}
</p>
    <p><label htmlFor="">Weight in Kg : <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)} id="weight" /></label><br />
    {error && !weight &&<span className="lp">Enter the Valid Weight</span>}</p>
    
    </div>
    <button className="button-2" type='button' onClick={cal}>Calculate</button>
    <div id="results"></div>
    <div id="resultstwo"></div>
    <div>
        <h3 className="dh3">BMI Weight Guide</h3>
            <p className="po" id='skyblue'>Under weight = less than 18.6 </p>
            <p className="po" id='green'>Normal Range = 18.6 To 24.9</p>
            <p className="po" id='yellow'>Overweight = 24.9 To 29.9</p>     
            <p className="po" id='red'>Overweight = 30 To 34.9</p>
            <p className="po" id='dred'>Extremely Obesity = Greater than 40</p>
    </div>
    </form><br />
</div><br />
<br/>
<div>
    <img src={image3} className="logo-3"alt="" />
        <p className='p2'><h3>Lorem ipsum, dolor sit amet consectetur</h3> adipisicing elit. Nisi repellat fugiat unde beatae laboriosam, officiis veniam ad maxime, facere quos iusto et corporis aut ipsam excepturi ullam quam voluptas officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem maiores temporibus odit adipisci doloribus similique? Sequi fugit, adipisci, vero maxime nisi dignissimos numquam consequatur expedita animi et ea, eaque excepturi.
        Doloremque atque sed minus libero illum, unde provident natus perferendis nostrum delectus consectetur ab voluptatibus impedit totam voluptas quaerat est, alias dolores debitis aperiam assumenda quia molestias error! Mollitia, ad!
        Vel eveniet neque explicabo repellendus, maxime a</p>
    </div>
</>

)
}


export default Home;






/* const form = document.querySelector('form');
    
form.addEventListener('submit',function(e){
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results'); 

if (height === '' || height< 0 || isNaN(height)){
    result.innerHTML = `please enter the valid Height `;
}
else if(weight === '' || weight<0 || isNaN(weight)){
    result.innerHTML = `please enter the valid weight `;
}else{
    const bmi = (weight/((height*height)/10000)).toFixed(20);
    result.innerHTML = `<span>${bmi}</span>`
}  
    }); */