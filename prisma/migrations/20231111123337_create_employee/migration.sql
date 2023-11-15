/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `gender` ENUM('NONE', 'MALE', 'FEMALE', 'TRANSGENDER') NOT NULL DEFAULT 'NONE',
    `dob` VARCHAR(255) NOT NULL,
    `contact` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `date_of_joining` VARCHAR(255) NOT NULL,
    `designation` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE', 'DELETED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
