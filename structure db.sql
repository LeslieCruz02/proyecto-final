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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-11 13:24:05
