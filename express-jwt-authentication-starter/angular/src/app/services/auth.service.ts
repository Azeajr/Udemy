import { Injectable } from "@angular/core";
import * as moment from "moment";

@Injectable()
export class AuthService {
  constructor() {}

  // {
  //   "success": true,
  //   "user": {
  //     "_id": "62fe4dd3210fd2b15392c0ba",
  //     "username": "tonyjwt",
  //     "hash": "bd8e4a17b4ef77537b8b31c15abf5b34378526abec45f9469a3b0f5e4d0ae2ff06fb6ad960cdff14de842f8414a4106c36bdc892feee2e5ad9331f404464b4f1",
  //     "salt": "8f95717cc834d59ea03a9193636edcc8275e9dd6d9a6744afff52b3ab1eda584",
  //     "__v": 0
  //   },
  //   "token": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmZlNGRkMzIxMGZkMmIxNTM5MmMwYmEiLCJpYXQiOjE2NjA4NzgwODYyOTEsImV4cCI6MTY2MDg3ODE3MjY5MX0.ZXr24VAe4IOkWZUZwip2TOv7Z_CmK2aqvUdLZvqFKrV4Wl7oxkC_Jwkn15uOABWI2Mr799vjFHJtIG52Rdc-q81b-GIKYbqt5ckS-mdE6xhqIJbUBSP0grNTBS8vFrWyF6Oe9c7k6G1vQ9xChupn8k8EH-jhq14Mm2EN1CbYifdtB0xKqT375fES_2XWUcfH3GsTREUWTLUz4tEeEaRl0qLOE8EZRdOuIi5lwi45xc5eref5YOxsL-rpIWYME1hj-bqaWf8F6BHaMxz--HgHOyj5Kre-heKlUTHavTcRPBWUo85lSFAcKCgUhNejxSUV_lC3FxccZXxDMnzjkn-tb96C60pxchBdw5b5Uv_p4ae4I97iYchVIkNwGAXQUVPDICiW_GCyAdxVcLIBCuR58-KuZpBrBh19S5cd0pXhbGSovSffAlBdkowESjyJyKPkAtFe5Vyb4QPtpAse3ymERwDKiMcQ1h8duKTVa2cVOHueo9ZKSDqSQkfpocpbNC55IZfw7qIMfj-wQAIBeAOgqUCs8gPzX4e_vzCmL1DGCTAVm6QaqMKuLe4TV8UlfF8sZ2aPaYpaDTE5g1FJBpcNVz7BuonLhHFidOuAMkcZB1sCWOczKQ64iwwvv2ptjVS6O8J_Js75UIBfpxaIXySWr0vjGeaSGyZh4X-bjcbacJw",
  //   "expiresIn": "1d"
  // }

  setLocalStorage(responseObj) {
    const expires = moment().add(responseObj.expiresIn);

    localStorage.setItem('token', responseObj.token);
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()));

  };


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);

  }
}
