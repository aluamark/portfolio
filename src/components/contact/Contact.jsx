import React, { useRef } from "react";
import SectionHeader from "../SectionHeader";
import ScrollDown from "../ScrollDown";

import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";

const Contact = () => {
	const form = useRef();
	const successNotif = () =>
		toast.success("Message sent.", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	const failNotif = () =>
		toast.error("Unable to send message. Please try again.", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

	const sendEmail = () => {
		emailjs
			.sendForm(
				"service_xgqjtts",
				"template_uebd92e",
				form.current,
				"iimqO4LoKTs-JojkZ"
			)
			.then(
				() => {
					successNotif();
					form.current.reset();
				},
				() => {
					failNotif();
				}
			);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	<p className="w-11/12 md:w-3/4 mx-auto px-10 pb-5">
		Hey there! I'm an aspiring&nbsp;
		<span className="text-green-500">Software / Web Developer</span> and here
		are some of the tools and technologies that I'm familiar with.
	</p>;

	return (
		<div id="contact" className="bg-neutral-300 pt-24 md:px-5">
			<div className="bg-zinc-800 p-4 mx-4 md:mx-auto max-w-screen-lg rounded-t-lg relative shadow-xl">
				<SectionHeader title="CONTACT" />

				<div className="text-md text-center pb-5 pt-8">
					<p className="text-neutral-300 mx-auto px-10">Let's work together!</p>
					<form
						ref={form}
						onSubmit={handleSubmit(sendEmail)}
						className="nm-inset-neutral-300-lg flex flex-col bg-neutral-300 text-md py-5 mt-8 mb-5 w-11/12 md:w-3/4 mx-auto items-center rounded-lg"
					>
						<input
							{...register("user_name", { required: true })}
							name="user_name"
							type="text"
							className="rounded px-2 w-11/12 md:3/4"
							placeholder="Name"
							autoComplete="off"
							autoCapitalize="words"
						/>
						{errors.user_name?.type === "required" && (
							<span className="text-red-500 text-xs pt-1">
								Please include your name.
							</span>
						)}

						<input
							{...register("user_email", {
								required: true,
								pattern: /\S+@\S+\.\S+/,
							})}
							name="user_email"
							type="email"
							className="rounded px-2 mt-3 w-11/12 md:3/4"
							placeholder="Email"
							autoComplete="off"
						/>
						{errors.user_email?.type === "required" && (
							<span className="text-red-500 text-xs pt-1">
								Please include your email.
							</span>
						)}
						{errors.user_email?.type === "pattern" && (
							<span className="text-red-500 text-xs pt-1">
								Please enter a valid email.
							</span>
						)}

						<textarea
							{...register("message", { required: true })}
							name="message"
							rows="5"
							className="rounded px-2 mt-3 w-11/12 md:3/4"
							placeholder="Message"
							autoComplete="off"
							autoCapitalize="sentences"
						/>
						{errors.message?.type === "required" && (
							<span className="text-red-500 text-xs pt-1">
								Please include your message.
							</span>
						)}

						<button
							type="submit"
							className="flex mt-3 bg-green-500 hover:bg-green-300 duration-300 px-5 py-3 text-sm sm:text-md items-center rounded shadow"
						>
							<p className="font-bold">Send me a message</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="fill-zinc-800 ml-2 w-5 h-5"
							>
								<path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
							</svg>
						</button>
						<ToastContainer />
					</form>
				</div>
			</div>
			<ScrollDown linkTo="#resume" />
		</div>
	);
};

export default Contact;
