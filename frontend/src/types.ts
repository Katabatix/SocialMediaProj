export type Test = {
  id: number;
};

export type UserContext = {
  user: User;
  update: (user: User) => void;
};

export type User = {
  username: string;
  password: string;
};

export type UserInfo = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  status?: string;
};
