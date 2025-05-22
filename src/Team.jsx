import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Team.css";
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

// Faculty images
import Tushar from "../src/assets/images/faculty/TusharKanti.jpeg";

// 4th Year images
import jayantmandal from "../src/assets/images/4th_yr/jayant.jpg";
import kirthika from "../src/assets/images/4th_yr/kir.jpg";
import asif from "../src/assets/images/4th_yr/asif.jpg";
import ramya from "../src/assets/images/4th_yr/ramya.jpg";
import kartikeya from "../src/assets/images/4th_yr/kar.jpg";
import pranesh from "../src/assets/images/4th_yr/pra.jpg";
import rupali from "../src/assets/images/4th_yr/rupali.jpg";
import arnab from "../src/assets/images/4th_yr/arnab.jpg";
import anshika from "../src/assets/images/4th_yr/ansh.jpg";
import sahil from "../src/assets/images/4th_yr/sai.JPG";
import sarmistha from "../src/assets/images/4th_yr/sar.jpg";
import raj from "../src/assets/images/4th_yr/raj.jpg";
import anshul from "../src/assets/images/4th_yr/anshul.jpeg";
import mmss from "../src/assets/images/4th_yr/mmss.jpeg";
import shankar from "../src/assets/images/4th_yr/shankar.jpg";
import touf from "../src/assets/images/4th_yr/touf.jpeg";
import rishita from "../src/assets/images/4th_yr/rish.jpg";
import deepsika from "../src/assets/images/4th_yr/deep.jpg";
import sanjib from "../src/assets/images/4th_yr/sanjib.jpeg";
import harshada from "../src/assets/images/4th_yr/harsh.jpg";

// 3rd yr wale
import aman from "./assets/images/3rd_yr/aman.jpg";
import animesh from "./assets/images/3rd_yr/animesh.jpg";
import anth from "./assets/images/3rd_yr/anth.jpg";
import anurag from "./assets/images/3rd_yr/anurag.jpg";
import bashu from "./assets/images/3rd_yr/bashu.jpg";
import bhav from "./assets/images/3rd_yr/bhav.jpg";
import darshit from "./assets/images/3rd_yr/darshit.jpg";
import debasmitaSaha from "./assets/images/3rd_yr/debasmitaSaha.jpg";
import gopeshwar from "./assets/images/3rd_yr/gopeshwar.jpg";
import huza from "./assets/images/3rd_yr/huza.jpg";
import mmk from "./assets/images/3rd_yr/mmk.jpg";
import pulkit from "./assets/images/3rd_yr/pulkit.jpeg";
import sayantan from "./assets/images/3rd_yr/sayantan.jpg";
import sham from "./assets/images/3rd_yr/sham.jpg";
import shaswata from "./assets/images/3rd_yr/shaswata.jpg";
import soni from "./assets/images/3rd_yr/soni.jpg";
import suraj from "./assets/images/3rd_yr/suraj.jpg";
import swastik from "./assets/images/3rd_yr/swastik.jpg";
import thanu from "./assets/images/3rd_yr/thanu.jpg";
import utkarsh from "./assets/images/3rd_yr/utkarsh.jpg";
import vishu from "./assets/images/3rd_yr/vishu.jpg";

// 2nd Year images (example)
import shivamKumar from "./assets/images/2nd_year/shivam.jpg";
import pratik from "./assets/images/2nd_year/Pratik.jpg";
import shobhit from "./assets/images/2nd_year/Shobhit_.jpg";
import raniPrasanna from "./assets/images/2nd_year/Rani.jpg";
import philimon from "./assets/images/2nd_year/Philimon_.jpg";
import suhani from "./assets/images/2nd_year/Suhani.jpg";
import pravat from "./assets/images/2nd_year/Pravat.jpg";
import tolaram from "./assets/images/2nd_year/Tolaram_.jpg";
import pallavi from "./assets/images/2nd_year/Pallavi Kumari_.jpg";
import arijit from "./assets/images/2nd_year/ar1.jpg";
import jayant from "./assets/images/2nd_year/jay.jpg";
import Akhil from "./assets/images/2nd_year/Akhil.jpg";
import Saipriya from "./assets/images/2nd_year/Saipriya .jpg";
import Chandra from "./assets/images/2nd_year/Chandramouli.jpg";
import Shivansh from "./assets/images/2nd_year/Shivansh.jpg";
import ishita from "./assets/images/2nd_year/ishita.jpg";

const members = {
  faculty: [
    { 
      name: "Dr Tushar Kanti Bera", 
      photo: Tushar, 
      post: "Faculty Advisor",
      instagram: "#",
      linkedin: "#",
      phone: "+91XXXXXXXXXX",
      email: "tushar@example.com"
    }
  ],
  fourthYear: [
    { name: "Jayant Mandal", photo: jayantmandal, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "jayant@example.com" },
    { name: "Kirthika S", photo: kirthika, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "kirthika@example.com" },
    { name: "Mohammed Asif", photo: asif, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "asif@example.com" },
    { name: "Ramya Akalankam", photo: ramya, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "ramya@example.com" },
    { name: "Kartikeya", photo: kartikeya, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "kartikeya@example.com" },
    { name: "Pranesh Rao K", photo: pranesh, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "pranesh@example.com" },
    { name: "Rupali Kumari", photo: rupali, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "rupali@example.com" },
    { name: "Arnab Banerjee", photo: arnab, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "arnab@example.com" },
    { name: "Anshika Goswami", photo: anshika, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "anshika@example.com" },
    { name: "D Sai Sahil", photo: sahil, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "sahil@example.com" },
    { name: "Sarmistha Naskar", photo: sarmistha, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "sarmistha@example.com" },
    { name: "Sk Raj Ali", photo: raj, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "raj@example.com" },
    { name: "Anshul Kumar", photo: anshul, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "anshul@example.com" },
    { name: "MMSS Manikanta", photo: mmss, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "manikanta@example.com" },
    { name: "Kumar Shankar", photo: shankar, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "shankar@example.com" },
    { name: "Md Toufeeque khan", photo: touf, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "toufeeque@example.com" },
    { name: "Sivala Rishita", photo: rishita, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "rishita@example.com" },
    { name: "Deepsika Bishoye", photo: deepsika, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "deepsika@example.com" },
    { name: "Sanjib Maity", photo: sanjib, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "sanjib@example.com" },
    { name: "Harshada Pawar", photo: harshada, post: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "harshada@example.com" }
  ],
  thirdYear: [
    { name: "Debasmita Saha", photo: debasmitaSaha, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "debasmita@example.com" },
    { name: "Anurag Ray", photo: anurag, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "anurag@example.com" },
    { name: "Antharya J", photo: anth, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "antharya@example.com" },
    { name: "Swastik Roy", photo: swastik, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "swastik@example.com" },
    { name: "MMK Lechler", photo: mmk, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "mmk@example.com" },
    { name: "Animesh", photo: animesh, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "animesh@example.com" },
    { name: "Sayantan Banerjee", photo: sayantan, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "sayantan@example.com" },
    { name: "Suraj Kumar", photo: suraj, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "suraj@example.com" },
    { name: "Thanusree", photo: thanu, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "thanusree@example.com" },
    { name: "Sashwata Ghosh", photo: shaswata, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "sashwata@example.com" },
    { name: "Basudev Pal", photo: bashu, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "basudev@example.com" },
    { name: "Vishu J", photo: vishu, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "vishu@example.com" },
    { name: "Utkarsh A", photo: utkarsh, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "utkarsh@example.com" },
    { name: "Darshit R", photo: darshit, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "darshit@example.com" },
    { name: "Aman Shaw", photo: aman, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "aman@example.com" },
    { name: "Pulkit Sepat", photo: pulkit, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "pulkit@example.com" },
    { name: "Shambhabi Gupta", photo: sham, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "shambhabi@example.com" },
    { name: "Gopeshwar Kumar", photo: gopeshwar, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "gopeshwar@example.com" },
    { name: "Md Huzaifah Alam", photo: huza, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "huzaifah@example.com" },
    { name: "Rishab Soni", photo: soni, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "rishab@example.com" },
    { name: "Srirama Sai Bhavana", photo: bhav, domain: "Senior Coordinator", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "bhavana@example.com" }
  ],
  secondYear: [
    { name: "Shivam kumar", photo: shivamKumar, domain: "Web Development", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "shivam@example.com" },
    { name: "Pratik Khuntia", photo: pratik, domain: "Web Development & Content Writing", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "pratik@example.com" },
    { name: "Shobhit Lakra", photo: shobhit, domain: "Event Management", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "shobhit@example.com" },
    { name: "Rani Prasanna", photo: raniPrasanna, domain: "Web Development", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "rani@example.com" },
    { name: "Philimon Hembram", photo: philimon, domain: "Graphic Design", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "philimon@example.com" },
    { name: "Akhil", photo: Akhil, domain: "Graphic Design", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "akhil@example.com" },
    { name: "Shivansh Pratap Chaudhary", photo:Shivansh, domain: "Video Editing", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "shivansh@example.com" },
    { name: "Suhani Vishwakarma", photo: suhani, domain: "Web Development & Public Speaking", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "suhani@example.com" },
    { name: "Pravat Ranjan Naik", photo: pravat, domain: "Event Management", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "pravat@example.com" },
    { name: "Tolaram Kewatiya", photo: tolaram, domain: "Event Management & Graphic Design", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "tolaram@example.com" },
    { name: "Pallavi Kumari", photo:pallavi, domain: "Graphic Design & Event Management", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "pallavi@example.com" },
    { name: "Arijit Bag", photo: arijit, domain: "Content Writing", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "arijit@example.com" },
    { name: "Chandra mouli", photo: Chandra, domain: "Graphic Design", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "chandra@example.com" },
    { name: "Saipriya", photo: Saipriya, domain: "Content writing", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "saipriya@example.com" },
    { name: "Jayant Rachhoya",photo: jayant, domain: "Video Editing", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "jayant@example.com" },
    { name: "Ishita Panda", photo: ishita, domain: "Event Management & Content Writing", instagram: "#", linkedin: "#", phone: "+91XXXXXXXXXX", email: "ishita@example.com" }
  ]
};

const MemberCard = ({ name, photo, post, domain, instagram, linkedin, phone, email }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
const location = useLocation();
 useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <div className="avatar-wrapper">
            <img className="avatar" src={photo} alt={name} />
            <div className="avatar-glow" />
          </div>
          <h3 className="teammember-name">{name}</h3>
          <p className="member-role">{post || domain}</p>
          <div className="flip-hint">Click to view or contact</div>
        </div>
        
        {/* Back Side */}
        <div className="card-back">
          <h3 className="teammember-name">{name}</h3>
          <p className="member-role">{post || domain}</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href={`tel:${phone}`} className="contact-link">{phone}</a>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${email}`} className="contact-link">{email}</a>
            </div>
          </div>
          
          <div className="social-links">
            <a href={instagram} className="social-icon" onClick={e => e.stopPropagation()}>
              <FaInstagram className="icon" />
            </a>
            <a href={linkedin} className="social-icon" onClick={e => e.stopPropagation()}>
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TeamPage() {
  const [selectedTab, setSelectedTab] = React.useState("faculty");

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.className = "particles-canvas";
    document.querySelector('.team-page').appendChild(canvas);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle animation
    const particles = [];
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.5 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.fillStyle = `rgba(108, 99, 255, ${this.size/3})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const renderMembers = (group) => (
    <div className="card-grid">
      {members[group].map((member, index) => (
        <MemberCard
          key={index}
          {...member}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      ))}
    </div>
  );

  return (
    <div className="team-page">
      <div className="header-glow" />
      <div className="particles-container" />
      
      <h1 className="title">
        <span className="title-text">Radio Nitroz</span>
        <span className="title-sub">Official Entertainment Club</span>
      </h1>

      <div className="tabs-container">
        <div className="tabs">
          {Object.keys(members).map((group) => (
            <button
              key={group}
              className={`tab-button ${selectedTab === group ? 'active' : ''}`}
              onClick={() => setSelectedTab(group)}
            >
              <span className="tab-text">
                {group === "faculty" && "Faculty Advisor"}
                {group === "fourthYear" && "Senior Team"}
                {group === "thirdYear" && "Core Team"}
                {group === "secondYear" && "Junior Team"}
              </span>
              <div className="tab-highlight" />
            </button>
          ))}
        </div>
      </div>

      <div className="tab-content">{renderMembers(selectedTab)}</div>
    </div>
  );
}