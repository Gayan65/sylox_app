import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation("global");

    //states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        console.log("here1");
        e.preventDefault();

        const contact = {
            name,
            email,
            phone,
            message,
        };
        console.log(name, email, phone, message);
        //api call
        try {
            const response = await fetch("api/contact/create-contact/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            const json = await response.json();

            if (!response.ok) {
                console.log(json.error);
            }

            if (response.ok) {
                console.log(json);
            }
        } catch (error) {
            console.error("Error in creating contact:", error);
        }
    };

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

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder={t("name_ph")}
                                required
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <input
                                type="email"
                                placeholder={t("email_ph")}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                type="tel"
                                placeholder={t("phone_ph")}
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />
                            <textarea
                                placeholder={t("comment")}
                                rows="4"
                                required
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
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
