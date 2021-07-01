const Footer = () => {
    return (
        <footer className="bg-black mt-16 pt-8 pb-16">
            <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center">
                <div className="w-2/3 text-white text-xs">
                    <b>
                        &copy; {new Date().getFullYear()} Myo Min Thant.
                    </b>{" "}
                    All rights reserved.
                </div>

                <div className="w-1/3 text-right text-white">
                    <b>
                        &copy; {new Date().getFullYear()} Myo Min Thant.
                    </b>{" "}
                    All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer