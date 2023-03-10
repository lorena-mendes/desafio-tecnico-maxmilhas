'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('cpfs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    cpf: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
   });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('cpfs');
  }
};