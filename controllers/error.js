exports.get404 = (req, res, next) => {
	console.log(req.body.url);
	res.status(404).render('404', {
		pageTitle: 'Page Not Found',
		path: req.body.url,
	});
};
