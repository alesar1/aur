# Maintainer: Yuri Iozzelli <y.iozzelli@gmail.com>
pkgname=python-llvmlite-bin
pkgver=0.37.0
pkgrel=1
epoch=
pkgdesc="A lightweight LLVM python binding for writing JIT compilers"
arch=("x86_64")
url="http://llvmlite.pydata.org"
license=('GPL')
groups=()
depends=("python")
provides=("python-llvmlite=$pkgver")
conflicts=("python-llvmlite")
source=("https://anaconda.org/numba/llvmlite/0.37.0/download/linux-64/llvmlite-0.37.0-py39he1b5a44_0.tar.bz2")

package() {
	  cd "$srcdir/lib/python3.9/site-packages"
	  mkdir -p "$pkgdir/usr/lib/python3.9/site-packages/"
	  cp -r * "$pkgdir/usr/lib/python3.9/site-packages/"
}
md5sums=('543b19c935e3010aa84565f2e08dda83')
