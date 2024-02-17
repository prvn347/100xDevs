"use strict";
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// function doSomething(keyPressed: Direction) {
// 	// do something.
// }
// doSomething(Direction.Up)
// console.log(Direction.Up)
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
// function doSomething(keyPressed: Direction) {
// 	// do something.
// }
// doSomething(Direction.Down)
// console.log(Direction.Down)\
// //common use case in real life
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })
