-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `client_name` VARCHAR(255) NOT NULL,
    `client_cmpny_name` TEXT NOT NULL,
    `duration` INTEGER NOT NULL,
    `budget` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
