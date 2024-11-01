

// import React from 'react';
// import { Carousel, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './HomePage.css';


// function HomePage() {
//     return (
//         <div>
//             <header className='header'>
//                 <div className='logo'>🔰EduApp</div>
//                 <nav className='menu'>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/roadmap">Roadmaps</Link></li>
//                         <li><Link to="/doubt">Doubt Clarification</Link></li>
//                         <li><Link to="/test">Mock Tests</Link></li>
//                         <li><Link to="/materials">Study Materials</Link></li>
//                         <li><Link to="/tech">Technology Updates</Link></li>
//                         <li><Link to="/login"><button>Login</button></Link></li>
//                     </ul>
//                 </nav>
//             </header>
//             <main>
//         <Container fluid>
//           <Carousel>
//             <Carousel.Item interval={1000}>
//               <img src="./assets/pic.png" alt="" className="carousel-image"/>
//               <Carousel.Caption>
//                 <h3>DOUBT CLARIFICATION</h3>
//                 <p>
//                   It is the best platform to communicate through direct<br/>
//                   messaging allowing teachers to address students' doubts<br/>
//                   without identifying them.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item interval={1000}>
//               <img src="./assets/doubts.jpg" alt="" className="carousel-image"/>
//               <Carousel.Caption>
//                 <h3>TEACHER-STUDENT</h3>
//                 <p>
//                 A good teacher is like a candle—it consumes itself to light the way for others."
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </Container>
//       </main>
//  <section>
//     <div class="container-fluid">
//         <div class="d-flex flex-wrap">
//             <div class="card w-25 m-2">
//                 <div class="card-header">
//                     <h2 class="card-title">Doubt Clarification</h2>
//                     <p class="card-subtitle">Get instant answers to your questions and clear any doubts with our expert guidance.</p>
//                 </div>
//                 <div class="card-body">
//                     <img src="./assets/pic2.jpg" class="w-100 "  / >
//                     <p class="card-text"></p>
//                 </div>
                
//             </div>
    
        
        



//         <div class="card w-25 m-2">
//             <div class="card-header">
//                 <h2 class="card-title">Technical Updates</h2>
//                 <p class="card-subtitle">Stay updated with the latest advancements and trends in technology to keep your skills sharp</p>
//             </div>
//             <div class="card-body">
//                 <img src="./assets/pic1.jpg" class="w-200" />
//                 <p class="card-text"> </p>
//             </div>
            
            
//         </div>
  

//     <div class="card w-25 m-2">
//                 <div class="card-header">
//                     <h2 class="card-title"></h2>
//                     <p class="card-subtitle">Get instant answers to your questions and clear any doubts with our expert guidance.</p>
//                 </div>
//                 <div class="card-body">
//                     <img src="./assets/pic2.jpg" class="w-100 "  / >
//                     <p class="card-text"></p>
//                 </div>
                
//             </div>
    
        
        



//         <div class="card w-25 m-2">
//             <div class="card-header">
//                 <h2 class="card-title">Technical Updates</h2>
//                 <p class="card-subtitle">Stay updated with the latest advancements and trends in technology to keep your skills sharp</p>
//             </div>
//             <div class="card-body">
//                 <img src="./assets/pic1.jpg" class="w-200" />
//                 <p class="card-text"> </p>
//             </div>
            
            
//         </div>



//     </div>
//     </div>
//     <script src="../node_modules/jquery/dist/jquery.js"></script>
//     <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>

//     </section>



        
//             <footer className='footer'>
//                 <a href="https://instagram.com">Instagram</a>
//                 <a href='#about'>About Us</a>
//                 <a href="mailto:mahimajyothirevuri@gmail.com">Contact</a>
//                 <p>&copy; 2024 RYPRO</p>
//             </footer>
//         </div>
//     );
// }

// export default HomePage;



import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
    return (
        <div className="Container">
            <header className='header'>
                <div className='logo'>🔰EduApp</div>
                <nav className='menu'>
                    <ul>
                        {/* <li><Link to="/">Home</Link></li> */}
                        <li><Link to="/roadmap">Roadmap</Link></li>
                        <li><Link to="/doubt">Doubt clarification</Link></li>
                        <li><Link to="/test">Mock tests</Link></li>
                        <li><Link to="/materials">Study Materials</Link></li>
                        <li><Link to="/Technology updates">Technology Updates</Link></li>
                        <li><Link to="/login"><button>Login</button></Link></li>
                    </ul>
                </nav>
            </header>

            <main>
              <Container fluid>
                <Carousel>
                  <Carousel.Item interval={1000}>
                    <img src="assets/image2.jpg" alt="" className="carousel-image"/>
                  <Carousel.Caption>
                    <h3>GLOBAL EDUCATION</h3>
                    <p>"Education is the most powerful weapon which you can use to change the world."</p>
                  </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item interval={1000}>
                    <img src="assets/image1.png" alt="" className="carousel-image"/>
                  <Carousel.Caption>
                    <h3>TEACHERS AND STUDENTS</h3>
                    <p>A good teacher is like a candle—it consumes itself to light the way for others." </p>
                  </Carousel.Caption>
                  </Carousel.Item>

                </Carousel>
              </Container>
          


            <div className="d-flex flex-wrap">
              <div className='card w-25 m-5'>
                <div className='card-header' style={{ backgroundColor:"Orange"}}><h2>Doubt clarification</h2></div>
                <div className='card-body'><img src='./assets/doubt.jpg' alt="" className='w-100' /></div>
              

                  <p>Get instant answers to your questions and clear any doubts with our expert guidance.Doubts clarification focuses on students to be able to clear their identified doubts.</p>
                  <h6><Link to="/read">Read more</Link></h6>
                </div>

                
              

            
              <div className='card w-25 m-5'>
                <div className='card-header' style={{ backgroundColor:"Orange"}}><h2>Raodmap</h2></div>
                  <div className='card-body'><img src='./assets/path1.png' alt="" className='w-100'/></div>
                  <p>A roadmap is a strategic plan that defines a goal or desired outcome and includes the major steps or milestones needed to reach it.It also serves as a communication tool.</p>
                <h6><Link to="/read">Read more</Link></h6>

                </div>

             <div className='card w-25 m-5'>
              <div className='card-header' style={{ backgroundColor:"Orange"}}><h2>Study material</h2></div>
              <div className='card-body'><img src='./assets/study.jpg' alt="" className='w-100'/></div>
              <p>Study material generally assists the students to enhance their learning process. This encourages students to learn new concepts that significantly enhance their knowledge.</p>
              <h6><Link to="/read">Read more</Link></h6>

             </div>

             <div className='card w-25 m-5'>
              <div className='card-header' style={{ backgroundColor:"Orange"}}><h2>Technology updates</h2></div>
              <div className='card-body'><img src='./assets/tech.jpeg' alt="" className='w-100'/></div>
              <p>Study material generally assists the students to enhance their learning process. This encourages students to learn new concepts that significantly enhance their knowledge.</p>
              <h6><Link to="/read">Read more</Link></h6>

             </div>

             <div className='card w-25 m-5'>
              <div className='card-header' style={{ backgroundColor:"Orange"}}><h2>Mock test</h2></div>
              <div className='card-body'><img src='./assets/test.jpg' alt="" className='w-100'/></div>
              <p>A mock test is used as practice for a future real exam. The procedures, timings and sample tests should mimic the real exam as much as possible, so learners know exactly what to expect on exam day.</p>
              <h6><Link to="/read">Read more</Link></h6>

             </div>
             </div>

             

             

             </main>
        
            <footer className='footer'>
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies</li>
                <li className="bi bi-instagram"> Instagram</li>
                <li className="bi bi-whatsapp"> WhatsApp</li>
              </ul>
            </footer>
        </div>



    );
}

export default HomePage;