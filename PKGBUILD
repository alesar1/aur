# Maintainer: Yash Karandikar <nerdstep710@gmail.com>

pkgname=haur
pkgver=2.1
pkgrel=1
pkgdesc="Helper for the Arch User Repository"
arch=('any')
url="https://github.com/karx1/haur"
license=('LGPLv3')
depends=('bash' 'git')
source=("haur" "Makefile")
prepare () {
	make clean
}
package () {
	make install srcdir=$srcdir pkgdir=$pkgdir
}
md5sums=('23c78cb76dc3aebd7f45efce417c9830'
         '8348486f4c23d9987ed97f161cf50e79')
