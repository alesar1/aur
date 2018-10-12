# Maintainer: Bailey Kasin <bailey@gingertechnology.net>
pkgname=kernel-uek-devel
pkgver=4.1.12.124.20.1
pkgrel=2
pkgdesc="Oracle's Unbreakable Enterprise Kernel development headers"
arch=('x86_64')
url="https://github.com/oracle/linux-uek"
license=('GPL')
makedepends=(
	'rpmextract'
	'rsync'
)
provides=(
	'linux-headers'
)
source=("http://yum.oracle.com/repo/OracleLinux/OL7/UEKR4/x86_64/getPackage/kernel-uek-devel-4.1.12-124.20.1.el7uek.x86_64.rpm")
md5sums=('d9c406c302c49f54649c1d31422b60ec')

build() {
	cd "$srcdir"
	rpmextract.sh ../"kernel-uek-devel-4.1.12-124.20.1.el7uek.x86_64.rpm"
}

package() {
	cd "$srcdir"
	rsync -ruDq $srcdir/usr $pkgdir
}
