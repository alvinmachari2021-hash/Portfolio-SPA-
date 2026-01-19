import { useState, useMemo } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import Footer from "./components/Footer";
import "./Styles/globals.css";

export default function App() {
  const [projects, setProjects] = useState([
    {
      id: crypto.randomUUID(),
      title: "Brand Identity — Kijani Foods",
      category: "Branding",
      description: "Full identity system, packaging, and guidelines.",
      year: 2024
    },
    {
      id: crypto.randomUUID(),
      title: "E-commerce UX — Mtaa Market",
      category: "UX/UI",
      description: "Mobile-first marketplace with streamlined checkout.",
      year: 2025
    }
  ]);

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return projects.filter(p =>
      [p.title, p.category, p.description, p.year.toString()]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [projects, query]);

  function handleAddProject(newProject) {
    setProjects(prev => [{ ...newProject, id: crypto.randomUUID() }, ...prev]);
  }

  return (
    <div className="container">
      <Header query={query} onQueryChange={setQuery} />
      <ProjectForm onAddProject={handleAddProject} />
      <ProjectList projects={filtered} />
      <Footer />
    </div>
  );
}
