import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ContactForm = () => {
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
		<form
			ref={form}
			onSubmit={handleSubmit(sendEmail)}
			className="nm-flat-neutral-50-lg border flex flex-col gap-3 p-5 w-full rounded-lg"
		>
			<h2 className="text-xl font-bold">Or send me an emai!</h2>
			<div className="flex flex-col gap-5">
				<div className="flex flex-col md:flex-row gap-5 justify-between">
					<div className="relative space-y-1 w-full">
						<label className="text-sm">Name</label>
						<input
							{...register("user_name", { required: true })}
							name="user_name"
							type="text"
							className="text-black p-2.5 w-full focus:outline-none bg-neutral-100 border rounded"
							autoComplete="off"
							autoCapitalize="words"
						/>
						{errors.user_name?.type === "required" && (
							<div className="absolute -bottom-[1.15rem] text-red-500 text-xs">
								What's your name?
							</div>
						)}
					</div>

					<div className="relative space-y-1 w-full">
						<label className="text-sm">Email</label>
						<input
							{...register("user_email", {
								required: true,
								pattern: /\S+@\S+\.\S+/,
							})}
							name="user_email"
							type="email"
							className="text-black p-2.5 w-full focus:outline-none bg-neutral-100 border rounded"
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
				<div className="relative space-y-1">
					<label className="text-sm">Message</label>
					<textarea
						{...register("message", { required: true })}
						name="message"
						rows="3"
						className="text-black p-2.5 w-full focus:outline-none bg-neutral-100 border rounded"
						autoComplete="off"
						autoCapitalize="sentences"
					/>
					{errors.message?.type === "required" && (
						<div className="absolute -bottom-[1rem] text-red-500 text-xs">
							What do you want to tell me?
						</div>
					)}
				</div>
			</div>
			<button
				type="submit"
				className="flex gap-1 justify-center items-center mt-5 px-5 py-3 text-white font-semibold rounded transition-all duration-500 bg-gradient-to-tl from-zinc-900 via-neutral-500 to-zinc-700 bg-size-200 bg-pos-0 hover:bg-pos-100 disabled:from-zinc-900 disabled:to-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
				disabled={loading}
			>
				{loading ? (
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
						class="animate-spin"
					>
						<line x1="12" x2="12" y1="2" y2="6" />
						<line x1="12" x2="12" y1="18" y2="22" />
						<line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
						<line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
						<line x1="2" x2="6" y1="12" y2="12" />
						<line x1="18" x2="22" y1="12" y2="12" />
						<line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
						<line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
					</svg>
				) : (
					"Send message"
				)}
			</button>
		</form>
	);
};

export default ContactForm;
