import ProjectCard from "./ProjectCard";
import listprojects from "../listprojects";

export default function Projects(){
    return(
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <div>
                {listprojects.map(project => (
                    <ProjectCard 
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        img={project.images[0]}
                        short={project.short_description}
                        tech={project.technologies}
                    />
                ))}
            </div>
        </div>
    )
}