import * as Yup from "yup";

export function initialValues(mag){
    return{
        cardcode:"",
        asesor:"",
        base:"",
        activos:"",
        especialidad:"",
        padecimiento:"",
        necesita_muestra:"",
        existe:"",
        base_ex:"",
        clave_ex:"",
        presentacion:"",
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
        necesita_muestra: Yup.string().required(true),
        existe: Yup.string().required(true),
        base_ex:Yup.string().required(false),
        clave_ex:Yup.string().required(false),
        presentacion: Yup.string().required(true),

    })
}