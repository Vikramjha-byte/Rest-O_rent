import React from 'react'
import { Link } from 'react-router-dom'

function FooterComponent() {
  return (
    <>
    <div className="footer mt-4 bg-primary text-white">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2 mt-4">
                    <h5>Links</h5>
                    <ul className="list-unstyled text-white">
                        <li><Link to="/home" className='text-white text-decoration-none'>Home</Link></li>
                        <li><Link to="/aboutus" className='text-white text-decoration-none'>About</Link></li>
                        <li><Link to="/menu" className='text-white text-decoration-none'>Menu</Link></li>
                        <li><Link to="/contactus" className='text-white text-decoration-none'>Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5 mt-4">
                    <h5>Our Address</h5>
                    <address>
		              1500, Gangasagar,Madarpur<br />
		              Darbhanga, Bihar<br />
		              India<br />
		              <i className="fa fa-phone fa-lg"></i>: +797 989 3048<br />
		              <i className="fa fa-fax fa-lg"></i>: +900 143 9965<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:vikram.kj12@gmail.com" className='text-white text-decoration-none'>
                         vikram.kj12@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center ">
                        <a className="btn btn-social-icon btn-google m-2 p-2" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook m-2 p-2" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin m-2 p-2" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter m-2 p-2" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google m-2 p-2" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon m-2 p-2" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2022 Rest O Rent</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default FooterComponent