import Bounded from "@/components/Bounded";
import VansCard from "@/components/VansCard";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_VANS_QUERY } from "@/sanity/lib/queries";
import clsx from "clsx";
import Link from "next/link";

const FILTERS = ["simple", "rugged", "luxury"];

const VansPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ filter: string; page?: string }>;
}) => {
    const { data: allVans } = await sanityFetch({ query: ALL_VANS_QUERY });

    const { filter, page } = await searchParams;

    const currentPage = parseInt(page || "1", 10);
    const totalVans = allVans.length;
    const vansPerPage = 4;
    const totalPages = Math.ceil(totalVans / vansPerPage);
    const startIndex = (currentPage - 1) * vansPerPage;
    const endIndex = startIndex + vansPerPage;
    const vans = allVans.slice(startIndex, endIndex);

    return (
        <Bounded>
            <h2 className="font-bold text-fs-700">Explore our van options</h2>
            <div className="flex justify-between items-center">
                <div className="flex gap-x-3">
                    {FILTERS.map((f, i) => {
                        const isActive = filter === f;
                        return (
                            <Link
                                key={i}
                                href={{
                                    pathname: "/vans",
                                    query: {
                                        filter: f,
                                    },
                                }}
                                className={clsx(
                                    "px-3 py-1 rounded-sm capitalize font-medium",
                                    !isActive && "bg-brand-pale/50",
                                    isActive && f === "simple"
                                        ? "bg-brand-simple text-brand-white"
                                        : "",
                                    isActive && f === "rugged"
                                        ? "bg-brand-rugged text-brand-white"
                                        : "",
                                    isActive && f === "luxury"
                                        ? "bg-brand-luxury text-brand-white"
                                        : ""
                                )}
                            >
                                {f}
                            </Link>
                        );
                    })}
                </div>

                {filter ? (
                    <Link
                        href="/vans"
                        className="underline text-red-500 underline-offset-2 hover:scale-[1.01]"
                    >
                        Clear Filter
                    </Link>
                ) : null}
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                {vans.map((van) => (
                    <VansCard key={van.slug?.current} {...van} />
                ))}
            </div>

            <div className="flex gap-x-3 items-center justify-center">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNumber) => (
                        <Link
                            key={pageNumber}
                            href={{
                                pathname: "/vans",
                                query: {
                                    ...(filter && { filter }),
                                    page: pageNumber,
                                },
                            }}
                        >
                            {pageNumber}
                        </Link>
                    )
                )}
            </div>
        </Bounded>
    );
};

export default VansPage;
