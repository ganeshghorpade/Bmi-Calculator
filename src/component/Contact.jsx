import image4 from './contact.jpg';
function Contact() {
    return (
    <>
    <img src={image4} alt="" className='con-logo' />
    <div className="main-box">
        <div className="i-box">
            <h3>Contact Us</h3>
            <div className="s-box">
            <span><input type="text" className="s1" placeholder="FirstName"></input></span>
            <span><input type="text" className="s2" placeholder="LastName"></input></span><br />
            </div>
            <div>
                <input type="text" className="ie" placeholder="Email"/><br />
                <input type="text" className="ie" placeholder="Phone Number"/>
            </div>
            <div><textarea  id="" cols="30" rows="3" className="ie" placeholder="Message"></textarea></div>
            <button className="c-btn">Submit</button>
        </div>
    </div>
    
    </>
    )
    }
    
    export default Contact
    