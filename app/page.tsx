import Map from "./components/Map";
import { getSexualAbuseNoticeHouseNumAddrListV2 } from "./api/map";
import { AddressItem } from "./types";
import SearchForm from "./components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ ctpvNm?: string; sggNm?: string; umdNm?: string }>;
}) {
  const { ctpvNm = "", sggNm = "", umdNm = "" } = await searchParams;

  const response = await getSexualAbuseNoticeHouseNumAddrListV2({
    ctpvNm,
    sggNm,
    umdNm,
  });
  const raw = response.response.body.items.item;
  const addrItems: AddressItem[] =
    typeof raw === "string" ? [] : Array.isArray(raw) ? raw : [raw];

  return (
    <div className="flex flex-col flex-1 w-full h-50">
      <SearchForm />
      <Map addrItems={addrItems} />
    </div>
  );
}
