#Maintainer: Rene Peinthor <peinthor@gmail.com>
pkgname=smartsvn
pkgver=9.2.0
_pkgver=9_2_0
pkgrel=1
pkgdesc="A Subversion(SVN) GUI client written in Java"
arch=("any")
url="http://www.smartsvn.com/"
license=('custom')
depends=("java-runtime" "desktop-file-utils" "sh")
makedepends=()
provides=(smartsvn=$pkgver)
source=(smartsvn.desktop http://www.smartsvn.com/static/svn/download/${pkgname}/${pkgname}-linux-${_pkgver}.tar.gz)
install="smartsvn.install"
backup=('opt/smartsvn/bin/smartsvn.sh') # might contain changes to max heap size and vmoptions
md5sums=(
'e3dfb3bdaef28b727b491af85498f2c0'
'0a5181aeb9dbe0e5ac2c1d114665305f'
)


extracted="$pkgname"

build() {
	cd "$srcdir"
	tar xzf ${pkgname}-linux-${_pkgver}.tar.gz
}

package() {
	cd "$srcdir"

	install -D -m644 "${extracted}"/license.html "${pkgdir}/usr/share/licenses/${pkgname}/license.html"
	mkdir -p "${pkgdir}"/opt
	mv "${extracted}" ${pkgdir}/opt/$pkgname || return 1

	install -D -m644 smartsvn.desktop "${pkgdir}"/usr/share/applications/smartsvn.desktop
}
