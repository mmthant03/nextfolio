const Summary = () => {
    return (
        <div className="flex pb-8">
            <div className="w-1/2 pr-4 lg:pr-12 border-r border-dotted border-black">
                <h5 className="font-semibold text-sm uppercase">
                    Company
                </h5>
                <h3 className="font-light text-2xl leading-tight">
                    Perfecq
                </h3>
                <div className="font-semibold text-xs uppercase pt-2">
                    <span className="inline-block w-2 h-2 rounded-full mr-1 bg-green-500"></span>
                    Available for hire
                </div>
            </div>

            <div className="w-1/2 pl-4 lg:pl-12">
                <h5 className="font-semibold text-sm uppercase">
                    Education
                </h5>
                <div className="font-light text-2xl leading-tight">
                    B.Sc. Computer Science
                </div>
                <div className="font-semibold text-xs uppercase pt-2">
                    <span className="inline-block w-2 h-2 rounded-full mr-1 bg-green-700"></span>
                    <a
                        href="http://meritpages.com/mmthant"
                        target="_blank"
                        aria-label="WPI"
                        rel="noopener noreferrer"
                    > 
                        Worcester Polytechnic Institute
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Summary;