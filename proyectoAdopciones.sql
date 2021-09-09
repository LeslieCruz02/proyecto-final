create schema ProyectoAdopciones;
use ProyectoAdopciones;

create table usuarios(
usuario char(100) primary key not null,
nombres char(100),
apellidos char(100),
correo varchar(256),
telefono int(13),
password varchar(256)
);

Alter table usuarios modify
telefono int(30);

create table mascotas(
 nombre char (100) primary key not null,
 tipoDeMascota char(100),
 raza char (30),
 fundacion char (100),
 edad int (2),
 idestado tinyint (1),
 descripcion varchar (1000),
 fotos blob 	
);

create table contactenos(
nombreC char (100),
correo char (255),
telefono int (12),
nombreO char (255),
asunto char (255),
mensaje varchar (1000)
);

create table estadoAdopciones(
estado tinyint (1) primary key not null,
idmascota char (100),
idusuario char (100)
);
alter table estadoAdopciones add foreign key FK_idmascota_adopciones (idmascota)
references mascotas (nombre),
add foreign key FK_idusuario_adopciones (idusuario)
references usuarios (usuario);

alter table mascotas add foreign key FK_estado_mascotas (idestado)
  references estadoAdopciones(estado);