import { LoginKeys } from "./Login.keys";

export interface Credential{
    [LoginKeys.USER_NAME]: string;
    [LoginKeys.PASSWORD]: string;

}