import clsx from "clsx";
import React from "react";

const VanTypeBanner = ({
    type,
    className,
}: {
    type: string;
    className?: string;
}) => {
    return (
        <p
            className={clsx(
                "font-semibold px-2 py-1 rounded-sm text-brand-white capitalize",
                className,
                type === "simple" && "bg-brand-simple",
                type === "rugged" && "bg-brand-rugged",
                type === "luxury" && "bg-brand-luxury"
            )}
        >
            {type}
        </p>
    );
};

export default VanTypeBanner;
