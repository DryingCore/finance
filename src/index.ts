import { sOpt } from "./ui/Init.js";
import { vS } from "./utils/VerifyResponse.js";

sOpt().then(response => vS(response));
