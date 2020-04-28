# Maintainer: Jochen Jägers (JochenJ) <aur@diezonks.de>
# Contributor: boteium <me@hamal.in>

pkgname=websocketpp-git-dev
_gitname=websocketpp
pkgver=0.8.3.1706.fc41dd5
pkgrel=1
pkgdesc='C++/Boost Asio based websocket client/server library, Develop branch'
url='http://www.zaphoyd.com/websocketpp/'
arch=('any')
license=('BSD')
optdepends=(
  'openssl: TLS socket component support'
  'asio: alternative asio transport support'
  'boost: non C++11 environments support'
  'boost-libs: non C++11 environments support'
)
makedepends=('git' 'cmake' 'boost' 'boost-libs' 'scons' 'gawk')
provides=('websocketpp')
conflicts=('websocketpp')
source=(${pkgname}::git+https://github.com/zaphoyd/${_gitname}#commit=fc41dd5f1e1ac19a495d1adf7bd5b8a1659d9eff '0001-migrated-SConstrcut-from-python2-to-python3.patch')
sha512sums=('SKIP'
            '6e3081c6857599e83179200c0a2096760e3d6903e4ca4bf45acd66460921f84d8934ec8e73062ef3a53948514a8eaf3a5e658d370c716b1b4ef0ff60d0c43eaa')

pkgver() {
  cd ${pkgname}
  printf "%s.%s.%s.%s.%s" \
    "$(gawk 'match($0, /WEBSOCKETPP_MAJOR_VERSION ([0-9]*)/, a) {print a[1]}'  CMakeLists.txt)" \
    "$(gawk 'match($0, /WEBSOCKETPP_MINOR_VERSION ([0-9]*)/, a) {print a[1]}'  CMakeLists.txt)" \
    "$(gawk 'match($0, /WEBSOCKETPP_PATCH_VERSION ([0-9]*)/, a) {print a[1]}'  CMakeLists.txt)" \
    "$(git rev-list --count HEAD)" \
    "$(git rev-parse --short HEAD)"
}

prepare() {
  cd ${pkgname}
   patch --forward --strip=1 --input="${srcdir}/0001-migrated-SConstrcut-from-python2-to-python3.patch"
}

build() {
  cd ${pkgname}
  WSPP_ENABLE_CPP11=1 \
    BOOST_LIBS=/usr/lib \
    BOOST_INCLUDES=/usr/include/boost \
    scons "${MAKEFLAGS}"
  (cd build
    cmake -DCMAKE_INSTALL_PREFIX=/usr ..
  )
}

check() {
  cd ${pkgname}
  WSPP_ENABLE_CPP11=1 \
    BOOST_LIBS=/usr/lib \
    BOOST_INCLUDES=/usr/include/boost \
    scons test
}

package() {
  cd ${pkgname}
  make -C build DESTDIR="${pkgdir}" install
  install -Dm 644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm 644 readme.md "${pkgdir}/usr/share/doc/${pkgname}/README"
}
