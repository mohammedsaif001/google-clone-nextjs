import getResults from "@/lib/getResults"
import HeaderSearch from "../components/HeaderSearch"
import SearchResults from "../components/SearchResults"

const SearchPage = async ({ params, searchParams: { term } }) => {
    const data = await getResults(term)
    return (
        <div>
            <HeaderSearch />
            <SearchResults results={data} />
        </div>
    )
}

export async function generateMetadata({ params, searchParams }) {
    const term = searchParams.term
    const capitalizeTerm = term.charAt(0).toUpperCase() + term.slice(1);
    return {
        title: `${capitalizeTerm} - Search Results`
    }
}

export default SearchPage
