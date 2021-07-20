# Foursquare Photo Sorter
This script can be used for the sort photos on the foursquare page in **chronological order**.

Note: It sorts only the photos that appear on the page. You should re-execute the script after clicking `Show more photos`

### Language Support
* English (foursquare.com)
* Turkish (tr.foursquare.com)


### Quick Start
You can use the [bookmarklet](https://mrcoles.com/bookmarklet) version of the script on bookmarks.

```JS
javascript:(function()%7Bfunction formatDate(myDate)%7Bvar monthNames %3D %5B "January"%2C "February"%2C "March"%2C "April"%2C "May"%2C "June"%2C "July"%2C "August"%2C "September"%2C "October"%2C "November"%2C "December" %5D%3Bvar datePartsDaysAgo %3D myDate.match(%2F(%5B0-9%5D*) day%2F)%3Bvar datePartsWeeksAgo %3D myDate.match(%2F(%5B0-9%5D*) week%2F)%3Bvar url %3D document.URL%3Bvar isTurkish %3D url.match(%2F(%5Ba-zA-Z%5D*).foursquare.*%2F)%3Bif (isTurkish%5B1%5D %3D%3D 'tr')%7BmonthNames %3D new Array("Ocak"%2C "Şubat"%2C "Mart"%2C "Nisan"%2C "Mayıs"%2C "Haziran"%2C "Temmuz"%2C "Ağustos"%2C "Eylül"%2C "Ekim"%2C "Kasım"%2C "Aralık")%3BdatePartsDaysAgo %3D myDate.match(%2F(%5B0-9%5D*) gün önce%2F)%3BdatePartsWeeksAgo %3D myDate.match(%2F(%5B0-9%5D*) hafta önce%2F)%3B%7Dvar datePartsLong %3D myDate.match(%2F(.*)%5Cs(%5B0-9%5D*)%2C%5Cs(%5B0-9%5D*)%2F)%3Bvar datePartsShort %3D myDate.match(%2F(.*)%5Cs(%5B0-9%5D*)%2F)%3Bif(datePartsDaysAgo)%7Bvar d %3D new Date()%3Bd.setDate(d.getDate() - parseInt(datePartsDaysAgo%5B1%5D))%3Byear %3D d.getFullYear()%3Bmonth %3D d.getMonth()%3Bday %3D d.getDate()%3B%7Delse if(datePartsWeeksAgo)%7Bvar d %3D new Date()%3Bd.setDate(d.getDate() - parseInt(datePartsWeeksAgo%5B1%5D) * 7)%3Byear %3D d.getFullYear()%3Bmonth %3D d.getMonth()%3Bday %3D d.getDate()%3B%7Delse if(datePartsLong)%7Byear %3D datePartsLong%5B3%5D%3Bmonth %3D monthNames.indexOf(datePartsLong%5B1%5D)%3Bday %3D datePartsLong%5B2%5D%3B%7Delse if(datePartsShort)%7Byear %3D new Date().getFullYear()%3Bmonth %3D monthNames.indexOf(datePartsShort%5B1%5D)%3Bday %3D datePartsShort%5B2%5D%3B%7Delse%7Bvar year %3D 3000%2C month %3D 1%2C day %3D 1%3B%7Dreturn new Date(year%2C month%2C parseInt(day) %2B 1).toISOString().slice(0%2C10)%3B%7Dfunction sortPhotos()%7Bvar photos %3D document.getElementsByClassName("photo")%3Bvar photoList %3D %5B%5D%3Bfor(const photo of photos)%7Bif(photo.id)%7Bdate %3D photo.getElementsByClassName("date")%5B0%5D.innerText%3Bdate %3D formatDate(date)%3BphotoList%5BphotoList.length%5D %3D %5Bphoto%2C date%5D%3B%7D%7DphotoList.sort(function(first%2C second) %7Breturn new Date(second%5B1%5D).getTime() - new Date(first%5B1%5D).getTime()%3B%7D)%3Breturn photoList%3B%7Dfunction rearrange_divs()%7Bvar sortedPhotos %3D sortPhotos()%3Bvar photosBlock %3D document.getElementsByClassName("photosBlock")%5B0%5D%3Bvar showMore %3D document.getElementsByClassName("startAutoLoad")%5B0%5D%3BphotosBlock.innerHTML %3D ''%3Bfor(const photo of sortedPhotos)%7BphotosBlock.append(photo%5B0%5D)%3B%7Dif(showMore)%7BphotosBlock.append(showMore)%3B%7Dconsole.log("Photos have been sorted.")%3B%7Drearrange_divs()%7D)()
```
![bookmark](https://user-images.githubusercontent.com/73403802/126192029-bcd1365b-420a-43bb-9653-f5138a96974c.png)
