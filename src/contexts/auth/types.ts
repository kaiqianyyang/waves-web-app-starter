import { IMe } from '../../types';

export interface IAuthContext {
  user: IMe | null;
  setUser: React.Dispatch<React.SetStateAction<IMe | null>>;
  logout: React.Dispatch<React.SetStateAction<IMe | null>>;
}
