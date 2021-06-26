import { FaMapMarkerAlt } from 'react-icons/fa'

const Location = () => {
    return (
        <div>
            <div className="inline-flex items-center bg-front mt-6 w-auto">
                <span className="font-bold py-1 px-3 mr-2 text-lg border-black bg-black text-white">
                    <FaMapMarkerAlt className="h-7 w-4" />
                </span>
                <span className="font-bold py-1 px-3 text-lg border-black bg-black text-white">
                    Yangon, Myanmar
            </span>
            </div>
        </div>

    )
}

export default Location