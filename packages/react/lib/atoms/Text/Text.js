import React from 'react';
import { FontSize } from '@ds.e/foundation';

const Text = ({ children, size = FontSize.base, }) => {
    const className = `dse-text-${size}`;
    return (React.createElement("p", { className: className }, children));
};

export { Text as default };
//# sourceMappingURL=Text.js.map