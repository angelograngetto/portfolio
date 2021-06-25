import { Link } from "wouter"
export default function ProjectCard({id, title, img, short, tech }){
    return(
        <Link to={`/project/${id}`} className="project_card">
            <img src={img} alt="" />
            <div className="info">
                <h4>{title}</h4>
                <small>{tech}</small>
            </div>
        </Link>
    )
}