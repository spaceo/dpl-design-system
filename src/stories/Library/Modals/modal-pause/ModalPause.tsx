import React from "react";

import { Button } from "../../Buttons/button/Button";
import { Links } from "../../links/Links";
import Modal from "../Modal";

export type ModalPauseProps = {
  showModal: boolean;
  title: string;
  subtitle: string;
  textWithLink: string;
  linkText: string;
};

export const ModalPause: React.FC<ModalPauseProps> = ({
  showModal,
  title,
  subtitle,
  textWithLink,
  linkText,
}) => (
  <Modal shownModal={showModal} classNames="modal-padding modal-pause">
    <div className="modal-pause__container">
      <h3 className="text-header-h3">{title}</h3>
      <div className="mt-48 color-secondary-gray">
        <p className="text-body-medium-regular">{subtitle}</p>
      </div>

      <div className="modal-pause__dropdowns mt-24">
        <div className="datepickers">
          <div className="datepicker">
            <label htmlFor="startDate" className="text-body-medium-regular">
              Startdato
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              className="datepicker-input"
              aria-label="startDate"
            />
          </div>

          <div className="datepicker">
            <label htmlFor="startDate" className="text-body-medium-regular">
              Slutdato
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              className="datepicker-input"
              aria-label="endDate"
            />
          </div>
        </div>
      </div>

      <div className="modal-pause__text-link mt-24 color-secondary-gray">
        <p className="text-body-small-regular">
          {textWithLink} <Links href="/" linkText={linkText} />
        </p>
      </div>
      <div className="modal-pause__button mt-48">
        <Button
          buttonType="default"
          size="large"
          variant="filled"
          label="gem"
          disabled={false}
          collapsible
        />
      </div>
    </div>
  </Modal>
);
