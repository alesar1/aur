# Maintainer: xiretza <xiretza+aur@xiretza.xyz>
# Contributor: Jiachen YANG <farseerfc at archlinux dot org>

_pkgname=libtg_owt
pkgname=${_pkgname}-git
pkgver=0.git.r217.6708e0d3
pkgrel=2
pkgdesc='WebRTC library - static linked, git version'
arch=('x86_64')
url='https://github.com/desktop-app/tg_owt'
license=('BSD')
depends=('protobuf')
makedepends=('git' 'ninja' 'unzip' 'cmake' 'protobuf' 'libxrandr' 'libxcomposite' 'openssl' 'glibc'
             'ffmpeg' 'libva' 'opus' 'yasm' 'libjpeg-turbo' 'pipewire' 'libxtst' 'abseil-cpp')
options=('staticlibs')
source=("tg_owt::git+${url}.git"
        "libvpx::git+https://chromium.googlesource.com/webm/libvpx.git"
        "libyuv::git+https://chromium.googlesource.com/libyuv/libyuv.git"
        "pipewire::git+https://github.com/PipeWire/pipewire.git")
b2sums=('SKIP'
        'SKIP'
        'SKIP'
        'SKIP')
provides=('libtg_owt')
conflicts=('libtg_owt')

pkgver(){
  cd $srcdir/tg_owt
  printf "0.git.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd tg_owt
  git submodule init
  git config submodule.src/third_party/libvpx/source/libvpx.url "$srcdir"/libvpx
  git config submodule.src/third_party/libyuv.url "$srcdir"/libyuv
  git config submodule.src/third_party/pipewire.url "$srcdir"/pipewire
  git submodule update
}

build() {
  cd tg_owt
  # Upstream stated that only static builds are really supported so that's what we'll do.
  # https://github.com/desktop-app/tg_owt/issues/75#issuecomment-992061171
  cmake \
    -B build \
    -G Ninja \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_SHARED_LIBS=OFF
  ninja -C build
}

package() {
  cd tg_owt
  DESTDIR="${pkgdir}/" ninja -C build install
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
