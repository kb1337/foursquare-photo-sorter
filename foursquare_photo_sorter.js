function formatDate(myDate) {
	let month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let date_days_ago = myDate.match(/([0-9]*) day/);
	let date_weeks_ago = myDate.match(/([0-9]*) week/);
	let date_long = myDate.match(/(.*)\s([0-9]*),\s([0-9]*)/);
	let date_short = myDate.match(/(.*)\s([0-9]*)/);

	let url = document.URL;
	let lang = url.match(/([a-zA-Z]*).foursquare/);

	if (lang[1] == 'tr') {
		month_names = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
		date_days_ago = myDate.match(/([0-9]*) gün önce/);
		date_weeks_ago = myDate.match(/([0-9]*) hafta önce/);
	}

	if (date_days_ago) {
		let d = new Date();
		d.setDate(d.getDate() - parseInt(date_days_ago[1]));
		year = d.getFullYear();
		month = d.getMonth();
		day = d.getDate();
	}
	else if (date_weeks_ago) {
		let d = new Date();
		d.setDate(d.getDate() - parseInt(date_weeks_ago[1]) * 7);
		year = d.getFullYear();
		month = d.getMonth();
		day = d.getDate();
	}
	else if (date_long) {
		year = date_long[3];
		month = month_names.indexOf(date_long[1]);
		day = date_long[2];
	}
	else if (date_short) {
		year = new Date().getFullYear();
		month = month_names.indexOf(date_short[1]);
		day = date_short[2];
	}
	else {
		let year = 3000, month = 1, day = 1;
	}

	return new Date(year, month, parseInt(day) + 1).toISOString().slice(0, 10);
}

function sortPhotos() {
	let photos = document.getElementsByClassName("photo");
	let photo_list = [];
	for (const photo of photos) {
		if (photo.id) {
			date = photo.getElementsByClassName("date")[0].innerText;
			date = formatDate(date);
			photo_list[photo_list.length] = [photo, date];
		}
	}

	photo_list.sort(function (first, second) {
		return new Date(second[1]).getTime() - new Date(first[1]).getTime();
	});

	return photo_list;
}

function rearrangeDivs() {
	let sorted_photos = sortPhotos();
	let photos_block = document.getElementsByClassName("photosBlock")[0];
	let show_more = document.getElementsByClassName("startAutoLoad")[0];

	photos_block.innerHTML = '';

	for (const photo of sorted_photos) {
		photos_block.append(photo[0]);
	}
	if (show_more) {
		photos_block.append(show_more);
	}

	console.log("Photos have been sorted.");
}
rearrangeDivs();
