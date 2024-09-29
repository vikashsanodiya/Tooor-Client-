document.addEventListener("DOMContentLoaded", function () {
    const faqData = {
        "faqs": [
            {
                "column": 1,
                "id": "secure_accordion1",
                "items": [
                    {
                        "question": "Can I book extra nights of hotel accommodation?",
                        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    },
                    {
                        "question": "What are the cancellation policies?",
                        "answer": "Cancellation policies vary by property. Please review the policies of each property when making your booking."
                    }
                ]
            },
            {
                "column": 2,
                "id": "secure_accordion2",
                "items": [
                    {
                        "question": "Do you offer group discounts?",
                        "answer": "Yes, group discounts are available. Please contact our support team for more details."
                    },
                    {
                        "question": "Can I change my booking dates?",
                        "answer": "Yes, you can change your booking dates, but it may be subject to availability and additional charges."
                    }
                ]
            }
        ]
    };

    function generateFaqSection(faqData) {
        faqData.faqs.forEach(faq => {
            const faqColumn = document.getElementById(`faq-column${faq.column}`);
            const accordionDiv = document.createElement('div');
            accordionDiv.classList.add('accordian-section-inner', 'position-relative');
            
            const innerDiv = document.createElement('div');
            innerDiv.classList.add('accordian-inner');
            
            const secureAccordion = document.createElement('div');
            secureAccordion.setAttribute('id', faq.id);

            faq.items.forEach((item, i) => {
                const accordionCard = document.createElement('div');
                accordionCard.classList.add('accordion-card', i === faq.items.length - 1 ? 'mb-0' : '');
                if (faq.column === 2 && i === faq.items.length - 1) {
                    accordionCard.classList.add('last-con');
                }

                const cardHeader = document.createElement('div');
                cardHeader.classList.add('card-header');
                cardHeader.setAttribute('id', `heading${faq.column}${i}`);

                const button = document.createElement('a');
                button.setAttribute('href', '#');
                button.classList.add('btn', 'btn-link', 'collapsed');
                button.setAttribute('data-toggle', 'collapse');
                button.setAttribute('data-target', `#collapse${faq.column}${i}`);
                button.setAttribute('aria-expanded', 'false');
                button.setAttribute('aria-controls', `collapse${faq.column}${i}`);
                
                const h4 = document.createElement('h4');
                h4.textContent = item.question;

                const icon = document.createElement('i');
                icon.classList.add('fa-solid', 'fa-angle-down');

                button.appendChild(h4);
                button.appendChild(icon);

                cardHeader.appendChild(button);
                accordionCard.appendChild(cardHeader);

                const collapseDiv = document.createElement('div');
                collapseDiv.setAttribute('id', `collapse${faq.column}${i}`);
                collapseDiv.classList.add('collapse');
                collapseDiv.setAttribute('aria-labelledby', `heading${faq.column}${i}`);

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const p = document.createElement('p');
                p.classList.add('text-size-16', 'text-left', 'mb-0');
                p.textContent = item.answer;

                cardBody.appendChild(p);
                collapseDiv.appendChild(cardBody);
                accordionCard.appendChild(collapseDiv);

                secureAccordion.appendChild(accordionCard);
            });

            innerDiv.appendChild(secureAccordion);
            accordionDiv.appendChild(innerDiv);
            faqColumn.appendChild(accordionDiv);
        });
    }

    generateFaqSection(faqData);
});
