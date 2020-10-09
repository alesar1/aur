# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=canonical-multipass-git
_pkgname=multipass
pkgver=1.6.0.dev.r30.g204d76ad
pkgrel=1
pkgdesc="Multipass orchestrates virtual Ubuntu instances"
arch=('x86_64')
url='https://multipass.run'
license=('GPL3')
depends=('qt5-x11extras'
         'apparmor'
         'hicolor-icon-theme'
         'libssh')
makedepends=('cmake' 'git' 'libvirt')
source=("canonical-multipass::git+https://github.com/canonical/multipass"
        '0001-Fix-deprecation-errors.patch')
sha256sums=('SKIP'
            'SKIP')

pkgver() {
  cd canonical-multipass
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd canonical-multipass
  git submodule update --init --recursive
  git am < "${srcdir}/0001-Fix-deprecation-errors.patch"
}

build() {
  cd canonical-multipass
  rm -rf build
  mkdir -p build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr ..
  make
}

package() {
  cd canonical-multipass/build
  make DESTDIR="${pkgdir}" install
}
