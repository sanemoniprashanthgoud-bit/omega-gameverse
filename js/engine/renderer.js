const Renderer = {

  render() {

    // render world

  },

  flash(color = "white") {

    document.body.animate(

      [

        { background: color },

        { background: "black" }

      ],

      {

        duration: 200

      }

    );

  }

};