import { FontSize } from '@or.ds.e/foundation';
import React from 'react';
interface TextProps {
    children: React.ReactNode;
    size?: keyof typeof FontSize;
}
declare const Text: React.FC<TextProps>;
export default Text;
