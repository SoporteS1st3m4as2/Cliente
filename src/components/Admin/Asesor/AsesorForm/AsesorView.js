import React from 'react'
import { Container } from 'semantic-ui-react';


export function AsesorView(props) {
  const {mag} = props;
  const dxp = mag._id.substring(24,18);

  return (
    <div className='cotizacion-principal'>
      <Container className='cotizacion-principal_info'>
        <p>Cotización: <span className='cotizacion-principal_info-dxp'># {dxp}</span></p> 
        <p>Cliente: <span className='cotizacion-principal_info-cliente'>{mag.cardcode}</span></p>
        <p>Especialidad: <span className='cotizacion-principal_info-especialidad'>{mag.especialidad}</span></p>
        <p>Base: <span className='cotizacion-principal_info-base'>{mag.base}</span></p>
        <p>Activos: <span className='cotizacion-principal_info-activos'>{mag.activos}</span></p>
        <p>Padecimiento: <span className='cotizacion-principal_info-padecimiento'>{mag.padecimiento}</span></p>
        <p>Necesita Muestra: <span className='cotizacion-principal_info-muestra'>{mag.necesita_muestra ? 'Sí' : 'No'}</span></p>
        <p>Presentaciones: <span className='cotizacion-principal_info-presentacion'>{mag.presentacion}</span></p>
        <p>Satus Inves. y Desarollo: <span className='cotizacion-principal_info-sIyD'>{mag.sIyD? 'Finalizado' : 'Pendiente'}</span></p>
        <p>Satus Operaciones: <span className='cotizacion-principal_info-sOp'>{mag.sOp? 'Finalizado' : 'Pendiente'}</span></p>
        <p>Satus Gestión Comercial: <span className='cotizacion-principal_info-sCom'>{mag.sCom? 'Finalizado' : 'Pendiente'}</span></p>
        </Container>
    </div>
    
  )
}
