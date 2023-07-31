"use client"
import Image from "next/image"
import { SearchIcon } from "@heroicons/react/outline"
import { MicrophoneIcon } from "@heroicons/react/solid"
import { useRef } from "react"
import { useRouter } from "next/navigation"

const Body = () => {

    const searchInputRef = useRef()
    const router = useRouter()

    const handleSearch = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value
        if (!term) return
        router.push(`/search?term=${term}`)
    }

    return (
        <form className="flex flex-col items-center mt-20 flex-grow w-4/5">
            <Image
                src={"https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}
                width={300}
                height={100}
                alt="Google_Logo"
            />

            {/* Search Field */}
            <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-200 rounded-full px-5 py-3 items-center sm:max-w-lg lg:max-w-2xl">
                <SearchIcon className="h-5 mr-3 text-gray-500" />
                <input type="text" className="focus:outline-none flex-grow" ref={searchInputRef} />
                <MicrophoneIcon className="h-5" />
            </div>

            {/* Buttons */}
            <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                <button type="submit" onClick={handleSearch} className="btn">Google Search</button>
                <button onClick={handleSearch} className="btn">I'm Feeling Lucky</button>
            </div>
        </form>
    )
}
export default Body