import Image from "next/image"

const Avatar = ({ url, className }) => {
    return (
        <Image src={url} alt="profile_pic" className={`rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`} width={40} height={40} />
    )
}
export default Avatar