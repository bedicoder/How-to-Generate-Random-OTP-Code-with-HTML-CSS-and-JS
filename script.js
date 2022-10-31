/** @format */

const generateOTP = document.querySelector("#generateOTP");
const getOTP = document.querySelector("#otp");
generateOTP.addEventListener("click", () => {
	const digits = "0123456789";
	let OTP = "";
	let i = 0;
	for (i; i < 6; i++) {
		OTP += digits[Math.floor(Math.random() * 10)];
	}
	getOTP.textContent = " G- " + OTP;
});
