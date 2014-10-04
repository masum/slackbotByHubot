module.exports = function(robot) {
    robot.respond(/hi$/i, function(msg) {
	    msg.send("hi");
	});
}