import React, { useState, useRef } from "react";
import Box from "../Box";
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
		<Box id="contact" title="Contact.jsx" linkTo="#resume">
			<div className="flex flex-col gap-3 py-5 md:px-5">
				<div className="flex justify-between items-center py-5 text-left">
					<div className="w-full text-xl">
						Interested in hiring me? Let's connect!
					</div>

					<div className="flex flex-col md:flex-row justify-end gap-3 w-full text-sm">
						<div className="flex justify-end gap-1 text-green-500">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="w-4 h-4"
							>
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
							</svg>
							<span className="tracking-wide select-text">
								(+63)936-341-1848
							</span>
						</div>
						<div className="flex justify-end gap-3">
							<div className="flex gap-1 text-green-500">
								<a
									href="https://www.linkedin.com/in/aluamark/"
									target="_blank"
									rel="noreferrer"
									aria-label="aluamark-linkedIn"
									className="flex gap-1 hover:text-green-600"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-4 h-4"
									>
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
										<rect width="4" height="12" x="2" y="9" />
										<circle cx="4" cy="4" r="2" />
									</svg>
								</a>
							</div>
							<div className="flex gap-1 text-green-500">
								<a
									href="mailto:aluamark@gmail.com"
									target="_blank"
									rel="noreferrer"
									aria-label="aluamark-email"
									className="flex gap-1 hover:text-green-600"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="w-4 h-4"
									>
										<rect width="20" height="16" x="2" y="4" rx="2" />
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>

				<form
					ref={form}
					onSubmit={handleSubmit(sendEmail)}
					className="flex flex-col text-md text-zinc-900"
				>
					<div className="flex flex-col md:flex-row gap-5">
						<div className="flex flex-col gap-5 justify-between md:w-1/2">
							<div className="relative">
								<input
									{...register("user_name", { required: true })}
									name="user_name"
									type="text"
									className="p-3 w-full focus:outline-none"
									placeholder="Name"
									autoComplete="off"
									autoCapitalize="words"
								/>
								{errors.user_name?.type === "required" && (
									<div className="absolute -bottom-[1.15rem] text-red-500 text-xs">
										What's your name?
									</div>
								)}
							</div>

							<div className="relative">
								<input
									{...register("user_email", {
										required: true,
										pattern: /\S+@\S+\.\S+/,
									})}
									name="user_email"
									type="email"
									className="p-3 w-full focus:outline-none"
									placeholder="Email"
									autoComplete="off"
								/>
								{errors.user_email?.type === "required" && (
									<div className="absolute -bottom-[1.15rem] text-red-500 text-xs pt-1">
										Please include your email.
									</div>
								)}
								{errors.user_email?.type === "pattern" && (
									<div className="absolute -bottom-[1.15rem] text-red-500 text-xs pt-1">
										Please enter a valid email.
									</div>
								)}
							</div>
						</div>
						<div className="relative flex flex-col md:w-1/2">
							<textarea
								{...register("message", { required: true })}
								name="message"
								rows="4"
								className="p-2.5 w-full focus:outline-none"
								placeholder="Message"
								autoComplete="off"
								autoCapitalize="sentences"
							/>
							{errors.message?.type === "required" && (
								<div className="absolute -bottom-[1.15rem] text-red-500 text-xs">
									What do you want to tell me?
								</div>
							)}
						</div>
					</div>
					<div className="flex justify-end">
						{loading ? (
							<button
								className="flex justify-center items-center gap-1 w-36 mt-8 border border-green-500 bg-green-500 text-zinc-900 font-semibold px-5 py-2.5 disabled:opacity-50"
								disabled
							>
								Sending
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
								className="flex justify-center items-center gap-2.5 w-36 mt-8 border border-green-500 hover:bg-green-500 text-neutral-300 hover:text-zinc-900 hover:font-semibold duration-300 px-5 py-2.5"
							>
								Send
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="w-4 h-4"
								>
									<line x1="22" x2="11" y1="2" y2="13" />
									<polygon points="22 2 15 22 11 13 2 9 22 2" />
								</svg>
							</button>
						)}
					</div>
				</form>
			</div>
			<ToastContainer />
		</Box>
	);
};

export default Contact;
