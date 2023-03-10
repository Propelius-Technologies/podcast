import { FormEvent } from "react";

interface ButtonInterface {
  loading: boolean;
  onClickHandler: () => FormEvent<HTMLInputElement>;
}

const CustomButton: React.FC<ButtonInterface> = ({
  loading,
  onClickHandler,
}) => {
  return (
    <>
      <button
        className=" hero_submit-btn-mobile  md:hero_submit-btn hover:bg-pod-green-light md:absolute  md:top-0 md:right-0  xl:py-[8px]  "
        type={"button"}
        onClick={() => onClickHandler()}
      >
        <p className="text-center w-full font-normal font-chivo text-[14px]">
          Request Access
        </p>
      </button>
    </>
  );
};

export default CustomButton;
