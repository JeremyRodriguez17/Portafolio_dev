import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import TaskCard from "../components/TaskCard";
import TaskModal from "../components/TaskModal";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import FilterBar from "../components/FilterBar";
import tasks from "../data/tasks.js";
import Contact from "../components/Contact";
import ScrollButtons from "../components/ScrollButtons";

export default function Home() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Todas");

  const filteredTasks =
    activeFilter === "Todas"
      ? tasks
      : tasks.filter((task) => task.course === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />

      <main className="flex-1">
        <Profile />
        <Skills />

        <section id="tasks" className="max-w-6xl mx-auto py-8 px-6">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Mis Tareas
          </h2>

          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onOpen={() => setSelectedTask(task)}
              />
            ))}
          </div>
        </section>

        <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />

        {/* SECCIÓN PROYECTOS SIN MARGEN INFERIOR */}
        <div className="mb-0">
          {" "}
          {/* ← Contenedor sin margen */}
          <Projects />
          <Contact />
          <ScrollButtons />
        </div>
      </main>
    </div>
  );
}
