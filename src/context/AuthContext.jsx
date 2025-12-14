import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  /* =====================
     SESSÃO DO USUÁRIO
  ====================== */

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

  const getFavoritesKey = (email) => `favorites_${email}`;

  const getFavorites = () => {
    if (!user) return [];
    return (
      JSON.parse(localStorage.getItem(getFavoritesKey(user.email))) || []
    );
  };

  const toggleFavorite = (movie) => {
    if (!user) return;

    const key = getFavoritesKey(user.email);
    const favorites = getFavorites();

    const exists = favorites.find((fav) => fav.id === movie.id);

    let updatedFavorites;

    if (exists) {
      updatedFavorites = favorites.filter(
        (fav) => fav.id !== movie.id
      );
    } else {
      updatedFavorites = [
        ...favorites,
        {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
        },
      ];
    }

    localStorage.setItem(key, JSON.stringify(updatedFavorites));
  };

  const isFavorite = (movieId) => {
    if (!user) return false;
    return getFavorites().some((fav) => fav.id === movieId);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        getFavorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;