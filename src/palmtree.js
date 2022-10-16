addEventListener("load", () => {
	const graphic = document.getElementsByTagName("header")[0]
	const nav = document.getElementsByTagName("nav")[0]

	addEventListener("scroll", () => {
		nav.style.background = scrollY > 0 ? "rgba(0, 0, 0, .33)" : "rgba(0, 0, 0, 0)"
	})
})
