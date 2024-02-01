export type CommonUser = {
  id?: string;
  email?: string;
};

type Patient = CommonUser & {
  type: "patients";
  birthDate?: Date;
  gender?: "male" | "female" | "other";
  address?: string;
  username?: string;
};

type Doctor = CommonUser & {
  type: "doctors";
  licenseInfo?: string;
  specialization?: string;
  contact?: string;
  username?: string;
};

type Family = CommonUser & {
  type: "family_members";
  relationship?: string;
  contact?: string;
  username?: string;
};

export function createCommonUser(
  id: string | undefined,
  email: string | undefined
): CommonUser {
  return {
    id: id,
    email: email,
  };
}

export type User = Patient | Doctor | Family;
