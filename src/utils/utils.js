import gimg34 from "assets/gimg34.svg"
import gimg28 from "assets/gimg28.svg"
import gimg30 from "assets/gimg30.svg"


// ================ countries =============================
import zmw from "assets/curr/zmw.svg"
import zar from "assets/curr/zar.svg"
import usd from "assets/curr/usd.svg"
import uah from "assets/curr/uah.svg"
import twd from "assets/curr/twd.svg"
import trys from "assets/curr/try.svg"
import thb from "assets/curr/thb.svg"
import sgd from "assets/curr/sgd.svg"
import sek from "assets/curr/sek.svg"
import rsd from "assets/curr/rsd.svg"
import ron from "assets/curr/ron.svg"
import qar from "assets/curr/qar.svg"
import pln from "assets/curr/pln.svg"
import php from "assets/curr/php.svg"
import pen from "assets/curr/pen.svg"
import omr from "assets/curr/omr.svg"
import nzd from "assets/curr/nzd.svg"
import nok from "assets/curr/nok.svg"
import ngn from "assets/curr/ngn.svg"
import mzn from "assets/curr/mzn.svg"
import myr from "assets/curr/myr.svg"
import mxn from "assets/curr/mxn.svg"
import inr from "assets/curr/inr.svg"
import ils from "assets/curr/ils.svg"
import idr from "assets/curr/idr.svg"
import huf from "assets/curr/huf.svg"
import hrk from "assets/curr/hrk.svg"
import gtq from "assets/curr/gtq.svg"
import gbp from "assets/curr/gbp.svg"
import eur from "assets/curr/eur.svg"
import egp from "assets/curr/egp.svg"
import dop from "assets/curr/dop.svg"
import dkk from "assets/curr/dkk.svg"
import czk from "assets/curr/czk.svg"
import crc from "assets/curr/crc.svg"
import clp from "assets/curr/clp.svg"
import chf from "assets/curr/chf.svg"
import cad from "assets/curr/cad.svg"
import bwp from "assets/curr/bwp.svg"
import brl from "assets/curr/brl.svg"
import bob from "assets/curr/bob.svg"
import bnd from "assets/curr/bnd.svg"
import bhd from "assets/curr/bhd.svg"
import bgn from "assets/curr/bgn.svg"
import azn from "assets/curr/azn.svg"
import aud from "assets/curr/aud.svg"
import ars from "assets/curr/ars.svg"
import ang from "assets/curr/ang.svg"
import aed from "assets/curr/aed.svg"
import eu from "assets/curr/eu.svg"

// =================== coins =================
import bsc from "assets/icons/bsc.svg"
import amp from "assets/icons/amp.svg"
import bnb from "assets/icons/bnb.svg"
import btc from "assets/icons/btcb.svg"
import bsw from "assets/icons/bsw.svg"
import bsv from "assets/icons/bsv.svg"
import brd from "assets/icons/brd.svg"
import brise from "assets/icons/brise.svg"
import dot from "assets/icons/dot.svg"
import elon from "assets/icons/btc.svg"
import zoon from "assets/icons/zoon.svg"
import zinu from "assets/icons/zinu.svg"
import zen from "assets/icons/zen.svg"
import zil from "assets/icons/zil.svg"
import xvs from "assets/icons/xvs.svg"
import xlm from "assets/icons/xlm.svg"
import xec from "assets/icons/xec.svg"
import xmr from "assets/icons/xmr.svg"
import xrp from "assets/icons/xrp.svg"
import usdt from "assets/icons/usdt.svg"
import twt from "assets/icons/twt.svg"
import trx from "assets/icons/trx.svg"
import ton from "assets/icons/ton.svg"
import susd from "assets/icons/susd.svg"
import steem from "assets/icons/steem.svg"
import shib from "assets/icons/shib.svg"
import sanshu from "assets/icons/sanshu.svg"
import rune from "assets/icons/rune.svg"
import rsr from "assets/icons/rsr.svg"
import rpl from "assets/icons/rpl.svg"
import rcn from "assets/icons/rcn.svg"
import rlc from "assets/icons/rlc.svg"
import rep from "assets/icons/rep.svg"
import pyusd from "assets/icons/pyusd.svg"
import poly from "assets/icons/btc.svg"
import pols from "assets/icons/pols.svg"
import pol from "assets/icons/pol.svg"
import npxs from "assets/icons/npxs.svg"
import nexo from "assets/icons/nexo.svg"
import nano from "assets/icons/nano.svg"
import nav from "assets/icons/nav.svg"
import mco from "assets/icons/mco.svg"
import luna from "assets/icons/luna.svg"
import lunc from "assets/icons/btc.svg"
import ltc from "assets/icons/ltc.svg"
import keanu from "assets/icons/keanu.svg"
import klee from "assets/icons/klee.svg"
import lend from "assets/icons/lend.svg"
import fio from "assets/icons/fio.svg"
import blocks from "assets/icons/blocks.svg"
import bch from "assets/icons/bch.svg"
import bcd from "assets/icons/bcd.svg"
import awc from "assets/icons/awc.svg"
import ava from "assets/icons/ava.svg"
import aion from "assets/icons/aion.svg"
import trc from "assets/icons/trc.svg"
import erc from "assets/icons/erc.svg"
import ada from "assets/icons/ada.svg"
import dep from "assets/icons/dep.svg"
import ghx from "assets/icons/ghx.svg"
import earth from "assets/icons/earth.svg"
import { toast } from "sonner"



export const SiteName = "guarrda.com"
export const tokenName = 'grd__'
export const TrackCode = 'grd__'


export function returnError(error) {
    return toast.error('Request Failed', `${error.message}`, 'error')
}

export function FormatDecimal(total) {
    return parseFloat(total.toFixed(9)).toString().replace(/(\.\d*?[1-9])0+$/, '$1')
}

export const SiteRoles = [
    {role: 'admin', link: '/portal/admin'},
    {role: 'user', link: '/app'},
]

export function ConvertCoinToCurrency({walls, money, item}) {
    const findStable = walls?.rates.find(ele => ele.currency === money.short)
    let coinRate = 0
    if (findStable) {
        coinRate = (item?.balance / findStable?.rate).toFixed(2)
    }
    return coinRate
}

export const AdminHeaderNavs = [
    { title: 'wallets', link: '/portal/admin/wallets' },
    { title: 'currencies', link: '/portal/admin/currencies' },
    { title: 'earnings', link: '/portal/admin/earnings' },
    { title: 'users', link: '/portal/admin/users' },
    { title: 'settings', link: '/portal/admin/settings' },
]

export const UserHeaderNavsLocal = [
    { title: 'create wallet', link: '/app/create' },
    { title: 'restore or import', link: '/app/restore' },
]

export const UserHeaderNavs = [
    { title: 'wallets', link: '/app' },
    { title: 'buy & sell', link: '/app/buy' },
    { title: 'exchange', link: '/app/exchange' },
    { title: 'earn', link: '/app/earn' },
    { title: 'loan', link: '/app/loan' },
    { title: 'settings', link: '/app/settings/backup' }
]

export const FooterLinkNavs = [
    { title: `Back to ${SiteName}`, link: '/' },
    { title: 'Support', link: '' },
    { title: 'Coin status', link: '' },
    { title: 'Privacy Policy', link: '' },
    { title: 'Terms of Service', link: '' },
]

export const HomeHeaderLinks = [
    { title: 'Get Started', link: '' },
    { title: 'Buy Crypto', link: '' },
    { title: 'Exchange', link: '' },
    { title: 'Earn', link: '' },
    { title: 'Assets', link: '' },
    { title: 'Loan', link: '' },
    { title: 'Learn', link: '' },
]

export const BannerInitLinks = [
    { link: '', image: gimg34 },
    { link: '', image: gimg28 },
    { link: '', image: gimg30 },
]

export const FooterLastlinkings = [
    {
        title: 'Products',
        links: [
            { title: 'Desktop Wallet', url: '' },
            { title: 'Web Wallet', url: '' },
            { title: 'Mobile Wallet', url: '' },
            { title: 'Token Generator', url: '' },
            { title: 'Multisig Wallet', url: '' },
        ]
    },
    {
        title: 'Services',
        links: [
            { title: 'Buy 300+ assets', url: '' },
            { title: 'Exchange Crypto', url: '' },
            { title: 'Sell Crypto', url: '' },
            { title: 'Crypto Loans', url: '' },
            { title: 'Ledger Nano S', url: '' },
            { title: 'AML Checks', url: '' },
            { title: 'Blockchain Domains', url: '' },
        ]
    },
    {
        title: 'Company',
        links: [
            { title: 'About', url: '' },
            { title: 'Blog', url: '' },
            { title: 'Join Ambassadors', url: '' },
            { title: 'Contact', url: '' },
            { title: 'Press & Media', url: '' },
            { title: 'Privacy & Security', url: '' },
        ]
    },
    {
        title: 'For Developers',
        links: [
            { title: 'Validation Stats', url: '' },
            { title: 'Payment Deeplink', url: '' },
            { title: 'Mnemonic Converter', url: '' },
            { title: 'Backup Decoder', url: '' },
            { title: 'Connect to nodes', url: '' },
        ]
    },
    {
        title: 'Support Online',
        links: [
            { title: 'Guarda Academy', url: '' },
            { title: 'Knowledge Base', url: '' },
            { title: 'Submit a ticket', url: '' },
            { title: '🇺🇸English', url: '' },
        ]
    },
    {
        title: 'Assets',
        links: [
            { title: 'Bitcoin (BTC) Wallet', url: '' },
            { title: 'Ethereum (ETH) Wallet', url: '' },
            { title: 'Cardano (ADA) Wallet', url: '' },
            { title: 'Binance Coin (BNB) Wallet', url: '' },
            { title: 'Tether (USDT) Wallet', url: '' },
            { title: 'Litecoin (LTC) Wallet', url: '' },
            { title: 'Tron (TRX) Wallet', url: '' },
        ]
    },
    {
        title: '',
        links: [
            { title: 'Monero (XMR) Wallet', url: '' },
            { title: 'Ripple (XRP) Wallet', url: '' },
            { title: 'Dogecoin (DOGE) Wallet', url: '' },
            { title: 'Polygon (MATIC) Wallet', url: '' },
            { title: 'USD Coin (USDC) Wallet', url: '' },
            { title: 'Polkadot (DOT) Wallet', url: '' },
            { title: 'Other Assets', url: '' },
        ]
    },
    {
        title: 'Buy',
        links: [
            { title: 'Buy Bitcoin', url: '' },
            { title: 'Buy Ethereum', url: '' },
            { title: 'Buy Monero', url: '' },
            { title: 'Buy Tron', url: '' },
            { title: 'Buy Binance Coin', url: '' },
            { title: 'Buy Bitcoin Cash', url: '' },
            { title: 'Buy Ripple', url: '' },
        ]
    },
    {
        title: '',
        links: [
            { title: 'Buy Litecoin', url: '' },
            { title: 'Buy Dogecoin', url: '' },
            { title: 'Buy Luna', url: '' },
            { title: 'Buy USDT', url: '' },
            { title: 'Buy Cardano', url: '' },
            { title: 'Buy USD Coin', url: '' },
            { title: 'Buy Crypto', url: '' },
        ]
    },
    {
        title: 'Earn',
        links: [
            { title: 'Staking Cryptos', url: '' },
            { title: 'Ethereum Staking', url: '' },
            { title: 'Tron Staking', url: '' },
            { title: 'Cardano Staking', url: '' },
            { title: 'Callisto Staking', url: '' },
            { title: 'Cosmos Staking', url: '' },
            { title: 'Guarda Token', url: '' },
        ]
    },
]

export const FooterLastlinkings2 = [
    {
        title: 'Products',
        links: [
            { title: 'Desktop Wallet', url: '' },
            { title: 'Web Wallet', url: '' },
            { title: 'Mobile Wallet', url: '' },
            { title: 'Token Generator', url: '' },
            { title: 'Multisig Wallet', url: '' },
        ]
    },
    {
        title: 'Services',
        links: [
            { title: 'Buy 300+ assets', url: '' },
            { title: 'Exchange Crypto', url: '' },
            { title: 'Sell Crypto', url: '' },
            { title: 'Crypto Loans', url: '' },
            { title: 'Ledger Nano S', url: '' },
            { title: 'AML Checks', url: '' },
            { title: 'Blockchain Domains', url: '' },
        ]
    },
    {
        title: 'Company',
        links: [
            { title: 'About', url: '' },
            { title: 'Blog', url: '' },
            { title: 'Join Ambassadors', url: '' },
            { title: 'Contact', url: '' },
            { title: 'Press & Media', url: '' },
            { title: 'Privacy & Security', url: '' },
        ]
    },
    {
        title: 'For Developers',
        links: [
            { title: 'Validation Stats', url: '' },
            { title: 'Payment Deeplink', url: '' },
            { title: 'Mnemonic Converter', url: '' },
            { title: 'Backup Decoder', url: '' },
            { title: 'Connect to nodes', url: '' },
        ]
    },
    {
        title: 'Support Online',
        links: [
            { title: 'Guarda Academy', url: '' },
            { title: 'Knowledge Base', url: '' },
            { title: 'Submit a ticket', url: '' },
            { title: '🇺🇸English', url: '' },
        ]
    },
    {
        title: 'Assets',
        links: [
            { title: 'Bitcoin (BTC) Wallet', url: '' },
            { title: 'Ethereum (ETH) Wallet', url: '' },
            { title: 'Cardano (ADA) Wallet', url: '' },
            { title: 'Binance Coin (BNB) Wallet', url: '' },
            { title: 'Tether (USDT) Wallet', url: '' },
            { title: 'Litecoin (LTC) Wallet', url: '' },
            { title: 'Tron (TRX) Wallet', url: '' },
            { title: 'Monero (XMR) Wallet', url: '' },
            { title: 'Ripple (XRP) Wallet', url: '' },
            { title: 'Dogecoin (DOGE) Wallet', url: '' },
            { title: 'Polygon (MATIC) Wallet', url: '' },
            { title: 'USD Coin (USDC) Wallet', url: '' },
            { title: 'Polkadot (DOT) Wallet', url: '' },
            { title: 'Other Assets', url: '' },
        ]
    },
    {
        title: 'Buy',
        links: [
            { title: 'Buy Bitcoin', url: '' },
            { title: 'Buy Ethereum', url: '' },
            { title: 'Buy Monero', url: '' },
            { title: 'Buy Tron', url: '' },
            { title: 'Buy Binance Coin', url: '' },
            { title: 'Buy Bitcoin Cash', url: '' },
            { title: 'Buy Ripple', url: '' },
            { title: 'Buy Litecoin', url: '' },
            { title: 'Buy Dogecoin', url: '' },
            { title: 'Buy Luna', url: '' },
            { title: 'Buy USDT', url: '' },
            { title: 'Buy Cardano', url: '' },
            { title: 'Buy USD Coin', url: '' },
            { title: 'Buy Crypto', url: '' },
        ]
    },
    {
        title: 'Earn',
        links: [
            { title: 'Staking Cryptos', url: '' },
            { title: 'Ethereum Staking', url: '' },
            { title: 'Tron Staking', url: '' },
            { title: 'Cardano Staking', url: '' },
            { title: 'Callisto Staking', url: '' },
            { title: 'Cosmos Staking', url: '' },
            { title: 'Guarda Token', url: '' },
        ]
    },
]

export const CountriesTags = [
    { name: '', short: 'zmw', image: zmw },
    { name: '', short: 'zar', image: zar },
    { name: '', short: 'usd', image: usd },
    { name: '', short: 'uah', image: uah },
    { name: '', short: 'twd', image: twd },
    { name: '', short: 'trys', image: trys },
    { name: '', short: 'thb', image: thb },
    { name: '', short: 'sgd', image: sgd },
    { name: '', short: 'sek', image: sek },
    { name: '', short: 'rsd', image: rsd },
    { name: '', short: 'ron', image: ron },
    { name: '', short: 'qar', image: qar },
    { name: '', short: 'pln', image: pln },
    { name: '', short: 'php', image: php },
    { name: '', short: 'pen', image: pen },
    { name: '', short: 'omr', image: omr },
    { name: '', short: 'nzd', image: nzd },
    { name: '', short: 'nok', image: nok },
    { name: '', short: 'ngn', image: ngn },
    { name: '', short: 'mzn', image: mzn },
    { name: '', short: 'myr', image: myr },
    { name: '', short: 'mxn', image: mxn },
    { name: '', short: 'inr', image: inr },
    { name: '', short: 'ils', image: ils },
    { name: '', short: 'idr', image: idr },
    { name: '', short: 'huf', image: huf },
    { name: '', short: 'hrk', image: hrk },
    { name: '', short: 'gtq', image: gtq },
    { name: '', short: 'gbp', image: gbp },
    { name: '', short: 'eur', image: eur },
    { name: '', short: 'egp', image: egp },
    { name: '', short: 'dop', image: dop },
    { name: '', short: 'dkk', image: dkk },
    { name: '', short: 'czk', image: czk },
    { name: '', short: 'crc', image: crc },
    { name: '', short: 'clp', image: clp },
    { name: '', short: 'chf', image: chf },
    { name: '', short: 'cad', image: cad },
    { name: '', short: 'bwp', image: bwp },
    { name: '', short: 'brl', image: brl },
    { name: '', short: 'bob', image: bob },
    { name: '', short: 'bnd', image: bnd },
    { name: '', short: 'bgn', image: bgn },
    { name: '', short: 'azn', image: azn },
    { name: '', short: 'aud', image: aud },
    { name: '', short: 'ars', image: ars },
    { name: '', short: 'ang', image: ang },
    { name: '', short: 'aed', image: aed },
    { name: '', short: 'eu', image: eu },
    { name: '', short: 'bhd', image: bhd },
]

export const CoinFlags = [
    { name: '', short: 'bsc', image: bsc },
    { name: '', short: 'amp', image: amp },
    { name: '', short: 'bnb', image: bnb },
    { name: '', short: 'btc', image: btc },
    { name: '', short: 'bsw', image: bsw },
    { name: '', short: 'bsv', image: bsv },
    { name: '', short: 'brd', image: brd },
    { name: '', short: 'brise', image: brise },
    { name: '', short: 'dot', image: dot },
    { name: '', short: 'elon', image: elon },
    { name: '', short: 'zoon', image: zoon },
    { name: '', short: 'zinu', image: zinu },
    { name: '', short: 'zen', image: zen },
    { name: '', short: 'zil', image: zil },
    { name: '', short: 'xvs', image: xvs },
    { name: '', short: 'xlm', image: xlm },
    { name: '', short: 'xec', image: xec },
    { name: '', short: 'xmr', image: xmr },
    { name: '', short: 'xrp', image: xrp },
    { name: '', short: 'usdt', image: usdt },
    { name: '', short: 'twt', image: twt },
    { name: '', short: 'trx', image: trx },
    { name: '', short: 'ton', image: ton },
    { name: '', short: 'susd', image: susd },
    { name: '', short: 'steem', image: steem },
    { name: '', short: 'shib', image: shib },
    { name: '', short: 'sanshu', image: sanshu },
    { name: '', short: 'rune', image: rune },
    { name: '', short: 'rsr', image: rsr },
    { name: '', short: 'rpl', image: rpl },
    { name: '', short: 'rcn', image: rcn },
    { name: '', short: 'rlc', image: rlc },
    { name: '', short: 'rep', image: rep },
    { name: '', short: 'pyusd', image: pyusd },
    { name: '', short: 'poly', image: poly },
    { name: '', short: 'pols', image: pols },
    { name: '', short: 'pol', image: pol },
    { name: '', short: 'npxs', image: npxs },
    { name: '', short: 'nexo', image: nexo },
    { name: '', short: 'nano', image: nano },
    { name: '', short: 'nav', image: nav },
    { name: '', short: 'mco', image: mco },
    { name: '', short: 'luna', image: luna },
    { name: '', short: 'lunc', image: lunc },
    { name: '', short: 'ltc', image: ltc },
    { name: '', short: 'keanu', image: keanu },
    { name: '', short: 'klee', image: klee },
    { name: '', short: 'lend', image: lend },
    { name: '', short: 'fio', image: fio },
    { name: '', short: 'blocks', image: blocks },
    { name: '', short: 'bch', image: bch },
    { name: '', short: 'bcd', image: bcd },
    { name: '', short: 'awc', image: awc },
    { name: '', short: 'ava', image: ava },
    { name: '', short: 'aion', image: aion },
    { name: '', short: 'trc', image: trc },
    { name: '', short: 'erc', image: erc },
    { name: '', short: 'ada', image: ada },
    { name: '', short: 'dep', image: dep },
    { name: '', short: 'ghx', image: ghx },
    { name: '', short: 'earth', image: earth },
]