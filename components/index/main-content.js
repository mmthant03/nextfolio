import Summary from "./summary"
import Skills from "./skills"
import Tools from "./tools"
import About from "./about"
import Projects from "./projects"
import WorkHistory from "./workhistory"

const MainContent = () => {
    return (
        <div className="lg:w-2/3 lg:pl-8 xl:pl-12">
            <Summary />

            <div className="flex flex-wrap">
                <div className="w-full sm:w-full lg:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
                    <Skills />
                </div>
                <div className="w-full sm:w-full lg:w-1/4 pb-12">
                    <Tools />
                </div>
            </div>

            <About />

            <Projects />

            <WorkHistory />
        </div>
    );
}

export default MainContent;