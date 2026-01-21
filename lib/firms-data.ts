// Shared prop firm data for programmatic SEO pages
import type { Locale } from '@/lib/i18n/config';

export interface PropFirm {
    id: number;
    slug: string;
    name: string;
    rating: number;
    verified: boolean;
    maxDD: string;
    profitSplit: string;
    price: string;
    oldPrice: string;
    coupon: string;
    offer: string;
    link: string;
    logoUrl: string;
    platforms: string[];
    challengeType: '2-Step' | '1-Step' | 'Instant';
    marketType: 'forex' | 'futures';
    features: {
        instantFunding: boolean;
        hftAllowed: boolean;
        newsTrading: boolean;
        cryptoPayout: boolean;
        usaAccepted: boolean;
        noTimeLimit: boolean;
        weeklyPayouts: boolean;
    };
    payoutDays: number;
    capitalPricing: {
        [key: number]: { price: string; oldPrice: string };
    };
    // SEO & Content
    description: {
        en: string;
        ro: string;
        es: string;
    };
    pros: {
        en: string[];
        ro: string[];
        es: string[];
    };
    cons: {
        en: string[];
        ro: string[];
        es: string[];
    };
}

export const allPropFirms: PropFirm[] = [
    {
        id: 1,
        slug: 'ftmo',
        name: 'FTMO',
        rating: 4.9,
        verified: true,
        maxDD: '10%',
        profitSplit: '80-90%',
        price: '$476',
        oldPrice: '$595',
        coupon: 'No Code',
        offer: '20% OFF',
        link: 'https://trader.ftmo.com/?affiliates=4354',
        logoUrl: '/logos/ftmo.png',
        platforms: ['MT4/5', 'cTrader', 'DXtrade'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: false,
            noTimeLimit: true,
            weeklyPayouts: false,
        },
        payoutDays: 14,
        capitalPricing: {
            10000: { price: '$170', oldPrice: '$170' },
            25000: { price: '$275', oldPrice: '$275' },
            50000: { price: '$380', oldPrice: '$380' },
            100000: { price: '$476', oldPrice: '$595' },
            200000: { price: '$1190', oldPrice: '$1190' },
        },
        description: {
            en: 'FTMO is the most trusted prop trading firm in the industry. With over 7 years of experience and $100M+ paid to traders, FTMO offers a reliable path to funded trading with transparent rules and consistent payouts.',
            ro: 'FTMO este cea mai de încredere firmă prop trading din industrie. Cu peste 7 ani de experiență și $100M+ plătite traderilor, FTMO oferă o cale fiabilă către trading finanțat cu reguli transparente și plăți consistente.',
            es: 'FTMO es la firma de prop trading más confiable de la industria. Con más de 7 años de experiencia y $100M+ pagados a traders, FTMO ofrece un camino confiable hacia el trading financiado con reglas transparentes y pagos consistentes.'
        },
        pros: {
            en: ['Industry leader with best reputation', 'Transparent and fair rules', 'Up to 90% profit split', 'Multiple platform options', 'No time limit on challenges'],
            ro: ['Lider în industrie cu cea mai bună reputație', 'Reguli transparente și corecte', 'Până la 90% împărțire profit', 'Multiple opțiuni de platformă', 'Fără limită de timp la challenge'],
            es: ['Líder de la industria con mejor reputación', 'Reglas transparentes y justas', 'Hasta 90% división de ganancias', 'Múltiples opciones de plataforma', 'Sin límite de tiempo en desafíos']
        },
        cons: {
            en: ['Higher prices than competitors', 'Not available in USA', 'No HFT/scalping allowed'],
            ro: ['Prețuri mai mari decât concurenții', 'Nu este disponibil în SUA', 'HFT/scalping nu este permis'],
            es: ['Precios más altos que competidores', 'No disponible en EE.UU.', 'HFT/scalping no permitido']
        }
    },
    {
        id: 2,
        slug: 'tradingcult',
        name: 'TradingCult',
        rating: 4.8,
        verified: true,
        maxDD: '10%',
        profitSplit: 'Up to 95%',
        price: '$299',
        oldPrice: '$499',
        coupon: 'NEWYEAR',
        offer: '40% OFF + Free Account',
        link: 'https://my.tradingcult.com//challenges?affiliateId=hgc',
        logoUrl: '/logos/tradingcult.png',
        platforms: ['MT4'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: true,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: true,
            noTimeLimit: true,
            weeklyPayouts: false,
        },
        payoutDays: 14,
        capitalPricing: {
            10000: { price: '$59', oldPrice: '$99' },
            25000: { price: '$119', oldPrice: '$199' },
            50000: { price: '$179', oldPrice: '$299' },
            100000: { price: '$299', oldPrice: '$499' },
            200000: { price: '$599', oldPrice: '$999' },
        },
        description: {
            en: 'TradingCult offers some of the best value in prop trading with up to 95% profit split and competitive pricing. Known for fast payouts and instant funding options.',
            ro: 'TradingCult oferă unele dintre cele mai bune valori în prop trading cu până la 95% împărțire profit și prețuri competitive. Cunoscut pentru plăți rapide și opțiuni de finanțare instantă.',
            es: 'TradingCult ofrece algunos de los mejores valores en prop trading con hasta 95% de división de ganancias y precios competitivos. Conocido por pagos rápidos y opciones de financiación instantánea.'
        },
        pros: {
            en: ['Up to 95% profit split', 'USA traders accepted', 'Instant funding available', 'Competitive pricing', 'Fast payouts'],
            ro: ['Până la 95% împărțire profit', 'Traderi din SUA acceptați', 'Finanțare instantă disponibilă', 'Prețuri competitive', 'Plăți rapide'],
            es: ['Hasta 95% división de ganancias', 'Traders de EE.UU. aceptados', 'Financiación instantánea disponible', 'Precios competitivos', 'Pagos rápidos']
        },
        cons: {
            en: ['MT4 only', 'Newer firm', 'Less established reputation'],
            ro: ['Doar MT4', 'Firmă mai nouă', 'Reputație mai puțin stabilită'],
            es: ['Solo MT4', 'Firma más nueva', 'Reputación menos establecida']
        }
    },
    {
        id: 3,
        slug: 'fundednext',
        name: 'FundedNext',
        rating: 4.8,
        verified: true,
        maxDD: '10%',
        profitSplit: '80-95%',
        price: '$549',
        oldPrice: '$549',
        coupon: 'REF6ZHN86',
        offer: '10% OFF',
        link: 'https://fundednext.com/',
        logoUrl: '/logos/fundednext.png',
        platforms: ['MT4', 'MT5', 'cTrader', 'Match-Trader'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: false,
            noTimeLimit: true,
            weeklyPayouts: true,
        },
        payoutDays: 1,
        capitalPricing: {
            6000: { price: '$59', oldPrice: '$59' },
            15000: { price: '$119', oldPrice: '$119' },
            25000: { price: '$199', oldPrice: '$199' },
            50000: { price: '$299', oldPrice: '$299' },
            100000: { price: '$549', oldPrice: '$549' },
            200000: { price: '$1099', oldPrice: '$1099' },
        },
        description: {
            en: 'FundedNext offers one of the fastest payout systems in the industry with same-day processing. They feature 15% profit sharing during the challenge phase and up to 95% after.',
            ro: 'FundedNext oferă unul dintre cele mai rapide sisteme de plată din industrie cu procesare în aceeași zi. Oferă 15% împărtășire profit în timpul fazei de challenge și până la 95% după.',
            es: 'FundedNext ofrece uno de los sistemas de pago más rápidos de la industria con procesamiento el mismo día. Ofrecen 15% de participación en ganancias durante la fase de desafío y hasta 95% después.'
        },
        pros: {
            en: ['Same-day payouts', 'Earn 15% during challenge', 'Multiple platforms', 'Up to 95% profit split', 'Weekly payouts available'],
            ro: ['Plăți în aceeași zi', 'Câștigă 15% în timpul challenge-ului', 'Platforme multiple', 'Până la 95% împărțire profit', 'Plăți săptămânale disponibile'],
            es: ['Pagos el mismo día', 'Gana 15% durante el desafío', 'Múltiples plataformas', 'Hasta 95% división de ganancias', 'Pagos semanales disponibles']
        },
        cons: {
            en: ['Not available in USA', 'Higher starting prices', 'Strict trading rules'],
            ro: ['Nu este disponibil în SUA', 'Prețuri de start mai mari', 'Reguli de trading stricte'],
            es: ['No disponible en EE.UU.', 'Precios iniciales más altos', 'Reglas de trading estrictas']
        }
    },
    {
        id: 4,
        slug: 'fundingpips',
        name: 'FundingPips',
        rating: 4.8,
        verified: true,
        maxDD: '10%',
        profitSplit: '80-100%',
        price: '$399',
        oldPrice: '$399',
        coupon: 'b5420489',
        offer: '20% OFF',
        link: 'https://app.fundingpips.com/register?ref=b5420489',
        logoUrl: '/logos/fundingpips.png',
        platforms: ['Match-Trader', 'cTrader', 'TradeLocker'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: false,
            noTimeLimit: true,
            weeklyPayouts: true,
        },
        payoutDays: 7,
        capitalPricing: {
            5000: { price: '$32', oldPrice: '$32' },
            10000: { price: '$60', oldPrice: '$60' },
            25000: { price: '$139', oldPrice: '$139' },
            50000: { price: '$239', oldPrice: '$239' },
            100000: { price: '$399', oldPrice: '$399' },
        },
        description: {
            en: 'FundingPips offers up to 100% profit split with scaling and some of the fastest payouts in the industry. Known for fair rules and excellent customer support.',
            ro: 'FundingPips oferă până la 100% împărțire profit cu scaling și unele dintre cele mai rapide plăți din industrie. Cunoscut pentru reguli corecte și suport excelent.',
            es: 'FundingPips ofrece hasta 100% de división de ganancias con escalado y algunos de los pagos más rápidos de la industria. Conocido por reglas justas y excelente soporte.'
        },
        pros: {
            en: ['Up to 100% profit split', 'Weekly payouts', 'Competitive pricing', 'No time limit', 'Multiple modern platforms'],
            ro: ['Până la 100% împărțire profit', 'Plăți săptămânale', 'Prețuri competitive', 'Fără limită de timp', 'Platforme moderne multiple'],
            es: ['Hasta 100% división de ganancias', 'Pagos semanales', 'Precios competitivos', 'Sin límite de tiempo', 'Múltiples plataformas modernas']
        },
        cons: {
            en: ['Not available in USA', 'No MT4/MT5', 'Newer in the market'],
            ro: ['Nu este disponibil în SUA', 'Fără MT4/MT5', 'Mai nou pe piață'],
            es: ['No disponible en EE.UU.', 'Sin MT4/MT5', 'Más nuevo en el mercado']
        }
    },
    {
        id: 5,
        slug: 'funderpro',
        name: 'FunderPro',
        rating: 4.8,
        verified: true,
        maxDD: '10%',
        profitSplit: '80-90%',
        price: '$549',
        oldPrice: '$549',
        coupon: 'hgc',
        offer: '20% OFF',
        link: 'https://funderpro.cxclick.com/visit/?bta=35241&brand=funderpro',
        logoUrl: '/logos/funderpro.png',
        platforms: ['TradeLocker', 'MT4', 'MT5', 'cTrader'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: false,
            noTimeLimit: true,
            weeklyPayouts: true,
        },
        payoutDays: 1,
        capitalPricing: {
            25000: { price: '$249', oldPrice: '$249' },
            50000: { price: '$349', oldPrice: '$349' },
            100000: { price: '$549', oldPrice: '$549' },
            200000: { price: '$1099', oldPrice: '$1099' },
        },
        description: {
            en: 'FunderPro offers same-day payouts and a wide range of platforms including the popular TradeLocker. Great for traders who want fast access to their profits.',
            ro: 'FunderPro oferă plăți în aceeași zi și o gamă largă de platforme inclusiv popularul TradeLocker. Excelent pentru traderii care doresc acces rapid la profiturile lor.',
            es: 'FunderPro ofrece pagos el mismo día y una amplia gama de plataformas incluyendo el popular TradeLocker. Excelente para traders que quieren acceso rápido a sus ganancias.'
        },
        pros: {
            en: ['Same-day payouts', 'Multiple platforms', 'Weekly payouts', 'No time limit', '20% permanent discount'],
            ro: ['Plăți în aceeași zi', 'Platforme multiple', 'Plăți săptămânale', 'Fără limită de timp', '20% reducere permanentă'],
            es: ['Pagos el mismo día', 'Múltiples plataformas', 'Pagos semanales', 'Sin límite de tiempo', '20% descuento permanente']
        },
        cons: {
            en: ['Not available in USA', 'Higher starting capital', 'No HFT allowed'],
            ro: ['Nu este disponibil în SUA', 'Capital de start mai mare', 'HFT nu este permis'],
            es: ['No disponible en EE.UU.', 'Capital inicial más alto', 'HFT no permitido']
        }
    },
    {
        id: 6,
        slug: 'the-concept-trading',
        name: 'The Concept Trading',
        rating: 4.8,
        verified: true,
        maxDD: '6% (Static)',
        profitSplit: 'Up to 90%',
        price: '$648',
        oldPrice: '$997',
        coupon: 'RESOLVE35',
        offer: '35% OFF',
        link: 'https://theconcepttrading.com/ref/1837/',
        logoUrl: '/logos/the-trading-concept.jpg',
        platforms: ['MT4', 'MT5'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: true,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: true,
            noTimeLimit: true,
            weeklyPayouts: true,
        },
        payoutDays: 2,
        capitalPricing: {
            5000: { price: '$65', oldPrice: '$65' },
            10000: { price: '$110', oldPrice: '$110' },
            100000: { price: '$648', oldPrice: '$997' },
        },
        description: {
            en: 'The Concept Trading is known for instant funding options and accepting USA traders. They use a static drawdown which some traders prefer for better risk management.',
            ro: 'The Concept Trading este cunoscut pentru opțiuni de finanțare instantă și acceptarea traderilor din SUA. Folosesc un drawdown static pe care unii traderi îl preferă pentru un management mai bun al riscului.',
            es: 'The Concept Trading es conocido por opciones de financiación instantánea y aceptar traders de EE.UU. Usan un drawdown estático que algunos traders prefieren para mejor gestión de riesgo.'
        },
        pros: {
            en: ['USA traders accepted', 'Instant funding option', 'Static drawdown', 'Fast 2-day payouts', '35% discount available'],
            ro: ['Traderi din SUA acceptați', 'Opțiune de finanțare instantă', 'Drawdown static', 'Plăți rapide în 2 zile', '35% reducere disponibilă'],
            es: ['Traders de EE.UU. aceptados', 'Opción de financiación instantánea', 'Drawdown estático', 'Pagos rápidos en 2 días', '35% descuento disponible']
        },
        cons: {
            en: ['Stricter 6% drawdown', 'Limited platform options', 'Higher base prices'],
            ro: ['Drawdown mai strict de 6%', 'Opțiuni limitate de platformă', 'Prețuri de bază mai mari'],
            es: ['Drawdown más estricto del 6%', 'Opciones de plataforma limitadas', 'Precios base más altos']
        }
    },
    {
        id: 7,
        slug: 'funderpro-futures',
        name: 'FunderPro Futures',
        rating: 4.7,
        verified: true,
        maxDD: '10%',
        profitSplit: '80-90%',
        price: '$549',
        oldPrice: '$549',
        coupon: 'hgc',
        offer: '20% OFF',
        link: 'https://checkout.funderprofutures.com/products?aff=hgc',
        logoUrl: '/logos/funderpro-futures.png',
        platforms: ['TradeLocker', 'NinjaTrader', 'Rithmic'],
        challengeType: '2-Step',
        marketType: 'futures',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: true,
            noTimeLimit: true,
            weeklyPayouts: true,
        },
        payoutDays: 1,
        capitalPricing: {
            25000: { price: '$249', oldPrice: '$249' },
            50000: { price: '$349', oldPrice: '$349' },
            100000: { price: '$549', oldPrice: '$549' },
            200000: { price: '$1099', oldPrice: '$1099' },
        },
        description: {
            en: 'FunderPro Futures brings the same reliable service to futures traders. Same-day payouts, USA accepted, and competitive pricing make it a top choice for futures trading.',
            ro: 'FunderPro Futures aduce același serviciu de încredere traderilor de futures. Plăți în aceeași zi, SUA acceptat și prețuri competitive îl fac o alegere de top pentru trading pe futures.',
            es: 'FunderPro Futures trae el mismo servicio confiable a traders de futuros. Pagos el mismo día, EE.UU. aceptado y precios competitivos lo hacen una opción top para trading de futuros.'
        },
        pros: {
            en: ['Same-day payouts', 'USA traders accepted', 'Weekly payouts', 'Multiple futures platforms', '20% permanent discount'],
            ro: ['Plăți în aceeași zi', 'Traderi din SUA acceptați', 'Plăți săptămânale', 'Platforme multiple de futures', '20% reducere permanentă'],
            es: ['Pagos el mismo día', 'Traders de EE.UU. aceptados', 'Pagos semanales', 'Múltiples plataformas de futuros', '20% descuento permanente']
        },
        cons: {
            en: ['Futures only', 'Higher capital requirements', 'Newer in the market'],
            ro: ['Doar futures', 'Cerințe de capital mai mari', 'Mai nou pe piață'],
            es: ['Solo futuros', 'Requisitos de capital más altos', 'Más nuevo en el mercado']
        }
    },

    {
        id: 9,
        slug: 'fundedx',
        name: 'FundedX',
        rating: 4.7,
        verified: true,
        maxDD: '10%',
        profitSplit: '80%',
        price: '$500',
        oldPrice: '$500',
        coupon: 'HELLO2026',
        offer: '20% OFF',
        link: 'https://prop.fundedx.com/buy-challenge/?referral=d79822dc',
        logoUrl: '/logos/fundedx.jpg',
        platforms: ['cTrader', 'DXtrade', 'Match-Trader'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: true,
            noTimeLimit: true,
            weeklyPayouts: true,
        },
        payoutDays: 14,
        capitalPricing: {
            5000: { price: '$50', oldPrice: '$50' },
            10000: { price: '$95', oldPrice: '$95' },
            25000: { price: '$200', oldPrice: '$200' },
            50000: { price: '$300', oldPrice: '$300' },
            100000: { price: '$500', oldPrice: '$500' },
            200000: { price: '$950', oldPrice: '$950' },
        },
        description: {
            en: 'FundedX accepts USA traders and offers weekly payouts with multiple modern trading platforms. A solid choice for traders seeking flexibility.',
            ro: 'FundedX acceptă traderi din SUA și oferă plăți săptămânale cu platforme moderne de trading. O alegere solidă pentru traderii care caută flexibilitate.',
            es: 'FundedX acepta traders de EE.UU. y ofrece pagos semanales con múltiples plataformas modernas. Una elección sólida para traders que buscan flexibilidad.'
        },
        pros: {
            en: ['USA traders accepted', 'Weekly payouts', 'Multiple platforms', 'No time limit', 'Competitive pricing'],
            ro: ['Traderi din SUA acceptați', 'Plăți săptămânale', 'Platforme multiple', 'Fără limită de timp', 'Prețuri competitive'],
            es: ['Traders de EE.UU. aceptados', 'Pagos semanales', 'Múltiples plataformas', 'Sin límite de tiempo', 'Precios competitivos']
        },
        cons: {
            en: ['Only 80% profit split', '14-day payout cycle', 'No MT4/MT5'],
            ro: ['Doar 80% împărțire profit', 'Ciclu de plată de 14 zile', 'Fără MT4/MT5'],
            es: ['Solo 80% división de ganancias', 'Ciclo de pago de 14 días', 'Sin MT4/MT5']
        }
    },
    {
        id: 10,
        slug: 'dominion-funding',
        name: 'Dominion Funding',
        rating: 4.6,
        verified: true,
        maxDD: '10%',
        profitSplit: '80%',
        price: '$549',
        oldPrice: '$549',
        coupon: 'PROPHUB',
        offer: '30% OFF',
        link: 'https://dominionfunding.trade//?affId=06bqracaI4',
        logoUrl: '/logos/dominion-funding.png',
        platforms: ['cTrader', 'Match-Trader'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: false,
            noTimeLimit: true,
            weeklyPayouts: false,
        },
        payoutDays: 14,
        capitalPricing: {
            7500: { price: '$89', oldPrice: '$89' },
            10000: { price: '$119', oldPrice: '$119' },
            25000: { price: '$249', oldPrice: '$249' },
            50000: { price: '$349', oldPrice: '$349' },
            100000: { price: '$549', oldPrice: '$549' },
        },
        description: {
            en: 'Dominion Funding offers a 30% discount with modern platforms. Good option for forex traders looking for value.',
            ro: 'Dominion Funding oferă o reducere de 30% cu platforme moderne. Opțiune bună pentru traderii forex care caută valoare.',
            es: 'Dominion Funding ofrece un 30% de descuento con plataformas modernas. Buena opción para traders de forex que buscan valor.'
        },
        pros: {
            en: ['30% permanent discount', 'Modern platforms', 'No time limit', 'Competitive pricing', 'Crypto payouts'],
            ro: ['30% reducere permanentă', 'Platforme moderne', 'Fără limită de timp', 'Prețuri competitive', 'Plăți crypto'],
            es: ['30% descuento permanente', 'Plataformas modernas', 'Sin límite de tiempo', 'Precios competitivos', 'Pagos crypto']
        },
        cons: {
            en: ['Not available in USA', 'Only 80% profit split', 'No weekly payouts'],
            ro: ['Nu este disponibil în SUA', 'Doar 80% împărțire profit', 'Fără plăți săptămânale'],
            es: ['No disponible en EE.UU.', 'Solo 80% división de ganancias', 'Sin pagos semanales']
        }
    },
    {
        id: 11,
        slug: 'funded-futures-network',
        name: 'Funded Futures Network',
        rating: 4.6,
        verified: true,
        maxDD: '8%',
        profitSplit: '80%',
        price: '$299',
        oldPrice: '$598',
        coupon: 'T2ISFNWP',
        offer: '50% OFF',
        link: 'https://www.fundedfuturesnetwork.com/?via=herghiligiu-cristian',
        logoUrl: '/logos/funded-futures-network.png',
        platforms: ['NinjaTrader', 'Rithmic', 'TradingView'],
        challengeType: '2-Step',
        marketType: 'futures',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: true,
            noTimeLimit: true,
            weeklyPayouts: false,
        },
        payoutDays: 14,
        capitalPricing: {
            25000: { price: '$149', oldPrice: '$298' },
            50000: { price: '$199', oldPrice: '$398' },
            100000: { price: '$299', oldPrice: '$598' },
            150000: { price: '$449', oldPrice: '$898' },
        },
        description: {
            en: 'Funded Futures Network offers 50% off for futures traders with USA accepted. Great value for aspiring futures traders.',
            ro: 'Funded Futures Network oferă 50% reducere pentru traderii de futures cu SUA acceptat. Valoare excelentă pentru aspiranții traderi de futures.',
            es: 'Funded Futures Network ofrece 50% de descuento para traders de futuros con EE.UU. aceptado. Gran valor para aspirantes a traders de futuros.'
        },
        pros: {
            en: ['50% discount available', 'USA traders accepted', 'TradingView integration', 'No time limit', 'Multiple platforms'],
            ro: ['50% reducere disponibilă', 'Traderi din SUA acceptați', 'Integrare TradingView', 'Fără limită de timp', 'Platforme multiple'],
            es: ['50% descuento disponible', 'Traders de EE.UU. aceptados', 'Integración TradingView', 'Sin límite de tiempo', 'Múltiples plataformas']
        },
        cons: {
            en: ['Stricter 8% drawdown', 'Only 80% profit split', 'Futures only'],
            ro: ['Drawdown mai strict de 8%', 'Doar 80% împărțire profit', 'Doar futures'],
            es: ['Drawdown más estricto del 8%', 'Solo 80% división de ganancias', 'Solo futuros']
        }
    },
    {
        id: 12,
        slug: 'fundingticks',
        name: 'FundingTicks',
        rating: 4.5,
        verified: true,
        maxDD: '10%',
        profitSplit: '80%',
        price: '$399',
        oldPrice: '$399',
        coupon: 'BC954C87',
        offer: '20% OFF',
        link: 'https://app.fundingticks.com/register?ref=BC954C87',
        logoUrl: '/logos/fundingticks.png',
        platforms: ['NinjaTrader', 'Rithmic'],
        challengeType: '2-Step',
        marketType: 'futures',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: true,
            noTimeLimit: true,
            weeklyPayouts: true,
        },
        payoutDays: 7,
        capitalPricing: {
            25000: { price: '$199', oldPrice: '$199' },
            50000: { price: '$299', oldPrice: '$299' },
            100000: { price: '$399', oldPrice: '$399' },
            150000: { price: '$599', oldPrice: '$599' },
        },
        description: {
            en: 'FundingTicks offers weekly payouts for futures traders with USA accepted. Solid choice for futures trading.',
            ro: 'FundingTicks oferă plăți săptămânale pentru traderii de futures cu SUA acceptat. Alegere solidă pentru trading pe futures.',
            es: 'FundingTicks ofrece pagos semanales para traders de futuros con EE.UU. aceptado. Elección sólida para trading de futuros.'
        },
        pros: {
            en: ['Weekly payouts', 'USA traders accepted', 'No time limit', 'Competitive pricing', 'Crypto payouts'],
            ro: ['Plăți săptămânale', 'Traderi din SUA acceptați', 'Fără limită de timp', 'Prețuri competitive', 'Plăți crypto'],
            es: ['Pagos semanales', 'Traders de EE.UU. aceptados', 'Sin límite de tiempo', 'Precios competitivos', 'Pagos crypto']
        },
        cons: {
            en: ['Futures only', 'Limited platforms', 'Only 80% profit split'],
            ro: ['Doar futures', 'Platforme limitate', 'Doar 80% împărțire profit'],
            es: ['Solo futuros', 'Plataformas limitadas', 'Solo 80% división de ganancias']
        }
    },
    {
        id: 13,
        slug: 'yrm-prop',
        name: 'YRM Prop',
        rating: 4.8,
        verified: true,
        maxDD: '10%',
        profitSplit: '90%',
        price: '$45',
        oldPrice: '$149',
        coupon: 'HGC',
        offer: 'EXTRA 10% OFF',
        link: 'https://yrmprop.com/ref/dihorulcristy/',
        logoUrl: '/yrm-prop.png',
        platforms: ['NinjaTrader', 'Rithmic'],
        challengeType: '2-Step',
        marketType: 'futures',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: true,
            noTimeLimit: true,
            weeklyPayouts: true,
        },
        payoutDays: 14,
        capitalPricing: {
            25000: { price: '$47', oldPrice: '$59' },
            50000: { price: '$45', oldPrice: '$149' },
            100000: { price: '$95', oldPrice: '$249' },
            150000: { price: '$145', oldPrice: '$349' },
        },
        description: {
            en: 'YRM Prop offers the lowest prices in the futures prop trading industry with 90% profit split. Incredible value for beginners.',
            ro: 'YRM Prop oferă cele mai mici prețuri din industria prop trading pe futures cu 90% împărțire profit. Valoare incredibilă pentru începători.',
            es: 'YRM Prop ofrece los precios más bajos en la industria de prop trading de futuros con 90% división de ganancias. Valor increíble para principiantes.'
        },
        pros: {
            en: ['Lowest prices in industry', '90% profit split', 'USA traders accepted', 'Weekly payouts', 'Extra 10% discount'],
            ro: ['Cele mai mici prețuri din industrie', '90% împărțire profit', 'Traderi din SUA acceptați', 'Plăți săptămânale', 'Extra 10% reducere'],
            es: ['Precios más bajos de la industria', '90% división de ganancias', 'Traders de EE.UU. aceptados', 'Pagos semanales', 'Extra 10% descuento']
        },
        cons: {
            en: ['Futures only', 'Limited platforms', 'Newer firm'],
            ro: ['Doar futures', 'Platforme limitate', 'Firmă mai nouă'],
            es: ['Solo futuros', 'Plataformas limitadas', 'Firma más nueva']
        }
    },

    {
        id: 15,
        slug: 'instantfunding',
        name: 'InstantFunding',
        rating: 4.7,
        verified: true,
        maxDD: '10%',
        profitSplit: '80%',
        price: '$39',
        oldPrice: '$39',
        coupon: 'TRADER2026',
        offer: '35% OFF + 90% Split',
        link: 'https://instantfunding.com/?partner=419',
        logoUrl: '/logos/instantfunding.png',
        platforms: ['MT5', 'cTrader', 'Match-Trader'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: true,
            noTimeLimit: true,
            weeklyPayouts: false,
        },
        payoutDays: 14,
        capitalPricing: {
            5000: { price: '$39', oldPrice: '$39' },
            10000: { price: '$63', oldPrice: '$63' },
            25000: { price: '$149', oldPrice: '$149' },
            50000: { price: '$254', oldPrice: '$254' },
            100000: { price: '$439', oldPrice: '$439' },
            200000: { price: '$999', oldPrice: '$999' },
        },
        description: {
            en: 'InstantFunding offers competitive pricing and accepts USA traders with multiple platform options.',
            ro: 'InstantFunding oferă prețuri competitive și acceptă traderi din SUA cu multiple opțiuni de platformă.',
            es: 'InstantFunding ofrece precios competitivos y acepta traders de EE.UU. con múltiples opciones de plataforma.'
        },
        pros: {
            en: ['USA traders accepted', 'Low starting prices', 'Multiple platforms', 'No time limit', 'Crypto payouts'],
            ro: ['Traderi din SUA acceptați', 'Prețuri de start mici', 'Platforme multiple', 'Fără limită de timp', 'Plăți crypto'],
            es: ['Traders de EE.UU. aceptados', 'Precios iniciales bajos', 'Múltiples plataformas', 'Sin límite de tiempo', 'Pagos crypto']
        },
        cons: {
            en: ['Only 80% profit split', 'No current discount', '14-day payout cycle'],
            ro: ['Doar 80% împărțire profit', 'Fără reducere curentă', 'Ciclu de plată de 14 zile'],
            es: ['Solo 80% división de ganancias', 'Sin descuento actual', 'Ciclo de pago de 14 días']
        }
    },
    {
        id: 16,
        slug: 'dnafunded',
        name: 'DnaFunded',
        rating: 4.6,
        verified: true,
        maxDD: '10%',
        profitSplit: '80%',
        price: '$42',
        oldPrice: '$49',
        coupon: 'DNAFUNDED15',
        offer: '15% OFF',
        link: 'https://partners.dnafunded.com/click?campaign_id=1&ref_id=259',
        logoUrl: '/logos/dnafunded.png',
        platforms: ['TradeLocker'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: false,
            noTimeLimit: true,
            weeklyPayouts: false,
        },
        payoutDays: 14,
        capitalPricing: {
            5000: { price: '$42', oldPrice: '$49' },
            10000: { price: '$84', oldPrice: '$99' },
            25000: { price: '$161', oldPrice: '$189' },
            50000: { price: '$297', oldPrice: '$349' },
            100000: { price: '$526', oldPrice: '$619' },
            200000: { price: '$892', oldPrice: '$1049' },
        },
        description: {
            en: 'DnaFunded offers affordable entry points with TradeLocker platform. Good for traders on a budget.',
            ro: 'DnaFunded oferă puncte de intrare accesibile cu platforma TradeLocker. Bun pentru traderii cu buget limitat.',
            es: 'DnaFunded ofrece puntos de entrada asequibles con la plataforma TradeLocker. Bueno para traders con presupuesto limitado.'
        },
        pros: {
            en: ['Affordable pricing', '15% discount available', 'No time limit', 'TradeLocker platform', 'Crypto payouts'],
            ro: ['Prețuri accesibile', '15% reducere disponibilă', 'Fără limită de timp', 'Platforma TradeLocker', 'Plăți crypto'],
            es: ['Precios asequibles', '15% descuento disponible', 'Sin límite de tiempo', 'Plataforma TradeLocker', 'Pagos crypto']
        },
        cons: {
            en: ['Not available in USA', 'Single platform only', 'Only 80% profit split'],
            ro: ['Nu este disponibil în SUA', 'O singură platformă', 'Doar 80% împărțire profit'],
            es: ['No disponible en EE.UU.', 'Solo una plataforma', 'Solo 80% división de ganancias']
        }
    },
    {
        id: 17,
        slug: 'spiceprop',
        name: 'SpiceProp',
        rating: 4.8,
        verified: true,
        maxDD: '11%',
        profitSplit: '80-85%',
        price: '€479',
        oldPrice: '€479',
        coupon: 'SANTANEXT',
        offer: '10% OFF + 5% Profit Split',
        link: 'https://my.spiceprop.com/agent_pp.html?agent_pp=28203897',
        logoUrl: '/logos/spiceprop.png',
        platforms: ['MT5'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: false,
            noTimeLimit: true,
            weeklyPayouts: true,
        },
        payoutDays: 14,
        capitalPricing: {
            6000: { price: '€45', oldPrice: '€45' },
            10000: { price: '€99', oldPrice: '€99' },
            25000: { price: '€159', oldPrice: '€159' },
            50000: { price: '€295', oldPrice: '€295' },
            100000: { price: '€479', oldPrice: '€479' },
            150000: { price: '€689', oldPrice: '€689' },
            300000: { price: '€1499', oldPrice: '€1499' },
        },
        description: {
            en: 'SpiceProp offers higher 11% drawdown limit and weekly payouts with competitive Euro-based pricing.',
            ro: 'SpiceProp oferă o limită de drawdown mai mare de 11% și plăți săptămânale cu prețuri competitive în Euro.',
            es: 'SpiceProp ofrece un límite de drawdown más alto del 11% y pagos semanales con precios competitivos en Euro.'
        },
        pros: {
            en: ['Higher 11% drawdown', 'Weekly payouts', 'Euro pricing', 'Extra profit split bonus', 'Up to €300k accounts'],
            ro: ['Drawdown mai mare de 11%', 'Plăți săptămânale', 'Prețuri în Euro', 'Bonus profit split extra', 'Conturi până la €300k'],
            es: ['Drawdown más alto del 11%', 'Pagos semanales', 'Precios en Euro', 'Bono extra de profit split', 'Cuentas hasta €300k']
        },
        cons: {
            en: ['Not available in USA', 'MT5 only', 'Only 80-85% profit split'],
            ro: ['Nu este disponibil în SUA', 'Doar MT5', 'Doar 80-85% împărțire profit'],
            es: ['No disponible en EE.UU.', 'Solo MT5', 'Solo 80-85% división de ganancias']
        }
    },
    {
        id: 18,
        slug: 'qtfunded',
        name: 'QTFunded',
        rating: 4.7,
        verified: true,
        maxDD: '10%',
        profitSplit: '80%',
        price: '$299',
        oldPrice: '$499',
        coupon: 'NDOGUBVVSK',
        offer: '40% OFF',
        link: 'https://qtfunded.quanttekel.com/ref/5570/',
        logoUrl: '/logos/qtfunded.png',
        platforms: ['MT4', 'MT5'],
        challengeType: '2-Step',
        marketType: 'forex',
        features: {
            instantFunding: false,
            hftAllowed: false,
            newsTrading: true,
            cryptoPayout: true,
            usaAccepted: true,
            noTimeLimit: true,
            weeklyPayouts: false,
        },
        payoutDays: 14,
        capitalPricing: {
            10000: { price: '$59', oldPrice: '$99' },
            25000: { price: '$119', oldPrice: '$199' },
            50000: { price: '$179', oldPrice: '$299' },
            100000: { price: '$299', oldPrice: '$499' },
            200000: { price: '$599', oldPrice: '$999' },
        },
        description: {
            en: 'QTFunded offers 40% discount and accepts USA traders with MT4/MT5 platforms. Great value for forex trading.',
            ro: 'QTFunded oferă 40% reducere și acceptă traderi din SUA cu platformele MT4/MT5. Valoare excelentă pentru trading forex.',
            es: 'QTFunded ofrece 40% de descuento y acepta traders de EE.UU. con plataformas MT4/MT5. Gran valor para trading de forex.'
        },
        pros: {
            en: ['40% discount available', 'USA traders accepted', 'MT4/MT5 platforms', 'No time limit', 'Crypto payouts'],
            ro: ['40% reducere disponibilă', 'Traderi din SUA acceptați', 'Platforme MT4/MT5', 'Fără limită de timp', 'Plăți crypto'],
            es: ['40% descuento disponible', 'Traders de EE.UU. aceptados', 'Plataformas MT4/MT5', 'Sin límite de tiempo', 'Pagos crypto']
        },
        cons: {
            en: ['Only 80% profit split', '14-day payout cycle', 'No weekly payouts'],
            ro: ['Doar 80% împărțire profit', 'Ciclu de plată de 14 zile', 'Fără plăți săptămânale'],
            es: ['Solo 80% división de ganancias', 'Ciclo de pago de 14 días', 'Sin pagos semanales']
        }
    }
];

// Get firm by slug
export function getFirmBySlug(slug: string): PropFirm | undefined {
    return allPropFirms.find(firm => firm.slug === slug);
}

// Get all slugs for static generation
export function getAllFirmSlugs(): string[] {
    return allPropFirms.map(firm => firm.slug);
}

// Page translations
export const pageTranslations = {
    en: {
        review: 'Review',
        discountCode: 'Discount Code',
        pricing: 'Pricing',
        overview: 'Overview',
        keyFeatures: 'Key Features',
        challengeRules: 'Challenge Rules',
        tradingPlatforms: 'Trading Platforms',
        pricingOptions: 'Pricing Options',
        prosAndCons: 'Pros & Cons',
        pros: 'Pros',
        cons: 'Cons',
        getFunded: 'Get Funded Now',
        copyCode: 'Copy Code',
        copied: 'Copied!',
        maxDrawdown: 'Max Drawdown',
        profitSplit: 'Profit Split',
        payoutSpeed: 'Payout Speed',
        days: 'days',
        accountSize: 'Account Size',
        price: 'Price',
        discount: 'Discount',
        backToCompare: 'Back to Compare',
        verified: 'Verified Firm',
        rating: 'Rating',
        challengeType: 'Challenge Type',
        marketType: 'Market',
        usaAccepted: 'USA Accepted',
        noTimeLimit: 'No Time Limit',
        weeklyPayouts: 'Weekly Payouts',
        cryptoPayout: 'Crypto Payout',
        newsTrading: 'News Trading',
        yes: 'Yes',
        no: 'No',
        faqTitle: 'Frequently Asked Questions',
        faq1Q: 'Is this prop firm legitimate?',
        faq1A: 'Yes, this is a verified prop trading firm with a track record of paying traders.',
        faq2Q: 'How long does it take to get funded?',
        faq2A: 'After passing the evaluation phases, you typically get funded within 24-48 hours.',
        faq3Q: 'Can I use the discount code?',
        faq3A: 'Yes, the discount code shown is currently active and will be applied at checkout.',
        ctaTitle: 'Ready to Start Trading?',
        ctaText: 'Join thousands of funded traders. Start your challenge today.',
        relatedFirms: 'Similar Prop Firms'
    },
    ro: {
        review: 'Recenzie',
        discountCode: 'Cod Reducere',
        pricing: 'Prețuri',
        overview: 'Prezentare Generală',
        keyFeatures: 'Caracteristici Cheie',
        challengeRules: 'Reguli Challenge',
        tradingPlatforms: 'Platforme Trading',
        pricingOptions: 'Opțiuni de Prețuri',
        prosAndCons: 'Avantaje și Dezavantaje',
        pros: 'Avantaje',
        cons: 'Dezavantaje',
        getFunded: 'Începe Acum',
        copyCode: 'Copiază Codul',
        copied: 'Copiat!',
        maxDrawdown: 'Drawdown Maxim',
        profitSplit: 'Împărțire Profit',
        payoutSpeed: 'Viteză Plată',
        days: 'zile',
        accountSize: 'Dimensiune Cont',
        price: 'Preț',
        discount: 'Reducere',
        backToCompare: 'Înapoi la Comparație',
        verified: 'Firmă Verificată',
        rating: 'Rating',
        challengeType: 'Tip Challenge',
        marketType: 'Piață',
        usaAccepted: 'SUA Acceptat',
        noTimeLimit: 'Fără Limită Timp',
        weeklyPayouts: 'Plăți Săptămânale',
        cryptoPayout: 'Plată Crypto',
        newsTrading: 'Trading pe Știri',
        yes: 'Da',
        no: 'Nu',
        faqTitle: 'Întrebări Frecvente',
        faq1Q: 'Este această firmă prop legitimă?',
        faq1A: 'Da, aceasta este o firmă prop trading verificată cu un istoric de plată a traderilor.',
        faq2Q: 'Cât durează până sunt finanțat?',
        faq2A: 'După trecerea fazelor de evaluare, ești de obicei finanțat în 24-48 ore.',
        faq3Q: 'Pot folosi codul de reducere?',
        faq3A: 'Da, codul de reducere afișat este activ și va fi aplicat la checkout.',
        ctaTitle: 'Ești Pregătit să Începi?',
        ctaText: 'Alătură-te miilor de traderi finanțați. Începe challenge-ul astăzi.',
        relatedFirms: 'Firme Prop Similare'
    },
    es: {
        review: 'Reseña',
        discountCode: 'Código Descuento',
        pricing: 'Precios',
        overview: 'Descripción General',
        keyFeatures: 'Características Clave',
        challengeRules: 'Reglas del Desafío',
        tradingPlatforms: 'Plataformas de Trading',
        pricingOptions: 'Opciones de Precios',
        prosAndCons: 'Pros y Contras',
        pros: 'Pros',
        cons: 'Contras',
        getFunded: 'Empieza Ahora',
        copyCode: 'Copiar Código',
        copied: '¡Copiado!',
        maxDrawdown: 'Drawdown Máximo',
        profitSplit: 'División de Ganancias',
        payoutSpeed: 'Velocidad de Pago',
        days: 'días',
        accountSize: 'Tamaño de Cuenta',
        price: 'Precio',
        discount: 'Descuento',
        backToCompare: 'Volver a Comparar',
        verified: 'Firma Verificada',
        rating: 'Calificación',
        challengeType: 'Tipo de Desafío',
        marketType: 'Mercado',
        usaAccepted: 'EE.UU. Aceptado',
        noTimeLimit: 'Sin Límite de Tiempo',
        weeklyPayouts: 'Pagos Semanales',
        cryptoPayout: 'Pago Crypto',
        newsTrading: 'Trading en Noticias',
        yes: 'Sí',
        no: 'No',
        faqTitle: 'Preguntas Frecuentes',
        faq1Q: '¿Es legítima esta firma prop?',
        faq1A: 'Sí, esta es una firma de prop trading verificada con un historial de pago a traders.',
        faq2Q: '¿Cuánto tiempo toma estar financiado?',
        faq2A: 'Después de pasar las fases de evaluación, típicamente te financian en 24-48 horas.',
        faq3Q: '¿Puedo usar el código de descuento?',
        faq3A: 'Sí, el código de descuento mostrado está activo y se aplicará al pagar.',
        ctaTitle: '¿Listo para Empezar?',
        ctaText: 'Únete a miles de traders financiados. Comienza tu desafío hoy.',
        relatedFirms: 'Firmas Prop Similares'
    }
};
