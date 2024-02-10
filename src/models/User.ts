export interface CommonUser {
  id?: string;
  email?: string;
}

export interface Patient extends CommonUser {
  type: "patients";
  age?: number;
  gender?: "Masculino" | "Feminino" | "Outro";
  address?: string;
  username?: string;
}

export interface Doctor extends CommonUser {
  type: "doctors";
  licenseInfo?: string;
  specialization?: string;
  contact?: string;
  username?: string;
}

export interface Family extends CommonUser {
  type: "family_members";
  relationship?: string;
  contact?: string;
  username?: string;
}

export type User = Patient | Doctor | Family;
