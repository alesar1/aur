# Maintainer: Matan h <matan.honig2@gmail.com>
pkgname="zenmap-python3-git"
pkgver="7.92SVN"
pkgrel=1
pkgdesc="Graphical Nmap frontend and results viewer - rerwite in python 3"
arch=("any")
url="https://github.com/kulikjak/nmap"
license=("GPL2")
makedepends=("unzip")

depends=("nmap"
            "gtk3"
            "gobject")

optdepends=("gksu: starting zenmap as root")

provides=("zenmap")
source=("$pkgname-$pkgver.zip::https://github.com/kulikjak/nmap/archive/refs/heads/master-python3.zip")
md5sums=("931711d6aa99b266d1cde4df7ed63cd8")

package() {
	cd "$pkgname-master"
  
  python3 setup.py install --prefix "/usr" --root="${pkgdir}" --optimize=1
	install -Dm644 ../docs/zenmap.1 "${pkgdir}/usr/share/man/man1/zenmap.1"
	install -dm755 "${pkgdir}/usr/share/licenses/${pkgname}"
	ln -s "../${_pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
