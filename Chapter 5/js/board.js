// Global değişkenimiz = oyun tahtası
var GameBoard = {}; // Global değişkenimiz = oyun tahtası

// BRD_SQ_NUM değeri 120 olan sabit bir değerdir. Oyun tahtamız 120 kare olarak ilk etapta ele alınmıştır.
GameBoard.pieces = new Array(BRD_SQ_NUM);

// Gameboard.side  oynama sırasının beyaz da mı siyahta mı olduğunu gösterir.
GameBoard.side = COLOURS.WHITE;

// Satrançta hiç bir piyon hareketi yapılmaksızın 50 hamle yapılırsa(25 beyaz 25 siyah şeklinde)
// veya ilk 50 hamle boyunca iki taraftan birisi diğerinin piyonunu almazsa oyun beraberlikle sonuçlanır.
GameBoard.fiftyMove = 0;

// Şayet mesela siyah bir hamle yaptıdiyelim bu yarım hamle olarak tanımlanır. Gameboard.hisPly
// değeri 1 artar.
GameBoard.hisPly = 0;

// ply ise bir siyah ve bir beyazın ard arda birer hamle yapması sonucu 1 birim artar.
GameBoard.ply = 0;

// Rok yapılabileceğini ya da yapılamayacağını tutan değişkenimiz.
GameBoard.castlePerm = 0;