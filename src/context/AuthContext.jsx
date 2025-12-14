import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const register = (email, password) => {
    const users = getUsers();

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      throw new Error("Usuário já cadastrado");
    }

    const newUser = { email, password };
    users.push(newUser);
    saveUsers(users);

    setUser({ email });
    localStorage.setItem("user", JSON.stringify({ email }));
  };

  const login = (email, password) => {
    const users = getUsers();

    const validUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!validUser) {
      throw new Error("Email ou senha inválidos");
    }

    setUser({ email });
    localStorage.setItem("user", JSON.stringify({ email }));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;