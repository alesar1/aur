# Maintainer: Andreas Louv <andreas@louv.dk>

pkgname=zs-git
pkgver=0.7.2
pkgrel=1
pkgdesc="Copy objects from one AS/400 to another"
arch=("any")
url="https://github.com/andlrc/zs"
license=("GPL")
depends=("glibc")
makedepends=("git" "make")
provides=("zs" "zs-analyze")
source=('zs::git+git://github.com/andlrc/zs#branch=master')
md5sums=("SKIP")

pkgver()
{
	cd "$srcdir/${pkgname%-git}"
	sed 's/^#define.*PROGRAM_VERSION.*"\(.*\)".*/\1/p;d' zs.c
}

package()
{
	cd "$srcdir/${pkgname%-git}"
	make
	install -D zs $pkgdir/usr/bin/zs
	install -Dm644 zs.1 $pkgdir/usr/share/man/man1/zs.1
	install -Dm600 default.conf $pkgdir/etc/zs/default.conf

	install -D zs-analyze $pkgdir/usr/bin/zs-analyze
	install -Dm644 zs-analyze.1 $pkgdir/usr/share/man/man1/zs-analyze.1
}
