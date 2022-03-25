# Maintainer: Joan Bruguera Micó <joanbrugueram@gmail.com>
pkgname='extrae'
pkgdesc='Instrumentation framework to generate execution traces of the most used parallel runtimes (from BSC).'
pkgver='4.0.0.20220325'
pkgrel='1'
arch=('i686' 'x86_64')
url='https://www.bsc.es/discover-bsc/organisation/scientific-structure/performance-tools'
license=('LGPL2.1')
depends=(openmpi libunwind papi libxml2 zlib python)
source=("https://github.com/bsc-performance-tools/$pkgname/archive/${pkgver%.*}.tar.gz"
        extrae-issue-27-fix-pie-address-translation.patch
        extrae-Fix-syntax-error-on-generated-configure-script.patch
        extrae-Fix-references-to-the-build-directory.patch)
sha512sums=(6ccdfd87d91085674fc643ab5e8b23e733e36a925db35f73ced1016336b77f9750746adf769c4e005c2b5dfefbc316b8967001522d6d65f0c4a29039d546c324
            3b0fae157fcc6e85be3a5565c2ea3abe8bf35e130de96435a93ba7b3f4b6c30df8982823d36c494633a2c16671664112558393faeead05226b96aa521bb14fba
            e60bfe1a5b080e744e11e5ce3e5f1bff46e6a8c238ce3fe9b0c2bec9a57d635fd211ffb8489f949e153ad270c4d4b2aaa0f7b665407a9852fa5df3815a700bb7
            a5085d4e974a98cb6266502e06bd2b5a45e213f7d322e8f6cffccbaf92a7f414641b6e6578f87f76dbbb3e4f89b3c268dc33e813c13ea5512e52d1b241317f2a)

prepare() {
	cd "$srcdir/$pkgname-${pkgver%.*}"

	# Upstream issue: https://github.com/bsc-performance-tools/extrae/issues/27
	patch -Np1 -i "$srcdir/extrae-issue-27-fix-pie-address-translation.patch"
	patch -Np1 -i "$srcdir/extrae-Fix-syntax-error-on-generated-configure-script.patch"
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
	# NOTE: Normally LibXML is correctly autodetected, so forcing the LibXML
	#       prefix should not be necessary, however, there's some homebrew LibXML
	#       detection logic (look for AX_PROG_XML2 in config/macros.m4) which
	#       fails in some scenarios, such as if /bin is before /usr/bin in PATH
	#       (thanks to @teleportex on AUR for the report and fix suggestion)
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
		--without-dyninst \
		--with-xml-prefix=/usr

	make
}

package() {
	cd "$srcdir/$pkgname-${pkgver%.*}"

	make DESTDIR="$pkgdir/" install
}
