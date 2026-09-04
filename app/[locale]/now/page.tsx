import { getNowEntries } from "@/lib/content";
import { NowPageContent } from "@/components/NowPageContent";

export default function NowPage() {
  const entries = getNowEntries();
  return <NowPageContent entries={entries} />;
}
