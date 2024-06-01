import { sOpt } from "./ui/sOpt.js";
import { vS } from "./utils/verify.js";

sOpt().then(response => vS(response));
