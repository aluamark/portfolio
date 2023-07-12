import React, { useState, useRef } from "react";
import SectionHeader from "../SectionHeader";
import ScrollDown from "../ScrollDown";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";

const Contact = () => {
	const [loading, setLoading] = useState(false);
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

	const sendEmail = async () => {
		setLoading(true);
		await emailjs
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
		setLoading(false);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div id="contact" className="pt-24 md:px-5">
			<div className="bg-zinc-800 p-4 mx-4 md:mx-auto max-w-screen-lg rounded-t-lg relative shadow-xl">
				<SectionHeader title="Contact.jsx" />

				<div className="text-md text-center pb-5 pt-8">
					<div className="text-neutral-300">
						<p>Let's work together!</p>
						<p className="flex justify-center items-center gap-1 pt-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								className="fill-neutral-300 w-5 h-5"
							>
								<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
							</svg>
							<span className="tracking-wide">(+63)936-341-1848</span>
						</p>

						<div className="flex justify-center gap-2 pt-1">
							<a
								href="https://www.linkedin.com/in/aluamark/"
								className="flex gap-1 hover:underline text-green-500"
								target="blank"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									className="fill-neutral-300 w-5 h-5"
								>
									<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
								</svg>
								LinkedIn
							</a>
							<a
								href="https://github.com/aluamark"
								className="flex gap-1 hover:underline text-green-500"
								target="blank"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									className="fill-neutral-300 w-5 h-5"
								>
									<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
								</svg>
								GitHub
							</a>
						</div>
					</div>

					<div className="pt-5">
						<p className="text-neutral-300">Or send me a message!</p>
					</div>

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

						{loading ? (
							<button
								className="flex mt-3 bg-green-500 px-5 py-3 text-sm sm:text-md items-center rounded shadow disabled:opacity-75"
								disabled
							>
								<p className="font-bold">Sending...</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									className="fill-zinc-800 ml-2 w-5 h-5 animate-spin"
								>
									<path d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z" />
								</svg>
							</button>
						) : (
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
						)}

						<ToastContainer />
					</form>
				</div>
			</div>
			<ScrollDown linkTo="#resume" />
		</div>
	);
};

export default Contact;
