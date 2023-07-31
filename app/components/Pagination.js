"use client";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useSearchParams } from "next/navigation";

const Pagination = ({ noOfData }) => {
    const searchParams = useSearchParams();
    const start = searchParams.get("start")
    const term = searchParams.get("term")

    const startIndex = Number(start) || 0;

    if (noOfData != 0) return (
        <div className="flex max-w-lg justify-between text-blue-700 mb-10">
            {startIndex >= 10 && (
                <Link href={`/search?term=${term}&start=${startIndex - 10}`}>
                    <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                        <ChevronLeftIcon className="h-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}

            <Link href={`/search?term=${term}&start=${startIndex + 10}`}>
                <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                    <ChevronRightIcon className="h-5" />
                    <p>Next</p>
                </div>
            </Link>
        </div>
    );
};
export default Pagination;
