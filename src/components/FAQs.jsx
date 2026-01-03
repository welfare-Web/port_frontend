import React, { useState } from "react"
import "./FAQs.css"

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How does the service model work at Welfare Healthtech?",
      answer:
        "We offer flexible service engagement based on your needs. You can choose ongoing support or project-based delivery across web applications, mobile apps, medical coding, AI solutions, and business services.",
    },
    {
      question: "What types of services can I request?",
      answer:
        "You can request web and mobile application development, UI/UX design, medical coding, digital marketing, telecommunication support, customer support services, data entry processing, and AI technologies.",
    },
    {
      question: "How quickly will services be delivered?",
      answer:
        "Timelines depend on the scope and complexity of the task. Most standard requests are delivered within a few business days, while larger projects follow an agreed milestone-based schedule.",
    },
    {
      question: "How do you manage communication and progress?",
      answer:
        "We use structured communication channels and project tracking tools to ensure transparency, regular updates, and smooth collaboration throughout the engagement.",
    },
    {
      question: "Is there a limit to how many requests we can make?",
      answer:
        "No strict limits. Requests are handled based on priority and scope to maintain quality, accuracy, and timely delivery.",
    },
    {
      question: "Can we pause, scale, or stop services anytime?",
      answer:
        "Yes. Welfare Healthtech offers flexible engagement — you can scale services up or down, pause, or stop based on your business requirements.",
    },
  ]

  return (
    <section id="faqs" className="faqs animate-enter">
      <div className="faqs-container">

        {/* LEFT */}
        <div className="faqs-left">
          <span className="section-tag">// FAQs //</span>
          <h2 className="section-title">Questions.</h2>
          <p className="section-description">
            "Everything you need to know about Welfare Healthtech and our service offerings."
          </p>
        </div>

        {/* RIGHT */}
        <div className="faqs-right">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? "open" : ""}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="faq-header">
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                </div>

                <div className="faq-body">
                  <p>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQs
