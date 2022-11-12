export default {
	build: {
		rollupOptions: {
			input: {
				rWarframe: "assets/rWarframe.scss",
				rPlaySoulframe: "assets/rPlaySoulframe.scss",
				rNSFWarframe: "assets/rNSFWarframe.scss"
			},
			output: {
				assetFileNames: "[name][extname]"
			}
		}
	}
}