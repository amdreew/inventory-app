export interface Contact {
  id: number | undefined;
  name: string;
  lastName: string;
  birth: Date;
  foto: string | undefined;
  civilStatus: string;
  hasBrothers: boolean;
}
