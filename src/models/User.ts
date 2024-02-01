export type CommonUser = {
  id?: string;
  email?: string;
};

type Patient = CommonUser & {
  type: "patient";
  birthDate: Date;
  gender: "male" | "female" | "other";
  address: string;
};

type Doctor = CommonUser & {
  type: "doctor";
  licenseInfo: string;
  specialization: string;
  contact: string;
};

type Family = CommonUser & {
  type: "family";
  relationship: string;
  contact: string;
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
