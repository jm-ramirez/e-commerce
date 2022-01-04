import React from 'react'
import { View, Text } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formStyle } from "../../styles";

export default function RegisterForm(props) {
    const { changeForm } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log("Registro de usuario enviado");
            console.log(formData);
        }
    })

    return (
        <View>
            <TextInput
             label="Email"
             style= {formStyle.input} 
             onChangeText={(text) => formik.setFieldValue("email", text)}
             value={formik.values.email}
             error={formik.errors.email}
            />
            <TextInput
             label="Nombre de usuario" 
             style= {formStyle.input} 
             onChangeText={(text) => formik.setFieldValue("username", text)}
             value={formik.values.username}
             error={formik.errors.username}
            />
            <TextInput
             label="Contraseña" 
             style= {formStyle.input} 
             secureTextEntry 
             onChangeText={(text) => formik.setFieldValue("password", text)}
             value={formik.values.password}
             error={formik.errors.password}
            />
            <TextInput
             label="Repetir contraseña" 
             style= {formStyle.input}
             secureTextEntry 
             onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
             value={formik.values.repeatPassword}
             error={formik.errors.repeatPassword}
            />
            <Button
             mode='contained' 
             style={formStyle.btnSuccess} 
             onPress={formik.handleSubmit}
            >
                Registrarse
            </Button>
            <Button 
             mode='text' 
             style={formStyle.btnText} 
             labelStyle={formStyle.btnTextLabel}
             onPress={changeForm}
            >
                Iniciar Sesión
            </Button>
        </View>
    )
}

function initialValues(){
    return {
        email: "",
        username: "",
        password: "",
        repeatPassword: ""
    }
}

function validationSchema(){
    return {
        email: Yup.string()
         .email(true)
         .required(true),
        username: Yup.string()
         .required(true),
        password: Yup.string()
         .required(true),
        repeatPassword: Yup.string()
         .required(true)
         .oneOf([Yup.ref("password")], true),
    }
}