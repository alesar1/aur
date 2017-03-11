# $Id$
# Maintainer: Grey Christoforo <first name [at] last name [dot] net>

pkgname=bowtie2
pkgver=2.3.1
pkgrel=1
pkgdesc="Bowtie 2 is an ultrafast and memory-efficient tool for aligning sequencing reads to long reference sequence."
arch=("any")
depends=('termcap')
optdepends=('intel-tbb: faster multithreading')
url="http://bowtie-bio.sourceforge.net/bowtie2"
license=('GPL3')
source=("https://github.com/BenLangmead/${pkgname}/archive/v${pkgver}.tar.gz")
md5sums=('537d24b27a90677bbc54b970da5b597e')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make clean
}

build() {
   cd "${srcdir}/${pkgname}-${pkgver}"
   if pacman -Q intel-tbb > /dev/null 2>/dev/null; then
      #msg2 "Building with Intel's TBB multithreading support"
      #WITH_TBB=1 make prefix=/usr
      # tbb is _STILL_ broken in this release...remove this when fixed
      NO_TBB=1 make prefix=/usr
   else
      msg2 "You haven't installed the intel-tbb package; building without Intel's TBB multithreading support"
      NO_TBB=1 make
   fi
}

package() {
   mkdir -p "${pkgdir}/opt/"
   cp -a "${srcdir}/${pkgname}-${pkgver}" "${pkgdir}/opt/${pkgname}"
   cd "${srcdir}/${pkgname}-${pkgver}"
   make prefix=/usr DESTDIR="${pkgdir}" install
   install -Dm644 ${srcdir}/${pkgname}-${pkgver}/MANUAL -t "${pkgdir}/usr/share/doc/${pkgname}"
   install -Dm644 ${srcdir}/${pkgname}-${pkgver}/LICENSE -t "$pkgdir/usr/share/licenses/${pkgname}"
}
