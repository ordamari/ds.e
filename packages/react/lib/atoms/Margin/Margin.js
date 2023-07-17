import React from 'react';
import { Spacing } from '@or.ds.e/foundation';

const Margin = ({ children, space = Spacing.xxxs, start = false, end = false, top = false, bottom = false, }) => {
    let className = '';
    if (!start && !end && !top && !bottom)
        className = `dse-margin-${space}`;
    else {
        if (start)
            className += ` dse-margin-inline-start-${space}`;
        if (end)
            className += ` dse-margin-inline-end-${space}`;
        if (top)
            className += ` dse-margin-block-start-${space}`;
        if (bottom)
            className += ` dse-margin-block-end-${space}`;
    }
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
