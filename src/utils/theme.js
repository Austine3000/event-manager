import AppColor from "./AppColor";

export const AppTheme = {
  input: {
    borderColor: AppColor.panelsOne,
    placeholderColor: AppColor.icons,
    borderError: AppColor.errorBackground,
    textError: AppColor.errorBackground,
  },
  error: AppColor.errorBackground,
  button: {
    borderColor: AppColor.primaryColor,
    bgColor: AppColor.primaryColor,
    color: AppColor.whiteBgAndText,
  },
  ...AppColor,
};
