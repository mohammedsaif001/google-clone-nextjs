import Image from "next/image"

const Avatar = ({ url }) => {
    return (
        <Image src={url} alt="profile_pic" className="rounded-full cursor-pointer transition duration-150 transform hover:scale-110 " width={40} height={40} />
    )
}
export default Avatar