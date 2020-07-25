# Maintainer: Mihir Lad <mihirlad55 gmail>
_pkgname=polybar-dwm-module
pkgname="${_pkgname}"
pkgver=3.4.0.r178.g01add48
pkgrel=1
pkgdesc="polybar fork with a dwm module"
arch=("i686" "x86_64")
url="https://github.com/mihirlad55/polybar-dwm-module"
license=("MIT")
depends=("cairo" "xcb-util-image" "xcb-util-wm" "xcb-util-xrm" "xcb-util-cursor"
         "alsa-lib" "libpulse" "libmpdclient" "libnl" "jsoncpp" "curl")
optdepends=("i3-wm: i3 module support"
            "ttf-unifont: Font used in example config"
            "siji-git: Font used in example config"
            "xorg-fonts-misc: Font used in example config")
makedepends=("cmake" "git" "python" "pkg-config" "python-sphinx" "i3-wm")
provides=("polybar")
conflicts=("polybar")
install="${_pkgname}.install"
source=("${_pkgname}::git+${url}.git")
md5sums=("SKIP")

pkgver() {
  git -C "${_pkgname}" describe --long --tags | sed "s/-/.r/;s/-/./g"
}

prepare() {
  git -C "${_pkgname}" submodule update --init --recursive
  mkdir -p "${_pkgname}/build"
}

build() {
  cd "${_pkgname}/build" || exit 1
  # Force cmake to use system python (to detect xcbgen)
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DPYTHON_EXECUTABLE=/usr/bin/python3 ..
  cmake --build .
}

package() {
  cmake --build "${_pkgname}/build" --target install -- DESTDIR="${pkgdir}"
  install -Dm644 "${_pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}
