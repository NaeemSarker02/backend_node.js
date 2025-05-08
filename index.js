const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4955;
const UserRouter = require('./Routes/UserRoute');
const TransactionRouter = require('./Routes/TransactionRoute');
const StockRouter = require('./Routes/StockRoute');
const RoleRouter = require('./Routes/RoleRouter');
const ProductRouter = require('./Routes/ProductRouter');
const OrderRouter = require('./Routes/OrderRouter')
const Order_itemsRouter = require("./Routes/Order_itemsRouter");
const CategoryRouter = require('./Routes/CategoryRouter');
const BrandRouter = require('./Routes/BrandRouter');
const BillRouter = require('./Routes/BillRouter');
const AddressRouter = require('./Routes/AddressRouter');

app.use(express.json());

app.use('/user', UserRouter);
app.use('/trans', TransactionRouter);
app.use('/stock',StockRouter);
app.use('/role',RoleRouter);
app.use('/product',ProductRouter);
app.use('/order',OrderRouter);
app.use('/oi', Order_itemsRouter);
app.use('/category', CategoryRouter);
app.use('/brand',BrandRouter);
app.use('/bill',BillRouter);
app.use('/address',AddressRouter);



app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is running on port ${port}`);
    }});