export type AccountData = {
  user: { name: string };
};

export type GenerateAccountData = (name: string) => AccountData;

const generateAccountData: GenerateAccountData = (name) => ({
  user: { name },
});

export default generateAccountData;
