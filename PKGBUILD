# Maintainer: Ali Molaei <ali dot molaei at protonmail dot com>
# Contributor: Fredy García <frealgagu at gmail dot com>
# Contributor: Andrew Stubbs <andrew dot stubbs at gmail dot com>

pkgname=etcher-bin
pkgver=1.5.52
pkgrel=1
pkgdesc="Flash OS images to SD cards & USB drives, safely and easily"
arch=("x86_64")
url="http://www.${pkgname%-bin}.io/"
license=("apache")
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
depends=("alsa-lib" "gconf" "gtk2" "libxss" "libxtst" "nss")
optdepends=("libnotify: for notifications"
            "speech-dispatcher: for text-to-speech")
source=("https://github.com/balena-io/${pkgname%-bin}/releases/download/v${pkgver}/balena-${pkgname%-bin}-electron_${pkgver}_amd64.deb")
options=("!strip")
sha256sums=("65cd1a32c2bd2f9660af8cbc6f86d1d3d523cde4242095a21e85d24ed37bfa08")

build() {
  mkdir -p "${srcdir}/output"
  tar -xvf "${srcdir}/data.tar.xz" -C "${srcdir}/output"
}

package() {
  cp -r "${srcdir}/output/"* "${pkgdir}"
  install -d "${pkgdir}"/usr/bin
  ln -s /opt/balenaEtcher/balena-etcher-electron "${pkgdir}"/usr/bin/etcher
}
