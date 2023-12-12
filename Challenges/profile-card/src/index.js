import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
  {
    skill: 'React',
    level: 'begineer',
    color: 'blue',
  },
  {
    skill: 'Html',
    level: 'advanced',
    color: 'orange',
  },
  {
    skill: 'CSS',
    level: 'advanced',
    color: 'lightblue',
  },
  {
    skill: 'JS',
    level: 'intermediate',
    color: 'yellow',
  },
  {
    skill: 'Sass',
    level: 'begineer',
    color: 'pink',
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="jonas.jpeg" alt="jonas" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.length > 0 &&
        skills.map((skill, key) => <Skill skill={skill} key={key} />)}
    </div>
  );
}

function Skill({ skill }) {
  return (
    <div style={{ backgroundColor: skill.color }} className="skill">
      <span>{skill.skill}</span>
      <span>
        {skill.level === 'advanced'
          ? '💪🏻'
          : skill.level === 'intermediate'
          ? '🫳🏻'
          : '🤏🏻'}
      </span>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
