import { useState } from "react";
const empty = { title: "", category: "", description: "", year: "" };

export default function ProjectForm({ onAddProject }) {
  const [form, setForm] = useState(empty);

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.category || !form.description) return;
    onAddProject({
      ...form,
      year: Number(form.year) || new Date().getFullYear()
    });
    setForm(empty);
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <input
        className="input"
        placeholder="Title"
        value={form.title}
        onChange={e => update("title", e.target.value)}
      />
      <input
        className="input"
        placeholder="Category"
        value={form.category}
        onChange={e => update("category", e.target.value)}
      />
      <textarea
        className="input"
        placeholder="Description"
        value={form.description}
        onChange={e => update("description", e.target.value)}
      />
      <input
        className="input"
        placeholder="Year"
        value={form.year}
        onChange={e => update("year", e.target.value)}
      />
      <button className="button primary" type="submit">Add Project</button>
    </form>
  );
}