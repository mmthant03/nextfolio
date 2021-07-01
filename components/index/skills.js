
const Skills = () => {
    const skillset = [
        "Python",
        "Java",
        "JavaScript"
    ]
    const colorset = [
        "border-pink-400",
        "border-blue-400",
        "border-yellow-400"
    ]
    return (
        <div>
            <h5 className="font-semibold text-sm uppercase mb-3">
                Top skills
            </h5>
            <ul className="flex flex-wrap grid grid-cols-3 gap-2 md:gap-4">
                {skillset.map((skill, i) => (
                    <li key={`skill${i}`} className={`relative flex justify-center items-center rounded-full border-2 border-solid ${colorset[i]}`}>
                        <span className="absolute font-semibold text-sm md:text-base px-2 text-center">
                            {skill}
                        </span>
                        <img 
                            src={`assets/img/skill${i}.svg`}
                            className="w-full opacity-75 m-2 text-4xl"
                        />
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default Skills;