// Burada ileride kullanacağımız araçların tanımlarını yapıyoruz.
// w : white piece leri temsil etmektedir. P:Pawn N:Knight B:Bishop Q:Queen R:Rook
// Örneğin "bR" : blackRook demektir ve değeri 10 a işaret etmektedir yani siyah kale taşını temsil eder.
var PIECES =  { EMPTY : 0, wP : 1, wN : 2, wB : 3,wR : 4, wQ : 5, wK : 6, 
              bP : 7, bN : 8, bB : 9, bR : 10, bQ : 11, bK : 12  };
 
 // İlk etapta tahtamız 120 kare olarak ele alındı.             
var BRD_SQ_NUM = 120;

// Sütunlara değerler atandı.
var FILES =  { FILE_A:0, FILE_B:1, FILE_C:2, FILE_D:3, 
	FILE_E:4, FILE_F:5, FILE_G:6, FILE_H:7, FILE_NONE:8 };

// Yatay sıralara değerler atandı.	
var RANKS =  { RANK_1:0, RANK_2:1, RANK_3:2, RANK_4:3, 
	RANK_5:4, RANK_6:5, RANK_7:6, RANK_8:7, RANK_NONE:8 };

// Taşların renkleri tanımlandı.	
var COLOURS = { WHITE:0, BLACK:1, BOTH:2 };

// 64 kareli satranç tahtasında her kareye denk gelen sayılar tanımlandı.
var SQUARES = {
  A1:21, B1:22, C1:23, D1:24, E1:25, F1:26, G1:27, H1:28,  
  A8:91, B8:92, C8:93, D8:94, E8:95, F8:96, G8:97, H8:98, 
  NO_SQ:99, OFFBOARD:100
};

// Karmaşıklık çıkmaması için ileride, true ve false sayısal değerlere çevrildi.
var BOOL = { FALSE:0, TRUE:1 };