import React from "react";
import {Spacing} from "@ds.e/foundation";

interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({
    hexCode,
    height = Spacing.sm,
    width = Spacing.sm,
}) => {

    const className = `dse-width-${width} dse-height-${height}`

    const style = {
        backgroundColor: hexCode,
    } as React.CSSProperties;

    return (
        <div 
        className={className}
        style={style}
        />
            
    );
}

export default Color;