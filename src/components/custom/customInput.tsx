// import { useFormContext } from 'react-hook-form';
import { Input } from "../ui/input";
import React from "react";
// import { useField } from 'formik';

interface IProps {
  name: string;
  placeholder?: string;
  value?: any;
  label?: string;
  labelbtn?: any;
  type?: React.HTMLInputTypeAttribute;
  hasFrontIcon?: boolean;
  hasBackIcon?: boolean;
  icon?: React.ReactNode;
  iconback?: React.ReactNode;
  setValue: (name: string, value: string) => void;
  otherVaule?: any;
  errors?: any;
  touched?: any;
}

export default function FormInput({
  name,
  placeholder,
  labelbtn,
  value,
  label,
  type,
  hasFrontIcon,
  hasBackIcon,
  icon,
  iconback,
  setValue,
  otherVaule,
  errors,
  touched,
}: IProps) {
  const changeHandler = (item: string) => {
    setValue(name, item);
  };

  return (
    <div className=" w-full flex gap-2 flex-col ">
      <div className=" w-full flex justify-between items-center ">
        <p className=" font-medium text-sm ">{label}</p>
        {labelbtn && <>{labelbtn}</>}
      </div>
      <div className=" flex flex-col gap-1 ">
        <div className=" relative h-[38px] ">
          {hasFrontIcon && (
            <div className=" w-[38pxd] flex h-[38px] absolute top-0 left-0 justify-center items-center px-2 ">
              {icon}
            </div>
          )}
          {hasBackIcon && (
            <div className=" w-fit flex h-[38px] absolute top-0 right-0 justify-center items-center px-2 ">
              {iconback}
            </div>
          )}

          {touched ? (
            <Input
              type={type ?? "text"}
              value={
                otherVaule
                  ? otherVaule
                  : value
                  ? value[name] + "" === "0" || value[name] + "" === null
                    ? ""
                    : value[name]
                  : ""
              }
              onChange={(e) => changeHandler(e.target.value)}
              className={`  w-full h-[38px] px-4 bg-[#F5F5F5CC] border rounded-md border-[#EAEBED] ${
                hasFrontIcon ? " pl-12 " : ""
              } `}
              placeholder={placeholder}
            />
          ) : (
            <Input
              type={type ?? "text"}
              value={otherVaule ? otherVaule : ""}
              onChange={(e) => changeHandler(e.target.value)}
              className={`  w-full h-[38px] px-4 bg-[#F5F5F5CC] border rounded-md border-[#EAEBED] ${
                hasFrontIcon ? " pl-12 " : ""
              } `}
              placeholder={placeholder}
            />
          )}
        </div>
        {touched && (
          <>
            {touched[name] && errors[name] && (
              <div className=" text-xs ml-2 text-red-600 font-OpenRunde-Medium ">
                {errors[name]}
              </div>
            )}
          </>
        )}
        {/* {errors[name] && <p className=' text-sm text-error600 font-OpenRunde-Medium ' >{errors[name]?.message as string}</p>} */}
      </div>
    </div>
  );
}
