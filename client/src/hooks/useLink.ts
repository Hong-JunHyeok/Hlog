import { useRouter } from "next/router";

export const useLink = (url: string) => {
  const router = useRouter();

  const handlePushLink = () => {
    router.push(url);
  };

  return { handlePushLink };
};
