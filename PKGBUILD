# Maintainer: Maxime Gauduin <alucryd@archlinux.org>

pkgname=switchboard-plug-about
pkgver=0.2.1.1
pkgrel=1
pkgdesc='About plug for Switchboard'
arch=('i686' 'x86_64')
url='https://launchpad.net/switchboard-plug-about'
license=('GPL3')
groups=('pantheon')
depends=('glib2' 'glibc' 'gtk3' 'libgee'
         'libswitchboard-2.0.so')
makedepends=('cmake' 'switchboard' 'vala')
source=("https://launchpad.net/switchboard-plug-about/loki/${pkgver}/+download/switchboard-plug-about-${pkgver}.tar.xz"
        'about-archlinux.patch')
sha256sums=('4ecaddd5f1ddf2e496f21bc91ca78b942e1973f7804c570b6648aa6d598ef19b'
            '792efaed1c32a03f058581887fe8fb48e53a9edadc66a0addd5ffbc7c288ad65')

prepare() {
  cd switchboard-plug-about-${pkgver}

  #patch -Np1 -i ../about-archlinux.patch

  if [[ -d build ]]; then
    rm -rf build
  fi
  mkdir build
}

build() {
  cd switchboard-plug-about-${pkgver}/build

  cmake .. \
    -DCMAKE_BUILD_TYPE='Release' \
    -DCMAKE_INSTALL_PREFIX='/usr' \
    -DCMAKE_INSTALL_LIBDIR='/usr/lib'
  make
}

package() {
  cd switchboard-plug-about-${pkgver}/build

  make DESTDIR="${pkgdir}" install
}

# vim: ts=2 sw=2 et:
