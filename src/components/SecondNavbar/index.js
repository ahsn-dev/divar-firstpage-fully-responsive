import El from "../../library/El";

const SecondNavbar = () => {
  return El({
    element: "div",
    style: "direction: rtl",
    className:
      "sticky top-[70px] z-10 bg-white border-t-2 border-b-2 border-solid border-slate-200 sticky shadow-sm overflow-scroll scrollbar-hide lg:hidden",
    child: El({
      element: "div",
      className: "flex gap-2 justify-around items-center p-2 px-4 w-max",
      child: [
        El({
          element: "button",
          child: [
            El({
              element: "ion-icon",
              name: "options-outline",
            }),
            "فیلترها",
          ],
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
        El({
          element: "button",
          child: [
            El({
              element: "ion-icon",
              name: "list-outline",
            }),
            "دسته‌ها",
          ],
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
        El({
          element: "a",
          child: "خودرو سواری",
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
        El({
          element: "a",
          child: "فروش آپارتمان",
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
        El({
          element: "a",
          child: "اجاره آپارتمان",
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
        El({
          element: "a",
          child: "موبایل",
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
        El({
          element: "a",
          child: "صندلی و نیمکت",
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
        El({
          element: "a",
          child: "حیوانات",
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
        El({
          element: "a",
          child: "وسایل شخصی",
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
        El({
          element: "a",
          child: "خدمات",
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
        El({
          element: "a",
          child: "استخدام",
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
        El({
          element: "a",
          child: "تلویزیون",
          className:
            "flex items-center text-gray-500 gap-1 rounded-full border-slate-300 border border-solid px-2 py-1",
        }),
      ],
    }),
  });
};
export default SecondNavbar;
