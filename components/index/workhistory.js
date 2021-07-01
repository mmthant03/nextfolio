import Styles from './workhistory.module.css'
import WorkData from '../data/works.json'

const WorkHistory = () => {
    return (
        <div>
            <h5 className="font-semibold text-sm uppercase mt-12 mb-3 text-center">
                Work History
            </h5>

            <div className={`${Styles.history} flex flex-col relative pt-6 pb-6`}>
                {WorkData.map((work, i) => (
                    <div
                        className={`${Styles.history_entry} relative w-1/2 py-4`}
                        key={`${work.company}_${i}`}
                    >
                        <span className={`${Styles.dot_bg} w-14 h-14 absolute bg-black inline-flex rounded-full items-center justify-center`}>
                            <span className={`${Styles.dot} w-5 h-5 bg-white rounded-full`} />
                        </span>

                        {work.url ? (
                             <h4 className="subpixel-antialiased">
                             <a
                               href={work.url}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="hover:opacity-75 transition-opacity duration-150"
                             >
                               {work.company}
                             </a>
                           </h4>
                        ): (
                            <h4 className="subpixel-antialiased">{work.company}</h4>
                        )}

                        {work.position && (
                            <h5 className="text-sm font-normal mb-1">{work.position}</h5>
                        )}

                        {work.period && (
                             <span className="text-sm font-medium opacity-50">{work.period}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkHistory;