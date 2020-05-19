# Maintainer: Felix Golatofski <contact@xdfr.de>
# Contributor: Frederic Bezies < fredbezies at gmail dot com >
# Contributor: cyrant <cyrant at tuta dot io>

pkgname=scenarist-bin
pkgver=0.7.2.rc9h
pkgrel=1
pkgdesc='A professional screenwriting software.'
url='https://kitscenarist.ru/en/'
arch=('x86_64')
license=('GPL3')
conflicts=('scenarist')
depends=()
source=("https://kitscenarist.ru/downloads/linux/scenarist-setup-${pkgver}_en_amd64.deb")
sha512sums=('da56f4b05d9583950b00344605328c982fc9f99635b41e93e43549d0fcce0ccace8cf5ac00f901a8d44d3efd1ec9fceb61b793809cd1915b11f5d56636de3d1f')
options=('!strip' '!emptydirs')
PKGEXT=.tar

package() {
  tar xf data.tar.xz -C "${pkgdir}"
  chmod go-w -R "${pkgdir}"
}
