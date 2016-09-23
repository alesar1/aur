# Maintainer:  Hyacinthe Cartiaux <hyacinthe.cartiaux at free.fr>                                                                                                     # Contributor: kfgz <kfgz at interia pl>
# Contributor: Kaspar Bumke <kaspar dot bumke at gmail dot com>
# Contributor: maleadt <tim dot besard at gmail dot com>

pkgname="turbovnc"
pkgdesc="An optimized version of TightVNC"
pkgver=2.1
pkgrel=1
arch=('i686' 'x86_64')
url="http://www.turbovnc.org/"
license=('GPL')
makedepends=('cmake' 'rsync' 'jdk8-openjdk')
depends=('libxaw' 'libxt' 'libxcursor' 'libjpeg-turbo' 'java-runtime')
sha256sums=('572c47162368f42c928171f497cde98e900e9be864b2c13b41afb7720d9d02d6'
            'ccadf1fc708fad601e6113464d6c533a629f6dc9116f6071347cd0b465c1f48b')
conflicts=('turbovnc-bin' 'tigervnc' 'tigervnc-svn' 'tightvnc')
replaces=('turbovnc-bin')
source=(${pkgname}-${pkgver}.tar.gz::https://sourceforge.net/projects/${pkgname}/files/${pkgver}/${pkgname}-${pkgver}.tar.gz/download
        vncserver.service)

build() {
  mkdir -p "${srcdir}"/${pkgname}-${pkgver}/build
  export JAVA_HOME=/usr/lib/jvm/default/
  cd "${srcdir}"/${pkgname}-${pkgver}/build
  ln -sf ../CMakeLists.txt
  cmake -G "Unix Makefiles" \
        -DTJPEG_LIBRARY=/usr/lib/libturbojpeg.so     \
        -DTJPEG_JNILIBRARY=/usr/lib/libturbojpeg.so  \
        -DCMAKE_INSTALL_PREFIX=/usr                  \
        -DTVNC_DOCDIR=/usr/share/doc/${pkgname}      \
        -DTJPEG_JAR=/usr/share/classes/turbojpeg.jar \
        ../
  make
}

package() {
  cd "${srcdir}"/${pkgname}-${pkgver}/build
  make DESTDIR="${pkgdir}" install
  mv "${pkgdir}"/usr/README.txt "${pkgdir}"/usr/share/doc/turbovnc/README.txt
  install -dm755 "${pkgdir}"/etc
  mv "${pkgdir}"/usr/etc "${pkgdir}"/
  rm -r "${pkgdir}"/etc/init.d
  install -D -m644 "${srcdir}"/vncserver.service "${pkgdir}"/usr/lib/systemd/system/vncserver.service
}
