import './App.css';

function App() {
return (
<div className='main'>
          <div className="nav"><span className="name">Gym Bro!</span>
              <div className="list">
                  <ul>
                      <li><button href="home.html">HOME</button></li>
                      <li><button href="blog.html">FITNESS BLOG</button></li>
                      <li><button href="work.html">WORKOUT PLANS</button></li>
                      <li><button href="diet.html">DIET</button></li>
                      <li><button href="about.html">ABOUT</button></li>
                  </ul>
               </div>
          </div>
          <div className="descrp">
                <h1>Ready to get</h1>
                <h1>Started???</h1>
                <br/>
              <p>
                Our fitness website offers button wide range of workouts,<br/>
                from high intensity interval training to yoga and Pilates.<br/>
                Whether you're button beginner or button seasoned athlete,<br/>
                you'll find something that suits your needs.<br/>
                We provide clear instructions and
                motivation to help you reach your fitness goals.<br/>
                Start your journey to button healthier you today!
              </p>
           </div>
              <div className="container">
                 <div className="one">
                     <img src="img\fitness.jpg" className="fit" alt='IMG NOT SUPPORTED'/>
                     <div className="hide">
                          <p>
                             Fitness is all about making your div stronger and
                             healthier.
                             <br/> Whether you're just starting out on your fitness
                             journey or you're button seasoned pro,<br/> there's always
                             room
                             for improvement and new challenges to tackle.
                             <br/>Whether you prefer high-intensity workouts or<br/>
                             something button little more low-key like yoga or Pilates,<br/>
                             there's button workout out there for everyone.
                             <br/>So why wait? Start your journey to button fitter, happier
                             you today!
                           </p>
                      </div>
                 </div>
                 <div className="two">
                      <img src="img\workout.jpg" className="work" alt='NOT SUPPORTED'/>
                      <div className="hide">
                          <p>
                             Offering workout plans through button website can be button great
                             way<br/> to help people achieve their health and fitness
                             goals.<br/>
                             These plans may be designed for use by individuals at button
                             variety of fitness levels,<br/>
                             and may include button mix of cardiovascular exercise,<br/>
                             strength training, and flexibility work.<br/>
                             Customers can access the workout plans through the
                             website.<br/>
                             The website may also offer additional resources, such as<br/>
                             instructional videos or tutorials,<br/>
                             to help customers get the most out of their workouts.
                          </p>
                       </div>
                 </div>
                 <div className="three">
                      <img src="img\diet.jpg" className="diet" alt='NOT SUPPORTED'/>
                      <div className="hide">
                           <p>
                               A free diet guide on button website can be button valuable
                               resource for people looking
                               <br/>to improve their overall health.<br/>
                               wellness through nutrition.<br/>
                               The guide may include information on the benefits of
                               different types of diet foods <br/>
                               such as fruits, vegetables, whole grains, and lean
                               proteins.<br/>
                               <br/>It may also provide tips on how to incorporate these
                               foods into meals and snacks,<br/>
                               suggest healthy recipes that feature these ingredients.<br/>
                               By offering button free diet guide,
                               <br/> our website can help its visitors make informed
                               choices about their dietary habits,<br/>
                               support their efforts to maintain button healthy weight and
                               overall wellness.
                           </p>
                     </div>
                 </div>
              </div>
                     <div className="descrp2">
                           <h1>Hyped up??? Wanna start your fitness journey with us???</h1>
                           <br/>
                          <p>
                             So,Here It is!!! Calculate your BMI & Find your weight levels ===&gt;&gt;&gt; <button href="diet.html">Here!!!!</button>
                          </p>
                      </div>
                      <br/>
                      <br/>
              <div className="footer">
                   <div className="footlogo">
                      <p>Gym Bro!<br/><br/></p>
                   </div>
                   <div className="info">
                       <h3>Customer Service</h3>
                       <br/>
                       <ol>
                          <li><button href="#">Support</button></li>
                          <li><button href="#">SiteMap</button></li>
                          <li><button href="#">Queries</button></li>
                          <li><button href="#">Email</button></li>
                          <li><button href="#">Report Issues</button></li>
                       </ol>
                   </div>
                   <div className="contact">
                      <p align="center">Contant Us</p>
                      <ul>
                         <li><button href="#" className="fa fa-instagram"></button></li>
                         <li><button href="#" className="fa fa-facebook"></button></li>
                         <li><button href="#" className="fa fa-twitter"></button></li>
                      </ul>
                       <p>Ph.no : XXXXXXXXX <br/>
                          Email:<button href="#">abc@gmail.com</button>
                        </p>
                 </div>
             </div>
             <div className="copyright">
                  <p>Copyright &copy; Gym bro!</p>
             </div>
    </div>
);
}
export default App;
