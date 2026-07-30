import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
// import { COOKIES } from "../constants/cookies";
import { asyncHandler } from "./asyncHandler";

const checkStatus = (status: number): boolean => status >= 200 && status < 300;
// const apiVersion = '/api/v1';

// export const baseUrl =
//   process.env.NEXT_PUBLIC_ENVIRONMENT === 'local'
//     ? process.env.NEXT_PUBLIC_BASE_URL
//     : apiVersion;

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const client = axios.create({
  baseURL: baseUrl,
  // withCredentials: true,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    "X-Frame-Options": "SAMEORIGIN",
    "ngrok-skip-browser-warning": "true",
  },
  validateStatus: checkStatus,
  timeout: 60000,
});

// client.interceptors.request.use((config) => {
//   // let accessToken = `bearer ${Cookies.get(COOKIES.AUTH_TOKEN)}`;
//   // if (accessToken) {
//   //   config.headers["Authorization"] = accessToken;
//   // }
//   return Promise.resolve(config);
// });

export const getData = async (
  endpoint: string,
  config: AxiosRequestConfig = {},
  showToast?: boolean,
  setError?: (error: any) => void,
): Promise<any> => {
  return await asyncHandler(
    async () =>
      await client.get(endpoint, {
        headers: {
          Accept: "application/json",
        },
        ...config,
      }),
    undefined,
    showToast,
    setError,
  );
};

export const postData = async (
  endpoint: string,
  payload: any,
  config: AxiosRequestConfig = {},
  fnName?: string,
  showToast?: boolean,
  setError?: (error: any) => void,
): Promise<any> => {
  return await asyncHandler(
    async () => await client.post(endpoint, payload, config),
    fnName,
    showToast,
    setError,
  );
};

export const patchData = async (
  endpoint: string,
  payload: any,
  fnName?: string,
  showToast?: boolean,
  config: AxiosRequestConfig = {},
  setError?: (error: any) => void,
): Promise<any> => {
  return await asyncHandler(
    async () => await client.patch(endpoint, payload, config),
    fnName,
    showToast,
    setError,
  );
};

export const putData = async (
  endpoint: string,
  payload: any,
  fnName?: string,
  showToast?: boolean,
  setError?: (error: any) => void,
): Promise<any> => {
  return await asyncHandler(
    async () => await client.put(endpoint, payload),
    fnName,
    showToast,
    setError,
  );
};

export const deleteData = async (
  endpoint: string,
  payload?: any,
  fnName?: string,
  showToast?: boolean,
  setError?: (error: any) => void,
): Promise<any> => {
  return await asyncHandler(
    async () =>
      await client.delete(endpoint, {
        data: {
          ...payload,
        },
      }),
    fnName,
    showToast,
    setError,
  );
};

// Function to fetch with default headers and error handling

export async function customFetch(url: string, options: any = {}) {
  const accessToken = Cookies.get("authToken"); // Ensure the correct key is used to retrieve the auth token
  const defaultHeaders = {
    Accept: "application/json", // Explicitly expect JSON responses
    "Content-Type": "application/json ; charset=utf-8",
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }), // Correct capitalization for "Bearer"
  };

  const finalOptions = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    credentials: "include", // Send cookies with the request
    cache: "no-store", // Prevent Next.js fetch cache - critical for middleware to use fresh token per request
  };

  try {
    const response = await fetch(`${baseUrl}${url}`, finalOptions);
    if (!response.ok) {
      console.error("HTTP error! status:", response?.status);
      // throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (!response.headers.get("content-type")?.includes("application/json")) {
      console.log("Expected JSON but received a different content type.");
      // throw new Error('Expected JSON but received a different content type.');
    }
    return await response.json(); // Only parse as JSON if the response is appropriate
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw error;
  }
}
