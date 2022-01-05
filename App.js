import React, { useState, useEffect, useMemo } from "react";
import { Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AuthScreen from "./src/screens/Auth";
import AuthContext from "./src/context/AuthContext";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    setAuth(null);
  }, [])

   // El useMemo lo que hace es escuchar en este caso a 'auth' 
   // y en caso que se modifique el valor, lo actualiza, de lo contrario no hace nada.
  const authData = useMemo(
    () => ({
      auth,
      login: () => null,
      logout: () => null,
    }),
    [auth]
  )

  if(auth === undefined) return null;
  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        {auth ? <Text>Zona de Usuarios</Text> : <AuthScreen />}
      </PaperProvider>
    </AuthContext.Provider>
    
  );
}
