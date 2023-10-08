const express = require("express");
const router = express.Router();

const watchRouter = require("./watch/watchRouter");
const brandRouter = require("./brand/brandRouter");
const strapRouter = require("./strap/strapRouter");
const colorRouter = require("./color/colorRouter");
const styleRouter = require("./style/styleRouter");
const functionRouter = require("./functions/functionRouter");
const genderRouter = require("./gender/genderRouter");
const userRouter = require("./users/userRouter");

<<<<<<< HEAD
const commentRouter = require("./riviews/commentRouter");

const buyRouter = require("./buy/buyRouter");
const adminRouter = require("./admin/adminRouter");
const authRouter = require("./auth/authRouter");
const getUserIdRouter = require("./userId/getUserIdRouter");
const mercadoPagoRouter = require("./MercadoPago/mercadoPago");
const paymentRouter = require("./payment/paymentRouter");

// Rutas para el filtrado en la pagina
router.use("/comment", commentRouter);
=======
// Rutas para el filtrado en la pagina
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
router.use("/colors", colorRouter);
router.use("/styles", styleRouter);
router.use("/functions", functionRouter);
router.use("/genders", genderRouter);
router.use("/straps", strapRouter);
<<<<<<< HEAD
router.use("/getUserId", getUserIdRouter);

=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
// Rutas adicionales necesarias
router.use("/watches", watchRouter);
router.use("/brands", brandRouter);
router.use("/users", userRouter);
<<<<<<< HEAD
router.use("/MP", mercadoPagoRouter);

router.use("/buy", buyRouter);
router.use("/admin", adminRouter);
router.use("/auth", authRouter);
router.use("/payment", paymentRouter);
=======

// router.post("/admin/addFunction", (req, res) => {
//   const { name } = req.body;
//   try {
//     const newFunction = createNewFunction(name);
//     res.status(200).json(newFunction);
//   } catch (error) {
//     res.status(500).json({ Error: error.message });
//   }
// });

// router.post("/admin/addStyle", async (req, res) => {
//   const { name } = req.body;
//   try {
//     const newStyle = await createNewStyle(name);
//     res.status(200).json(newStyle);
//   } catch (error) {
//     res.status(500).json({ Error: error.message });
//   }
// });
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13

module.exports = router;
