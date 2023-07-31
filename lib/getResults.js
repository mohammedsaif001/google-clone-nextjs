import Response from "@/Response";

async function getResults(term, start) {
    const useDummyData = false;

    // For pagination
    const startIndex = start || "0"

    // Conditionally hitting the api because in building process the api limit gets exceeded
    // Making a dummy response and passing it for development purposes only
    const res = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}&start=${startIndex}`)


    if (!useDummyData && !res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return useDummyData ? res : res.json()
}

export default getResults
