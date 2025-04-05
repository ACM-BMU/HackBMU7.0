import { useEffect, useRef } from "react";
import { Calendar, Code, Lightbulb, Users } from "lucide-react";
import "./aboutglitch.css";

export default function AboutSection() {
  const glitchTextRef = useRef(null);

  useEffect(() => {
    const glitchText = glitchTextRef.current;
    if (!glitchText) return;

    const glitchInterval = setInterval(() => {
      glitchText.classList.add("glitch-active");
      setTimeout(() => {
        glitchText.classList.remove("glitch-active");
      }, 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, [glitchTextRef]);

  return (
    <section className="about-section">
      <div className="grid-background" />

      <div className="particles-container">
        <ParticleBackground />
      </div>

      <div className="container">
        <div className="event-header">
          <div className="title-container">
            <h1 ref={glitchTextRef} className="event-title glitch-active">
              GLITCH 2025
            </h1>
          </div>

          <div className="title-underline" />

          <p className="event-tagline">
            An annual technical celebration where innovation meets creativity
          </p>
        </div>

        <div className="content-layout-wrapper">
          <div className="event-description">
            <p>
              <span className="highlight">Glitch 2025</span> is an annual
              technical extravaganza organized by the BML Munjal University ACM
              Student Chapter in collaboration with regional ACM student
              chapters across India.
            </p>

            <p>
              Join us for three days of cutting-edge technology, thrilling
              competitions, hands-on workshops, and immersive entertainment as
              we bring together tech enthusiasts, coders, innovators, and
              creators from across the nation.
            </p>

            <div className="event-date">
              <Calendar className="date-icon" />
              <span>April 18-20, 2025</span>
            </div>

            <button className="register-button">
              <span className="button-glow" />
              Register Now
            </button>
          </div>

          <div className="event-features">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, index }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

function ParticleBackground() {
  return (
    <div className="particles">
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          className="particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

const features = [
  {
    icon: <Code className="feature-icon-svg" />,
    title: "Coding Challenges",
    description:
      "Push your limits with our competitive programming contests and hackathons.",
  },
  {
    icon: <Lightbulb className="feature-icon-svg" />,
    title: "Innovation Hub",
    description:
      "Showcase your projects and ideas in our innovation exhibition.",
  },
  {
    icon: <Users className="feature-icon-svg" />,
    title: "Networking",
    description:
      "Connect with industry experts and like-minded tech enthusiasts.",
  },
  {
    icon: <Calendar className="feature-icon-svg" />,
    title: "Workshops",
    description:
      "Gain hands-on experience with cutting-edge technologies and tools.",
  },
];
