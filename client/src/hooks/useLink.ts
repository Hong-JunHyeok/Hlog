import { useRouter } from "next/router";
import { useCallback } from "react";

export const useLink = (url: string) => {
  const router = useRouter();

  const handlePushLink = useCallback(() => {
    router.push(url);
  }, []);

  return { handlePushLink };
};
