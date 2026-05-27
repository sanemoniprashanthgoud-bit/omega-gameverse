import { Engine }
from "../core/engine.js";

import { Profiler }
from "./profiler.js";

const engine =
new Engine("game");

const profiler =
new Profiler();

engine.start(delta => {

  profiler.update();

  update(delta);

  render();

});