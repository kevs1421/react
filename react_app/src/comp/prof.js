import React from 'react';

class Prof extends React.Component{
    render(){
        return(
        <div>
            <div className="bodyAll">
              <header>
    <nav className="navbar">
        <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#certificate">Certificate</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    </header>
<div className="container">
<section className="profile" id="profile">
    <div className="user">
        <img src="Img/Profile.JPG" alt="" />
    </div>
    <h3>hi there...</h3>
        <h1 className="heading">I'm <span id="text"></span></h1>
        <h3 className="position">IT Support Specialist</h3>
    <div className="share">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-discord"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-tiktok"></a>
        </div>
    </section>
    <section className="experience" id="experience">
        <h1 className="heading">Experience</h1>
        <div className="box-container">
            <div className="box">
                <div className="year">June 2020 - Present</div>
                <h3>ATHealth Care Inc.</h3>
                <p>IT Support Specialist</p>
            </div>
            <div className="box">
                <div className="year">Aug 2018 - June 2020</div>
                <h3>Spi Global Inc.</h3>
                <p>Content Analyst</p>
            </div>
        </div>
</section>
    <section className="experience" id="experience">
        <h1 className="heading">Experience</h1>
        <div className="box-container">
            <div className="box">
                <div className="year">June 2020 - Present</div>
                <h3>ATHealth Care Inc.</h3>
                <p>IT Support Specialist</p>
            </div>
            <div className="box">
                <div className="year">Aug 2018 - June 2020</div>
                <h3>Spi Global Inc.</h3>
                <p>Content Analyst</p>
            </div>
        </div>
</section>
<section className="education" id="education">
    <h1 className="heading">Education</h1>
    <div className="box-container">
        <div className="box">
            <div className="year">2013 - 2018</div>
            <h3>Negros Oriental State University</h3>
            <p>Bachelor Science and Industrial Technology - Computer Technology</p>
        </div>
        <div className="box">
            <div className="year">2002 - 2008</div>
            <h3>San Miguel Elementary School</h3>
            <p>Pre-School</p>
        </div>
        <div className="box">
            <div className="year">2008 - 2012</div>
            <h3>San Miguel National High School</h3>
            <p>High School</p>
        </div>
    </div>
</section>
<section className="certificate" id="certificate">
    <h1 className="heading">Certificate</h1>
    <div className="box-container">
        <div className="box">
        <h3>Microsoft Azure</h3>
    </div>
    <div className="box">
        <h3>CCNA (Cisco Certified Network Associate)</h3>
    </div>
    <div className="box">
        <h3>VMWare Certified Technical Associate - Network Virtualization (VCTA-NV)</h3>
    </div>
    <div className="box">
        <h3>Professional Software Developer (TESDA NC-IV)</h3>
    </div>
    </div>
</section>
<section className="skills" id="skills">
        <h1 className="heading">Skills</h1>
            <div className="box-container">
            <div className="box">
                <i className="fab fa-linux"></i>
                <i className="fab fa-windows"></i>
                <p>Linux/Windows</p>
            </div>
            <div className="box">
                <i className="fab fa-css3"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-js"></i>
                <i className="fab fa-php"></i>
                <i className="fab fa-wordpress"></i>
                <p>Programming Tools (CSS5, HTML5, JavaScript, PHP, WordPress)</p>
            </div>
            <div className="box">
                <i className="fas fa-server"></i>
                <p>Server</p>
            </div>
            <div className="box">
                <i className="fas fa-network-wired"></i>
                <i className="fas fa-desktop"></i>
                <p>Network Admin/Computer Troubleshooting</p>
            </div>
        </div>
</section>
 <section className="contact" id="contact">
    <h1 className="heading">Contact</h1>
    <div className="row">
        <form action="">
                <input type="text" className="box" placeholder="first name" required />
                <input type="text" className="box" placeholder="last name" required />
                <input type="email" className="box" placeholder="your email" required />
                <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                <input type="submit" value="message" className="btn" />
            </form>
    <div className="content">
                <div className="icons align-items-start">
                    <h3><i className="fas fa-map-marker-alt"></i>Address </h3>
                    <p>Negros Oriental 6216, Philippines</p>
                </div>
                <div className="icons align-items-center">
                    <h3><i className="fas fa-envelope"></i>Email </h3>
                    <p>kh3vin14@gmail.com</p>
                </div>
                <div className="icons align-items-end">
                    <h3><i className="fas fa-phone"></i>Phone </h3>
                    <p>(+63)935-857-1716</p>
                </div>
        </div>
 </div>
</section>
</div>
<div className="theme-toggler">
    <span className="colorA"></span>
     <span className="colorB"></span>
	 <span className="colorC"></span>
	  <span className="colorD"></span>
</div>
        </div>
        </div>
        
        );
    }
}
export default Prof;