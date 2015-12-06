# Maintainer: Maxwell Pray a.k.a. Synthead <synthead1@gmail.com>
# Contributor: Jens Pranaitis <jens@jenux.homelinux.org>
# Contributor: Michal Krenek <mikos@sg1.cz>

pkgname=samdump2
pkgver=3.0.0
pkgrel=1
pkgdesc="Dump password hashes from a Windows NT/2k/XP installation"
arch=('i686' 'x86_64')
url="http://sourceforge.net/projects/ophcrack/files/samdump2/"
license="GPL"
depends=('openssl')
source=(
	"http://downloads.sourceforge.net/ophcrack/$pkgname-$pkgver.tar.bz2"
	'prefix-infos.patch'
)
md5sums=(
	'5dac2dc3f8171a3dc86053d923a0e6f5'
	'9652a003668d4dcf2711e397f5f8ec7f'
)

build() {
 cd "$srcdir/$pkgname-$pkgver"
 patch -p0 < "$srcdir/prefix-infos.patch"
 make
}

package() {
 cd "$srcdir/$pkgname-$pkgver"
 make install DESTDIR="$pkgdir"
}
