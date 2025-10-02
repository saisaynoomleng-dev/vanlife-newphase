import { formatCurrency } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { ALL_VANS_QUERYResult } from "@/sanity/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const VansCard = ({
    className,
    ...props
}: { className?: string } & NonNullable<ALL_VANS_QUERYResult>[number]) => {
    const { name, mainImage, slug, price, type } = props;

    if (!mainImage) return <p>Loading Image...</p>;
    return (
        <Link
            href={`/vans/${slug?.current}`}
            className={clsx("flex flex-col p-2", className)}
        >
            <div>
                {mainImage.asset?.url ? (
                    <Image
                        src={urlFor(mainImage?.asset?.url)
                            .width(500)
                            .height(500)
                            .format("webp")
                            .url()}
                        alt={mainImage?.alt || ""}
                        width={500}
                        height={500}
                        priority
                        className="rounded-sm w-full object-cover"
                    />
                ) : null}
            </div>

            <div className="grid grid-cols-[1fr_auto]">
                <p className="font-semibold">{name}</p>
                <p className="flex flex-col items-end">
                    <span className="font-semibold inline-block">
                        {price && formatCurrency(price)}
                    </span>{" "}
                    /day
                </p>
            </div>

            <p
                className={clsx(
                    "capitalize font-semibold text-brand-white py-1 px-3 rounded-sm self-start",
                    type === "simple" && "bg-brand-simple",
                    type === "rugged" && "bg-brand-rugged",
                    type === "luxury" && "bg-brand-luxury"
                )}
            >
                {type}
            </p>
        </Link>
    );
};

export default VansCard;
