import Image from 'next/image'
import ProfileImage from './profile-image'
import Location from './location'
import SocialLinks from './social-links'

const Banner = ({ profile }) => {
    return (
        <aside className="w-full lg:w-1/3 lg:border-r lg:border-dotted lg:border-black lg:px-8 xl:px-12">
            <div className="flex flex-col h-full justify-between">

                <div>
                    <h2 className="font-light text-front text-2xl leading-none mb-4">
                        Software &amp; Data Analyst
                    </h2>
                    <h1 className="font-black text-front text-5xl leading-none break-words mb-6">
                        Marcus Thant
                    </h1>
                    <ProfileImage />
                    <br />
                    <Location />
                </div>

                <SocialLinks />

            </div>
        </aside>

    )
}

export default Banner