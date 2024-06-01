import { Init } from "./ui/Init.js";
import { vS } from "./utils/VerifyResponse.js";

Init().then(response => vS(response));
