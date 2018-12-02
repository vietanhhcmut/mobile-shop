-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2018 at 08:02 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobile_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `cartitem`
--

CREATE TABLE `cartitem` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `color` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cartitem`
--

INSERT INTO `cartitem` (`id`, `userId`, `productId`, `quantity`, `color`) VALUES
(4, 1, 1, 4, 'red'),
(5, 1, 2, 2, 'green');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`) VALUES
(5, 'Sam Sung', 'https://boygeniusreport.files.wordpress.com/2017/08/galaxy-note-8-banner.jpg?quality=98&strip=all&strip=all'),
(6, 'Xiaomi', 'https://i1.wp.com/kliknklik.com/blogs/wp-content/uploads/2018/04/Smartphones-Xiaomi.jpg?resize=720%2C377&ssl=1'),
(7, 'Sony', 'https://2.bp.blogspot.com/-6I1KpCNnAe8/WLza_GsxX7I/AAAAAAAADvE/AaYI01G-D5Uso-tEZapCt-NdtGihyOIzgCEw/s1600/Banner-Sony-Experi-XA1-Ultra.jpg'),
(8, 'Apple', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFlUXH5MjFhejVXudTk8GfuvnPLbdg_fVkEIAFSURCoCGHSshHg'),
(9, 'LG', 'http://blog.clove.co.uk/wp-content/uploads/2016/09/LG_V20.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `color` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `color`, `name`) VALUES
(1, 'black', 'Đen'),
(2, 'white', 'Trắng'),
(3, 'yellow', 'Vàng'),
(4, 'pink', 'Hồng');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `path` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `productId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `path`, `productId`) VALUES
(1, 'https://demo4leotheme.com/prestashop/leo_mobile/27-large_default/printed-chiffon-dress.jpg', 1),
(2, 'https://demo4leotheme.com/prestashop/leo_mobile/24-large_default/printed-chiffon-dress.jpg', 1),
(3, 'https://demo4leotheme.com/prestashop/leo_mobile/25-home_default/printed-chiffon-dress.jpg', 1),
(4, 'https://demo4leotheme.com/prestashop/leo_mobile/42-large_default/blouse.jpg', 9),
(5, 'https://demo4leotheme.com/prestashop/leo_mobile/41-large_default/blouse.jpg', 9),
(6, 'https://demo4leotheme.com/prestashop/leo_mobile/40-large_default/blouse.jpg', 9);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `feeShip` int(255) NOT NULL,
  `totalPrice` int(255) NOT NULL,
  `city` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `district` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ward` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phonenumber` int(11) NOT NULL,
  `type` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `feeShip`, `totalPrice`, `city`, `district`, `ward`, `address`, `phonenumber`, `type`) VALUES
(2, 1234, 5678, 'Ho Chi Minh', '3', '11', '125/34', 12345645, 'Xiaomi');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `categoryId` int(11) NOT NULL,
  `name` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(255) NOT NULL,
  `saleoff` int(255) NOT NULL,
  `description` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `screen` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sim` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `memory` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ram` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bluetooth` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wlan` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gps` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `camera` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `os` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `createdAt`, `categoryId`, `name`, `price`, `saleoff`, `description`, `screen`, `sim`, `memory`, `ram`, `bluetooth`, `wlan`, `pin`, `gps`, `camera`, `os`) VALUES
(1, '2018-12-01 11:24:19', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'Đẹp, bền', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(2, '2018-12-01 08:29:25', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'N\'Đẹp, bền\'', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(3, '2018-12-01 12:29:27', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'Đẹp, bền', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(4, '2018-12-01 12:32:34', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'Đẹp, bền', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(5, '2018-12-01 13:32:34', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'Đẹp, bền', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(6, '2018-12-01 17:32:34', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'Đẹp, bền', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(7, '2018-12-01 19:36:34', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'Đẹp, bền', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(8, '2018-12-01 21:27:34', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'Đẹp, bền', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(9, '2018-12-01 07:23:19', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'Đẹp, bền', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(10, '2018-12-01 10:26:19', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'Đẹp, bền', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(11, '2018-12-01 12:36:33', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'Đẹp, bền', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)');

-- --------------------------------------------------------

--
-- Table structure for table `product_color`
--

CREATE TABLE `product_color` (
  `id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `colorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_color`
--

INSERT INTO `product_color` (`id`, `productId`, `colorId`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `name` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `gender`, `birthday`, `created`, `modified`) VALUES
(17, 'Lan', 'Bui', 'lan@gmail.com', '$2y$10$PwTKHZmOjLoUXsdnSZ4uYe86OD6ZklbpOxx/VlPBVt7Q0kqLX3txW', 'nu', '11/07/1997', '2018-11-30 01:00:25', '2018-11-29 18:00:25'),
(18, 'Lan', 'Bui', 'lanbui@gmail.com', '$2y$10$Sf7Y6uSOpj2jYVJfv0H5Mu4hWC.o2D/sCOmSfra5Y0H7pkuuX7ChO', 'nu', '11/07/1997', '2018-11-30 01:01:31', '2018-11-29 18:01:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cartitem`
--
ALTER TABLE `cartitem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images__productId` (`productId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products__categoryId` (`categoryId`);

--
-- Indexes for table `product_color`
--
ALTER TABLE `product_color`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_color__productId` (`productId`),
  ADD KEY `product_color__colorId` (`colorId`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cartitem`
--
ALTER TABLE `cartitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `product_color`
--
ALTER TABLE `product_color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images__productId` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products__categoryId` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);

--
-- Constraints for table `product_color`
--
ALTER TABLE `product_color`
  ADD CONSTRAINT `product_color__colorId` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`),
  ADD CONSTRAINT `product_color__productId` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
