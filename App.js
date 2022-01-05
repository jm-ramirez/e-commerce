import React, { useState, useEffect, useMemo } from "react";
import { View, Text, Button } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import jwtDecode from "jwt-decode";
import AuthScreen from "./src/screens/Auth";
import AuthContext from "./src/context/AuthContext";
import AppNavigation from "./src/navigation/AppNavigation";
import { setTokenApi, getTokenApi, removeTokenApi } from "./src/api/token";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    (async () => {
      const token = await getTokenApi();
      if(token){
        setAuth({
          token,
          idUser: jwtDecode(token).id
        });
      }else{
        setAuth(null);
      }
    })()
  }, []);

  const login = (user) => {
    setTokenApi(user.jwt);
    setAuth({
      token: user.jwt,
      idUser: user.user._id
    });
  };

  const logout = () => {
    if(auth){
      removeTokenApi();
      setAuth(null);
    }
  };

   // El useMemo lo que hace es escuchar en este caso a 'auth' 
   // y en caso que se modifique el valor, lo actualiza, de lo contrario no hace nada.
  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  )

  if(auth === undefined) return null;
  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        {auth ? (
          <AppNavigation/>
        ) : (
          <AuthScreen />
        )}
      </PaperProvider>
    </AuthContext.Provider>
    
  );
}
