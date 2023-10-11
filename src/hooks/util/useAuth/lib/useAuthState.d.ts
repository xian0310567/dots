export type AuthStateCallback = {
  type: UserType;
  setType: React.Dispatch<React.SetStateAction<UserType>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
};

export type UserType = 'anonymous' | 'apple' | 'google' | 'kakao';
