import React from "react";
import ReactDOM from "react-dom";

import {Color,Text, Margin} from "@ds.e/react";
import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Margin.css";

ReactDOM.render(
    <Margin
    start
    top
    >

    <Color
    hexCode="#00FF00"
    />
    <Text
    size="xl"
    >asDSAD</Text>
    </Margin>
    ,
    document.getElementById("root")
)
