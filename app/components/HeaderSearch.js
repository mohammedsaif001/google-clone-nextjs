"use client"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useRef } from "react"
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid"
import Avatar from "./Avatar"
import HeaderOptionSearch from "./HeaderOptionSearch"

const HeaderSearch = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const term = searchParams.get('term')
    const searchInputRef = useRef(null)

    const handleSearch = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value
        if (!term) return
        router.push(`/search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src={"https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}
                    height={40}
                    width={120}
                    className="cursor-pointer"
                    onClick={() => router.push("/")}
                />

                {/* Input Field */}
                <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
                    <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none"
                        defaultValue={term} />
                    <XIcon className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3"
                        onClick={() => searchInputRef.current.value = ""}
                    />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={handleSearch}>Search</button>
                </form>
                <Avatar url={"/profilepic.jpg"} className="ml-auto" />
            </div>

            {/* Header Options */}
            <HeaderOptionSearch />
        </header>
    )
}
export default HeaderSearch