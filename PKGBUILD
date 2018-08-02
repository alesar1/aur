# Maintainer: Jonas Witschel <diabonas at gmx dot de>
# Contributor: hexchain <i at hexchain.org>

pkgname=tpm2-abrmd-git
pkgver=2.0.1.r1.23a59de
pkgrel=1
pkgdesc='TPM2 Access Broker & Resource Management Daemon'
arch=('x86_64')
url='https://github.com/tpm2-software/tpm2-abrmd'
license=('BSD')
depends=('dbus' 'glib2' 'tpm2-tss>=2.0.0')
makedepends=('git' 'autoconf-archive' 'python')
checkdepends=('cmocka>=1.0.0' # for unit test suite
              'ibm-sw-tpm2' 'net-tools') # for integration test suite
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+$url.git"
        "tss.sysusers")
sha256sums=('SKIP'
            '67d89be143dc129a95b0c1a42b3e92367a151289fb6c0655c054fccd62cd9a0e')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
	cd "$srcdir/${pkgname%-git}"
	./bootstrap
	./configure --prefix=/usr --sbindir=/usr/bin --sysconfdir=/etc
	make
}

check() {
	cd "$srcdir/${pkgname%-git}"
	./configure --prefix=/usr --sbindir=/usr/bin --sysconfdir=/etc --enable-unit --enable-integration
	dbus-run-session -- make -k check
}

package() {
	cd "$srcdir/${pkgname%-git}"
	make DESTDIR="$pkgdir/" install
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

	cd "$srcdir"
	install -Dm644 "tss.sysusers" "$pkgdir/usr/lib/sysusers.d/tss.conf"
}
