# Maintainer: Martin Diehl <m.diehl@mpie.de>
# Contributor: Michele Mocciola <mickele>
# Contributor: Guillaume Dollé < dolle dot guillaume at gmail dot com >
# Contributor: Lucas H. Gabrielli
pkgname=mumps
pkgver=5.2.1
pkgrel=2
pkgdesc='Sparse solver library using Gaussian elimination'
url='http://mumps.enseeiht.fr'
license=('custom')
depends=('lapack' 'openmpi' 'scotch' 'scalapack' 'parmetis' 'zlib' 'bzip2')
makedepends=()
provides=('mumps')
conflicts=('mumps-par' 'mumps4')
replaces=()
backup=()
arch=('i686' 'x86_64')
source=(http://mumps.enseeiht.fr/MUMPS_${pkgver}.tar.gz
        Makefile.inc)
sha256sums=('d988fc34dfc8f5eee0533e361052a972aa69cc39ab193e7f987178d24981744a'
            'f0c6ecc355fc11a0213a2acecbe5b196e3678f93344eea724d6a9aba85dcbf52')
build() {
  cd "${srcdir}/MUMPS_${pkgver}"
  cp "${srcdir}/Makefile.inc" .

  make -j1 alllib || return 1
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

  # Install libraries mpiseq
  cd "${srcdir}/MUMPS_${pkgver}/libseq"
  install -m 755 -d "${pkgdir}/usr/include/mpiseq"
  install -D -m644 *.h "${pkgdir}/usr/include/mpiseq"
  cd "${srcdir}/MUMPS_${pkgver}/libseq"
  install -D -m644 lib*.a ${pkgdir}/usr/lib
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
  #for _FILE in ssimpletest dsimpletest csimpletest zsimpletest c_example; do
  #  chmod 0755 "${pkgdir}/usr/share/doc/${pkgname}/examples/${_FILE}"
  #done

  # Install license
  install -D -m644 "${srcdir}/MUMPS_${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
