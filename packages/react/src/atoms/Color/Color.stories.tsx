import React from "react";
import Color from "./Color";
import '@ds.e/scss/lib/Utilities.css';

export default {
    title: "Atoms/Color",
}


export const Common = () => <Color
hexCode="#ff0000"
/>;

export const CustomDimensions = () => <Color
hexCode="#ff0000"
width="xxl"
height="xxl"
/>