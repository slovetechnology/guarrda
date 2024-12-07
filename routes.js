import BackUp from "./src/user/BackUp";
import BuyCrypto from "./src/user/BuyCrypto";
import BuySell from "./src/user/BuySell";
import ChangePassword from "./src/user/ChangePassword";
import CreateInvoice from "./src/user/CreateInvoice";
import Dashboard from "./src/user/Dashboard";
import Earn from "./src/user/Earn";
import Exchange from "./src/user/Exchange";
import Loan from "./src/user/Loan";
import RateUs from "./src/user/RateUs";
import Restore from "./src/user/Restore";
import SellCrypto from "./src/user/SellCrypto";
import Settings from "./src/user/Settings";
import TransactionHistory from "./src/user/TransactionHistory";



export const UserRouting = [
    {path: '', element: Dashboard},
    {path: '/buy', element: BuySell},
    {path: '/exchange', element: Exchange},
    {path: '/earn', element: Earn},
    {path: '/loan', element: Loan},
    {path: '/settings', element: Settings},
    {path: '/receive', element: BuyCrypto},
    {path: '/sell', element: SellCrypto},
    {path: '/settings/backup', element: BackUp},
    {path: '/settings/restore-backup', element: Restore},
    {path: '/settings/change-password', element: ChangePassword},
    {path: '/settings/rate-us', element: RateUs},
    {path: '/history', element: TransactionHistory},
    {path: '/fio/invoice-create', element: CreateInvoice},
]