import React from "react";
import { useTranslation } from "react-i18next";

const FiBanner = () => {
    const { t } = useTranslation("global");

    return (
        <div className="container custom-banner">
            <h1>FI</h1>
            <h3> {t("heading_banner")} </h3>
            <p>{t("para_banner")}</p>
        </div>
    );
};

export default FiBanner;
