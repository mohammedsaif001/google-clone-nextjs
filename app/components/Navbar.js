import Avatar from "./Avatar"
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid"

const Navbar = () => {
    return (
        <header className="flex w-full p-5 justify-between text-sm text-gray-700">
            {/* Left */}
            <div className="flex space-x-4 items-center ">
                <p className="link">About</p>
                <p className="link">Store</p>
            </div>

            {/* Right */}
            <div className="flex space-x-4 items-center">
                <p className="link">Gmail</p>
                <p className="link">Images</p>

                {/* Icon */}
                <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

                {/* Avatar */}
                <Avatar url={"/profilepic.jpg"} />
            </div>
        </header>
    )
}
export default Navbar