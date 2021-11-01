-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: ProyectoAdopciones
-- ------------------------------------------------------
-- Server version	8.0.26-0ubuntu0.20.04.2

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
-- Table structure for table `adopciones`
--

DROP TABLE IF EXISTS `adopciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adopciones` (
  `idAdopcion` int NOT NULL AUTO_INCREMENT,
  `mascota` int DEFAULT NULL,
  `adoptante` int DEFAULT NULL,
  `nombre` char(100) DEFAULT NULL,
  `email` varchar(256) DEFAULT NULL,
  `tipodoc` char(20) DEFAULT NULL,
  `documento` int DEFAULT NULL,
  `observaciones` varchar(600) DEFAULT NULL,
  PRIMARY KEY (`idAdopcion`),
  KEY `FK_mascota_adopciones` (`mascota`),
  KEY `FK_adoptante_adopciones` (`adoptante`),
  CONSTRAINT `adopciones_ibfk_1` FOREIGN KEY (`mascota`) REFERENCES `mascotas` (`idmascota`),
  CONSTRAINT `adopciones_ibfk_2` FOREIGN KEY (`adoptante`) REFERENCES `usuarios` (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adopciones`
--

LOCK TABLES `adopciones` WRITE;
/*!40000 ALTER TABLE `adopciones` DISABLE KEYS */;
INSERT INTO `adopciones` VALUES (1,NULL,NULL,'les','leslie@gmail.com','CC',103536324,'Holaa akakakak'),(2,NULL,NULL,'les','leslie@gmail.com','CC',103536324,'Holaa akakakak'),(3,NULL,NULL,'les','leslie@gmail.com','CC',103536324,'Holaa akakakak');
/*!40000 ALTER TABLE `adopciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactenos`
--

DROP TABLE IF EXISTS `contactenos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contactenos` (
  `nombreC` char(100) DEFAULT NULL,
  `correo` char(255) DEFAULT NULL,
  `telefono` int DEFAULT NULL,
  `nombreO` char(255) DEFAULT NULL,
  `asunto` char(255) DEFAULT NULL,
  `mensaje` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactenos`
--

LOCK TABLES `contactenos` WRITE;
/*!40000 ALTER TABLE `contactenos` DISABLE KEYS */;
INSERT INTO `contactenos` VALUES (NULL,'assad@gmail.com',12345678,NULL,'asdfa','sdfasdfasdf'),(NULL,'asdf@hotmail.com',321354,NULL,'asdfjsdf','asdfasdfasfd'),(NULL,'asdfa@hotmail.com',321654,NULL,'asdfasdfa','asfdasfasfas'),(NULL,'asd@hotmail.com',3124567,NULL,'asdf','asdf'),(NULL,'assad@gmail.com',12345678,NULL,'asda','asdf'),(NULL,'fikyhr@gmail.com',12345678,NULL,'saludo','hola PetsWorld '),(NULL,'rafa_25_8@hotmail.com',123456,NULL,'saludo','Hola mundo de pets world '),(NULL,'rafa_25_8@hotmail.com',12345678,NULL,'saludo','hola Mundo Pets World!! '),(NULL,'rafa_25_8@hotmail.com',12345678,NULL,'Saludo','Hola Pets World '),(NULL,'rafa_25_8@hotmail.com',13245678,NULL,'Saludo','Hola Mundo PetsWorld');
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
  `nombre` char(100) NOT NULL,
  `tipoDeMascota` char(100) DEFAULT NULL,
  `raza` char(30) DEFAULT NULL,
  `edad` char(20) DEFAULT NULL,
  `responsable` char(100) DEFAULT NULL,
  `idestado` tinyint DEFAULT NULL,
  `descripcion` varchar(1000) DEFAULT NULL,
  `fotos` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`idmascota`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascotas`
--

LOCK TABLES `mascotas` WRITE;
/*!40000 ALTER TABLE `mascotas` DISABLE KEYS */;
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
  `usuario` char(100) DEFAULT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `descripcion` varchar(800) DEFAULT NULL,
  `imagenes` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`idPublicidad`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicidades`
--

LOCK TABLES `publicidades` WRITE;
/*!40000 ALTER TABLE `publicidades` DISABLE KEYS */;
INSERT INTO `publicidades` VALUES (1,NULL,'Venta de rascadores','se venden rascadores para gatos de excelente calidad','C:\\fakepath\\Captura de pantalla de 2021-10-12 09-21-53.png'),(2,NULL,'venta de rascadores','hermosos rascadores para la venta','C:\\fakepath\\Captura de pantalla de 2021-10-12 09-21-53.png'),(3,NULL,'venta de catnit','se vende catnit','C:\\fakepath\\Captura de pantalla de 2021-10-08 08-43-25.png');
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
  `usuario` char(100) NOT NULL,
  `nombres` char(100) DEFAULT NULL,
  `apellidos` char(100) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  `correo` varchar(256) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `estadoCuenta` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Rafa0825','Rafael','Solano','3194598480','Rafa2580@gmail.com','$2a$08$Ts8ok6CzCkLAj5ZfM.PStufxW7qR/SKawWhpjMpqwfCYtReyKL1vy',NULL),(2,'Dexter84','Dexter','Cruz','3206720233','dextersito@gmail.com','$2a$08$y4gkuemzCs5j1MWe4OLs3eaGp7knOtY9r/CArHCBS7MmilhRdGF0K',NULL),(3,'LeslieCruz','Leslie','Cruz','3206720233','abglesliecruz@gmail.com','$2a$08$lvbjEpNdMhSnyTMyalRYKukpCjj/fRRM.XoRs1dbElQn4ST/y490i',NULL),(4,'aryasss','arya','cruz','3206720233','arya@gmail.com','$2a$08$1pJxHXTw6X.EqTEHfx.LbuP2.oUyiwQLuM5HTkHy1l0cGkTrBhztm',NULL),(5,'arya84','Arya','Cruz','3206750233','Aryesita@gmail.com','$2a$08$TuxKyRpIkTETI3Bi4.JbWOPJZSqIIxV9nzwGUdyA93VeyfczT3tXa',NULL),(6,'arya658','ARYA','CRUZ','3206720233','arya8866@gmail.com','$2a$08$.V4zQ9tpWsdBTMpL/T/M3uSx6meBF2npgo7owPI2WOfmgTNEdymV.',NULL),(7,'arya64s','arya','cruz','3206720233','ar@gmail.com','$2a$08$.sw5PKLG9aCSI8WR/EpMJOdwBKj0WYjEonxENCCsy0DOJKEQVxN3W',NULL),(8,'arya63','asdasd','sasda','312245689','aryaflo@gmail.com','$2a$08$w6D1FkvAnd7BzXJFbEmH1.K.Q5XvXKt65vb8/4UojZ6L5p.0IAUHi',NULL),(9,'aryas63','asdad','sfaf','3206720233','arya63@gmail.com','$2a$08$OadLi4qbc/AbyXyfivyEWOLZKJR05iayi1upTI/87QAamsIjPyzwy',NULL),(14,'Leslie','Leslie','Cruz','3206720233','abglesliecruz@gmail.com','$2a$08$5VORF8SowuGLG3gE1Alrze6Cd6mCksPYHn.q6Oizae1rYXUdelI8G',NULL),(15,'Leslie','Leslie','Cruz','3206720233','abglesliecruz@gmail.com','$2a$08$Ll/r86Lbhe7ArxkWHVfd9ujWNv2MsOAoPpgdvNWsBLDKDquXXJZyq',NULL),(16,'Leslie','Leslie','Cruz','3206720233','abglesliecruz@gmail.com','$2a$08$9Yqc7enuYQefwRKKwHxM6OBvAkV4B.TxpN1pgPa8vu68CEFeolKOm',NULL),(17,'Leslie','Leslie','Cruz','3206720233','abglesliecruz@gmail.com','$2a$08$vKa6dQeOP4REQZxs4QEdyuF/11iW9T7/QzJvrh8Nqlf5grh8Cv3Hu',NULL),(18,'Leslie','Leslie','Cruz','3206720233','abglesliecruz@gmail.com','$2a$08$nDOFvx3kzDCzg2wAmvIsB.mVGVBBY9xmX/O95TyRsh5CJ4KNldBH6',NULL),(19,'Leslie','Leslie','Cruz','3206720233','abglesliecruz@gmail.com','$2a$08$khbglUJcNv.uS5Rk9Xc0O.E96dit1nGoLnTAvIU5W8hp01x1Gfxye',NULL),(20,'Leslie','Leslie','Cruz','3206720233','abglesliecruz@gmail.com','$2a$08$DWN20CCWOj7WIi6w/WW5uuOlbBSiy/j5/mYsMNk9jHOXKUMPVSZwO',NULL),(21,'Leslie','Leslie','Cruz','3206720233','abglesliecruz@gmaill.com','$2a$08$7vXLXORMzZRjp5jo3.z3VOkf.2OXM/hRO7wNoyR0ya/qgcIdXbqpK','inactivo');
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

-- Dump completed on 2021-10-27  8:32:35
