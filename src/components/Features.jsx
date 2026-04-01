function Features() {
  const features = [
    {
      serialNo: 1,
      title: "Streak Tracking",
      desc: "Visualise your consistency day by day. A single missed day shows motivation to never let it happen again.",
    },
    {
      serialNo: 2,
      title: "Minimal Interface",
      desc: "No clutter, no dark patterns. Just you, your habits, and the quiet satisfaction of discipline",
    },
    {
      serialNo: 3,
      title: "Instant check-in",
      desc: "Mark a habit done in one tap. Designed to stay out of your way so you can get back to your day.",
    },
  ];
  return (
    <div id="features-section">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <h3>
            {feature.serialNo}. {feature.title}
          </h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
