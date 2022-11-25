import RadarIcon from "../src/components/Images/radar.svg"
import FileIcon from "../src/components/Images/document.svg"
import CategoryIcon from "../src/components/Images/category.svg"
import Bag from "../src/components/Images/shopping-bag.svg"
import Cart from "../src/components/Images/shopping-cart.svg"
import Profile from "../src/components/Images/profile.svg"
import Wallet from "../src/components/Images/wallet.svg"
import TransactionIcon from "../src/components/Images/repeat.svg"
import FolderIcon from "../src/components/Images/folder-open.svg"
import ToggleIcon from "../src/components/Images/toggle-off-circle.svg"
import SettingsIcon from "../src/components/Images/settings.svg"
import AuditIcon from "../src/components/Images/driver.svg"
import Polaris from "../src/components/Images/polaris-bank.svg"
import First from "../src/components/Images/first-bank.svg"
import GTB from "../src/components/Images/gtb-bank.svg"
import Providus from "../src/components/Images/providus-bank.svg"

export const main = [
    {
        id: 1,
        icon: RadarIcon,
        label: "Welcome"
    },
    {
        id: 2,
        icon: FileIcon,
        label: "Compliance"
    },
    {
        id: 3,
        icon: CategoryIcon,
        label: "Overview"
    },
]

export const business = [
    {
        id: 1,
        icon: Bag,
        label: "Products"
    },
    {
        id: 2,
        icon: Cart,
        label: "Customers"
    },
    {
        id: 3,
        icon: Profile,
        label: "Orders"
    },
]
export const payments = [
    {
        id: 1,
        icon: Wallet,
        label: "Wallets",
        isNew: false,
    },
    {
        id: 2,
        icon: TransactionIcon,
        label: "Transactions",
        isNew: false,
    },
    {
        id: 3,
        icon: FolderIcon,
        label: "Virtual Account",
        isNew: true,
    },
]

export const settings = [
    {
        id: 1,
        icon: ToggleIcon,
        label: "Live mode"
    },
    {
        id: 2,
        icon: SettingsIcon,
        label: "Settings"
    },
    {
        id: 3,
        icon: AuditIcon,
        label: "Audit logs"
    },
]

export const transactions = [
    {
        id: 1,
        name: "Polaris Bank Limited",
        icon: Polaris,
        location: "Dodo - Ikeja",
        amount: "200,000.00",
        accountNumber: "08023221144",
    },
    {
        id: 2,
        name: "Guranty Trust Holding",
        icon: GTB,
        location: "Dodo - Lekki II",
        amount: "100,000.00",
        accountNumber: "2096304483",
    },
    {
        id: 3,
        name: "Providus Bank PLC",
        icon: Providus,
        location: "Dodo - Lekki II",
        accountNumber: "9096301183",
        amount: "250,000.00"
    },
    {
        id: 4,
        name: "First Bank of Nigeria",
        icon: First,
        location: "Dodo - Abuja",
        accountNumber: "3096302283",
        amount: "400,000.00"
    },
]