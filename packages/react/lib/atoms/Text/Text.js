import { FontSize } from '@or.ds.e/foundation';
import React from 'react';

const Text = ({ children, size = FontSize.base, }) => {
    const className = `dse-text dse-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
