-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: ProyectoAdopciones
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admon`
--

DROP TABLE IF EXISTS `admon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admon` (
  `idadmin` int NOT NULL AUTO_INCREMENT,
  `usuario` char(40) NOT NULL,
  `nombres` char(40) NOT NULL,
  `apellidos` char(40) NOT NULL,
  `rol` varchar(80) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `correo` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `estadoCuenta` char(45) NOT NULL,
  `foto` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`idadmin`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admon`
--

LOCK TABLES `admon` WRITE;
/*!40000 ALTER TABLE `admon` DISABLE KEYS */;
INSERT INTO `admon` VALUES (1,'LeslieCruz','Leslie','Cruz','Administradora principal','3206720233','abglesliecruz@gmail.com','$2a$08$IkSuw9/ws54Cmg1hIefXdu0/vVBodhxroDPJWiPSJ7Be.mVGjOfDa','activo','admin1'),(5,'Danielgom','Daniel','Gomez','Administrador','3218013464','danielrozo11.49@gmail.com','$2a$08$nGjCsqUnwFUqPBXhai.dkeBt3PvVI5e7ighi3iIVmLi7truP2KqVa','activo',NULL),(6,'RafaHr','Rafael','Hernandez','administrador ','3194598480','fikyhr@gmail.com','$2a$08$RxmInaWBQw2YXCfa9K4MFuibKfg1Ujib62tRZ3A4.HrgLLU9OcmAS','activo',NULL);
/*!40000 ALTER TABLE `admon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adopciones`
--

DROP TABLE IF EXISTS `adopciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adopciones` (
  `idAdopcion` int NOT NULL AUTO_INCREMENT,
  `mascota` int NOT NULL,
  `adoptante` int NOT NULL,
  `email` varchar(256) NOT NULL,
  `nombre` char(60) NOT NULL,
  `tipodoc` char(20) NOT NULL,
  `documento` char(20) NOT NULL,
  `observaciones` varchar(600) NOT NULL,
  PRIMARY KEY (`idAdopcion`),
  KEY `FK_mascota_adopciones` (`mascota`),
  KEY `FK_adoptante_adopciones` (`adoptante`),
  CONSTRAINT `adopciones_ibfk_1` FOREIGN KEY (`mascota`) REFERENCES `mascotas` (`idmascota`),
  CONSTRAINT `adopciones_ibfk_2` FOREIGN KEY (`adoptante`) REFERENCES `usuarios` (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adopciones`
--

LOCK TABLES `adopciones` WRITE;
/*!40000 ALTER TABLE `adopciones` DISABLE KEYS */;
INSERT INTO `adopciones` VALUES (1,1,27,'leslie@gmail.com','les','CC','103536324','Holaa akakakak');
/*!40000 ALTER TABLE `adopciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactenos`
--

DROP TABLE IF EXISTS `contactenos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contactenos` (
  `idsolicitud` int NOT NULL AUTO_INCREMENT,
  `nombreC` char(60) NOT NULL,
  `correo` char(60) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `apellido` char(60) NOT NULL,
  `asunto` char(60) NOT NULL,
  `mensaje` varchar(1000) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`idsolicitud`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactenos`
--

LOCK TABLES `contactenos` WRITE;
/*!40000 ALTER TABLE `contactenos` DISABLE KEYS */;
INSERT INTO `contactenos` VALUES (1,'Leslie','abglesliecruz@gmail.com','3206720233','Cruz','buena','buenas','2021-11-30 08:38:22'),(2,'Leslie','abglesliecruz@gmail.com','3206720233','Cruz','Solicitud','Por favor enviar contacto de fundaciones','2021-11-30 08:50:45');
/*!40000 ALTER TABLE `contactenos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mascotas`
--

DROP TABLE IF EXISTS `mascotas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mascotas` (
  `idmascota` int NOT NULL AUTO_INCREMENT,
  `nombre` char(50) NOT NULL,
  `tipoDeMascota` char(100) NOT NULL,
  `raza` char(30) NOT NULL,
  `edad` char(20) NOT NULL,
  `responsable` int NOT NULL,
  `idestado` tinyint NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `foto1` varchar(256) NOT NULL,
  `foto2` varchar(256) DEFAULT NULL,
  `foto3` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`idmascota`),
  KEY `mascotas` (`responsable`),
  CONSTRAINT `mascotas` FOREIGN KEY (`responsable`) REFERENCES `usuarios` (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascotas`
--

LOCK TABLES `mascotas` WRITE;
/*!40000 ALTER TABLE `mascotas` DISABLE KEYS */;
INSERT INTO `mascotas` VALUES (1,'Byakko','perro','pitbull','3',27,1,'gordo amable y jugeton','byakko','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(2,'Apolo','perro','samoyedo','2',27,1,' jugeton y alegre ','apolo','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(3,'Dexter','gato','criollo','1',27,1,'gato dormilon y consentido','dexter','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(4,'Arya','gato','criolla','1',1,1,'gatica mimada  y cariñosa','arya','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(5,'Iris','gato','criolla','3',1,1,'gatica blanca dormilon amante de las carnes','iris','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(6,'Athena','perro','pastor aleman','2',1,1,'jugetona y muy energica','athena','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(7,'Estambre','gato','persa','2',1,1,'tranquilo y dormilon','estambre','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(8,'Osiris','perro','doberman','1',1,1,'energico y  alegre','osiris','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(9,'Era','gato','sphynx','1',27,1,'tanquila y feliz ','era','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(10,'Cronos','gato','Gigante','1',27,1,'dormilon gigante','cronos','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(11,'Gea','perro','bullteries','2',1,1,'energica y hermosa','gea','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(12,'Xam','perro','golden retrivert','3',1,1,'adorable y hermoso','xam','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(13,'Buba','perro','bulldog','1',1,2,'gordo y dormilon','buba',NULL,NULL),(14,'Roma','gato','ruso azul','1',1,2,'linda y dormilona','roma',NULL,NULL),(15,'Tambor','conejo','orejas caidas','1',1,2,'adorable y esponjoso','tambor',NULL,NULL);
/*!40000 ALTER TABLE `mascotas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicidades`
--

DROP TABLE IF EXISTS `publicidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicidades` (
  `idPublicidad` int NOT NULL AUTO_INCREMENT,
  `usuario` int NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(800) NOT NULL,
  `imagenes` varchar(256) NOT NULL,
  `estado` int NOT NULL,
  PRIMARY KEY (`idPublicidad`),
  KEY `fk_publicidades_Usuario_idx` (`usuario`),
  CONSTRAINT `fk_publicidades_Usuario` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicidades`
--

LOCK TABLES `publicidades` WRITE;
/*!40000 ALTER TABLE `publicidades` DISABLE KEYS */;
INSERT INTO `publicidades` VALUES (1,1,'Publicidad','todo para tus peluditos','publi1',1),(2,1,'Publicidad','todo para tus peluditos','publi2',1),(3,1,'Publicidad','todo para tus peluditos','publi3',1),(4,1,'Publicidad','todo para tus peluditos','publi4',1),(5,27,'Publicidad','todo para tus peluditos','publi5',1),(6,1,'Publicidad','todo para tus peluditos','publi6',1),(7,27,'Publicidad','todo para tus peluditos','publi7',1),(8,1,'Publicidad','todo para tus peluditos','publi8',1),(9,27,'Publicidad','todo para tus peluditos','publi9',1),(10,1,'Publicidad','todo para tus peluditos','publi10',1);
/*!40000 ALTER TABLE `publicidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `usuario` char(40) NOT NULL,
  `nombres` char(40) NOT NULL,
  `apellidos` char(40) NOT NULL,
  `telefono` varchar(100) NOT NULL,
  `correo` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `estadoCuenta` char(50) NOT NULL,
  `foto` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Rafa0825','Rafael','Solano','3194598480','Rafa2580@gmail.com','$2a$08$Ts8ok6CzCkLAj5ZfM.PStufxW7qR/SKawWhpjMpqwfCYtReyKL1vy','activo',NULL),(27,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$KKDLIQ6Lo9NGWfW6st78cehP2Z5MxAxQhloIck.3k8XD.vTJ5eFIm','activo',NULL),(54,'Danielgom','Daniel','Gomez','3218013464','danielrozo11.49@gmail.com','$2a$08$8plajXWNOn0tkcG2lfAnTOyHfiTpEH.CRUCF5MCAOgXH7QcW.o/.a','activo',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-11 13:23:46
