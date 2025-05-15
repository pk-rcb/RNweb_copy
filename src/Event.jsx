import { useRef, useEffect } from "react";
import "./Event.css";
import bgVideo from "./events/videoplayback (1).mp4";
// Sample images (replace with actual ones)
import glamitUp from "./events/rampwalk.jpeg";
import mrn from "./events/mrn.jpg";
import talentX from "./events/talentx.jpeg";
import rhythmicMoment from "./events/Rhythmic moments.jpeg";
import comedyNight from "./events/comedynight.jpeg";
import movieMystic from "./events/moviem.jpeg";
import nexusVerse from "./events/NV.jpg";
import voiceItUp from "./events/Vo.jpg";
import limelight from "./events/rampwalk.jpeg";
import redfmCollab from "./events/REDFM.jpg";
import matkiFod from "./events/MFD.jpg";
import kholeDil from "./events/kholedl.jpeg";
import nds from "./events/nds.jpeg";
import ss from "./events/success_stories.jpeg";
import prank from "./events/prank.jpeg";
import ks from "./events/ks.jpeg";
import freshers_intro from "./events/freshers_intro.jpeg";
import kj from "./events/kj.jpeg";
import des from "./events/des.jpeg";

const festCards = [
  { id: 1, image: glamitUp, title: "Glamit Up", url: "#" },
  { id: 2, image: talentX, title: "Talent X", url: "#" },
  { id: 3, image: rhythmicMoment, title: "Rhythmic Moments", url: "#" },
  { id: 4, image: comedyNight, title: "Comedy Night", url: "#" },
  { id: 5, image: movieMystic, title: "Movie Mystic", url: "#" },
];

const eventCards = [
  { id: 6, image: nexusVerse, title: "Nexus Verse", url: "#" },
  { id: 7, image: voiceItUp, title: "Voice It Out", url: "#" },
  { id: 8, image: limelight, title: "Lime light", url: "#" },
  { id: 9, image: redfmCollab, title: "RedFM Collab", url: "#" },
  { id: 10, image: matkiFod, title: "Matki Fod", url: "#" },
  { id: 11, image: kholeDil, title: "Khole Dil", url: "#" },
  { id: 12, image: mrn, title: "Meme Ran Tine", url: "#" },
];

const videoSeriesCards = [
  { id: 12, image: ss, title: "Success Stories", url: "#" },
  { id: 13, image: prank, title: "Prank Videos", url: "#" },
  { id: 14, image: ks, title: "Karthick & Hemanika", url: "#" },
  { id: 15, image: freshers_intro, title: "Freshers' Intro", url: "#" },
  { id: 16, image: kj, title: "Kasauti Jhanduon ki", url: "#" },
  { id: 17, image: nds, title: "NIT Durgapur Special", url: "#" },
  { id: 18, image: des, title: "Dil ki ek diary se", url: "#" },

];

const Event = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRefs.current) return;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = -(rect.width / 2 - x) / 15;
        const rotateX = (rect.height / 2 - y) / 10;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });
    };

    const resetTransform = () => {
      if (!cardRefs.current) return;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.transform =
          "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", resetTransform);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", resetTransform);
      }
    };
  }, []);

  const renderSection = (title, items, offset) => (
    <>
      <h2 className="section-title">{title}</h2>
      <div className="event-grid">
        {items.map((item, index) => (
          <div
            className="event-card-wrapper"
            key={item.id}
            ref={(el) => (cardRefs.current[offset + index] = el)}
          >
            <a
              href={item.url}
              className="event-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${item.title}`}
            >
              <div className="card-content">
                <img
                  src={item.image}
                  alt={item.title}
                  className="event-image"
                  onError={(e) => {
                    console.error(`Failed to load image for ${item.title}`);
                    e.target.src = "/path/to/fallback-image.png";
                  }}
                />
                <br />
                <h3 className="event-title">{item.title}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="event-container" ref={containerRef}>
      <h1 className="page-title">Wave Craze</h1>
      <div className="subtitle-video-container">
        <div className="home-text">
          <p className="subtitle">
            Where creativity sparks like wildfire and every heartbeat echoes
            with passion, a celebration like no other emerges at NIT Durgapur —
            Wavecraze! As the curtain rises, Wavecraze unveils a treasure trove
            of surprises, thrilling events, and unforgettable memories.
          </p>
        </div>

        <div className="video-card">
          <div className="responsive-video-wrapper">
            <video
              src={bgVideo}
              autoPlay
              muted
              loop
              controls
              playsInline
              className="event-video"
            />
          </div>
        </div>
      </div>

      {renderSection("Fest Highlights", festCards, 0)}
      {renderSection("Events", eventCards, festCards.length)}
      {renderSection(
        "Videos & Series",
        videoSeriesCards,
        festCards.length + eventCards.length
      )}
    </div>
  );
};

export default Event;
