import { createContext } from 'react';
import { create } from 'domain';

interface AuthContextData {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
