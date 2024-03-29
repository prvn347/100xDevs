const speedTest = require("speedtest-net");

function runSpeedTest() {
  const test = speedTest({ maxTime: 5000 });

  console.log("Running speed test...");

  test.on("data", (data) => {
    console.log(
      "Download speed: " + (data.speeds.download / 1e6).toFixed(2) + " Mbps"
    );
    console.log(
      "Upload speed: " + (data.speeds.upload / 1e6).toFixed(2) + " Mbps"
    );
  });

  test.on("error", (err) => {
    console.error("Speed test error:", err);
  });
}

runSpeedTest();
