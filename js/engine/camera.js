const Camera = {

  shake(power = 10) {

    document.body.animate(

      [

        {

          transform:
          `translateX(${power}px)`

        },

        {

          transform:
          `translateX(-${power}px)`

        },

        {

          transform:
          "translateX(0px)"

        }

      ],

      {

        duration: 200

      }

    );

  }

};