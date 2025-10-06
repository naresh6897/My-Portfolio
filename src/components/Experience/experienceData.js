
const experienceList = [
  {
    id: 1,
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services (TCS)",
    location: "Hyderabad, India",
    period: "Feb 2022 – Nov 2024",
    bullets: [
      "Designed a secure AWS Supply Chain Data Lake with automated Glue-based cleaning and transformations; democratized access and improved accuracy.",
      "Enabled ad‑hoc analytics via Athena and centralized storage in S3; reduced manual reporting and boosted exploration.",
      "Integrated S3 + Lambda + Power BI for dynamic dashboards that auto‑refresh on new data; reduced stockouts by 15% and freed 20% analyst capacity."
    ],
    image: require('../../assets/tcs.jpeg')
  },
  {
    id: 2,
    role: "Media Services – Python Automation",
    company: "TCS (R&D)",
    location: "Hyderabad, India",
    period: "2023 – 2024",
    bullets: [
      "Automated multilingual video creation with Python, handling audio extraction, timestamp alignment, and AWS Transcribe for accurate Spanish captions.",
      "Re‑composited audio/video with media processing libraries; expanded audience reach by 20% and cut production effort by 10%."
    ],
    image: require('../../assets/aiml.jpeg')
  },
  {
    id: 3,
    role: "Academic Tutor",
    company: "Self‑Employed",
    location: "Hyderabad, India",
    period: "Jun 2017 – May 2021",
    bullets: [
      "Tutored math, science, and English; students improved test scores by ~20% on average.",
      "Personalized lesson plans and created a positive learning environment; 95% of students showed consistent grade improvements."
    ],
    image: require('../../assets/tutoring.jpeg')
  }
];

export default experienceList;
