# Maintainer: Rudolf Polzer <divVerent at gmail dot com>
# Contributor: FabioLolix

pkgname=aaaaxy
pkgver=1.1.189
pkgrel=1
pkgdesc='A nonlinear puzzle platformer taking place in non-Euclidean geometry'
arch=('x86_64')
url="https://github.com/divVerent/$pkgname"
license=('Apache')
depends=('alsa-lib' 'hicolor-icon-theme' 'libglvnd' 'libx11')
# Note: libxcursor libxinerama libxi libxrandr are unused direct dependencies.
# They are referenced at build time, but as no symbols are referenced and the
# external linker is used with --as-needed in Arch's default LDFLAGS, these will
# not actually be linked to by the final binary. This is why these are in
# makedepends but not depends.
makedepends=('go' 'graphviz' 'imagemagick' 'libxcursor' 'libxinerama' 'libxi' 'libxrandr' 'make')
source=("aaaaxy-${pkgver}.tar.gz::${url}/archive/refs/tags/v${pkgver}.tar.gz"
        "${url}/releases/download/v${pkgver}/sdl-gamecontrollerdb-for-aaaaxy-v${pkgver}.zip")
sha256sums=('d8a874f81097be04b3a1d18fcce30a77ddf8240d3472b235037c0bf51e8cb0e0'
            '6039c1198793e7a48bd0dedc096fc7dcf856f899884e55b18c3d5e26736565ab')

prepare() {
  cd "$pkgname-$pkgver"
  mkdir -p third_party/SDL_GameControllerDB/assets/input/
  cp ../third_party/SDL_GameControllerDB/assets/input/* third_party/SDL_GameControllerDB/assets/input/
}

build() {
  cd "$pkgname-$pkgver"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  export AAAAXY_BUILD_USE_VERSION_FILE=true
  export AAAAXY_GENERATE_ASSETS=false
  make BUILDTYPE=release
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm644 io.github.divverent.$pkgname.metainfo.xml "$pkgdir"/usr/share/metainfo/io.github.divverent.$pkgname.metainfo.xml
  install -Dm644 $pkgname.png "$pkgdir"/usr/share/icons/hicolor/128x128/apps/$pkgname.png
  install -Dm644 $pkgname.desktop "$pkgdir"/usr/share/applications/$pkgname.desktop
  install -Dm755 $pkgname "$pkgdir"/usr/bin/$pkgname
}
