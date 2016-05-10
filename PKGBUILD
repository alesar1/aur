# Maintainer: Amos Wenger <amos@itch.io>
# Contributor: FrozenCow <frozencow@gmail.com>

pkgname=kitch
pkgver=17.4.0
pkgrel=1
pkgdesc="The best way to play itch.io games."

arch=('i686' 'x86_64')
url="https://github.com/itchio/kitch"
license=('MIT')

depends=('alsa-lib' 'libnotify' 'nss' 'gconf' 'gtk2' 'libxtst' 'desktop-file-utils' 'gtk-update-icon-cache' 'p7zip')
makedepends=('nodejs' 'nodejs-grunt-cli' 'npm' 'ruby')
options=('!strip')
install="kitch.install"

# sic. - source is in itch repo, kitch is a dummy repo for canary-channel github releases
source=("https://github.com/itchio/itch/archive/v${pkgver}-canary.tar.gz")
sha256sums=('1b7a7807d4cc2526b6d9909203562b0d1455d4adfa97bde09e273e72330ecb0d')

[ "$CARCH" = "i686" ]   && _ELECTRON_ARCH=ia32; _ITCH_ARCH=i386
[ "$CARCH" = "x86_64" ] && _ELECTRON_ARCH=x64;  _ITCH_ARCH=amd64

prepare() {
  cd "itch-${pkgver}-canary"

  export PYTHON=/usr/bin/python2

  # Get dependencies
  # (npm3's progress indicator is notoriously slow, disable)
  npm install --no-progress --quiet
}

build() {
  cd "${srcdir}/itch-${pkgver}-canary"
  export CI_BUILD_TAG="v17.4.0-canary"
  export CI_CHANNEL="{{CI_CHANNEL}}"

  release/ci-compile.rb
  release/ci-generate-linux-extras.rb

  grunt -v "electron:linux-${_ELECTRON_ARCH}"
}

check() {
  cd "${srcdir}/itch-${pkgver}-canary"
  npm test
}

package() {
  cd "${srcdir}/itch-${pkgver}-canary"

  install -d "${pkgdir}/usr/lib/kitch"
  cp -a "build/v${pkgver}-canary/kitch-linux-${_ELECTRON_ARCH}/." "${pkgdir}/usr/lib/kitch"

  install -d "${pkgdir}/usr/share/applications"
  install -Dm644 linux-extras/kitch.desktop "${pkgdir}/usr/share/applications/kitch.desktop"

  for icon in release/images/kitch-icons/icon*.png
  do
    iconsize="${icon#release/images/kitch-icons/icon}"
    iconsize="${iconsize%.png}"
    icondir="${pkgdir}/usr/share/icons/hicolor/${iconsize}x${iconsize}/apps/"
    install -d "${icondir}"
    install -Dm644 "$icon" "$icondir/kitch.png"
  done

  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  ln -s "/usr/bin/kitch" "${pkgdir}"
}
