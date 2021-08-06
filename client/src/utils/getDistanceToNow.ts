import ko from "date-fns/locale/ko";
import distanceInWordsToNow from "date-fns/formatDistanceToNow";

export default function getDistanceToNow(time: string) {
  return distanceInWordsToNow(new Date(time), {
    locale: ko,
    addSuffix: true,
  });
}
