import { sOpt } from "./modules/interface/sOpt.js";
import { vS } from "./modules/logical/verify.js";

sOpt().then(response => vS(response));
