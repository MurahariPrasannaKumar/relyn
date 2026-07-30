"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";

const faqs = [
  {
    question: "How does Relyn verify household professionals?",
    answer:
      "Relyn uses structured profile checks, identity review and a guided screening process before recommending professionals to families."
  },
  {
    question: "Can I hire for both housekeeping and cooking?",
    answer:
      "Yes. Share your household requirements and we will help you understand suitable options across housekeeping and home cooking."
  },
  {
    question: "Which areas do you currently serve?",
    answer:
      "Relyn currently serves JP Nagar and Banashankari, with more Bengaluru neighbourhoods planned as the network expands."
  },
  {
    question: "How long does the matching process take?",
    answer:
      "Timelines depend on your requirements and availability, but the process is designed to move from enquiry to shortlisting clearly and efficiently."
  },
  {
    question: "Can household professionals register with Relyn?",
    answer:
      "Yes. Household professionals can register interest and join the Relyn network after completing the onboarding and verification process."
  }
];

export function FAQSection() {
  return (
    <Section id="faqs">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs font-700 uppercase tracking-[0.18em] text-black/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff2b1f]" aria-hidden />
            FAQ
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
            Questions?
            <br />
            We are here to help
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="flex flex-col">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={faq.question}
              value={`item-${index}`}
              className="group border-b border-black/10 py-6 first:pt-0"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center gap-6 text-left">
                  <span className="text-lg font-500 text-black/30">{index + 1}</span>
                  <span className="flex-1 text-lg font-500 text-black">{faq.question}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/12 transition-transform duration-300 group-data-[state=open]:rotate-180">
                    <ChevronDown className="h-4 w-4 text-black/60" />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <p className="mt-4 pl-10 pr-14 text-base leading-relaxed text-black/55">
                  {faq.answer}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Section>
  );
}
