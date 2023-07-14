import React from 'react';
import { Spacing } from '@ds.e/foundation';

const Color = ({ hexCode, height = Spacing.sm, width = Spacing.sm, }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    const style = {
        backgroundColor: hexCode,
    };
    return (React.createElement("div", { className: className, style: style }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
