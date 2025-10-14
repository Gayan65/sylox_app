import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation("global");

    return (
        <div
            className="container-fluid custom-color"
            id="contact-section-scroll"
        >
            <div className="container text-container">
                <h1 className="heading-text">{t("heading_contact")}</h1>
                <p className="para-text">{t("para_contact")}</p>
            </div>

            <div className="container my-5 custom-check-card">
                <section className="contact-section">
                    <div className="contact-container">
                        <div className="contact-text">
                            <h2> {t("heading_card_contact")} </h2>
                            <p>{t("para_card_contact")}</p>

                            <h6> {t("sub_heading1_card_contact")} </h6>
                            <p>
                                SYLOX solutions
                                <br />
                                {t("l2_card_contact")}
                                <br />
                                {t("l3_card_contact")}
                                <br />
                                {t("l4_card_contact")}
                            </p>
                            <p>
                                <strong>{t("email_ph")} : </strong>{" "}
                                info@sylox.fi
                            </p>
                            <p>
                                <strong>
                                    {t("sub_heading3_card_contact")} :{" "}
                                </strong>{" "}
                                +358 414 702 987
                            </p>
                        </div>

                        <form className="contact-form">
                            <input
                                type="text"
                                placeholder={t("name_ph")}
                                required
                            />
                            <input
                                type="email"
                                placeholder={t("email_ph")}
                                required
                            />
                            <input type="tel" placeholder={t("phone_ph")} />
                            <textarea
                                placeholder={t("comment")}
                                rows="4"
                                required
                            ></textarea>
                            <button type="submit" className="send-btn">
                                {t("btn_card_contact")}
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
