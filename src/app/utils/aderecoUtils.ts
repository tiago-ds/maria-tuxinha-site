import { Adereco } from "../models/Pedido";

export function parseDriveLink(link: string): string {
  const REGEX: RegExp = new RegExp("^https:\/\/drive\.google\.com\/file\/d\/([^\/]+)\/.*$");
  const baseDriveUrl: string = "https://drive.google.com/uc?export=view&id=";

  return `${baseDriveUrl}${link.match(REGEX)?.[1]}`;
}

export function getSimpleBonecaValue(): number { return 150; }

export function getExtraAderecoValue(): number { return 30; }
export function getVestidoValue(): number { return 50; }
export function getSapatoValue(): number { return 20; }

export const mockedAderecos: Adereco[] = [
  {
      "type": "cabelo",
      "uuid": "3ad27277-3f53-467a-8b31-15e398f61e85",
      "pictureUrl": "https://drive.google.com/uc?export=view&id=1cb5vGI0AU6eclXD8QmI9TpbsFJoJDBhs",
      "name": "Cabelo Loiro",
      "isAvailable": true,
      "lastModified": "2022-09-03T03:05:04.294Z" as unknown as Date
  } as Adereco,
  {
      "lastModified": "2022-09-02T22:15:02.263Z" as unknown as Date,
      "type": "pele",
      "name": "Pele clara",
      "uuid": "57cf5f7b-e05a-403c-a7b7-8d5410e73194",
      "pictureUrl": "https://drive.google.com/uc?export=view&id=1QLw_XtzRiQ7rEpgEf1DMfta_QpivWnYO",
      "isAvailable": true
  } as Adereco,
  {
      "uuid": "b8446230-f529-42ca-b2d4-d456c43689fe",
      "pictureUrl": "https://drive.google.com/uc?export=view&id=11TFqPIDZFRvpSoNgEpyDM_WtPJfrOKF7",
      "name": "Vestido de bolinhas",
      "type": "vestido",
      "isAvailable": true,
      "lastModified": "2022-09-03T03:06:53.428Z" as unknown as Date
  } as Adereco,
  {
      "lastModified": "2022-09-03T03:07:52.986Z" as unknown as Date,
      "isAvailable": true,
      "pictureUrl": "https://drive.google.com/uc?export=view&id=1PMVtpuO7W2UHe3H9_pqWQbxA6hhqC7LQ",
      "type": "sapato",
      "name": "Sapato Social",
      "uuid": "f8ad8210-2c6e-4a99-840c-5fd112320f93"
  } as Adereco
];
