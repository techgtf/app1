import React, {} from 'react'
import Footer from "../components/footer/Footer";
import {Link} from 'react-router-dom';


const WorkCulture = () => {
    return (
        <React.Fragment>
            <section class="front-page-all">
<div class="work-box">
<div class="heading">
    <h1>Work Culture</h1>
    <p> Living our culture is the only way to achieve our mission. GTF Technologies has learned over the years that culture isn’t just one management tool; it’s the essence of management. We start with becoming learners in all things—having a growth mindset. It means that employees make the right decisions not because they are told what to do, but because they know what to do. We follow an open-gate policy where every idea is welcomed and appreciated. The line is cliché but it’s the fact that we are families before coworkers. In GTF we share a friendly bond with our mates or seniors which is the reason we freely work with open mindness. Diverse experiences in our particular fields help each other to learn from one another which results in self-growth which also leads to the development of an organization.</p>
  </div>
</div>

  <div class="work-box">
    <div class="grid-left">
      <div class="img-left">
        <div class="inner-sec">
          <div class="half">
            <div class="img-in-left">
            
            <video class="d-v" loop="true" autoplay="true" muted="true" playsinline="" id="myVideo">
            <source src="assets/img/work-culture/gtf.mp4" alt="video" type="video/mp4" />
            Your browser does not support HTML5 video.
            </video>
           </div>
        </div>
        <div class="half">
          <div class="content-half">
        <h2>Culture</h2>
        <p>Culture isn’t just one management tool; it’s the essence of management. We start with becoming learners in all things- having a growth mindset. With an open-gate policy, every idea is welcomed and appreciated.</p>

        </div>
        <div class="arrow-g">
        
       <Link to="/life-at-gtf"><img src="assets/img/work-culture/left-arrow.png" alt="work-img" /></Link>

        
        </div>
        </div>
        </div>
      </div>

      <div class="grid-left-right">
      <div class="img-left-right">
      <div class="item animated wow fadeIn">
      <img src="assets/img/work-culture/black-bg.jpg" width="100%" alt="work-img" />
      <div class="content-right-img">
        <div class="gd-inner">
        <h2>People Development</h2>
        <p>But also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      </div>
      <div class="overlay right-overlay">
      <div class="img-hov">
      <video class="d-v" loop="true" autoplay="true" muted="true" playsinline="" id="myVideo">
            <source src="assets/img/work-culture/tr.mp4" alt="video" type="video/mp4" />
            Your browser does not support HTML5 video.
            </video>
      <img src="assets/img/work-culture/img-1-cl.jpg" alt="work-img" width="100%" />
      </div>
      </div>
      </div>


      </div>
    </div>
    </div>

    <div class="grid-right">
      <div class="grid-left-right">
      <div class="img-left-right">
      <div class="item animated wow fadeIn">
      <img src="assets/img/work-culture/black-bg.jpg" alt="work-img" width="100%"></img>
      <div class="content-right-img">
        <div class="gd-inner">
        <h2>Rewards and Recognitions</h2>
        <p>We appreciate the efforts of every employee and we award them to motivate and cherish their hard work. Monthly we follow this calendar which gives every employee a chance to give their best and stand a par with the competition.</p>
      </div>
      </div>
      <div class="overlay right-overlay">
      <div class="img-hov">
      <img src="assets/img/work-culture/gtf-technologies-4-zoom.jpg" alt="work-img" width="100%"></img>
      </div>
      </div>
      </div>
      </div>
    </div>


      <div class="img-left">
        <div class="inner-sec">
          <div class="half">
            <div class="img-in-left">
            <img src="assets/img/work-culture/img-full-cl.jpg" alt="work-img" width="100%" />
            
           </div>
        </div>
        <div class="half">
          <div class="content-half">
        <h2>Life at Gtf Technologies</h2>
        <p>A Paradisiacal workplace for passionate and fun-loving workaholics. Working with fun is our work ethic that keeps the attrition rate negligible. </p>
        </div>
        <div class="arrow-g">
        <Link to="/life-at-gtf"><img src="assets/img/work-culture/left-arrow.png" alt="work-img" /></Link>
        </div>
        </div>
        </div>
      </div>

    </div>

  </div>
</section>



<section class="oppotunities">
  <div class="copp-box">
    <div class="inn-oppor">
      <div class="left">
        <h6> - Opportunities</h6>
        <h2>Craft your career with us</h2>
      </div>
      <div class="right">
      <Link to="/work-with-us">All Jobs</Link>
       
      </div>
    </div>
  </div>
</section>

            <Footer/>
        </React.Fragment>
    );
}



export default WorkCulture