import React, { useState, useEffect, useMemo } from "react";
import { Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AuthScreen from "./src/screens/Auth";
import AuthContext from "./src/context/AuthContext";
import { setTokenApi } from "./src/api/token";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    setAuth(null);
  }, []);

  const login = (user) => {
    setTokenApi(user.jwt);
    setAuth({
      token: user.jwt,
      idUser: user.user._id
    });
  }

   // El useMemo lo que hace es escuchar en este caso a 'auth' 
   // y en caso que se modifique el valor, lo actualiza, de lo contrario no hace nada.
  const authData = useMemo(
    () => ({
      auth,
      login,
      logout: () => null,
    }),
    [auth]
  )

  if(auth === undefined) return null;
  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        {auth ? <Text style={{ flex: 1, justifyContent: "center", textAlign: "center" }}>Zona de Usuarios</Text> : <AuthScreen />}
      </PaperProvider>
    </AuthContext.Provider>
    
  );
}
