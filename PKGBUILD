# Maintainer: Adam S Levy <adam@aslevy.com>
pkgname=modpoll-bin
_pkgname=modpoll
pkgver=3.10
pkgrel=1
pkgdesc="A command line based Modbus master simulator and test utility."
arch=("x86_64")
url="https://www.modbusdriver.com/$_pkgname.html"
license=('custom')
provides=("$_pkgname")
source=("https://www.modbusdriver.com/downloads/$_pkgname.$pkgver.tgz")
sha256sums=('4552d0a373284b2d88da8dab6229276190742c680dfca793d949ef4c91f52d1d')

package() {
        cd "$srcdir/$_pkgname"
        install -Dm755 x86_64-linux-gnu/$_pkgname "$pkgdir/usr/bin/$_pkgname"
        install -Dm644 LICENSE-FREE.txt "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
