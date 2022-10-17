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
