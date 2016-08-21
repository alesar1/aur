# Maintainer: Maxime Gauduin <alucryd@archlinux.org>

pkgname=lightdm-pantheon-greeter
pkgver=3.0
pkgrel=1
pkgdesc='Pantheon greeter for LightDM'
arch=('i686' 'x86_64')
url='https://launchpad.net/pantheon-greeter'
license=('GPL')
depends=('atk' 'cairo' 'clutter' 'clutter-gtk' 'cogl' 'gdk-pixbuf2' 'glib2'
         'glibc' 'gtk3' 'libgee' 'libgl' 'libx11' 'lightdm'
         'pango'
         'libgranite.so')
makedepends=('cmake' 'vala')
source=("https://launchpad.net/pantheon-greeter/loki/${pkgver}/+download/pantheon-greeter-${pkgver}.tar.xz"
        'lightdm-pantheon-greeter-paths.patch')
sha256sums=('6a0aeb22cceeedef3426d5670b9dae4e2b6794fcdc0c5f5b8bff3aa00f067351'
            '0a18b2918a799d43c5da656049d2fbf37d0837e68ee52ff1fc25d8caf03bd6d2')

prepare() {
  cd pantheon-greeter-${pkgver}

  patch -Np1 -i ../lightdm-pantheon-greeter-paths.patch

  if [[ -d build ]]; then
    rm -rf build
  fi
  mkdir build
}

build() {
  cd pantheon-greeter-${pkgver}/build

  cmake .. \
    -DCMAKE_BUILD_TYPE='Release' \
    -DCMAKE_INSTALL_PREFIX='/usr' \
    -DGSETTINGS_COMPILE='FALSE'
  make
}

package() {
  cd pantheon-greeter-${pkgver}/build

  make DESTDIR="${pkgdir}" install
}

# vim: ts=2 sw=2 et:
