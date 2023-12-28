-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-12-2023 a las 17:21:05
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vacaydays_database`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20231210030710-create-user.js'),
('20231211160453-create-vacation-request.js'),
('20231228132234-create-tipo-usuario.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuarios`
--

CREATE TABLE `tipousuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `tipoUsuario` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `holidays` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `nickName` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `holidays`, `createdAt`, `updatedAt`, `nickName`) VALUES
(1, 'Prueba', 'prueba@gmail.com', '$2b$12$/iRxDiKEWNfyQFf7Rt7AyOpqitSSVCsjmAZ0/5gXn.Ap3/adSU/1G', 20, '2016-01-25 00:00:00', '2023-12-25 19:22:09', ''),
(4, 'Prueba2', 'prueba2@gmail.com', '$2b$12$RSOW/80xIShwyOI08DEJW.RRu8SlCOLvkygY6FF2vcaYksTXeZ/sO', 30, '2008-06-04 00:00:00', '2023-12-28 12:15:42', ''),
(5, 'Prueba3', 'prueba3@gmail.com', '$2b$12$PdJb9CNc8Dm2xlrXT9/XYOtqe7ONr6WrzdipydDtPCXPxkHvADsli', 30, '2023-12-28 00:00:00', '2023-12-28 12:21:36', ''),
(6, 'Prueba4', 'prueba4@gmail.com', '$2b$12$CoOrhPb.gb//4/QwMziz8ORSYgD.2qo2l5ht.efDufTwMQZojbyPS', 15, '2022-12-28 00:00:00', '2023-12-28 12:22:11', ''),
(7, 'Elmer', 'elmer.soliz@gmail.com', '$2b$12$cppC4irWlC/HTU02lz7P1uI6SCQMGxnVIDQtfvDj5TVpNXWCCFK62', 15, '2021-03-05 00:00:00', '2023-12-28 13:49:50', 'esolizesolizesolizes'),
(8, 'Elmer2', 'elmer2@gmail.com', '$2b$12$ZVPVz.ftFEsPd.Wm.AaBquwJNVroVApeTlj3/rFn0xNJgUVAy1Keu', 15, '2022-03-28 00:00:00', '2023-12-28 13:55:24', 'esolizesolizesolizes'),
(9, 'elmer3', 'elmer3@gmail.com', '$2b$12$g0etPu.kX8h8m.xHvCtwhepercxiShVfki.pL4ne2t1kHwlrNl2aC', 15, '2022-03-28 00:00:00', '2023-12-28 13:55:53', 'esolizesolizesolizes'),
(10, 'elmer3', 'elmer3@gmail.com', '$2b$12$ofu1JAH8xaxYEFY32.SDjuOifi1NZPnJQtbtj2AID8Cb8k8Y6nFYS', 15, '2022-03-28 00:00:00', '2023-12-28 13:56:03', 'esolizesolizesolizes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacationrequests`
--

CREATE TABLE `vacationrequests` (
  `id` int(11) NOT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `totalDays` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `vacationrequests`
--

INSERT INTO `vacationrequests` (`id`, `startDate`, `endDate`, `totalDays`, `userId`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '2024-01-01 00:00:00', '2024-01-08 00:00:00', 7, 1, 'En espera', '2023-12-25 19:22:16', '2023-12-25 19:22:42'),
(2, '2024-01-22 00:00:00', '2024-01-29 00:00:00', 7, 1, 'En espera', '2023-12-25 19:22:16', '2023-12-25 19:22:56'),
(7, '2024-02-05 00:00:00', '2024-02-19 00:00:00', 13, 6, 'En espera', '2023-12-28 13:06:03', '2023-12-28 13:06:40'),
(8, '2024-03-04 00:00:00', '2024-03-05 00:00:00', 2, 6, 'En espera', '2023-12-28 13:06:03', '2023-12-28 13:07:21');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `tipousuarios`
--
ALTER TABLE `tipousuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipoUsuario` (`tipoUsuario`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `vacationrequests`
--
ALTER TABLE `vacationrequests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tipousuarios`
--
ALTER TABLE `tipousuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `vacationrequests`
--
ALTER TABLE `vacationrequests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tipousuarios`
--
ALTER TABLE `tipousuarios`
  ADD CONSTRAINT `tipousuarios_ibfk_1` FOREIGN KEY (`tipoUsuario`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `vacationrequests`
--
ALTER TABLE `vacationrequests`
  ADD CONSTRAINT `vacationrequests_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
