const HeaderOptionIndividual = ({ Icon, title, selected }) => {
    return (
        <div className={`flex items-center space-x-1 border-b-4  hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3 ${selected ? ' border-blue-500 text-blue-500' : `border-transparent`}`
        }
        >
            <Icon className="h-4" />
            <p className="hidden sm:inline-flex">{title}</p>

        </div>
    )
}
export default HeaderOptionIndividual