'use client'

import { useState } from "react";
import LanguToolTip from "./LanguToolTip";

const LanguToolTipWraper = () => {


    const [Langu, setLangu] = useState("En");

    return (
        <div className=" flex flex-col gap-[10px]">
            <LanguToolTip title={'Fr'} Langu={Langu} setLangu={setLangu} />
            <LanguToolTip title={"En"} Langu={Langu} setLangu={setLangu} />
        </div>
    )
}

export default LanguToolTipWraper;