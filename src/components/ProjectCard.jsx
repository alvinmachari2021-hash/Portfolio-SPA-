export default function ProjectCard({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.category} — {project.year}</p>
      <p>{project.description}</p>
    </div>
  );
}
