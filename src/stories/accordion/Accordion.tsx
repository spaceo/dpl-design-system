import React from "react";
import { useEffect } from "react";

type AccordionRow = {
  header: string;
  content: {
    title: string;
    href: string;
  }[];
};
type AccordionProps = {
  list: AccordionRow[];
};

export const Accordion = (props: AccordionProps) => {
  useEffect(() => {
    /* eslint @typescript-eslint/no-var-requires: "off" */
    require("./accordion");
  }, []);
  return (
    <ul className="accordion">
      {props.list.map((row) => (
        <li key={row.header} className="accordion--row">
          <h3 className="accordion--header text-header-h4">
            <button
              className="accordion--button px-48"
              aria-expanded="false"
              data-accordion-trigger
            >
              {row.header}
              <img
                className="accordion--arrow"
                src="icons/basic/icon-triangle.svg"
                alt=""
              />
            </button>
          </h3>
          <div hidden className="accordion--body pt-16 pb-32">
            {row.content.map((i) => (
              <a key={i.title} href={i.href}>
                {i.title}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
