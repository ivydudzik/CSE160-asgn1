class TotoroSketch {
    constructor() {
        this.type = "sketch";
    }

    render() {
        let triangleCount = totoTris.length;
        for (let i = 0; i < triangleCount; i++) {
            //#BBC89E3E (0.25 Alpha Original)
            var rgba = [187, 200, 158, 1];

            // Pass the color of a triangle to u_FragColor variable
            gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

            drawTriangle([totoTris[i][0], totoTris[i][1], totoTris[i][2], totoTris[i][3], totoTris[i][4], totoTris[i][5]])
        }
    }
}

let totoTris = [
    [0.1, 0.2, -0.3, 0.4, 0.5, 0.55],
    [-0.1, -0.2, 0.3, -0.4, -0.5, -0.55],
    [-0.1, -0.2, 0.3, -0.4, -0.5, -1],
]
