import HeaderOptionIndividual from "./HeaderOptionIndividual"
import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon
} from "@heroicons/react/outline"

const HeaderOptionSearch = () => {

    const headerOptions = [
        {
            icon: SearchIcon,
            title: "All",
            selected: true
        },
        {
            icon: PhotographIcon,
            title: "Images",
            selected: false
        },
        {
            icon: PlayIcon,
            title: "Videos",
            selected: false
        },
        {
            icon: NewspaperIcon,
            title: "News",
            selected: false
        },
        {
            icon: MapIcon,
            title: "Maps",
            selected: false
        },
        {
            icon: DotsVerticalIcon,
            title: "More",
            selected: false
        },
    ]

    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
            {/* Left */}
            <div className="flex space-x-6">
                {
                    headerOptions.map((item) => {
                        return <HeaderOptionIndividual key={item.title} Icon={item.icon} title={item.title} selected={item.selected} />
                    })
                }
            </div>

            {/* Right */}
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>

        </div>
    )
}
export default HeaderOptionSearch