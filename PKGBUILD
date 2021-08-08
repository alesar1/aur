# Maintainer: Andreas Baumann <mail@andreasbaumann.cc>

pkgname=check_ssl_cert
pkgver=2.3.7
pkgrel=1
pkgdesc='A Nagios plugin for checking X.509 certificates'
arch=('x86_64' 'i686' 'pentium4' 'armv6h' 'armv7h' 'aarch64')
url='https://matteocorti.github.io/check_ssl_cert/'
license=('GPL3')
depends=('monitoring-plugins' 'curl' 'expect' 'perl-timedate' 'inetutils')
source=("https://github.com/matteocorti/${pkgname}/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
md5sums=('8c200ec847513adae70cb0f1867049ee')

package() {
	cd "$srcdir"/$pkgname-$pkgver

	# Install script and man page
	DESTDIR="$pkgdir"/usr/lib/monitoring-plugins MANDIR="$pkgdir"/usr/man make install

	# Additional files
	install -Dm644 COPYRIGHT "$pkgdir"/usr/share/licenses/$pkgname/COPYRIGHT
}

