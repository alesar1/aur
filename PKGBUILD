# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>
# Contributor: hbdee <hbdee.arch@gmail.com>

_pkgname=hydrogen
pkgname="${_pkgname}-git"
pkgver=1.0.0.beta1.r3198.e49b0892
pkgrel=1
pkgdesc="An advanced drum machine (git version)"
arch=('i686' 'x86_64')
license=('GPL')
url="https://github.com/hydrogen-music/hydrogen"
depends=('hicolor-icon-theme' 'jack' 'libarchive' 'liblrdf' 'liblo' 'libpulse' 'qt5-xmlpatterns')
makedepends=('git' 'cmake' 'docbook-xml' 'docbook-sgml' 'docbook-utils' 'docbook-xsl' 'poxml' 'xmlto')
source=("${_pkgname}"::'git://github.com/hydrogen-music/hydrogen.git'
        'fix_dtd_version.patch'
        'fix_missing_locale.patch')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
md5sums=('SKIP'
         '67122f71e3be7546d0b483f6fc923b19'
         '90ca9817a9976c483fbe0e9605d73058')

pkgver() {
  cd "${srcdir}/${_pkgname}"

  local version="$(git describe --tags | sed -e 's/-[^-]*-[^-]*$//;s/-/./g')"
  local revision=$(git rev-list --count HEAD)
  local hash=$(git rev-parse --short HEAD)
  echo $version.r$revision.$hash
}

prepare() {
  cd "${srcdir}/${_pkgname}"

  if [[ -d build ]]; then
    rm -rf build
  fi

  mkdir build

  # get docs sources
  git submodule update --init

  # various fixes
  patch -Np1 -i "${srcdir}/fix_dtd_version.patch" || true
  patch -Np1 -i "${srcdir}/fix_missing_locale.patch" || true

  # fix python2 shebang
  sed -e 's/python/python2/' -i data/i18n/stats.py
  # Fix none FHS-compliant installation paths
  sed -i \
    -e 's|/usr/share/pixmaps|${CMAKE_INSTALL_PREFIX}/share/icons/hicolor/scalable/apps|' \
    -e 's|/man/man1|/share/man/man1|' \
    CMakeLists.txt
}

build() {
  cd "${srcdir}/${_pkgname}/build"

  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DWANT_LASH=OFF \
    -DWANT_LRDF=ON \
    -DWANT_DEBUG=OFF \
    -DWANT_CPPUNIT=OFF
  make
  # build html manual & tutorial
  cd "${srcdir}/${_pkgname}/data/doc"
  make
  # update translations
  cd "${srcdir}/${_pkgname}/data/i18n"
  ./updateTranslations.sh
}

package() {
  cd "${srcdir}/${_pkgname}/build"

  make DESTDIR="${pkgdir}" install

  # install docs
  install -t "${pkgdir}/usr/share/doc/${pkgname}" \
    -vDm644 ../{ChangeLog,DEVELOPERS,INSTALL.txt,README.txt}
  # install html manual & tutorial
  cd "${srcdir}/${_pkgname}/data/doc"
  install -Dm644 *.html -t "${pkgdir}/usr/share/${_pkgname}/data/doc"
  install -Dm644 img/*.png img/*.h2song -t "${pkgdir}/usr/share/${_pkgname}/data/doc/img"
  install -Dm644 img/nl/*.png -t "${pkgdir}/usr/share/${_pkgname}/data/doc/img/nl"
  install -Dm644 img_tutorial/*.png -t "${pkgdir}/usr/share/${_pkgname}/data/doc/img_tutorial"
}

# vim:set ts=2 sw=2 et:
