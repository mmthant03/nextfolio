import ProjectData from '../data/projects.json'

const Projects = () => {
    return (
        <div>
            <h5 className="font-semibold text-sm uppercase mb-3">
                Projects
            </h5>
            {
                ProjectData.map((project, i) => (
                    <Project key={`${project.name}_${i}`} {...project} />
                ))
            }
        </div>
    );
}

export default Projects;

const Project = props => {
    const { name, status, url, tags, date, tasks } = props
    return (
        <div className="border-t-4 border-solid border-gray-400 relative flex flex-wrap bg-white p-4 lg:p-8 bg-no-repeat text-sm mb-6">
            <div className="lg:flex-1">
                <h4 className="font-bold mt-2">
                    {name}
                </h4>
                {url && (
                    <a
                        className="underline break-all hover:opacity-75 transition-opacity duration-150"
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {url}
                    </a>
                )}
                <p className="w-full py-4 whitespace-pre-line">
                    {tasks}
                </p>
                <ul className="pr-2">
                    {status && (
                        <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-full border border-gray-400 border-solid">
                            <span
                                className={`inline-block w-2 h-2 rounded-full mr-2 ${status === "completed" ? "bg-green-500" : "bg-yellow-500"}`}
                            >
                            </span>
                                Status: {status}
                            
                        </li>
                    )}
                    {tags && (
                        <>
                            {
                                tags.map(tag => (
                                    <li
                                        className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-full border border-gray-400 border-solid"
                                        key={tag}
                                    >
                                        {tag}
                                    </li>
                                ))
                            }
                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}