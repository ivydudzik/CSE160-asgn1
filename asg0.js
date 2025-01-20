// DrawTriangle.js (c) 2012 matsuda
function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // // Draw a blue rectangle
  // ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set color to blue
  // ctx.fillRect(120, 10, 150, 150);        // Fill a rectangle with the color

  // Draw a red line
  // var v1 = new Vector3(opt_src = [2.25, 2.25, 0]);
  // drawVector(v1, "red");
}

function drawVector(v, color) {
  var canvas = document.getElementById('example')
  var context = canvas.getContext('2d');

  // console.log(v.elements[0], v.elements[1]);

  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(200, 200);
  context.lineTo(200 + (v.elements[0] * 20), 200 + -(v.elements[1] * 20), color);
  context.stroke();
}

function printVector3(v) {
  console.log("(", v.elements[0], ", ", v.elements[1], ", ", v.elements[2], ")");
}

function handleDrawEvent() {
  var canvas = document.getElementById('example')
  var context = canvas.getContext('2d');

  context.clearRect(0, 0, 400, 400);

  var v1 = new Vector3(opt_src = [0, 0, 0]);
  v1.elements[0] = document.getElementById("RedY").value;
  v1.elements[1] = document.getElementById("RedX").value;
  drawVector(v1, "red");

  var v2 = new Vector3(opt_src = [0, 0, 0]);
  v2.elements[0] = document.getElementById("BlueY").value;
  v2.elements[1] = document.getElementById("BlueX").value;
  drawVector(v2, "blue");
}

function handleDrawOperationEvent() {
  var canvas = document.getElementById('example')
  var context = canvas.getContext('2d');

  context.clearRect(0, 0, 400, 400);

  var v1 = new Vector3(opt_src = [0, 0, 0]);
  v1.elements[0] = document.getElementById("RedY").value;
  v1.elements[1] = document.getElementById("RedX").value;
  drawVector(v1, "red");

  var v2 = new Vector3(opt_src = [0, 0, 0]);
  v2.elements[0] = document.getElementById("BlueY").value;
  v2.elements[1] = document.getElementById("BlueX").value;
  drawVector(v2, "blue");

  switch (document.getElementById("operation").value) {
    case "Add": {
      var v3 = new Vector3();
      v3.set(v1);
      v3.add(v2);
      drawVector(v3, "green");
      break;
    }

    case "Subtract": {
      var v3 = new Vector3();
      v3.set(v1);
      v3.sub(v2);
      drawVector(v3, "green");
      break;
    }

    case "Multiply": {
      var scalar = document.getElementById("scalar").value;

      var v3 = new Vector3();
      v3.set(v1);
      v3.mul(scalar);
      drawVector(v3, "green");

      var v4 = new Vector3();
      v4.set(v2);
      v4.mul(scalar);
      drawVector(v4, "dark_green");
      break;
    }

    case "Divide": {
      var scalar = document.getElementById("scalar").value;

      var v3 = new Vector3();
      v3.set(v1);
      v3.div(scalar);
      drawVector(v3, "green");

      var v4 = new Vector3();
      v4.set(v2);
      v4.div(scalar);
      drawVector(v4, "dark_green");
      break;
    }

    case "Magnitude": {
      console.log("v1 Magnitude: ", v1.magnitude());
      console.log("v2 Magnitude: ", v2.magnitude());
    }

    case "Normalize": {
      var v3 = new Vector3();
      v3.set(v1);
      v3.normalize();
      drawVector(v3, "green");

      var v4 = new Vector3();
      v4.set(v2);
      v4.normalize();
      drawVector(v4, "dark_green");
      break;
    }

    case "Angle Between": {
      console.log("Angle: ", angleBetween(v1, v2));
      break;
    }

    case "Area": {
      console.log("Area: ", areaTriangle(v1, v2));
      break;
    }
  }

  function angleBetween(v1, v2) {
    return Math.acos(Vector3.dot(v1, v2) / v1.magnitude() / v2.magnitude()) * 180 / Math.PI;
  }

  function areaTriangle(v1, v2) {
    // printVector3(Vector3.cross(v1, v2));
    return ((Vector3.cross(v1, v2)).magnitude() / 2);
  }

}