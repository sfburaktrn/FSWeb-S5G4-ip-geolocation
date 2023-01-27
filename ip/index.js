//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

const mdatabase = {
  sorgu: "benimIpAdresim",
  durum: "OK",
  kıta: "Asia",
  ülke: "Turkey",
  ülkeKodu: "TR",
  ülkebayrağı: "https://apis.ergineer.com/ulkebayraklari/TR",
  bölge: "34",
  bölgeAdı: "Istanbul",
  şehir: "Istanbul",
  zip: "34025",
  enlem: 41.05510000000000303543856716714799404144287109375,
  boylam: 28.93469999999999942019712761975824832916259765625,
  saatdilimi: "Europe/Istanbul",
  parabirimi: "TRY",
  isp: "TurkNet Iletisim Hizmetleri A.S.",
  organizasyon: "Gayrettepe POP Dynamic",
  as: "AS12735 TurkNet Iletisim Hizmetleri A.S.",
};

let alan = document.querySelector(".cards");

function mDataip(mdatas) {
  let mDatadiv = document.createElement("div");
  mDatadiv.classList.add("card");

  let mDataimg = document.createElement("img");
  mDataimg.src = mdatas.ülkebayrağı;
  mDatadiv.appendChild(mDataimg);

  let m2d = document.createElement("div");
  m2d.classList.add("card-info");
  mDatadiv.appendChild(m2d);

  let mdatah3 = document.createElement("h3");
  mdatah3.classList.add("ip");
  mdatah3.textContent = mdatas.sorgu;
  m2d.appendChild(mdatah3);

  let mdulke = document.createElement("p");
  mdulke.classList.add("ulke");
  mdulke.textContent = `${mdatas.ülke} (${mdatas.ülkeKodu})`;
  m2d.appendChild(mdulke);

  let mdeb = document.createElement("p");
  mdeb.textContent = `Enlem: ${mdatas.enlem} Boylam: ${mdatas.boylam}`;
  m2d.appendChild(mdeb);

  let mdc = document.createElement("p");
  mdc.textContent = `Şehir:  ${mdatas.şehir}`;
  m2d.appendChild(mdc);

  let mdtime = document.createElement("p");
  mdtime.textContent = `Saat Dilimi: ${mdatas.saatdilimi}`;
  m2d.appendChild(mdtime);

  let mdpara = document.createElement("p");
  mdpara.textContent = `Para birimi: ${mdatas.parabirimi}`;
  m2d.appendChild(mdpara);

  let mdIsp = document.createElement("p");
  mdIsp.textContent = `ISP: ${mdatas.isp}`;
  m2d.appendChild(mdIsp);

  return mDatadiv;
}

// alan.appendChild(mDataip(mdatabase));

let connection = async function () {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipgeoapi/<benimIpAdresim>",
  })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .then(function (a) {
      alan.appendChild(mDataip(a));
    });
};

connection();
