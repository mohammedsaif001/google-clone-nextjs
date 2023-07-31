import getResults from "@/lib/getResults"
import HeaderSearch from "../components/HeaderSearch"

const SearchPage = async ({ params, searchParams: { term } }) => {
    const data = await getResults(term)
    console.log(data)
    return (
        <div>
            <HeaderSearch />
        </div>
    )
}
export default SearchPage

// export async function getServerSideProps(context) {
//     const query = context.query
//     const useDummyData = false;
//     const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query.term}`).then(res => res.json())

//     // After the Server rendering pass the results to the client

//     return {
//         props: {
//             results: data,
//             name: "Mohammed"
//         }
//     }
// }