import { FaFacebook, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const SocialLinks = () => {
    return (
        <div className="pt-8 pb-12 lg:py-6">
            <h5 className="font-semibold text-sm uppercase mb-3">
                Connect
                    </h5>
            <div className="pl-3">
                <a
                    aria-label="Facebook"
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex text-white bg-black w-12 h-12 justify-center items-center rounded-full -ml-3 hover:shadow-lg transition-shadow duration-150"
                >
                    <FaFacebook className="w-6 h-6" />
                </a>
                <a
                    aria-label="LinkedIn"
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex text-black bg-white w-12 h-12 justify-center items-center rounded-full -ml-3 hover:shadow-lg transition-shadow duration-150"
                >
                    <FaLinkedinIn className="w-6 h-6" />
                </a>
                <a
                    aria-label="Github"
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex text-white bg-black w-12 h-12 justify-center items-center rounded-full -ml-3 hover:shadow-lg transition-shadow duration-150"
                >
                    <FaGithub className="w-6 h-6" />
                </a>
            </div>
        </div>
    )
}

export default SocialLinks