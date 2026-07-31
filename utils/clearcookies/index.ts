import Cookies from "js-cookie";
import { PATH } from "../constants/others/paths";

export const clearCookies = (path?: string, shouldRedirect: boolean = true) => {
  const cookies = Cookies.get();
  for (const cookie in cookies) {
    if (Object.prototype.hasOwnProperty.call(cookies, cookie)) {
      Cookies.remove(cookie);
    }
  }
  // Gleap is browser-only - load lazily so it never runs during SSR
  if (typeof window !== "undefined") {
    import("gleap")
      .then(({ default: Gleap }) => Gleap.clearIdentity())
      .catch(() => {});
  }
  if (shouldRedirect && typeof window !== "undefined") {
    window.location.href = path || PATH.SIGNIN;
  }
};
