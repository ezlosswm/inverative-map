export type Lot = {
	id: number;
	status: LotStatus;
	points: string; // Polygon points in the plot image's coordinate space
	size: string;
	price: string;
	deposit: string;
};

export type LotStatus = 'available' | 'sold';

export const lots: Lot[] = [
	// Top row
	{
		id: 1,
		status: 'available',
		points: '191,300 294,300 294,385 191,385',
		size: '5,500 sq. ft.',
		price: 'BZ$62,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 2,
		status: 'available',
		points: '296,300 400,300 400,385 296,385',
		size: '5,400 sq. ft.',
		price: 'BZ$64,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 3,
		status: 'available',
		points: '402,300 506,300 506,385 402,385',
		size: '5,400 sq. ft.',
		price: 'BZ$61,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 4,
		status: 'available',
		points: '508,300 613,300 613,385 508,385',
		size: '5,500 sq. ft.',
		price: 'BZ$68,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 5,
		status: 'sold',
		points: '615,300 720,300 720,385 615,385',
		size: '5,500 sq. ft.',
		price: 'BZ$72,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 6,
		status: 'available',
		points: '722,300 827,300 827,385 722,385',
		size: '5,400 sq. ft.',
		price: 'BZ$63,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 7,
		status: 'available',
		points: '829,300 934,300 934,385 829,385',
		size: '5,400 sq. ft.',
		price: 'BZ$66,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 8,
		status: 'sold',
		points: '936,300 1058,300 1058,385 936,385',
		size: '6,200 sq. ft.',
		price: 'BZ$74,000',
		deposit: 'BZ$5,000'
	},

	// Second section - top row
	{
		id: 21,
		status: 'available',
		points: '191,425 289,425 289,530 191,530',
		size: '5,100 sq. ft.',
		price: 'BZ$60,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 20,
		status: 'available',
		points: '292,425 387,425 387,530 292,530',
		size: '5,000 sq. ft.',
		price: 'BZ$65,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 17,
		status: 'available',
		points: '390,425 485,425 485,530 390,530',
		size: '5,000 sq. ft.',
		price: 'BZ$69,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 16,
		status: 'available',
		points: '488,425 583,425 583,530 488,530',
		size: '5,000 sq. ft.',
		price: 'BZ$62,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 13,
		status: 'available',
		points: '586,425 681,425 681,530 586,530',
		size: '5,000 sq. ft.',
		price: 'BZ$71,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 12,
		status: 'available',
		points: '684,425 779,425 779,530 684,530',
		size: '5,000 sq. ft.',
		price: 'BZ$63,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 9,
		status: 'sold',
		points: '782,425 881,425 881,530 782,530',
		size: '5,200 sq. ft.',
		price: 'BZ$67,500',
		deposit: 'BZ$5,000'
	},

	// Second section - bottom row
	{
		id: 22,
		status: 'sold',
		points: '191,532 289,532 289,637 191,637',
		size: '5,100 sq. ft.',
		price: 'BZ$73,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 19,
		status: 'available',
		points: '292,532 387,532 387,637 292,637',
		size: '5,000 sq. ft.',
		price: 'BZ$61,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 18,
		status: 'available',
		points: '390,532 485,532 485,637 390,637',
		size: '5,000 sq. ft.',
		price: 'BZ$66,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 15,
		status: 'available',
		points: '488,532 583,532 583,637 488,637',
		size: '5,000 sq. ft.',
		price: 'BZ$70,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 14,
		status: 'available',
		points: '586,532 681,532 681,637 586,637',
		size: '5,000 sq. ft.',
		price: 'BZ$64,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 11,
		status: 'available',
		points: '684,532 779,532 779,637 684,637',
		size: '5,000 sq. ft.',
		price: 'BZ$62,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 10,
		status: 'available',
		points: '782,532 881,532 881,637 782,637',
		size: '5,200 sq. ft.',
		price: 'BZ$69,000',
		deposit: 'BZ$5,000'
	},

	// Third section - top row
	{
		id: 23,
		status: 'sold',
		points: '191,672 288,672 288,778 191,778',
		size: '5,100 sq. ft.',
		price: 'BZ$75,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 24,
		status: 'sold',
		points: '291,672 387,672 387,778 291,778',
		size: '5,000 sq. ft.',
		price: 'BZ$71,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 27,
		status: 'available',
		points: '390,672 485,672 485,778 390,778',
		size: '5,000 sq. ft.',
		price: 'BZ$63,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 30,
		status: 'available',
		points: '488,672 583,672 583,778 488,778',
		size: '5,000 sq. ft.',
		price: 'BZ$65,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 31,
		status: 'available',
		points: '586,672 681,672 681,778 586,778',
		size: '5,000 sq. ft.',
		price: 'BZ$60,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 34,
		status: 'available',
		points: '684,672 779,672 779,778 684,778',
		size: '5,000 sq. ft.',
		price: 'BZ$67,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 35,
		status: 'available',
		points: '782,672 881,672 881,778 782,778',
		size: '5,200 sq. ft.',
		price: 'BZ$72,000',
		deposit: 'BZ$5,000'
	},

	// Third section - bottom row
	{
		id: 26,
		status: 'sold',
		points: '191,780 288,780 288,884 191,884',
		size: '5,100 sq. ft.',
		price: 'BZ$74,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 25,
		status: 'available',
		points: '291,780 387,780 387,884 291,884',
		size: '5,000 sq. ft.',
		price: 'BZ$64,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 28,
		status: 'available',
		points: '390,780 485,780 485,884 390,884',
		size: '5,000 sq. ft.',
		price: 'BZ$68,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 29,
		status: 'available',
		points: '488,780 583,780 583,884 488,884',
		size: '5,000 sq. ft.',
		price: 'BZ$61,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 32,
		status: 'available',
		points: '586,780 681,780 681,884 586,884',
		size: '5,000 sq. ft.',
		price: 'BZ$66,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 33,
		status: 'available',
		points: '684,780 779,780 779,884 684,884',
		size: '5,000 sq. ft.',
		price: 'BZ$73,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 36,
		status: 'available',
		points: '782,780 881,780 881,884 782,884',
		size: '5,200 sq. ft.',
		price: 'BZ$60,500',
		deposit: 'BZ$5,000'
	},

	// Bottom section
	{
		id: 44,
		status: 'sold',
		points: '191,923 292,923 292,1035 191,1035',
		size: '5,500 sq. ft.',
		price: 'BZ$72,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 43,
		status: 'available',
		points: '295,923 390,923 390,1035 295,1035',
		size: '5,000 sq. ft.',
		price: 'BZ$65,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 42,
		status: 'available',
		points: '393,923 489,923 489,1035 393,1035',
		size: '5,100 sq. ft.',
		price: 'BZ$63,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 41,
		status: 'available',
		points: '492,923 587,923 587,1035 492,1035',
		size: '5,000 sq. ft.',
		price: 'BZ$69,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 40,
		status: 'available',
		points: '590,923 685,923 685,1035 590,1035',
		size: '5,000 sq. ft.',
		price: 'BZ$61,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 39,
		status: 'available',
		points: '688,923 783,923 783,1035 688,1035',
		size: '5,000 sq. ft.',
		price: 'BZ$67,500',
		deposit: 'BZ$5,000'
	},
	{
		id: 38,
		status: 'sold',
		points: '786,923 882,923 882,1035 786,1035',
		size: '5,100 sq. ft.',
		price: 'BZ$74,000',
		deposit: 'BZ$5,000'
	},
	{
		id: 37,
		status: 'sold',
		points: '885,923 1058,923 1058,1035 885,1035',
		size: '8,800 sq. ft.',
		price: 'BZ$75,000',
		deposit: 'BZ$5,000'
	}
];
