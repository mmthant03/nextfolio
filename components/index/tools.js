const Tools = () => {
    const tools = [
        "Excel",
        "Django",
        "Next.js",
        "Power BI"
    ]
    return (
        <div>
            <h5 className="font-semibold text-sm uppercase mb-3">
                Main Tools
            </h5>

            <ul className="flex-col mt-2">
                {tools.map(tool => (
                    <li className="inline-block lg:block mb-1 mr-1 lg:mr-0" key={tool}>
                        <span className="inline-block bg-green-400 subpixel-antialiased px-3 py-1 font-light text-xl md:text-2xl">
                            {tool}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tools;