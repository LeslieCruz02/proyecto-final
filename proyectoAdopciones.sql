create schema ProyectoAdopciones;
use ProyectoAdopciones;

create table usuarios(
idusuario int(4) primary key auto_increment not null ,
usuario char(100)  not null,
nombres char(100),
apellidos char(100),
telefono varchar(100),
correo varchar(256),
password varchar(256)
);


create table mascotas(
 idmascota int(4) primary key auto_increment not null ,
 nombre char (100) not null,
 tipoDeMascota char(100),
 raza char (30),
 edad char (20),
 responsable char (100),
 idestado tinyint (2),
 descripcion varchar (1000),
 fotos varchar(256)	
);

create table contactenos(
nombreC char (100),
correo char (255),
telefono int (12),
nombreO char (255),
asunto char (255),
mensaje varchar (1000)
);

create table adopciones(
idAdopcion int (4) primary key auto_increment,
mascota int (4),
adoptante int (4),
nombre char(100),
email varchar(256),
tipodoc char (20),
documento int (20),
observaciones varchar(600)
);
alter table adopciones add foreign key FK_mascota_adopciones (mascota)
references mascotas (idmascota),
add foreign key FK_adoptante_adopciones (adoptante)
references usuarios (idusuario);