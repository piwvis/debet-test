export type Player = {
  _id: string;
  telegramId: string;
  telegramUsername: string;
  telegramFirstName: string;
  telegramLastName: string;
  steamId: string;
  steamUsername: string;
  balance: number;
  totalBets: number;
  wins: number;
  losses: number;
  createdAt: Date;
  updatedAt: Date;
  isOnline: boolean;
};
