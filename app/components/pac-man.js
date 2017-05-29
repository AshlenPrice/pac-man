import Ember from 'ember';

export default Ember.Component.extend({
  // didInsertElement runs whenever the element/component is loaded.
  didInsertElement: function () {
    this.drawCirlce()
  },
// this function selects the canvas and draws a circle in 2d
  drawCirlce: function () {
    // the canvas variable selects teargets #myCanvas id
    let canvas = document.getElementById("myCanvas")
    // ctx (context) variable is assigned to the HTML canvas element getContex
    //method. This gets the 2d context
    let ctx = canvas.getContext("2d")
    let x = 50
    let y = 100
    let radius = 20

    ctx.fillStyle = '#000'
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2, false )
    ctx.closePath()
    ctx.fill()
  },
});
