# Maintainer: Ali Molaei <ali dot molaei at protonmail dot com>
# Contributor: Fredy García <frealgagu at gmail dot com>
# Contributor: Andrew Stubbs <andrew dot stubbs at gmail dot com>

pkgname=etcher-bin
pkgver=1.5.83
pkgrel=1
pkgdesc="Flash OS images to SD cards & USB drives, safely and easily"
arch=("x86_64")
url="http://www.${pkgname%-bin}.io/"
license=("apache")
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
depends=('alsa-lib' 'atk' 'at-spi2-atk' 'at-spi2-core' 'avahi' 'cairo' 'fontconfig' 'freetype2' 'fribidi' 'gdk-pixbuf2' 'graphite' 'gtk3' 'harfbuzz' 'libcups' 'libdatrie' 'libepoxy' 'libpng' 'libthai' 'libx11' 'libxau' 'libxcb' 'libxcomposite' 'libxcursor' 'libxdamage' 'libxdmcp' 'libxext' 'libxfixes' 'libxi' 'libxinerama' 'libxkbcommon' 'libxrandr' 'libxrender' 'libxss' 'libxtst' 'pango' 'pixman' 'wayland')
makedepends=('bzip2')
optdepends=("libnotify: for notifications"
            "speech-dispatcher: for text-to-speech")
source=("https://github.com/balena-io/${pkgname%-bin}/releases/download/v${pkgver}/balena-${pkgname%-bin}-electron_${pkgver}_amd64.deb"
	    "etcher")

options=("!strip")
sha256sums=("0a16e5a80d5ab1e3c0dd216b80351bac26c673e9813c42a691f80a220b29e895"
            "ce48173bc432b90543a21c48d6c0f66d8b26d293e02a588f2307992f1861f9d3")

build() {
  mkdir -p "${srcdir}/output"
  tar -xvf "${srcdir}/data.tar.bz2" -C "${srcdir}/output"
}

package() {
  cp -r "${srcdir}/output/"* "${pkgdir}"
  install -d "${pkgdir}"/usr/bin
  install -Dm755 "${srcdir}"/etcher "${pkgdir}"/usr/bin/etcher
}
