# Maintainer: zfo <zfoofz1 at gmail dot com>

pkgname=libmir
_gitname=mir
pkgver=0.15.2
pkgrel=1
pkgdesc="Generic Numerical Library for the D Programming language"
arch=('i686' 'x86_64')
url="https://github.com/libmir/mir"
license=('BSL')
depends=('libphobos-devel' 'dmd')
makedepends=('git')
optdepends=('ldc: faster numeric operations')
source=("git://github.com/libmir/$_gitname.git#tag=v$pkgver")
md5sums=('SKIP')
conflicts=('libmir-git')

package() {
	mkdir -p $pkgdir/usr/include/dlang/dmd/mir
	cp -r $srcdir/$_gitname/source/mir/* $pkgdir/usr/include/dlang/dmd/mir/

    find $pkgdir/usr -type f | xargs chmod 0644

	# symlink for ldc
	mkdir -p $pkgdir/usr/include/dlang/ldc
	ln -s /usr/include/dlang/dmd/mir $pkgdir/usr/include/dlang/ldc/mir

	install -Dm644 $srcdir/$_gitname/LICENSE.txt $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
