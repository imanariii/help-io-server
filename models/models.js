const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})


// User.hasMany(Orders);
// Orders.belongsTo(User)
//
// Brand.hasMany(Product)
// Product.belongsTo(Brand)
//
// Category.hasMany(Product)
// Product.belongsTo(Category)
//
// Product.hasMany(ProductInfo, {as: 'info'});
// ProductInfo.belongsTo(Product)
//
// Brand.belongsToMany(Category, {through: BrandCategory })
// Category.belongsToMany(Brand, {through: BrandCategory })

module.exports = {
    User
}
