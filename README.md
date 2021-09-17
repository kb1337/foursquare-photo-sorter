# Foursquare Photo Sorter

This script can be used for the sort photos on the foursquare page in **chronological order**.

Note: It sorts only the photos that appear on the page. You should re-execute the script after clicking `Show more photos`

### Language Support

- English (foursquare.com)
- Turkish (tr.foursquare.com)

### Quick Start

You can use the [bookmarklet](https://mrcoles.com/bookmarklet) version of the script on bookmarks.

```JS
javascript:(function()%7Bfunction formatDate(myDate) %7Blet month_names %3D %5B"January"%2C "February"%2C "March"%2C "April"%2C "May"%2C "June"%2C "July"%2C "August"%2C "September"%2C "October"%2C "November"%2C "December"%5D%3Blet date_days_ago %3D myDate.match(%2F(%5B0-9%5D*) day%2F)%3Blet date_weeks_ago %3D myDate.match(%2F(%5B0-9%5D*) week%2F)%3Bconst date_long %3D myDate.match(%2F(.*)%5Cs(%5B0-9%5D*)%2C%5Cs(%5B0-9%5D*)%2F)%3Bconst date_short %3D myDate.match(%2F(.*)%5Cs(%5B0-9%5D*)%2F)%3Bconst url %3D document.URL%3Bconst lang %3D url.match(%2F(%5Ba-zA-Z%5D*).foursquare%2F)%3Bif (lang%5B1%5D %3D%3D 'tr') %7Bmonth_names %3D %5B"Ocak"%2C "Şubat"%2C "Mart"%2C "Nisan"%2C "Mayıs"%2C "Haziran"%2C "Temmuz"%2C "Ağustos"%2C "Eylül"%2C "Ekim"%2C "Kasım"%2C "Aralık"%5D%3Bdate_days_ago %3D myDate.match(%2F(%5B0-9%5D*) gün önce%2F)%3Bdate_weeks_ago %3D myDate.match(%2F(%5B0-9%5D*) hafta önce%2F)%3B%7Dif (date_days_ago) %7Blet d %3D new Date()%3Bd.setDate(d.getDate() - parseInt(date_days_ago%5B1%5D))%3Byear %3D d.getFullYear()%3Bmonth %3D d.getMonth()%3Bday %3D d.getDate()%3B%7Delse if (date_weeks_ago) %7Blet d %3D new Date()%3Bd.setDate(d.getDate() - parseInt(date_weeks_ago%5B1%5D) * 7)%3Byear %3D d.getFullYear()%3Bmonth %3D d.getMonth()%3Bday %3D d.getDate()%3B%7Delse if (date_long) %7Byear %3D date_long%5B3%5D%3Bmonth %3D month_names.indexOf(date_long%5B1%5D)%3Bday %3D date_long%5B2%5D%3B%7Delse if (date_short) %7Byear %3D new Date().getFullYear()%3Bmonth %3D month_names.indexOf(date_short%5B1%5D)%3Bday %3D date_short%5B2%5D%3B%7Delse %7Blet year %3D 3000%2C month %3D 1%2C day %3D 1%3B%7Dreturn new Date(year%2C month%2C parseInt(day) %2B 1).toISOString().slice(0%2C 10)%3B%7Dfunction sortPhotos() %7Bconst photos %3D document.getElementsByClassName("photo")%3Blet photo_list %3D %5B%5D%3Bfor (const photo of photos) %7Bif (photo.id) %7Bdate %3D photo.getElementsByClassName("date")%5B0%5D.innerText%3Bdate %3D formatDate(date)%3Bphoto_list%5Bphoto_list.length%5D %3D %5Bphoto%2C date%5D%3B%7D%7Dphoto_list.sort(function (first%2C second) %7Breturn new Date(second%5B1%5D).getTime() - new Date(first%5B1%5D).getTime()%3B%7D)%3Breturn photo_list%3B%7Dfunction rearrangeDivs() %7Blet sorted_photos %3D sortPhotos()%3Blet photos_block %3D document.getElementsByClassName("photosBlock")%5B0%5D%3Bconst show_more %3D document.getElementsByClassName("startAutoLoad")%5B0%5D%3Bphotos_block.innerHTML %3D ''%3Bfor (const photo of sorted_photos) %7Bphotos_block.append(photo%5B0%5D)%3B%7Dif (show_more) %7Bphotos_block.append(show_more)%3B%7Dconsole.log("Photos have been sorted.")%3B%7DrearrangeDivs()%7D)()
```

![bookmark](https://user-images.githubusercontent.com/73403802/126192029-bcd1365b-420a-43bb-9653-f5138a96974c.png)
