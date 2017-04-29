SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `nasa` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `nasa` ;

-- -----------------------------------------------------
-- Table `nasa`.`localidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nasa`.`localidades` (
  `codigo` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(128) NOT NULL,
  `latitud` VARCHAR(64) NOT NULL,
  `longitud` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`codigo`))
  ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nasa`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `nasa`.`usuarios` (
  `codigo` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(64) NOT NULL,
  `contrasena` VARCHAR(128) NOT NULL,
  `nombre` VARCHAR(128) NOT NULL,
  `email` VARCHAR(128) NULL,
  `telefono` VARCHAR(32) NOT NULL,
  `tipo` VARCHAR(64) NOT NULL,
  `localidade_codigo` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`codigo`),
  INDEX `fk_usuarios_localidades_idx` (`localidade_codigo` ASC),
  CONSTRAINT `fk_usuarios_localidades`
  FOREIGN KEY (`localidade_codigo`)
  REFERENCES `nasa`.`localidades` (`codigo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
  ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
