import express from "express";
import path from "path";
import morgan from "morgan";
import routes from "./routes";
import blogRouter from "./router/blogRouter";
import bodyParser from "body-parser";

console.log(path.resolve(__dirname));

const app = express();

const PORT = 3000;
//개발자영어 req 요청하다, res 응답하다 rander 구성하다,그리다 등등 send 보내다

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(사용자가 주문할 것, 연결해줄 라우터)

app.use(routes.home, blogRouter);
app.use(routes.about, blogRouter);
app.use(routes.about, blogRouter);
app.use(routes.etc, blogRouter);
app.use(routes.post_delete, blogRouter);
app.use(routes.post_write, blogRouter);

app.listen(PORT, () => {
  console.log(`Server Start PORT : ${PORT}`);
});
