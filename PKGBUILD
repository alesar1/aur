# Maintainer: Kirill Pshenichnyi <pshcyrill@mail.ru>
# Contributor: The Tango Controls community
#              (https://tango-controls.org) <info@tango-controls.org>

pkgname=tango-cpp
_pkgname=cppTango
pkgver=9.3.4
pkgrel=1
groups=('tango-controls')
pkgdesc="TANGO distributed control system - shared library"
arch=('x86_64' 'armv7h')
url="https://www.tango-controls.org/"
license=('GPL3')
depends=('tango-idl' 'omniorb' 'zeromq' 'doxygen' 'cmake>=3.7')
conflicts=('tango')
source=("https://gitlab.com/tango-controls/${_pkgname}/-/archive/${pkgver}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('50828ae9f523c8b2eeb546b38138b0d0882fcd3050e952d93a66a594ed178e72')
_dir="${_pkgname}-${pkgver}"

prepare() {
  mkdir -p ${_dir}/build
}

build() {
  cd ${_dir}/build

  if [[ $CARCH == "x86_64" ]]
  then
    cmake -DIDL_BASE=/usr/local -DBUILD_TESTING=OFF -DCMAKE_INSTALL_PREFIX=/usr/ ../
  fi

  # Disable mmmx (for jpeg) instruction for arm architecture
  if [[ $CARCH == "armv7h" ]]
  then
    cmake -DTANGO_JPEG_MMX=0 -DIDL_BASE=/usr/local -DBUILD_TESTING=OFF -DCMAKE_INSTALL_PREFIX=/usr/ ../
  fi
}

package() {
  cd ${_dir}/build
  make DESTDIR=${pkgdir} install
}
