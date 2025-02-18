import { QueryInterface } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.sequelize.query(
      `
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId", id) VALUES('userCreation', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1, 1);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId", id) VALUES('NotViewTicketsQueueUndefined', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1, 2);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId", id) VALUES('NotViewTicketsChatBot', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1, 3);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId", id) VALUES('DirectTicketsToWallets', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1, 4);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId", id) VALUES('NotViewAssignedTickets', 'disabled', '2020-12-12 16:08:45.354', '2020-12-12 16:08:45.354', 1, 6);
      INSERT INTO public."Settings" ("key", value, "createdAt", "updatedAt", "tenantId", id) VALUES('botTicketActive', '3', '2020-12-12 16:08:45.354', '2022-07-01 21:10:02.076', 1, 5);
      `
    );
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("Tenants", {});
  }
};
