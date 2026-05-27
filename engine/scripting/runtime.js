export class ScriptRuntime {

  execute(code) {

    return new Function(code)();

  }

}