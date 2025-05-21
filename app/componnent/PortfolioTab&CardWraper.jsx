'use client';
import { useState } from "react";

import PortfoliocardsWraper from "./PortfolioCardsWraper";
import PortfolioTabs from "./PortfolioTabs";

const PortfolioTabandCardWraper = () => {

    const [activeTab, setActiveTab] = useState('All');

    return (
        <div>
            <PortfolioTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <PortfoliocardsWraper activeTab={activeTab} />
        </div>
    )
}


export default PortfolioTabandCardWraper;