import React from "react";

const Service = () => {
    return (
        <div className="container-fluid custom-color">
            <div className="container text-container">
                <h1 className="heading-text">Our Services</h1>
                <p className="para-text">
                    From concept to development, we provide comprehensive
                    software solutions.
                </p>
            </div>

            <div className="container mt-5">
                <div className="card-group">
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="bi bi-phone"></i>
                        </div>

                        <h4 className="service-title">
                            Websites & Web Applications
                        </h4>

                        <ul className="service-list">
                            <li>Corporate websites and marketing sites</li>
                            <li>E-commerce solutions</li>
                            <li>Customer portals and management systems</li>
                            <li>Web-based SaaS development</li>
                            <li>API integrations and backend development</li>
                            <li>WordPress and Drupal CMS solutions</li>
                            <li>SEO optimization and analytics</li>
                        </ul>

                        <div className="service-tags">
                            <span>React</span>
                            <span>Vue.js</span>
                            <span>Angular</span>
                            <span>Node.js</span>
                            <span>PHP</span>
                            <span>Python</span>
                            <span>Laravel</span>
                            <span>.NET</span>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <i className="bi bi-phone"></i>
                        </div>

                        <h4 className="service-title">
                            Enterprise Systems & Digital Transformation
                        </h4>

                        <ul className="service-list">
                            <li>ERP and CRM systems</li>
                            <li>Customer relationship management solutions</li>
                            <li>Business process automation</li>
                            <li>Business Intelligence and data analytics</li>
                            <li>Legacy system modernization</li>
                            <li>IoT solutions and integrations</li>
                            <li>AI and machine learning solutions</li>
                        </ul>

                        <div className="service-tags">
                            <span>Azure</span>
                            <span>AWS</span>
                            <span>Google Cloud</span>
                            <span>Kubernetes</span>
                            <span>Docker</span>
                            <span>PostgreSQL</span>
                            <span>MongoDB</span>
                            <span>Power BI</span>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-icon">
                            <i className="bi bi-phone"></i>
                        </div>

                        <h4 className="service-title">
                            Mobile Applications for iOS & Android
                        </h4>

                        <ul className="service-list">
                            <li>Native iOS, Android, and HMS applications</li>
                            <li>
                                Cross-platform development (React Native,
                                Flutter)
                            </li>
                            <li>Mobile UX design</li>
                            <li>App Store and Google Play releases</li>
                            <li>Push notifications and real-time features</li>
                            <li>Offline functionality</li>
                            <li>Mobile backend development</li>
                            <li>App updates and maintenance</li>
                        </ul>

                        <div className="service-tags">
                            <span>Swift</span>
                            <span>Kotlin</span>
                            <span>React Native</span>
                            <span>Flutter</span>
                            <span>Firebase</span>
                            <span>CleverTap</span>
                            <span>Adjust</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
