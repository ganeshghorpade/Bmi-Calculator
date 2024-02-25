import './comp.css'
function Footer() {
    return (
        <div className="container" >
            {/* <footer className="bg-info text-center text-lg-start">
        
        <div className="text-center p-3" >
        © 2020 Copyright:
        <a className="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        
    </footer> */}
            <footer className=" text-center text-lg-start footbg " > {/* background = bg-body-tertiary */}
        
        <div className="container p-4 ">
        
        <div className="row">
            
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase color-blue">BMI App</h5>
    
            <p>
                Welcome to BMI app<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eveniet atque tempore consectetur magni, quibusdam molestiae velit fugit molestias ipsum autem quo? Magnam, quia? In repudiandae omnis suscipit labore consequuntur.
            </p>
    
            </div>
            
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer text</h5>
    
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                voluptatem veniam, est atque cumque eum delectus sint!
            </p>
            </div>
        
        </div>
        
        </div>
        
    
        
        <div className="text-center p-3">
        © 2023 Copyright:
        <a className="text-body" href="https://Techbug.com/">MadewithLove.com</a>
        </div>
        
    </footer>
        </div>
    
        )
    }
    
    export default Footer
    