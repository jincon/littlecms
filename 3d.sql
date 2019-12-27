/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50529
 Source Host           : localhost:3306
 Source Schema         : 3d

 Target Server Type    : MySQL
 Target Server Version : 50529
 File Encoding         : 65001

 Date: 27/12/2019 11:17:20
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cat
-- ----------------------------
DROP TABLE IF EXISTS `cat`;
CREATE TABLE `cat`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `pid` int(10) NOT NULL DEFAULT 0 COMMENT '父级',
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `link` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `dateline` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cat
-- ----------------------------
INSERT INTO `cat` VALUES (1, 0, 'Courses, Timetabling & Enrolment', 'courses', '2019-11-20 00:37:08');
INSERT INTO `cat` VALUES (2, 0, 'Degree Programme and Course of Study', 'degree', '2019-11-20 00:37:38');
INSERT INTO `cat` VALUES (3, 0, 'Careers and Internships', 'careers', '2019-11-20 00:37:57');
INSERT INTO `cat` VALUES (4, 0, 'Health and Absence', 'health', '2019-11-20 00:38:32');
INSERT INTO `cat` VALUES (5, 0, 'Erasmus/ Study Abroad', 'study_abroad', '2019-11-20 00:38:30');
INSERT INTO `cat` VALUES (6, 1, 'Timetable', 'timetable', '2019-11-20 10:35:45');
INSERT INTO `cat` VALUES (7, 1, 'Guide on How to Enrol (MyCampus)', 'enrol_guide', '2019-11-20 10:36:15');
INSERT INTO `cat` VALUES (8, 6, 'Timetable Clash', 'timetable_clash', '2019-11-20 10:38:00');
INSERT INTO `cat` VALUES (9, 6, 'Lab & Tutorial Swaps', 'lab_swaps', '2019-11-20 10:38:19');
INSERT INTO `cat` VALUES (10, 8, 'This doesn\'t solve the problem.', 'registry_doesnt_fix_clash', '2019-11-20 10:40:32');

-- ----------------------------
-- Table structure for content
-- ----------------------------
DROP TABLE IF EXISTS `content`;
CREATE TABLE `content`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `pcid` int(10) NOT NULL DEFAULT 0 COMMENT '父cid',
  `cid` int(10) NOT NULL,
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `views` int(10) NOT NULL DEFAULT 0,
  `dateline` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of content
-- ----------------------------
INSERT INTO `content` VALUES (1, 6, 8, 'Timetable Clash', '<p>A timetable clash may occur between courses or class sections within a course.<br/><br/>If the course you are enrolling in to is a compulsory course try enrolling in to a different class section (e.g. a different seminar group).<br/><br/>If the course you are enrolling in to is an optional course try enrolling in to a different class section (e.g. a different seminar group), alternatively enrol in to a new course.<br/><br/>Download a pdf guide: <a href=\"http://undefined\" target=\"_blank\">Timetable clash (pdf)</a><br/>Watch the how-to video: <a href=\"http://undefined\" target=\"_blank\">Enrolment - timetable clash</a></p>', 0, '2019-11-20 10:41:45');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  PRIMARY KEY (`uid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'jincon', '6e96deed65a3616e0133a1cb729a610f');

SET FOREIGN_KEY_CHECKS = 1;
