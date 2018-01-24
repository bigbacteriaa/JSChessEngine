// Her taşın index değerini hesaplayan fonksiyon

function PCEINDEX(pce, pceNum) {
	return (pce * 10 + pceNum);
}

var GameBoard = {};

GameBoard.pieces = new Array(BRD_SQ_NUM);
GameBoard.side = COLOURS.WHITE; // başlayan taraf varsayılan olarak oyun kuralı gereği beyazdır.
GameBoard.fiftyMove = 0; // 50 hamle kuralı
GameBoard.hisPly = 0;
GameBoard.ply = 0;
GameBoard.castlePerm = 0; // rok kontrolü
GameBoard.material = new Array(2); // beyaz ve siyah iki taş rengimiz vardır.
// Farklı beyaz taş tipi 6 dır farklı toplam siyah taş tipi 6 dır buna bir de boş tip eklenince 13 olur toplamları.
GameBoard.pceNum = new Array(13); // 
GameBoard.pList = new Array(14 * 10); 






































