# Maintainer: Pyntux <pyntux@gmail.com>

pkgname=timerdown-git
pkgver=82c2d001f
pkgrel=1
pkgdesc="A simple python & pyQT5 app to turn off your Linux PC in "X" minutes or "X" hours, or at specified time."
url="https://github.com/Pyntux/TimerDown"
arch=('any')
license=('GPL3')
depends=('python-pyqt5')
makedepends=('git')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
source=("${pkgname%-*}::git+${url}.git")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-*}"
  printf "r%s.g%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "${pkgname%-*}"
  install -d "$pkgdir"/usr/{bin,share/timerdown,share/applications}
  cp -r {resources.py,timerdown.ico,TimerDown.py} "$pkgdir/usr/share/${pkgname%-*}"
  cp -r {TimerDown.desktop,} "$pkgdir/usr/share/applications/${pkgname%-*}.desktop"
  echo "#!/bin/sh
python /usr/share/timerdown/TimerDown.py" >> "$pkgdir/usr/bin/${pkgname%-*}"
  chmod +x "$pkgdir/usr/bin/${pkgname%-*}"
}
