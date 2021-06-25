import ProjectCard from "./ProjectCard";
import listprojects from "../listprojects";
import { withNamespaces } from 'react-i18next';
function Projects({t}){
    return(
        <div className="projects" id="projects">
            <h2>{t('projects_title')}</h2>
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

export default withNamespaces()(Projects);