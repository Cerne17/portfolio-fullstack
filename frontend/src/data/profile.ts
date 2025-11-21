import { IProfile } from "../interfaces/profile.interface";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const profile: IProfile = {
  name: "Miguel Cerne",
  role: "Full-Stack Engineer & Machine Learning Researcher",
  intro:
    "I am a Brazilian Full-Stack Engineer and a third-year Electrical and Computer Engineering undergraduate at the Federal University of Rio de Janeiro (UFRJ). My passion is to build entire systems from the ground up, blending my lifelong love for math and logic with pure creativity.",
  summary: [
    "I am a third-year <strong>Electrical and Computer Engineering</strong> undergraduate at UFRJ, passionate about bridging the gap between software and hardware through innovative solutions. My academic path and professional experiences have strengthened my skills in <strong>backend development</strong>, <strong>machine learning</strong>, and <strong>data analysis</strong>.",
    "I have worked as a <strong>Backend Developer</strong> at <strong>Fluxo Consultoria</strong> (Fluxo Consultancy) - an engineering undergratuate business -, where I built and maintained APIs using <strong>NestJS</strong> and <strong>PostgreSQL</strong>, applying clean architecture principles and best practices in software engineering. Additionally, as a <strong>Machine Learning Researcher</strong> at GTA-UFRJ (Grupo de Teleinformática e Automação - Teleinformatics and Automation Group), I explored data-driven solutions using <strong>Scikit-Learn</strong>, <strong>Pandas</strong>, and <strong>Matplotlib</strong>, while leveraging high-performance computing with TPUs.",
    "I thrive on hands-on learning, tackling complex problems, and applying emerging technologies. My goal is to contribute to impactful projects that push the boundaries of software engineering and data science, while continuing to grow as a technology professional.",
  ],
  interests: [
    "I am deeply interested in technologies that connect theory with real-world impact. My curiosity drives me to explore areas such as <strong>backend development</strong>, <strong>distributed systems</strong>, and <strong>scalable API design</strong>, where I can apply engineering principles to build robust and efficient solutions.",
    "On the research side, I am fascinated by machine learning algorithms and their applications in <strong>data-driven decision-making</strong>. I enjoy experimenting with models, optimizing their performance, and understanding how emerging technologies can transform industries.",
    "Beyond software, I value the synergy between hardware and software, a perspective rooted in my Electronic and Computer Engineering background. This motivates me to stay up-to-date with advancements in <strong>computing architectures</strong> and <strong>embedded systems</strong>.",
    "Above all, I am passionate about <strong>continuous learning</strong>—whether it's mastering a new framework, contributing to open-source projects, or diving deep into the latest tech trends. My goal is to keep expanding my knowledge while building solutions that make a difference.",
  ],
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Cerne17",
      icon: FaGithub,
      ariaLabel: "GitHub",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/miguelcerne/",
      icon: FaLinkedin,
      ariaLabel: "LinkedIn",
    },
    {
      platform: "Email",
      url: "mailto:miguelcerne.dev@gmail.com",
      icon: SiGmail,
      ariaLabel: "Email",
    },
  ],
};

export default profile;
