-- AlterTable
ALTER TABLE `Employee` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'LEAVE', 'WFH', 'DELETED') NOT NULL DEFAULT 'ACTIVE';
