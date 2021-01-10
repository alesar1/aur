# Maintainer: Radioactiveman <thomas-lange2@gmx.de>
# Contributor: Sven-Hendrik Haase <svenstaro@gmail.com>
# Contributor: David Runge <dvzrv@archlinux.org>
# Contributor: Lauri Niskanen <ape@ape3000.com>
# Contributor: Sebastian.Salich@gmx.de
# Contributor: Doc Angelo

_pkgname=mumble
pkgname="$_pkgname-git"
pkgver=1.3.0.rc2.r1128.g1d5c69be0
pkgrel=1
epoch=1
pkgdesc='An Open Source, low-latency, high quality voice chat software (git version)'
arch=('i686' 'x86_64')
url='https://www.mumble.info'
license=('BSD')
depends=('gcc-libs' 'glibc' 'hicolor-icon-theme' 'libspeechd' 'libx11' 'libxi'
         'lsb-release' 'openssl' 'opus' 'qt5-base' 'qt5-svg' 'speex' 'xdg-utils')
makedepends=('alsa-lib' 'avahi' 'boost' 'jack' 'libpulse' 'libsndfile' 'mesa'
             'protobuf' 'python' 'qt5-tools' 'speech-dispatcher' 'cmake' 'git')
optdepends=('speech-dispatcher: Text-to-Speech support'
            'espeak-ng: Text-to-Speech support')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=('git://github.com/mumble-voip/mumble.git'
        'git://github.com/mumble-voip/mumble-theme.git'
        'git://github.com/mumble-voip/celt-0.7.0.git'
        'git://github.com/mumble-voip/opus.git'
        'git://github.com/mumble-voip/speex.git')
sha256sums=('SKIP' 'SKIP' 'SKIP' 'SKIP' 'SKIP')

pkgver() {
  cd "$_pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$_pkgname"

  git submodule init
  git config submodule.3rdparty/celt-0.7.0-src.url "$srcdir/celt"
  git config submodule.3rdparty/opus.url "$srcdir/opus"
  git config submodule.3rdparty/speex.url "$srcdir/speex"
  git config submodule.themes/Mumble.url "$srcdir/mumble-theme"
  git submodule update
}

build() {
  cd "$_pkgname"
  _release_id=$(scripts/mumble-version.py -p)

  cmake \
    -B build \
    -DCMAKE_BUILD_TYPE:STRING='None' \
    -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
    -DRELEASE_ID:STRING="$_release_id" \
    -Dwarnings-as-errors:BOOL='OFF' \
    -Dclient:BOOL='ON' \
    -Dserver:BOOL='OFF' \
    -Dbundled-celt:BOOL='ON' \
    -Dbundled-opus:BOOL='OFF' \
    -Dbundled-speex:BOOL='OFF' \
    -Dupdate:BOOL='OFF' \
    -Wno-dev
  make -C build
}

package() {
  depends+=('libasound.so' 'libdns_sd.so' 'libjack.so' 'libprotobuf.so'
            'libpulse.so' 'libsndfile.so')
  cd "$_pkgname"
  make -C build DESTDIR="$pkgdir" install
  install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/$_pkgname/"
}
