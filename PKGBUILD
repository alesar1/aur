# Maintainer: Martin Diehl <https://martin-diehl.net>
# Contributor: Michele Mocciola <mickele>
# Contributor: Guillaume Dollé < dolle dot guillaume at gmail dot com >
# Contributor: Lucas H. Gabrielli
pkgname=mumps
pkgver=5.3.3
pkgrel=1
pkgdesc='Sparse solver library using Gaussian elimination'
url='http://mumps.enseeiht.fr'
license=('custom')
depends=('lapack' 'openmpi' 'scotch' 'scalapack' 'parmetis' 'zlib' 'bzip2')
makedepends=('gcc-fortran')
provides=('mumps')
conflicts=('mumps-par' 'mumps4')
replaces=()
backup=()
arch=('i686' 'x86_64')
source=(http://mumps.enseeiht.fr/MUMPS_${pkgver}.tar.gz
        Makefile.inc)
sha256sums=('27e7749ac05006bf8e81a457c865402bb72a42bf3bc673da49de1020f0f32011'
            '507c99dacf4e25d72ed9f47aac95bfa28f0ad846bf4698cad005b1cb16e9444c')
build() {
  cd "${srcdir}/MUMPS_${pkgver}"
  cp "${srcdir}/Makefile.inc" .

  make -j1 LIBSEQNEEDED='' alllib || return 1
}

package(){
  # Install all headers
  cd "${srcdir}/MUMPS_${pkgver}/include"
  install -m 755 -d "${pkgdir}/usr/include"
  install -D -m644 *.h "${pkgdir}/usr/include"

  # Install all libraries
  cd "${srcdir}/MUMPS_${pkgver}/lib" || return 1
  install -m 755 -d "${pkgdir}/usr/lib" || return 1
  install -D -m644 lib*.a ${pkgdir}/usr/lib || return 1
  for _FILE in `ls *.a | sed "s|\.a||"`; do
    ld -Bshareable -o ${_FILE}.so.${pkgver} -x -soname ${_FILE}.so --whole-archive ${_FILE}.a
    install -m 644 -D ${_FILE}.a ${pkgdir}/usr/lib/${_FILE}.a
    install -m 755 ${_FILE}.so.${pkgver} ${pkgdir}/usr/lib
    ln -sf ${_FILE}.so.${pkgver} ${pkgdir}/usr/lib/${_FILE}.so.${pkgver:0:1}
    ln -sf ${_FILE}.so.${pkgver} ${pkgdir}/usr/lib/${_FILE}.so
  done

  # Install examples
  install -m 755 -d "${pkgdir}/usr/share/doc/${pkgname}/examples"
  cd "${srcdir}/MUMPS_${pkgver}/examples"
  install -m 644 * "${pkgdir}/usr/share/doc/${pkgname}/examples"

  # Install license
  install -D -m644 "${srcdir}/MUMPS_${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
