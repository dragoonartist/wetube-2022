import express from "express";
import { see, edit, deleteVideo, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
// id는 variable, : 은 express에게 변수라는 것을 알려준다.
// (regex)는 주소로 쓸 수 있는 표현을 제어한다.
// \d+ 는 숫자만 사용 가능함.
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
