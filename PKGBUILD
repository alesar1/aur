_pkgbase=dmt
pkgname=python-dmt
pkgver=1.4.73
pkgrel=1
pkgdesc="Manage domains like packages."
arch=('x86_64')
license=('GNU GPL v3')
url="https://gitlab.com/waser-technologies/technologies/listen"
depends=('python-pip' 'python38-rasa' 'python38-rasa-sdk')
provides=($_pkgbase)

optin_telemetry() {
    echo "Setting things right"
    python3.8 -m rasa telemetry disable
    echo "type 'rasa telemetry enable' to enable it"
    echo "https://rasa.com/docs/rasa/telemetry/telemetry/"
}

prepare() {
    echo "Installing Domain Management Tools..."
    python3.8 -m pip install transformers
}

package() {
    pip install --root="$pkgdir" $_pkgbase
    optin_telemetry
}
