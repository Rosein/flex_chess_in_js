var PIECES = { EMPTY : 0, 
               WHITE_PAWN: 1, 
               WHITE_KNIGHT: 2,
               WHITE_BISHOP: 3,
               WHITE_ROOK: 4,
               WHITE_QUEEN: 5,
               WHITE_KING: 6,
               BLACK_PAWN: 7, 
               BLACK_KNIGHT: 8,
               BLACK_BISHOP: 9,
               BLACK_ROOK: 10,
               BLACK_QUEEN: 11,
               BLACK_KING: 12
               };
var BRD_SQ_NUM = 120;
var FILES = { FILE_A:0, FILE_B:1, FILE_C:2, FILE_D:3, FILE_E:4, FILE_F:5, FILE_G:6, FILE_H:7, FILE_NONE:8};
var RANKS = { RANK_1:0, RANK_2:1, RANK_3:2, RANK_4:3, RANK_5:4, RANK_6:5, RANK_7:6, RANK_8:7, RANK_NONE:8};
var COLOROUS = { WHITE:0, BLACK:1, BOTH: 2 };
var SQUARES = { A1:21, B1:22, C1:23, D1:24, E1:25, F1:26, G1:27, H1:28,
                A2:31, B2:32, C2:33, D2:34, E2:35, F2:36, G2:37, H2:38,
                A3:41, B3:42, C3:43, D3:44, E3:45, F3:46, G3:47, H3:48,
                A4:51, B4:52, C4:53, D4:54, E4:55, F4:56, G4:57, H4:58,
                A5:61, B5:62, C5:63, D5:64, E5:65, F5:66, G5:67, H5:68,
                A6:71, B6:72, C6:73, D6:74, E6:75, F6:76, G6:77, H6:78,
                A7:81, B7:82, C7:83, D7:84, E7:85, F7:86, G7:87, H7:88,
                A8:91, B8:92, C8:93, D8:94, E8:95, F8:96, G8:97, H8:98,
                NO_SQ:99, OFFBOARD: 100
            };
var BOOL = { FALSE:0, TRUE:1 }; 

var FilesBrd = new Array( BRD_SQ_NUM );
var RanksBrd = new Array( BRD_SQ_NUM );

function FR2SQ( f, r ) 
{
    return ( ( 21 + (f) ) + ( (r) * 10 ) );
}