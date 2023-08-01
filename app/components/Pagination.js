"use client";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ noOfData }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const start = searchParams.get("start");
    const term = searchParams.get("term");

    // Calculate the total number of pages based on the data count (10 items per page)
    const totalPages = Math.ceil(noOfData / 10);

    // Calculate the current page number based on the "start" query parameter
    const currentPage = Math.floor((Number(start) || 0) / 10) + 1;

    // If there is no data to display, return null to render nothing
    if (noOfData === 0) return null;

    // Create an array to store all page numbers
    const showPages = Array.from({ length: totalPages }, (_, i) => i + 1);

    // Get the array of page numbers to display in the center with ellipses
    const centerPages = (() => {
        if (totalPages <= 5) return showPages; // If there are 5 or fewer pages, display all page numbers
        if (currentPage <= 3) return showPages.slice(0, 5); // If current page is 3 or less, show first 5 pages
        if (currentPage >= totalPages - 2) return showPages.slice(totalPages - 5); // If current page is one of the last 2 pages, show last 5 pages
        return showPages.slice(currentPage - 3, currentPage + 2); // Show the current page and the two pages before and after it
    })();

    return (
        <div className="flex max-w-lg justify-between text-blue-700 mb-10 items-center">
            {currentPage > 1 ? (
                <Link href={`/search?term=${term}&start=${(currentPage - 2) * 10}`}>
                    <div className="flex items-center cursor-pointer hover:underline">
                        <ChevronLeftIcon className="h-5 mr-1" />
                        <p>Previous</p>
                    </div>
                </Link>
            ) : (
                // If on the first page, disable the "Previous" link
                <div className="flex items-center cursor-not-allowed">
                    <ChevronLeftIcon className="h-5 text-gray-500 mr-1" />
                    <p className="text-gray-500">Previous</p>
                </div>
            )}

            <div className="flex items-center">
                {/* Display the first page number */}
                {centerPages[0] !== 1 && (
                    <span
                        className="mx-1 cursor-pointer hover:underline"
                        onClick={() => router.push(`/search?term=${term}&start=${0}`)}
                    >
                        1
                    </span>
                )}

                {/* Display ellipsis if necessary */}
                {currentPage > 3 && <span className="mx-1">...</span>}

                {/* Display center pages */}
                {centerPages.map((pageNumber, index) => (
                    <span
                        key={index}
                        className={`mx-1 cursor-pointer hover:underline ${pageNumber === currentPage ? 'font-bold' : ''}`}
                        onClick={() => router.push(`/search?term=${term}&start=${(pageNumber - 1) * 10}`)}
                    >
                        {pageNumber}
                    </span>
                ))}

                {/* Display ellipsis if necessary */}
                {currentPage < totalPages - 2 && <span className="mx-1">...</span>}

                {/* Display the last page number */}
                {centerPages[centerPages.length - 1] !== totalPages && (
                    <span
                        className="mx-1 cursor-pointer hover:underline"
                        onClick={() => router.push(`/search?term=${term}&start=${(totalPages - 1) * 10}`)}
                    >
                        {totalPages}
                    </span>
                )}
            </div>

            {currentPage < totalPages ? (
                <Link href={`/search?term=${term}&start=${currentPage * 10}`}>
                    <div className="flex items-center cursor-pointer hover:underline">
                        <p>Next</p>
                        <ChevronRightIcon className="h-5 ml-1" />
                    </div>
                </Link>
            ) : (
                // If on the last page, disable the "Next" link
                <div className="flex items-center cursor-not-allowed">
                    <p className="text-gray-500">Next</p>
                    <ChevronRightIcon className="h-5 text-gray-500 ml-1" />
                </div>
            )}
        </div>
    );
};

export default Pagination;
