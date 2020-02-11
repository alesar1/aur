# Contributor: Benjamin Sick
# Contributor: Rich Li <rich@dranek.com>

pkgname=gmt6
_pkgname=gmt
pkgver=6.0.0
pkgrel=3
pkgdesc="Generic Mapping Tools: Tools for manipulating and plotting geographic and Cartesian data"
arch=(x86_64)
url="https://www.generic-mapping-tools.org"
license=('LGPL')
makedepends=('cmake')
depends=('gdal' 'fftw' 'lapack')
optdepends=(
    'ghostscript'
    'python-sphinx'
    'gmt-coast: coastlines'
    'gmt-dcw: digital chart of the world polygon map')
conflicts=('gmt4' 'gmt')
install='gmt.install'
#source=("ftp://ftp.soest.hawaii.edu/gmt/${_pkgname}-${pkgver}-src.tar.xz")
#source=("ftp://ftp.star.nesdis.noaa.gov/pub/sod/lsa/gmt/${_pkgname}-${pkgver}-src.tar.xz")
#source=("ftp://ftp.iris.washington.edu/pub/gmt/${_pkgname}-${pkgver}-src.tar.xz")
#source=("ftp://ftp.iag.usp.br/pub/gmt/${_pkgname}-${pkgver}-src.tar.xz")
source=("https://github.com/GenericMappingTools/gmt/releases/download/${pkgver}/${_pkgname}-${pkgver}-src.tar.xz")
sha256sums=('8b91af18775a90968cdf369b659c289ded5b6cb2719c8c58294499ba2799b650')

prepare() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  rm -fr build && mkdir build
}

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}/build"
  # -DLICENSE_RESTRICTED=off \
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DGSHHG_ROOT=/usr/share/gmt/coast \
    -DGMT_LIBDIR=lib \
    -DDCW_ROOT=/usr/share/gmt/dcw \
    -DGMT_DATADIR=share/gmt \
    -DGMT_MANDIR=share/man \
    -DGMT_DOCDIR=share/doc/gmt \
    -DCMAKE_BUILD_TYPE=Release \
    -DGMT_OPENMP=ON \
    ..
  make || return 1
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}/build"
  make "DESTDIR=${pkgdir}" install || return 1
  install -d -m 0755 ${pkgdir}/usr/share/gmt/{html,pdf}
  install -d -m 0755 ${pkgdir}/usr/share/man/man1
  find "${srcdir}/${_pkgname}-${pkgver}/doc_release/html" -type f -exec install -m 0755 "{}" "${pkgdir}/usr/share/gmt/html" \;
  find "${srcdir}/${_pkgname}-${pkgver}/doc_release/pdf"  -type f -exec install -m 0755 "{}" "${pkgdir}/usr/share/gmt/pdf" \;
  find "${srcdir}/${_pkgname}-${pkgver}/man_release" -name "*.1.gz" -type f -exec install -m 0755 "{}" "${pkgdir}/usr/share/man/man1" \;
}

# vim:set ts=2 sw=2 et:
