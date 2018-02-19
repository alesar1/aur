# Maintainer: Mikel Pintado <mikelaitornube2010@gmail.com>

pkgname=nuclear-player
pkgver=0.4.2
pkgrel=1
pkgdesc="A free, multiplatform music player app that streams from multiple sources."
arch=('x86_64')
url="http://nuclear.gumblert.tech/"
install=nuclear-player.install
license=('GPL3')
depends=('gconf' 'libnotify' 'libappindicator-gtk3' 'libxtst' 'nss')
source=(https://github.com/nukeop/nuclear/releases/download/v${pkgver}/nuclear_${pkgver}_amd64.deb)
md5sums=('4e2362cb519f3acf1decccc9d7c9bc04')

package()   {
    tar xf data.tar.xz

    cp --preserve=mode -r usr "${pkgdir}"
    cp --preserve=mode -r opt "${pkgdir}"

    find "${pkgdir}" -type d -exec chmod 755 {} +
}

