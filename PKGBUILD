# Maintainer: Andreas Baumann <mail@andreasbaumann.cc>

pkgname=check_ssl_cert
pkgver=2.56.0
pkgrel=1
pkgdesc='A Nagios plugin for checking X.509 certificates'
arch=('x86_64' 'i686' 'pentium4' 'armv6h' 'armv7h' 'aarch64')
url='https://github.com/matteocorti/check_ssl_cert/'
license=('GPL3')
depends=('monitoring-plugins' 'curl' 'expect' 'perl-timedate' 'inetutils' 'nmap')
source=("https://github.com/matteocorti/${pkgname}/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
md5sums=('656e3074d154ccd9d3b3a8726b603257')

package() {
	cd "$srcdir"/$pkgname-$pkgver

	# Install script and man page
	DESTDIR="$pkgdir"/usr/lib/monitoring-plugins MANDIR="$pkgdir"/usr/man make install

	# Additional files
	install -Dm644 COPYRIGHT.md "$pkgdir"/usr/share/licenses/$pkgname/COPYRIGHT.md
}
