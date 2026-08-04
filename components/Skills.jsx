import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">

        <div className="section-head">
          <p className="eyebrow">Skills & Tech Stack</p>

          <h2>The tools behind the models</h2>

          <p>
            Technologies I use to build AI applications, machine learning
            pipelines, and production-ready intelligent systems.
          </p>
        </div>

        <div className="bento-grid">
          {skillGroups.map((group, index) => (
            <div
              key={group.category}
              className={`bento-card ${
                index === 1 || index === 2 ? "bento-large" : ""
              }`}
            >
              <div className="skill-card-head">
                <span className="skill-node"></span>
                <h3>{group.category}</h3>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
