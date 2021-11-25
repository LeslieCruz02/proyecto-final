export interface Usuarios {
    idusuario: number,
	usuario: string,
	nombres: string,
	apellidos: string,
	telefono: string,
	correo: string,
	password: string,
	estadoCuenta: string,
	foto: string
}

export interface Mascotas {
    idmascota: number,	
	nombre: string,	
	tipoDeMascota: string,
	raza: string,	
	edad: string,	
	responsable: string,
	idestado: number,	
	descripcion: string,
	fotos: string	
}

export interface Solicitudes{
    nombreC: string,
	correo: string,
	telefono: string,
	nombreO: string,
	asunto: string,
	mensaje: string,
	date: string
}

export interface Publicidades{
	idPublicidad: number,
	usuario: string,
	titulo: string,
	descripcion: string,
	imagenes: string
}

export interface Adopciones{
    idAdopcion: number,
	mascota: number,
	adoptante: number,
	nombre: string,
	email: string,
	tipodoc: string,
	documento: string,
	observaciones: string
}

export interface Admon{
    idadmin: number,
	usuario: string,
	nombres: string,
	apellidos: string,
	rol: string,
	telefono: string,
	correo: string,
	password: string,
	estadoCuenta: string,
	foto: string
}
