# Maintainer: Joan Bruguera Micó <joanbrugueram@gmail.com>
pkgname='extrae'
pkgdesc='Instrumentation framework to generate execution traces of the most used parallel runtimes (from BSC).'
pkgver='3.8.3.20201007'
pkgrel='1'
arch=('i686' 'x86_64')
url='https://www.bsc.es/discover-bsc/organisation/scientific-structure/performance-tools'
license=('LGPL2.1')
depends=(openmpi libunwind papi libxml2 zlib python)
source=("https://ftp.tools.bsc.es/$pkgname/$pkgname-${pkgver%.*}-src.tar.bz2"
        extrae-issue-27-fix-pie-address-translation.patch
        extrae-Fix-references-to-the-build-directory.patch)
sha512sums=(cbe3acdf79ba4e2d57489f9f5f0d7b59d34d2194967f2614f4223e9ae322b24d3b740e87b0f1bdab05716464aa724fa85d51be66c98893ad78cc7951b94e0c84
            3b0fae157fcc6e85be3a5565c2ea3abe8bf35e130de96435a93ba7b3f4b6c30df8982823d36c494633a2c16671664112558393faeead05226b96aa521bb14fba
            a5085d4e974a98cb6266502e06bd2b5a45e213f7d322e8f6cffccbaf92a7f414641b6e6578f87f76dbbb3e4f89b3c268dc33e813c13ea5512e52d1b241317f2a)

prepare() {
	cd "$srcdir/$pkgname-${pkgver%.*}"

	# Upstream issue: https://github.com/bsc-performance-tools/extrae/issues/27
	patch -Np1 -i "$srcdir/extrae-issue-27-fix-pie-address-translation.patch"
	patch -Np1 -i "$srcdir/extrae-Fix-references-to-the-build-directory.patch"

	autoreconf -i -f
}

build() {
	cd "$srcdir/$pkgname-${pkgver%.*}"

	# NOTE: The following optional features are NOT enabled:
	# * Automatic instrumentation (with dyninst)
	# * CUDA support
	# * OpenCL support
	# * LaTeX documentation
	./configure \
		--prefix=/usr \
		--with-mpi=/usr \
		--with-mpi-libs=/usr/lib/openmpi \
		--with-mpi-headers=/usr/include/openmpi \
		--with-unwind=/usr \
		--with-unwind-headers=/usr/include \
		--with-unwind-libs=/usr/lib \
		--with-papi=/usr \
		--with-papi-headers=/usr/include \
		--with-papi-libs=/usr/lib \
		--without-dyninst

	make
}

package() {
	cd "$srcdir/$pkgname-${pkgver%.*}"

	make DESTDIR="$pkgdir/" install
}
