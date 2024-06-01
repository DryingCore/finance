import { Init } from "./ui/Init.js";
import { VerifyResponse } from "./utils/VerifyResponse.js";
Init().then(function (res) { return VerifyResponse(res); });
