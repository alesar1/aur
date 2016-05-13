# Maintainer: Michele Mocciola <mickele>
pkgname=aster
pkgver=12.5.0
pkgrel=1
pkgdesc="Code-Aster"
url="http://www.code-aster.org/"
license=("GPL")
depends=('python2' 'astk>=1.13.7' 'metis4' 'med>=3.0.8' 'hdf5-1.8' 'mumps4')
makedepends=()
install="${pkgname}.install"
arch=('i686' 'x86_64')
_astersubver=1
source=("http://www.code-aster.org/FICHIERS/aster-full-src-${pkgver}-${_astersubver}.noarch.tar.gz")
options=(!strip)

_sourcedir=
_installdir=/usr
_installsuff=${pkgver:0:4}

prepare(){
  cd "${srcdir}"
  tar xzf "${srcdir}/aster-full-src-${pkgver}/SRC/aster-${pkgver}.tgz"
}

build() {
  cd "${srcdir}"

  cd "${srcdir}/aster-${pkgver}"
  LIBPATH="/opt/hdf5-1.8/lib /usr/lib" INCLUDES="/opt/hdf5-1.8/include /usr/include/metis-4 /usr/include" PYTHON="/usr/bin/python2" LRELEASE="lrelease-qt4" python2 waf configure --prefix="${pkgdir}${_installdir}" --enable-mumps --metis-libs=metis-4 --scotch-libs='esmumps scotch bz2 scotcherr' --install-as=${_installsuff} --enable-hdf5
  python2 waf build
  # python2 waf build_debug
}

package() {
  cd "${srcdir}/aster-${pkgver}"
  python2 waf install --install-tests
  # python2 waf install_debug
  for _FILE in share/aster/${_installsuff}/profile.sh share/aster/${_installsuff}/config.txt include/aster/${_installsuff}/asterf_config.h include/aster/${_installsuff}/asterc_config.h lib/aster/${_installsuff}/aster_pkginfo.py
  do
    sed -e "s|${pkgdir}||g" -i "${pkgdir}${_installdir}/${_FILE}"
  done
}
md5sums=('58224ee70b508e2bf0a0e0f0fab6a57d')
