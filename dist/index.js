import { sOpt } from "./ui/sOpt.js";
import { vS } from "./utils/VerifyResponse.js";
sOpt().then(response => vS(response));
