// Başlatma fonsiyonumuz

$(function() {
	init();
	console.log("Main Init Called");	
});

function InitFilesRanksBrd() {
	
	var index = 0;
	var file = FILES.FILE_A; // FILES.FILE_A = 0 dır.
	var rank = RANKS.RANK_1; // RANKS.RANK_1= 0 dır. 
	var sq = SQUARES.A1; // sq = SQUARES.A1 = 21 dir.

	// BRD_SQ_NUM = 120 dir.
	// 0 dan başlayıp 119 nolu kareye kadar git ve defs.js de tanımlanmış olan
	// "var FilesBrd = new Array(BRD_SQ_NUM); var RanksBrd = new Array(BRD_SQ_NUM);" ile 119
	// karenin tamamına SQUARES.OFFBOARD=100 değerini ata. Böylece her iki dizinin bütün elemanlarının 
	// değerleri 100 olur.

	var RanksBrd = new Array(BRD_SQ_NUM);

	// Burada tahtanın 120 karesi nin her bir karesi 100 değerine eşitlenmiştir.
	
	for(index = 0; index < BRD_SQ_NUM; ++index) {
		FilesBrd[index] = SQUARES.OFFBOARD;
		RanksBrd[index] = SQUARES.OFFBOARD;
	}
	// Aşağıdaki for döngüsüyle ise 8x8 lik tahtamızın başlangıç karesi olan 1.yatayın 1.sütunu
	// 21 değerini almıştır son yatayın son sütunu ise 98 değerini almıştır. Geri kalan tüm  kareler
	// yukarıdaki for döngüsüyle yapılmış 100 değerlerine sahiptir.

	// 1.yataydan 8.yataya kadar git ve her yatayın tüm sütunlarında
	// dolaşarak ( (21 + (file) ) + ( (rank) * 10 ) ) dönüşümünü uygulayarak 120 karelik 
	// tahtanın değeri 21 olan karesiyle değeri 98 olan karesi arasındaki
	// değerlerin satranç tahtası olarak tanınması sağlandı.
	// Örneğin 5. yataydaki 2.sütunun değeri bulunurken , yatay numaramız = rank = 4 alınır 
	// ve sütun numaramız = file = 1 alınır ve fonksiyonun sonucu (21+1) + ( 4*10) = 62 ye tekabül eder.
	// Çünkü bizim satranç tahtamızın 1.yatay satırnın rank değeri 0 olup aynı şekilde
	// 1.sütunumuzun sütun değeri de 0 olarak baz alınmıştır.

	for(rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
		for(file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
			sq = FR2SQ(file,rank);
			FilesBrd[sq] = file;
			RanksBrd[sq] = rank;
		}
	}

	// Test ediliyor aşağıdaki kodla.

	console.log("FilesBrd[0]:" + FilesBrd[0] + " RanksBrd[0]:" + RanksBrd[0]);
	console.log("FilesBrd[SQUARES.A1]:" + FilesBrd[SQUARES.A1] + " RanksBrd[SQUARES.A1]:" + RanksBrd[SQUARES.A1]);
	console.log("FilesBrd[SQUARES.E8]:" + FilesBrd[SQUARES.E8] + " RanksBrd[SQUARES.E8]:" + RanksBrd[SQUARES.E8]);

}

function init() {
	console.log("init() called");
	InitFilesRanksBrd();
}