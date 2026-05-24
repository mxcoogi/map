import { AddressApiResponse } from "../types";
import "server-only";

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const fetchAddressList = async ({
  pageNo,
  numOfRows,
  type,
  ctpvNm,
  sggNm,
  umdNm,
}: {
  pageNo: number;
  numOfRows: number;
  type: string;
  ctpvNm: string;
  sggNm: string;
  umdNm: string;
}): Promise<AddressApiResponse> => {
  const params = new URLSearchParams({
    serviceKey: API_KEY ?? "",
    pageNo: String(pageNo),
    numOfRows: String(numOfRows),
    type,
    ctpvNm,
    sggNm,
    umdNm,
  });

  const res = await fetch(`${BASE_URL}?${params}`);
  return res.json();
};

export const getSexualAbuseNoticeHouseNumAddrListV2 = async ({
  type = "json",
  ctpvNm,
  sggNm,
  umdNm,
}: {
  type?: string;
  ctpvNm: string;
  sggNm: string;
  umdNm: string;
}): Promise<AddressApiResponse> => {
  const first = await fetchAddressList({ pageNo: 1, numOfRows: 1, type, ctpvNm, sggNm, umdNm });
  const totalCount = first.response.body.totalCount;

  if (totalCount <= 1) return first;

  return fetchAddressList({ pageNo: 1, numOfRows: totalCount, type, ctpvNm, sggNm, umdNm });
};
