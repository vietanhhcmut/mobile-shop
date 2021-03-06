-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2018 at 03:37 PM
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
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `color` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`id`, `userId`, `productId`, `quantity`, `color`) VALUES
(8, 0, 3, 1, 'Đen'),
(14, 30, 2, 1, 'Đen'),
(16, 30, 9, 1, 'Đen');

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
(5, 'Samsung', 'https://boygeniusreport.files.wordpress.com/2017/08/galaxy-note-8-banner.jpg?quality=98&strip=all&strip=all'),
(6, 'Xiaomi', 'https://i1.wp.com/kliknklik.com/blogs/wp-content/uploads/2018/04/Smartphones-Xiaomi.jpg?resize=720%2C377&ssl=1'),
(7, 'Sony', 'https://2.bp.blogspot.com/-6I1KpCNnAe8/WLza_GsxX7I/AAAAAAAADvE/AaYI01G-D5Uso-tEZapCt-NdtGihyOIzgCEw/s1600/Banner-Sony-Experi-XA1-Ultra.jpg'),
(8, 'iPhone', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFlUXH5MjFhejVXudTk8GfuvnPLbdg_fVkEIAFSURCoCGHSshHg'),
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
(6, 'https://demo4leotheme.com/prestashop/leo_mobile/40-large_default/blouse.jpg', 9),
(7, 'https://demo4leotheme.com/prestashop/leo_mobile/44-large_default/printed-dress.jpg', 2),
(8, 'https://demo4leotheme.com/prestashop/leo_mobile/43-large_default/printed-dress.jpg', 2),
(9, 'https://demo4leotheme.com/prestashop/leo_mobile/34-cart_default/printed-dress.jpg', 2),
(10, 'https://demo4leotheme.com/prestashop/leo_mobile/37-cart_default/faded-short-sleeves-tshirt.jpg', 3),
(11, 'https://demo4leotheme.com/prestashop/leo_mobile/28-cart_default/printed-dress.jpg', 3),
(12, 'https://demo4leotheme.com/prestashop/leo_mobile/25-cart_default/printed-dress.jpg', 3),
(13, 'https://demo4leotheme.com/prestashop/leo_mobile/31-cart_default/printed-summer-dress.jpg', 4),
(14, 'https://demo4leotheme.com/prestashop/leo_mobile/34-cart_default/printed-dress.jpg', 4),
(15, 'https://demo4leotheme.com/prestashop/leo_mobile/29-cart_default/printed-summer-dress.jpg', 4),
(16, 'https://demo4leotheme.com/prestashop/leo_mobile/27-cart_default/printed-dress.jpg', 5),
(17, 'https://demo4leotheme.com/prestashop/leo_mobile/36-cart_default/printed-dress.jpg', 5),
(18, 'https://demo4leotheme.com/prestashop/leo_mobile/42-cart_default/printed-dress.jpg', 5),
(19, 'https://demo4leotheme.com/prestashop/leo_mobile/41-cart_default/blouse.jpg', 6),
(20, 'https://demo4leotheme.com/prestashop/leo_mobile/24-cart_default/printed-dress.jpg', 6),
(21, 'https://demo4leotheme.com/prestashop/leo_mobile/26-cart_default/printed-dress.jpg', 6),
(22, 'https://demo4leotheme.com/prestashop/leo_mobile/24-large_default/printed-chiffon-dress.jpg', 7),
(23, 'https://demo4leotheme.com/prestashop/leo_mobile/27-large_default/printed-chiffon-dress.jpg', 7),
(24, 'https://demo4leotheme.com/prestashop/leo_mobile/25-large_default/printed-chiffon-dress.jpg', 7),
(25, 'https://demo4leotheme.com/prestashop/leo_mobile/37-cart_default/faded-short-sleeves-tshirt.jpg', 8),
(26, 'https://demo4leotheme.com/prestashop/leo_mobile/28-cart_default/printed-dress.jpg', 8),
(27, 'https://demo4leotheme.com/prestashop/leo_mobile/25-cart_default/printed-dress.jpg', 8),
(28, 'https://demo4leotheme.com/prestashop/leo_mobile/42-large_default/blouse.jpg', 11),
(29, 'https://demo4leotheme.com/prestashop/leo_mobile/41-large_default/blouse.jpg', 11),
(30, 'https://demo4leotheme.com/prestashop/leo_mobile/40-large_default/blouse.jpg', 11),
(31, 'https://demo4leotheme.com/prestashop/leo_mobile/27-large_default/printed-chiffon-dress.jpg', 10),
(32, 'https://demo4leotheme.com/prestashop/leo_mobile/24-large_default/printed-chiffon-dress.jpg', 10),
(33, 'https://demo4leotheme.com/prestashop/leo_mobile/25-large_default/printed-chiffon-dress.jpg', 10),
(34, 'https://demo4leotheme.com/prestashop/leo_mobile/27-large_default/printed-chiffon-dress.jpg', 12),
(35, 'https://demo4leotheme.com/prestashop/leo_mobile/24-large_default/printed-chiffon-dress.jpg', 12),
(36, 'https://demo4leotheme.com/prestashop/leo_mobile/25-home_default/printed-chiffon-dress.jpg', 12),
(37, 'https://demo4leotheme.com/prestashop/leo_mobile/44-large_default/printed-dress.jpg', 13),
(38, 'https://demo4leotheme.com/prestashop/leo_mobile/43-large_default/printed-dress.jpg', 13),
(39, 'https://demo4leotheme.com/prestashop/leo_mobile/34-cart_default/printed-dress.jpg', 13),
(40, 'https://demo4leotheme.com/prestashop/leo_mobile/37-cart_default/faded-short-sleeves-tshirt.jpg', 14),
(41, 'https://demo4leotheme.com/prestashop/leo_mobile/28-cart_default/printed-dress.jpg', 14),
(42, 'https://demo4leotheme.com/prestashop/leo_mobile/25-cart_default/printed-dress.jpg', 15),
(43, 'https://demo4leotheme.com/prestashop/leo_mobile/34-cart_default/printed-dress.jpg', 15),
(44, 'https://demo4leotheme.com/prestashop/leo_mobile/29-cart_default/printed-summer-dress.jpg', 15),
(45, 'https://demo4leotheme.com/prestashop/leo_mobile/25-cart_default/printed-dress.jpg', 14),
(46, 'https://demo4leotheme.com/prestashop/leo_mobile/24-large_default/printed-chiffon-dress.jpg', 16),
(47, 'https://demo4leotheme.com/prestashop/leo_mobile/27-large_default/printed-chiffon-dress.jpg', 16),
(48, 'https://demo4leotheme.com/prestashop/leo_mobile/25-large_default/printed-chiffon-dress.jpg', 16),
(49, 'https://demo4leotheme.com/prestashop/leo_mobile/37-cart_default/faded-short-sleeves-tshirt.jpg', 17),
(50, 'https://demo4leotheme.com/prestashop/leo_mobile/28-cart_default/printed-dress.jpg', 17),
(51, 'https://demo4leotheme.com/prestashop/leo_mobile/25-cart_default/printed-dress.jpg', 17);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `totalPrice` int(255) NOT NULL,
  `city` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `district` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wards` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `street` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phonenumber` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `paid` tinyint(1) NOT NULL,
  `delivered` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `totalPrice`, `city`, `district`, `wards`, `street`, `phonenumber`, `name`, `gender`, `email`, `createdAt`, `paid`, `delivered`) VALUES
(39, 127970700, 'a', 'a', 'a', 'a', 'a', 'Đào', 0, '', '2018-12-10 19:24:40', 1, 0),
(40, 44890650, 't', 't', 't', 't', 't', 'Anh Lê', 1, '', '2018-12-10 19:27:21', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `color` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `orderId`, `productId`, `quantity`, `color`) VALUES
(26, 39, 9, 2, 'Đen'),
(27, 39, 1, 1, 'Trắng'),
(28, 39, 1, 3, 'Vàng'),
(29, 40, 2, 1, 'Đen'),
(30, 40, 3, 1, 'Đen'),
(31, 40, 4, 1, 'Đen');

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
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
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
(1, '2018-12-05 11:32:44', 5, 'Samsung Galaxy Note 9', 22451000, 5, 'Mang lại sự cải tiến đặc biệt trong cây bút S-Pen, siêu phẩm Samsung Galaxy Note 9 còn sở hữu dung lượng pin khủng lên tới 4.000 mAh cùng hiệu năng mạnh mẽ vượt bậc, xứng đáng là một trong những chiếc điện thoại cao cấp nhất của Samsung.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(2, '2018-12-05 06:54:44', 5, 'Samsung Galaxy Note 8', 19900000, 10, 'Galaxy Note 8 là niềm hy vọng vực lại dòng Note danh tiếng của điện thoại Samsung với diện mạo nam tính, sang trọng. Máy trang bị camera kép xóa phông thời thượng, màn hình vô cực như trên S8 Plus, bút S Pen cùng nhiều tính năng mới và nhiều công nghệ được', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(3, '2018-12-06 12:24:17', 5, 'Samsung Galaxy A9', 12990000, 5, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(4, '2018-12-06 05:22:25', 5, 'Samsung Galaxy J7', 7890000, 0, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(5, '2018-12-07 09:37:22', 5, 'Samsung Galaxy S8 Plus', 14453000, 7, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(6, '2018-12-07 12:39:29', 5, 'Samsung Galaxy A6', 5753000, 3, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(7, '2018-12-07 13:41:38', 5, 'Samsung Galaxy J4', 5434000, 0, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(8, '2018-12-08 07:25:25', 5, 'Samsung Galaxy J2 Pro', 3020000, 0, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(9, '2018-12-08 11:32:05', 5, 'Samsung Galaxy J4 Core', 3190000, 5, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(10, '2018-12-09 19:27:44', 5, 'Samsung Galaxy V', 1980000, 2, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(11, '2018-12-09 20:36:34', 5, 'Samsung Galaxy A8 Star', 8324000, 5, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(12, '2018-12-09 21:38:37', 5, 'Samsung Galaxy J7', 9120000, 4, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(13, '2018-12-09 21:40:42', 5, 'Samsung Galaxy J4', 5789000, 8, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(14, '2018-12-09 21:43:48', 5, 'Samsung Galaxy S3', 4876000, 6, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(15, '2018-12-09 21:48:50', 5, 'Samsung Galaxy A2', 2567000, 6, 'Tạo nên một cú hích lớn trong làng smartphone hiện nay khi mang trong mình nhiều tính năng đột phá mà nổi bật nhất đến từ thiết kế sáng tạo và một hiệu năng đỉnh cao.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(16, '2018-12-10 07:23:22', 8, 'iPhone Xs Max', 43256000, 10, 'Mang lại sự cải tiến đặc biệt trong cây bút S-Pen, siêu phẩm Samsung Galaxy Note 9 còn sở hữu dung lượng pin khủng lên tới 4.000 mAh cùng hiệu năng mạnh mẽ vượt bậc, xứng đáng là một trong những chiếc điện thoại cao cấp nhất của Samsung.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)'),
(17, '2018-12-09 13:52:09', 8, 'iPhone 8 Plus', 25785000, 9, 'Mang lại sự cải tiến đặc biệt trong cây bút S-Pen, siêu phẩm Samsung Galaxy Note 9 còn sở hữu dung lượng pin khủng lên tới 4.000 mAh cùng hiệu năng mạnh mẽ vượt bậc, xứng đáng là một trong những chiếc điện thoại cao cấp nhất của Samsung.', 'Super AMOLED, 5.1\", Quad HD (2K)', '2 SIM Nano ', '32 GB', '4 GB', 'apt-X, LE, A2DP, v5.0', '5Ghz', '4000 mAh', 'BDS, A-GPS, GLONASS', '8 MP', 'Android 8.1 (Oreo)');

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
(3, 1, 3),
(4, 2, 1),
(5, 3, 1),
(6, 4, 1),
(7, 5, 1),
(8, 6, 1),
(9, 7, 1),
(10, 8, 1),
(11, 9, 1),
(12, 10, 1),
(13, 11, 1),
(14, 12, 1),
(15, 13, 1),
(16, 14, 1),
(17, 15, 1),
(30, 2, 2),
(31, 3, 2),
(32, 4, 2),
(33, 5, 2),
(34, 6, 2),
(35, 7, 2),
(36, 8, 2),
(37, 9, 2),
(38, 10, 2),
(39, 11, 2),
(40, 12, 2),
(41, 13, 2),
(42, 14, 2),
(43, 15, 2),
(44, 2, 3),
(45, 3, 3),
(46, 4, 3),
(47, 5, 3),
(48, 6, 3),
(49, 7, 3),
(50, 8, 3),
(51, 9, 3),
(52, 10, 3),
(53, 11, 3),
(54, 12, 3),
(55, 13, 3),
(56, 14, 3),
(57, 15, 3),
(58, 1, 4),
(59, 3, 4),
(60, 5, 4),
(61, 7, 4),
(62, 9, 4),
(63, 11, 4),
(64, 13, 4),
(65, 15, 4),
(66, 16, 1),
(67, 16, 2),
(68, 16, 3),
(69, 17, 1),
(70, 17, 2),
(71, 17, 3),
(72, 17, 4);

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
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `productId`, `name`, `email`, `content`, `createdAt`) VALUES
(10, 2, 'Đào', '', 'hihi', '2018-12-09 21:08:59'),
(11, 2, 'Lê Hữu Việt Anh', '', 'Sản phẩm đáng mua, mẫu mã đẹp.', '2018-12-09 21:18:29'),
(12, 9, 'Mai Đào', '', 'Điện thoại đẹp, đáng đồng tiền, mau đi các bạn ơi', '2018-12-09 21:19:55');

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
  `isAdmin` tinyint(1) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `birthday` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modifiedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `isAdmin`, `gender`, `birthday`, `createdAt`, `modifiedAt`) VALUES
(30, 'Mai', 'Đào', 'maidao@gmail.com', '$2y$10$8F42q4wuSPKPYP8xrPDrSuUe1EpoZh.QUIa5.0RzgQkwo6TIljR66', 0, 0, '', '2018-12-07 22:49:26', '2018-12-07 15:49:26'),
(31, 'Anh', 'Đào', 'anhdao@gmail.com', '$2y$10$IOvupWn1B/nut7zst8pfJe9sNgb/AMZfLcc0Pt/tVP.sMIw/U/xqW', 0, 0, '', '2018-12-07 23:01:48', '2018-12-07 16:01:48'),
(32, 'Mai Anh', 'Đào', 'maianhdao@gmail.com', '$2y$10$lEbx56EmnZcYTnGiQlC4JO5FYwJkgqpbsnkvjfJf0PK7/vr2062Lm', 0, 0, '', '2018-12-08 19:51:58', '2018-12-08 12:51:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
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
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
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
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `product_color`
--
ALTER TABLE `product_color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

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
