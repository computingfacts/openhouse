import { Injectable } from "@angular/core";
import { Headers } from "@angular/http";
import { LocalStorageService, ELocalStorageKeys } from "../../local-storage/local-storage.service";
import { IUser } from "../../data-access/user/i-user";

export type THeaderKeyValues = { [name: string]: string };

@Injectable()
export class HeaderProviderService {

  private readonly defaultHeaderSet: THeaderKeyValues = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };

  constructor(private readonly localStore: LocalStorageService) { }

  public getRequestHeaders(additionalHeaderSet?: THeaderKeyValues): Headers {
    const headerSet = this.joinHeaders(
      this.defaultHeaderSet,
      additionalHeaderSet,
      this.getUserTokenHeader()
    );

    return this.createHeaderFromHeaderSet(headerSet);
  }

  private joinHeaders(...headerSets: THeaderKeyValues[]): THeaderKeyValues {

    return headerSets.reduce((finalHeaderSet, headerItem) => {
      if (headerItem == null) return finalHeaderSet;

      Object.keys(headerItem)
        .forEach(key => finalHeaderSet[key] = headerItem[key]);

      return finalHeaderSet;
    }, {});
  }

  private createHeaderFromHeaderSet(headerSet: THeaderKeyValues): Headers {
    const header = new Headers();
    Object.keys(headerSet).forEach(key => header.append(key, headerSet[key]));
    return header;
  }

  private getUserTokenHeader(): THeaderKeyValues {
    const user = this.localStore.getItem(ELocalStorageKeys.ActiveUser) as IUser;
    if (user == null) return {};

    const userToken = user.token;
    if (userToken == null || userToken === "") return {};

    return { Authorization: ['Bearer', userToken].join(' ') }
  }

}
