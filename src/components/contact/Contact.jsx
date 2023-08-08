import React from "react";
import GradientLink from "../GradientLink";
import ChevronDownSVG from "../svg/ChevronDownSVG";
import PhoneSVG from "../svg/PhoneSVG";
import EmailSVG from "../svg/EmailSVG";
import LinkedInSVG from "../svg/LinkedInSVG";
import SectionFrame from "../SectionFrame";
import SectionHeader from "../SectionHeader";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<SectionFrame id="contact">
			<SectionHeader title="Contact" />

			<div className="flex flex-col md:flex-row gap-10 px-5" data-aos="fade-up">
				<div className="flex flex-col justify-center items-center gap-3 w-full text-center md:text-start">
					<p className="text-xl font-bold">
						Interested in hiring me? Let's connect!
					</p>

					<div className="flex justify-center md:justify-start items-center gap-1">
						<PhoneSVG />
						<span className="tracking-wide select-text">(+63)936-341-1848</span>
					</div>

					<div className="flex justify-center md:justify-start">
						<a
							href="mailto:aluamark@gmail.com"
							target="_blank"
							rel="noreferrer"
							aria-label="aluamark-email"
							className="flex items-center gap-1 hover:text-green-600"
						>
							<EmailSVG />
							<span className="tracking-wide select-text">
								aluamark@gmail.com
							</span>
						</a>
					</div>

					<div className="flex justify-center md:justify-start">
						<a
							href="https://www.linkedin.com/in/aluamark/"
							target="_blank"
							rel="noreferrer"
							aria-label="aluamark-linkedIn"
							className="flex items-center gap-1 hover:text-green-600"
						>
							<LinkedInSVG />
							<span className="tracking-wide select-text">LinkedIn</span>
						</a>
					</div>

					<div className="flex flex-col gap-3 items-center pt-5">
						<p>You can also view / download my resume here</p>
						<ChevronDownSVG className="animate-bounce" />
						<GradientLink
							linkTo="https://drive.google.com/file/d/1TUGBKIBE6sGY0gj6pD8hXuctHAL-6wr2/view?usp=sharing"
							title="View / Download my resume"
							target="_blank"
						/>
					</div>
				</div>
				<ContactForm />
			</div>
		</SectionFrame>
	);
};

export default Contact;
