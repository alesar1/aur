# Maintainer: Jingbei Li <i@jingbei.lli>
pkgname='kaldi'
pkgdesc='Speech recognition research toolkit'
pkgver=r6789.08869e3
pkgrel=1
makedepends=('cuda' 'git')
depends=('python2' 'openfst-kaldi' 'openblas-lapack')
optdepends=('cuda:	For GPU support')
arch=('x86_64' 'i686')
url='https://github.com/kaldi-asr/kaldi'
license=('APACHE')
source=("${pkgname}::git+${url}")
sha512sums=('SKIP')

pkgver () {
	cd "${pkgname}"
	(
		set -o pipefail
		git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
		printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

prepare(){
	cd $srcdir/$pkgname
	find . -name '*.py' -exec sed '1s/python/python2/' -i {} \;
}

build () {
	cd $srcdir/$pkgname/src
	./configure \
		--shared \
		--fst-root=/usr \
		--openblas-root=/usr \
		--threaded-math=yes \
		--mathlib=OPENBLAS \
		--use-cuda=yes \
		--cudatk-dir=/opt/cuda
	sed '/^OPENFST_VER = /s/$/1.4.1/' -i kaldi.mk
	echo 'CXXFLAGS += -DHAVE_OPENFST_GE_10400 -O2' >> kaldi.mk
	make depend
	make
}

package () {
	cd $srcdir/$pkgname/src
	mkdir -p $pkgdir/opt/$pkgname
	rm bin/{*.o,*.cc,Makefile}
	cp -rL bin lib doc ../egs $pkgdir/opt/$pkgname
}
