import React from "react";

const Contact = () => {
    return (
        <div className="container-fluid custom-color">
            <div className="container text-container">
                <h1 className="heading-text">Get In Touch</h1>
                <p className="para-text">
                    Whether you're planning a new project or looking for a
                    technology partner, we're ready to help. Tell us about your
                    needs, and we'll get back to you promptly.
                </p>
            </div>

            <div className="container my-5 custom-check-card">
                <section className="contact-section">
                    <div className="contact-container">
                        <div className="contact-text">
                            <h2>Contact us</h2>
                            <p>
                                Let us know how we can best serve you. Use the
                                contact form to email us or reach us through the
                                provided contact methods. It’s an honor to
                                support you on your journey toward growth and
                                innovation.
                            </p>

                            <h6>Address:</h6>
                            <p>
                                SYLOX solutions
                                <br />
                                Raviradantie 7,
                                <br />
                                5100, Mikkeli,
                                <br />
                                Finland
                            </p>
                            <p>
                                <strong>Email : </strong> info@sylox.fi
                            </p>
                            <p>
                                <strong>Phone : </strong> +358 414 702 987
                            </p>
                        </div>

                        <form className="contact-form">
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="tel" placeholder="Phone number" />
                            <textarea
                                placeholder="Comment"
                                rows="4"
                                required
                            ></textarea>
                            <button type="submit" className="send-btn">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
