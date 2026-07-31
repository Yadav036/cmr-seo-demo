import { postData } from "../services";
import { toast } from "@/hooks/use-toast";

export async function handleStoreWebsiteForSEO(
  domain: string,
  setInput: (value: string) => void,
  setLoading: (loading: boolean) => void,
  setData: (data: any) => void,
) {
  try {
    setLoading(true);
    const response = await postData("/seo/websites", { website: domain });
    if (response?.status === 201) {
      setLoading(false);
      setData(response?.data);
      setInput("");
      toast({
        title: response?.data?.message || "Website stored successfully!",
      });
    }
  } catch (error: any) {
    console.error("Error storing website for SEO:", error);
    toast({
      title:
        error?.response?.data?.message ||
        error?.response?.data?.data?.message ||
        "Failed to store website. Please try again.",
      variant: "destructive",
    });
  } finally {
    setLoading(false);
  }
}
