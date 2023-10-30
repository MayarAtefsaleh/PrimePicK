export interface Iuser {
  FullName: string;
  Email: string;
  Location: string;
  Phone: string[];
  Password: string;
  Agreetermscheck: any;
  EmailAboutMe: any;
  ConfirmPassword: string;
}

export interface Ilogin {
  Email: string;
  Password: string;
}
