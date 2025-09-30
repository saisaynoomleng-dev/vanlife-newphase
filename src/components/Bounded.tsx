import { BoundedProps } from "@/lib/types";
import clsx from "clsx";
import React from "react";

const Bounded = ({
    children,
    as: Comp = "section",
    className,
}: BoundedProps) => {
    return (
        <Comp className={clsx("py-8 px-5 min-h-[90vh] space-y-5", className)}>
            {children}
        </Comp>
    );
};

export default Bounded;
