import {LoginKeys} from "./Login.keys";

export interface Creadential {
  [LoginKeys.USER_NAME]: string;
  [LoginKeys.PASSWORD]: string;
}
