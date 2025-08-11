import { X } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbSeparator,
  BreadcrumbItem,
  BreadcrumbList,
} from "../ui/breadcrumb";
import React from "react";

interface ModalTitleProps {
  breadcrumb: string[];
  closeModal: () => void;
}

const ModalTitle = ({ breadcrumb, closeModal }: ModalTitleProps) => {
  return (
    <>
      <Breadcrumb className="text-sm font-normal flex items-center gap-1">
        <BreadcrumbList>
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>{item}</BreadcrumbItem>
              {index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div
        className="absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer"
        onClick={closeModal}
      >
        <X className="size-4 text-default" />
      </div>
    </>
  );
};

export default ModalTitle;
