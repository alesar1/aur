# Maintainer: Adam S Levy <adam@aslevy.com>
pkgname=modpoll-bin
_pkgname=modpoll
pkgver=3.4
pkgrel=1
pkgdesc="A command line based Modbus master simulator and test utility."
arch=("x86_64")
url="https://www.modbusdriver.com/$_pkgname.html"
license=('custom')
provides=("$_pkgname")
source=("https://www.modbusdriver.com/downloads/$_pkgname.$pkgver.zip")
md5sums=('af5953808212e005b458ca90d7cf868b')

package() {
        cd "$srcdir"
        install -Dm755 linux/$_pkgname "$pkgdir/usr/bin/$_pkgname"
        install -Dm644 LICENSE-FREE "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}
