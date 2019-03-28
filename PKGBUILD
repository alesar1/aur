# Maintainer: robertfoster
# Contributor: Fabio Loli <loli_fabio@protonmail.com>
# Contributor: mitts <mittens2001@opmbx.org>

pkgname=gmusicproxy
pkgver=1.0.9
pkgrel=1
pkgdesc="Stream Google Play Music using any media-player"
arch=('any')
url="https://github.com/M0Rf30/gmusicproxy"
license=('GPL')
depends=('python-gmusicapi' 'python-netifaces' 'python-xdg' 'python-eyed3' 'python-daemon')
optdepends=('python-keyring: keyring support')
makedepends=('python-setuptools')
source=("https://github.com/M0Rf30/gmusicproxy/archive/v${pkgver}.tar.gz"
	"$pkgname.service"
	"$pkgname.sysuser"
	"$pkgname.tmpfiles"
)
install="$pkgname.install"

package() {
	cd "$srcdir/$pkgname-$pkgver"

	python setup.py install --root="$pkgdir" --optimize=1

	install -Dm644 "$srcdir/gmusicproxy.service" \
		"$pkgdir/usr/lib/systemd/system/gmusicproxy.service"

	install -Dm644 "$srcdir/$pkgname.service" \
		"$pkgdir/usr/lib/systemd/system/$pkgname.service"
	install -Dm755 "$srcdir/$pkgname.sysuser" \
		"$pkgdir/usr/lib/sysusers.d/$pkgname.conf"
	install -Dm644 "$srcdir/$pkgname.tmpfiles" \
		"$pkgdir/usr/lib/tmpfiles.d/$pkgname.conf"
	install -d "$pkgdir/var/lib/$pkgname"

	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}


md5sums=('26bdf574454116abbf4a43d0ac73d0d1'
         'dcb085039110ab6a87e944865a4fccdb'
         'f7c765324710c59738db0b8a9c124982'
         '73f91c48628136882893a3dbb1919bae')
