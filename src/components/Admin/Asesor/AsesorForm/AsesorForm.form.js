import * as Yup from "yup";

export function initialValues(mag, email){
    return{
        cardcode:"",
        asesor: mag && mag.asesor ? mag.asesor : email,
        base:"",
        activos:"",
        especialidad:"",
        padecimiento:"",
        necesita_muestra:false,
        presentacion:"",
        actividad: "nueva"
    }
}

export function validationSchema(mag){
    return Yup.object({
        asesor: Yup.string().email(true).required(true),
        cardcode: Yup.string().required(true),
        base: Yup.string().required(true),
        activos: Yup.string().required(true),
        especialidad: Yup.string().required(true),
        padecimiento: Yup.string().required(true),
        necesita_muestra: Yup.bool(),
        presentacion: Yup.array().of(Yup.string()).nullable(),
        actividad: Yup.string().required(false).oneOf(["nueva"])
    })
}