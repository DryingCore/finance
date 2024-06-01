import { sOpt } from "./modules/ui/sOpt.js";
import { vS } from "./modules/logical/verify.js";
sOpt().then(response => vS(response));
