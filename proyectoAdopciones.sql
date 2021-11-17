CREATE DATABASE  IF NOT EXISTS `ProyectoAdopciones` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ProyectoAdopciones`;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adopciones`
--

LOCK TABLES `adopciones` WRITE;
/*!40000 ALTER TABLE `adopciones` DISABLE KEYS */;
INSERT INTO `adopciones` VALUES (1,NULL,NULL,'les','leslie@gmail.com','CC',103536324,'Holaa akakakak'),(2,NULL,NULL,'les','leslie@gmail.com','CC',103536324,'Holaa akakakak'),(3,NULL,NULL,'les','leslie@gmail.com','CC',103536324,'Holaa akakakak'),(4,NULL,NULL,'asdasd','asd@gmail.com','cc',2313132,'asdfasfsf'),(5,NULL,NULL,'asdfas','leslie@gmail.com','cc',12354488,'sfgsgs');
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
INSERT INTO `contactenos` VALUES (NULL,'assad@gmail.com',12345678,NULL,'asdfa','sdfasdfasdf'),(NULL,'asdf@hotmail.com',321354,NULL,'asdfjsdf','asdfasdfasfd'),(NULL,'asdfa@hotmail.com',321654,NULL,'asdfasdfa','asfdasfasfas'),(NULL,'asd@hotmail.com',3124567,NULL,'asdf','asdf'),(NULL,'assad@gmail.com',12345678,NULL,'asda','asdf'),(NULL,'fikyhr@gmail.com',12345678,NULL,'saludo','hola PetsWorld '),(NULL,'rafa_25_8@hotmail.com',123456,NULL,'saludo','Hola mundo de pets world '),(NULL,'rafa_25_8@hotmail.com',12345678,NULL,'saludo','hola Mundo Pets World!! '),(NULL,'rafa_25_8@hotmail.com',12345678,NULL,'Saludo','Hola Pets World '),(NULL,'rafa_25_8@hotmail.com',13245678,NULL,'Saludo','Hola Mundo PetsWorld'),('les','abglesliecruz@gmail.com',32012556,'cruz','Hola','Hola'),('les','abglesliecruz@gmail.com',322222,'cruz','hola','Hola'),('Les','abglesliecruz@gmail.com',555,'cruz','hola','hola'),('Les','abglesliecruz@gmail.com',555,'cruz','hola','hola'),('Les','abglesliecruz@gmail.com',555,'cruz','hola','hola'),('Les','abglesliecruz@gmail.com',555,'cruz','hola','hola'),('Les','abglesliecruz@gmail.com',555,'cruz','hola','hola'),('hola','abgleslicruz@gmail.com',32652222,'hola','hola','hola'),('rafa','asdfasf@gmail.com',312525,'her','holis','hola');
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascotas`
--

LOCK TABLES `mascotas` WRITE;
/*!40000 ALTER TABLE `mascotas` DISABLE KEYS */;
INSERT INTO `mascotas` VALUES (1,'Byakko','perro','pitbull','3','Gloria',1,'gordo amable y jugeton','https://i.postimg.cc/nrFQ33ZS/Whats-App-Image-2021-11-16-at-1-05-29-PM-1.jpg'),(2,'Apolo','perro','samoyedo','2','Pets World',1,' jugeton y alegre ','https://i.postimg.cc/T323G5Hh/mascota-espana-blanca-1024x639.jpg'),(3,'Dexter','gato','criollo','1','Rafael',1,'gato dormilon y consentido','https://i.postimg.cc/brjq5Zty/Whats-App-Image-2021-11-04-at-6-42-16-AM-2.jpg'),(4,'Arya','gato','criolla','1','Leslie',1,'gatica mimada  y cariñosa','https://i.postimg.cc/Qdnh34Tn/Whats-App-Image-2021-11-04-at-6-42-17-AM.jpg'),(5,'Iris','gato','criolla','3','Leslie',1,'gatica blanca dormilon amante de las carnes','https://i.postimg.cc/XvjBg28Z/Whats-App-Image-2021-11-16-at-1-18-18-PM.jpg'),(6,'Athena','perro','pastor aleman','2','Pets World',1,'jugetona y muy energica','https://i.postimg.cc/x1JGL0vF/pastor-Aleman.jpg'),(7,'Estambre','gato','persa','2','Pets World',1,'tranquilo y dormilon','https://i.postimg.cc/R0wcbXb7/gato-persa-gris-0.jpg'),(8,'Osiris','perro','doberman','1','Pets World',1,'energico y  alegre','https://i.postimg.cc/SxB6rwVQ/doberman.jpg'),(9,'Era','gato','sphynx','1','Pets World',1,'tanquila y feliz ','https://i.postimg.cc/Ssrcmj4j/Cat-Sphynx-img-025.jpg'),(10,'Cronos','gato','Gigante','1','Pets World',1,'dormilon gigante','https://i.postimg.cc/8CcLhpNJ/images-1.jpg'),(11,'Gea','perro','bullteries','2','Pets World',1,'energica y hermosa','https://i.postimg.cc/4dhtSWKX/bull-terrier-t.jpg'),(12,'Xam','perro','golden retrivert','3','Pets world',1,'adorable y hermoso','https://i.postimg.cc/1zdwBk3W/gl-cklich-golden-retriever-welpe-1024x682.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Rafa0825','Rafael','Solano','3194598480','Rafa2580@gmail.com','$2a$08$Ts8ok6CzCkLAj5ZfM.PStufxW7qR/SKawWhpjMpqwfCYtReyKL1vy',NULL),(2,'Dexter84','Dexter','Cruz','3206720233','dextersito@gmail.com','$2a$08$y4gkuemzCs5j1MWe4OLs3eaGp7knOtY9r/CArHCBS7MmilhRdGF0K',NULL),(4,'aryasss','arya','cruz','3206720233','arya@gmail.com','$2a$08$1pJxHXTw6X.EqTEHfx.LbuP2.oUyiwQLuM5HTkHy1l0cGkTrBhztm',NULL),(5,'arya84','Arya','Cruz','3206750233','Aryesita@gmail.com','$2a$08$TuxKyRpIkTETI3Bi4.JbWOPJZSqIIxV9nzwGUdyA93VeyfczT3tXa',NULL),(6,'arya658','ARYA','CRUZ','3206720233','arya8866@gmail.com','$2a$08$.V4zQ9tpWsdBTMpL/T/M3uSx6meBF2npgo7owPI2WOfmgTNEdymV.',NULL),(7,'arya64s','arya','cruz','3206720233','ar@gmail.com','$2a$08$.sw5PKLG9aCSI8WR/EpMJOdwBKj0WYjEonxENCCsy0DOJKEQVxN3W',NULL),(8,'arya63','asdasd','sasda','312245689','aryaflo@gmail.com','$2a$08$w6D1FkvAnd7BzXJFbEmH1.K.Q5XvXKt65vb8/4UojZ6L5p.0IAUHi',NULL),(9,'aryas63','asdad','sfaf','3206720233','arya63@gmail.com','$2a$08$OadLi4qbc/AbyXyfivyEWOLZKJR05iayi1upTI/87QAamsIjPyzwy',NULL),(27,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$KKDLIQ6Lo9NGWfW6st78cehP2Z5MxAxQhloIck.3k8XD.vTJ5eFIm','activo'),(28,'Lesliito','les','cruz','3206720','leslie.hat@gmail.com','$2a$08$A1iWiVNxmiCiYveR14nR1OZjBAPuWfpXtFsVJ9NqFe.8jX/s8qP7a','inactivo'),(29,'rafi','raf','her','1315456','her@gmail.com','$2a$08$Xqz1nFeEpIiPWYY.jQ7KUOYzqUgeKUWy8rFwrEEcUe14z8KXUig.y','inactivo'),(30,'dgsfg','dfdfs','fasfda','22222','les@gmail.com','$2a$08$07CNn9Clg9KO34yoFDIlwOw6c13DBVTG4ZZn3JicwIkclP3k2CSya','inactivo'),(31,'asdas','sdfsdf','sdfsdf','5555','asd@gmail.com','$2a$08$pgHGWFWVplLWuly.G4SRLezz3DpcHRLDDxBq5cPV5bGwpF3mWZQI2','inactivo'),(32,'asdsd','asdas','asda','12354896','asd@gmail.com','$2a$08$YSvyXh9omhzQYsKe2iT0/egw.JqngcOOIbx.bTHB0NPRHo3wmGg0G','inactivo'),(33,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$cGkh5FmbMKoQPGUhoF8KfeTnStxzFwVKycUGABLSTUHCNYJRPHhdO','inactivo'),(34,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$s/cDiIrrp0eDb8SJaRNmSuOsSgA2B6fVSzAOVeRGyidKIHfzh2yTK','inactivo'),(35,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$Kb3z5ofVnPGKq8N.lLqOC.2IWyWWToyAr/O/jB1eAwUqbu4oB.A.e','inactivo'),(36,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$Y/5vMCl8euplufwGv9uIvOLOXU3.QLJsq9RYStSlrvV2.R.jFYulG','inactivo'),(37,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$7ZebFvmXc6UtgmLX1Menh.xxd1ekrLWQaYXoFr.I6Tz157l1QPj2G','inactivo'),(38,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$2KyRei2lj1UcK6cpuOhKcO4Q8ZjtE2P00tiooG5smSOH1NAHlOM4W','inactivo'),(39,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$YmoebGoZZYiex59exOURnu/0b55Uuxdv8CBCxZxGs0Ipg6dnLOiEO','inactivo'),(40,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$G0VRqGE/D8hjFhpB84LQtOqC7pe4oU/aXbPW9AKXGfgnpYfx.XP7G','inactivo'),(41,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$TWe5i2GR8N9waCsKsHJkm.0MFCtLxw3ockNB9c1ZiR748j7/pTRl6','inactivo'),(42,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$9e6t1prEYV9gASqf45bGweWbJUOvwOkzYpA9/vig0ZRAabOIKujxO','inactivo'),(43,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$ARoUSMc76Z5Hmfvy/6snR.6v9Ggtco4fFzqUOjYSFB72DsocdcbjW','inactivo'),(44,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$7mb6hDQ6CrETQI05VkKqvOyyNxjIbt8yKFuf9Rg9.rwbhEjgjmm/m','inactivo'),(45,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$z6EauQgO.CchNuCGkeiJr.rDtAXQ2s6uJI4koD2WsNOeFwMgiz7Xa','inactivo'),(46,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$GDZhFfDeEGk3bB1A.g3SE.U8eJ28tlQodwG5W6nW7wXvBq1XNqXVW','inactivo'),(47,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$44ot6ywq1fBx7ApfDf6Seugy0H4QuKZztMHFfPVQjziG/rOZJboG2','inactivo'),(48,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$MfImiIMzmGYka6Kb2MEilejji3Y3.NdiyQwmpd6ZQWCqguZm/6y7.','inactivo'),(49,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$oTF0wT9VqV26u3sdyT7dO.A3TmM.UR/xFmPETZJWZoeqEKUOttfQG','inactivo'),(50,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$XlzSNgijL.8YfuAvZXsarOwfm0IzSJwInFf3z5aSBAKJL5c/VIJnq','inactivo'),(51,'leslieCruz','leslie','cruz','325222','abglesliecruz@gmail.com','$2a$08$UBhfyFaBMwpd2NTR15UCLuwC7Kf4aEkogk5.plnS01TR5Fs6UJRf.','inactivo');
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

-- Dump completed on 2021-11-16 17:02:21
