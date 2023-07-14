import React from "react";
import { FontSize } from "@ds.e/foundation";
interface TextProps {
    children: React.ReactNode;
    size?: keyof typeof FontSize;
}
declare const Text: React.FC<TextProps>;
export default Text;
