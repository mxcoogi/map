// types/index.ts

export interface AddressApiResponse {
  response: {
    header: ApiResponseHeader;
    body: ApiResponseBody;
  };
}

export interface ApiResponseHeader {
  resultCode: string;
  resultMsg: string;
}

export interface ApiResponseBody {
  items: {
    item: AddressItem | AddressItem[] | string;
  };
  resultType: string;
  numOfRows: number;
  totalCount: number;
  pageNo: number;
}

export interface AddressItem {
  dataCrtYmd: string;
  stdgCd: string;
  mtnYn: '0' | '1' | string;
  mno: number;
  sno: number;
  stdgCtpvSggCd: string;
  stdgEmdCd: string;
  roadNmNo: string;
  udgdYn: '0' | '1' | string;
  bmno: number;
  bsno: number;
  ctpvNm: string;
  sggNm: string;
  umdNm: string;
  stliNm: string | null;
  rprsLotnoYn: string;
}
