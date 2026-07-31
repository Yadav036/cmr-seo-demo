import { toast } from "@/hooks/use-toast";
import { clearCookies } from "../clearcookies";

export const asyncHandler = async (
  fn: () => Promise<any>,
  fnName?: string,
  showToast: boolean = true,
  setError?: (error: any) => void,
): Promise<any> => {
  try {
    return await fn();
  } catch (error) {
    return handleError(error, fnName, showToast, setError);
  }
};

const handleError = (
  error: any,
  fnName: string | undefined,
  showToast: boolean,
  setError?: (error: any) => void,
): any => {
  // Check if the error is due to a canceled request
  if (error?.name === "CanceledError") {
    return;
  }

  if (fnName) {
    return;
  } else {
    if (error?.response?.status === 401) {
      toast({
        variant: "destructive",
        title:
          error?.response?.data?.message ||
          error?.response?.data?.data?.message ||
          "Something went wrong",
      });
      setTimeout(() => {
        clearCookies();
      }, 3000);
    } else if (error?.response?.status === 402) {
      return {
        error: true,
        ...error?.response?.data,
      };
    } else if (error?.response?.status === 425) {
      setError && setError(true);
    } else if (error?.name === "AxiosError" && error?.code === "ECONNABORTED") {
      showToast &&
        toast({
          title: "Request timeout, please try again later.",
          variant: "destructive",
        });
    } else {
      showToast &&
        toast({
          variant: "destructive",
          title:
            error?.response?.data?.message ||
            error?.response?.data?.data?.message ||
            "Something went wrong",
        });

      return error;
    }
  }
};

// const handleSpecialFunctionErrors = (
//   error: any,
//   fnName: string,
//   showToast: boolean
// )=> {
//   if (
//     fnName === 'save-campaign' ||
//     fnName === 'save-schedule' ||
//     fnName === 'save-options'
//   ) {
//     if (error?.response?.status === 404 || error?.response?.status === 401) {
//       return {
//         error: true,
//         message: error?.response?.data?.message,
//       };
//     } else {
//       return handleError(error, null, showToast);
//     }
//   }
// };
