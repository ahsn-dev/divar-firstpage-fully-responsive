import El from "../../library/El";

const Footer = () => {
  return El({
    element: "div",
    style: "direction: rtl",
    className:
      "h-14 z-10 flex justify-around items-center shadow-[0_-1px_2px_0px_rgba(0,0,0,0.12)] sticky bottom-0 bg-white lg:hidden",
    child: [
      El({
        element: "div",
        className:
          "flex flex-col items-center text-[#707070] gap-y-1 sm:flex-row sm:gap-2",
        child: [
          El({
            element: "ion-icon",
            className: "text-xl text-red-700",
            name: "text-outline",
          }),
          El({
            element: "span",
            className: "text-xs text-red-700",
            child: "آگهی‌ها",
          }),
        ],
      }),
      El({
        element: "div",
        className:
          "flex flex-col items-center text-[#707070] gap-y-1 sm:flex-row sm:gap-2",
        child: [
          El({
            element: "ion-icon",
            className: "text-xl",
            name: "list-outline",
          }),
          El({
            element: "span",
            className: "text-xs",
            child: "دسته‌ها",
          }),
        ],
      }),
      El({
        element: "div",
        className:
          "flex flex-col items-center text-[#707070] gap-y-1 sm:flex-row sm:gap-2",
        child: [
          El({
            element: "ion-icon",
            className: "text-2xl",
            name: "add-circle",
          }),
          El({
            element: "span",
            className: "text-xs",
            child: "ثبت آگهی",
          }),
        ],
      }),
      El({
        element: "div",
        className:
          "flex flex-col items-center text-[#707070] gap-y-1 sm:flex-row sm:gap-2",
        child: [
          El({
            element: "ion-icon",
            className: "text-xl",
            name: "chatbubble",
          }),
          El({
            element: "span",
            className: "text-xs",
            child: "چت",
          }),
        ],
      }),
      El({
        element: "div",
        className:
          "flex flex-col items-center text-[#707070] gap-y-1 sm:flex-row sm:gap-2",
        child: [
          El({
            element: "ion-icon",
            className: "text-xl",
            name: "person",
          }),
          El({
            element: "span",
            className: "text-xs",
            child: "دیوار من",
          }),
        ],
      }),
    ],
  });
};

export default Footer;
