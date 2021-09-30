import {Action} from "../enums/Action";

export interface Params<T> {
  action: Action;
  data: T;
}
