# Maintainer: FadeMind <fademind@gmail.com>
# Contributor: Bjoern Bidar <theodorstormgrade@gmail.com>

_plugin_name=kde_wallet_password_integration
pkgname=firefox-extension-kwallet
pkgver=2.4.1
pkgrel=1
pkgdesc="An extension to allows Firefox to use KDE's Kwallet to store passwords"
arch=('i686' 'x86_64')
url="https://addons.mozilla.org/firefox/addon/kde-wallet-password-integratio/"
license=('MPL 1.1' 'GPL 2.0' 'LGPL 2.1')
depends=('qt4' 'firefox' 'kwalletmanager')
source=("https://addons.cdn.mozilla.net/user-media/addons/49357/${_plugin_name}-2.4-fx+tb-linux.xpi")
sha256sums=('b424fa047c608763773dbc9ee77e960df35c8200ac3b7dfa335b476dc5d13fd3')

package() {
    # Variables
    emid=$(grep -Pom1 'id>\K[^<]*' install.rdf)
    dstdir=$pkgdir/usr/lib/firefox/browser/extensions/$emid

    # Install
    sed -i "s|<em:maxVersion>.*</em:maxVersion>|<em:maxVersion>99.*</em:maxVersion>|" install.rdf
    install -dm755 "$dstdir"
    rm *.xpi
    cp -r * "$dstdir/"
}
