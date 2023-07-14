import React from "react";
import {FontSize} from "@ds.e/foundation";

interface TextProps {
    children: React.ReactNode;
    size?: keyof typeof FontSize;
}

const Text: React.FC<TextProps> = ({
    children,
    size = FontSize.base as keyof typeof FontSize,
}: TextProps) => {
    const className = `dse-text-${size}`;
    return (
        <p
        className={className}
        >
            {children}
        </p>
    );
}

export default Text;