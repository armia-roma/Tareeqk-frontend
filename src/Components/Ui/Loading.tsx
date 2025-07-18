const Loading = () => {
	return (
		<div>
			<div className="h-screen flex flex-col items-center justify-center bg-white/70 ">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
			</div>
		</div>
	);
};

export default Loading;
