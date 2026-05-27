export class Executor {

  run(graph) {

    graph.nodes.forEach(node => {

      if (node.execute) {

        node.execute();

      }

    });

  }

}