import React from 'react'

const projectData= [
    {
        id: 1,
        title: 1,
        description: 1,
        image: 1,
        tag: ["All", "Web"],
    }
]

const ProjectSection = () => {
  return (
    <section id="projects">
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      My Projects
    </h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
        onClick={handleTagChange}
        name="All"
        isSelected={tag === "All"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Web"
        isSelected={tag === "Web"}
      />
      <ProjectTag
        onClick={handleTagChange}
        name="Mobile"
        isSelected={tag === "Mobile"}
      />
    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
      {filteredProjects.map((project, index) => (
        <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        </motion.li>
      ))}
    </ul>
  </section>
  )
}

export default ProjectSection