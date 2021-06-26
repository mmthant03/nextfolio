import Image from 'next/image'

const ProfileImage = () => {
    return (
        <div className="relative inline-block leading-none">
            <img
                src="/assets/img/corgi.jpg"
                alt="Profile Image"
                className="rounded-full relative z-10 w-48 h-48"
            />
            <div className="absolute inset-0 rounded-full bg-left bg-green-400 z-0 transform translate-x-16"></div>
        </div>
    )

}

export default ProfileImage