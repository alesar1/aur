# Maintainer: Iwan Timmer <irtimmer@gmail.com>

pkgname=pcp
pkgver=3.12.0
pkgrel=1
pkgdesc="System performance and analysis framework"
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="http://pcp.io"
license=('LGPL')
depends=('python' 'avahi' 'systemtap' 'procps-ng')
makedepends=('libmicrohttpd' 'cairo' 'qt5-svg')
optdepends=('libmicrohttpd: support for pmwebd'
            'cairo: support for pmwebd'
	    'qt5-svg: support for PCP-GUI and pmchart'
	    'perl-xml-tokeparser: support for sar2pcp'
	    'perl-date-parse: support for sar2pcp')
install="pcp.install"
source=("https://bintray.com/artifact/download/pcp/source/pcp-$pkgver.src.tar.gz"
        "pcp.install"
        "pcp.tmpfiles")
sha256sums=('ec2781a9bd12a89aa1a795660927dabe88b6434a307453f3078fe329feb00154'
            '590d816edc87dd03e3700d7637f57ca81d24d63802f32f772709e0c33a4ca0b5'
            '48ce114e95ab640bfe6c6c9608c96c22a75b65ccb38dfa89bfa2b12621845f20')

build() {
	cd "$pkgname-$pkgver"
	./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DIST_ROOT="$pkgdir/" PCP_USER=root PCP_GROUP=root install
	
	rm -rf $pkgdir/var/run
	install -D -m644 $srcdir/pcp.tmpfiles $pkgdir/usr/lib/tmpfiles.d/pcp.conf
	
	#Remove test files
	rm -rf $pkgdir/var/lib/pcp/testsuite
}
