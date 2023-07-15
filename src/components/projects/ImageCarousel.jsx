import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const ChevronRightIcon = ({ className }) => {
	return (
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
			className={className}
		>
			<path d="m9 18 6-6-6-6" />
		</svg>
	);
};

const ChevronLeftIcon = ({ className }) => {
	return (
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
			className={className}
		>
			<path d="m15 18-6-6 6-6" />
		</svg>
	);
};

const ImageCarousel = ({ slides }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
		containScroll: "keepSnaps",
		dragFree: true,
	});
	const [selectedIndex, setSelectedIndex] = useState(0);

	const updateCurrent = () => {
		if (!emblaApi || !emblaThumbsApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
		emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
	};

	const handlePrevious = () => {
		emblaApi?.scrollPrev();
		updateCurrent();
	};

	const handleNext = () => {
		emblaApi?.scrollNext();
		updateCurrent();
	};

	const handleDotClick = (index) => {
		if (!emblaApi || !emblaThumbsApi) return;
		emblaApi.scrollTo(index);
		updateCurrent();
	};

	return (
		<div className="space-y-5 pt-5">
			<div className="relative">
				<button
					aria-label="go to previous slide"
					onClick={handlePrevious}
					className="h-8 w-8 rounded-full flex items-center justify-center bg-white bg-opacity-40  absolute top-1/2 -translate-y-1/2 z-10 shadow-md left-4 text-black"
				>
					<ChevronLeftIcon className="w-5 h-5" />
				</button>
				<button
					aria-label="go to next slide"
					onClick={handleNext}
					className="h-8 w-8 rounded-full flex items-center justify-center bg-white bg-opacity-40 absolute top-1/2 -translate-y-1/2 z-10 shadow-md right-4 text-black"
				>
					<ChevronRightIcon className="w-5 h-5" />
				</button>
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex">
						{slides &&
							slides.map((slide, index) => (
								<div key={index} className="flex-[0_0_100%] aspect-video mx-4">
									<img
										src={slide.url}
										alt="sample"
										className="w-full h-full object-contain rounded-lg"
									/>
								</div>
							))}
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-3">
				{slides.map((slide, index) => (
					<button
						key={index}
						onClick={() => handleDotClick(index)}
						className={`w-3 h-3 rounded-full ${
							index === selectedIndex ? "bg-neutral-300" : "bg-neutral-500"
						}`}
					>
						<span className="sr-only">go to slide {index + 1}</span>
					</button>
				))}
			</div>
			<div className="overflow-hidden" ref={emblaThumbsRef}>
				<div className="flex gap-3">
					{slides.map((thumb, index) => (
						<button
							key={index}
							onClick={() => handleDotClick(index)}
							className="flex-[0_0_26%]"
						>
							<span className="sr-only">scroll to slide {index + 1}</span>
							<div
								className={`flex justify-center w-full ${
									index === selectedIndex ? "opacity-100" : "opacity-40"
								}`}
							>
								<img
									src={thumb.url}
									alt="thumbnail"
									className="object-cover rounded-lg max-h-[100px]"
								/>
							</div>
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default ImageCarousel;
