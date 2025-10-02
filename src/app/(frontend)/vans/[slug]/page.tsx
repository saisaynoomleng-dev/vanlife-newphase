import Bounded from "@/components/Bounded";
import { Button } from "@/components/ui/button";
import VanTypeBanner from "@/components/VanTypeBanner";
import { formatCurrency } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { VAN_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const VansDetailpage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { data: van } = await sanityFetch({
        query: VAN_QUERY,
        params: await params,
    });

    if (!van) notFound();

    return (
        <Bounded>
            <div>
                <Link
                    href="/vans"
                    className="flex gap-x-2 items-center underline underline-offset-2 group"
                >
                    <span className="group-hover:-translate-x-0.5 transition-transform duration-150 ease-in">
                        <FaArrowLeft />
                    </span>
                    <span>Back to All Vans</span>
                </Link>
            </div>

            <div className="mx-auto">
                {van?.mainImage?.asset?.url ? (
                    <Image
                        src={urlFor(van.mainImage.asset.url)
                            .width(1200)
                            .height(1200)
                            .format("webp")
                            .url()}
                        width={600}
                        height={600}
                        alt={van.mainImage.alt || ""}
                        className="w-full rounded-sm mx-auto"
                    />
                ) : null}
            </div>

            <div className="flex flex-col gap-y-5">
                {van?.type ? (
                    <VanTypeBanner type={van.type} className="self-start" />
                ) : null}

                <h2 className="font-semibold capitalize text-fs-500">
                    {van.name}
                </h2>

                {van?.price ? (
                    <p>
                        <span className="font-semibold">
                            {formatCurrency(van?.price)}
                        </span>{" "}
                        /day
                    </p>
                ) : null}

                <p>{van.desc}</p>

                <div>
                    <Link href={""}>
                        <Button className="w-full">Rent this Van</Button>
                    </Link>
                </div>
            </div>
        </Bounded>
    );
};

export default VansDetailpage;
