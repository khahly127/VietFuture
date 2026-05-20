import express from "express";
// import webRoutes from "src/routes/web"; // 🛑 Comment lại vì chưa có file này
import 'dotenv/config';
import path from 'path';
// import initDatabase from "config/seed";   // 🛑 Comment lại
// import passport from "passport";         // 🛑 Tạm comment cấu hình auth nếu chưa làm đến
// import { configPassPortLocal } from "./middleware/passport.local"; // 🛑 Comment lại
// import apiRoutes from "routes/api";       // 🛑 Comment lại
// import session from "express-session";
// import { PrismaSessionStore } from '@quixo3/prisma-session-store';
// import { PrismaClient } from '@prisma/client';

const app = express();
const port = process.env.PORT || 3000;

// 1. Cấu hình view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 2. Cấu hình req.body 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Cấu hình static files
app.use(express.static('public'));

// 🛑 Tạm thời comment toàn bộ khối cấu hình Session + Passport cũ 
// để tránh lỗi khi chưa có bảng Session trong database mới.
/*
app.use(session({ ... }));
app.use(passport.initialize());
app.use(passport.authenticate('session')); 
configPassPortLocal();
*/

// Test nhanh một route xem app chạy ổn không
app.get("/", (req, res) => {
    res.send("Dự án VietFuture đã khởi chạy thành công!");
});

// 6. Cấu hình các routes (Mở ra sau khi bạn đã tạo các file route mới)
// webRoutes(app);
// apiRoutes(app);

// 7. Seeding data
// initDatabase();

// 8. Handle 404 not found
app.use((req, res) => {
    res.status(404).send("404 not found");
});

app.listen(port, () => {
    console.log(`My app is running on port: ${port} `);
});