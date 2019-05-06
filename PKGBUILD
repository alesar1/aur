# Maintainer: William Belanger <echo d2lsbGlhbS5iZWxyQGdtYWlsLmNvbQ== | base64 -d>

pkgname=obsuite-git
pkgver=r113.9c691fd
pkgrel=1
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
pkgdesc="Collection of system indicators and utilities for custom desktop environments"
url="https://gitlab.com/william.belanger/${pkgname%-git}"
arch=("any")
license=("GPL3")
depends=("python" "python-setuptools" "python-pyqt5" "qt5-svg" "qt5-multimedia")
optdepends=('alsa-utils: sound module'
            'pulseaudio-alsa: sound module'
            'systemd: lid switch inhibit'
            'xorg-xbacklight: brightness module')
source=("git+https://gitlab.com/william.belanger/${pkgname%-git}.git")
md5sums=("SKIP")

pkgver()
{
  cd "${pkgname%-git}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package()
{
  cd "${pkgname%-git}"
  python setup.py install --optimize="1" --root="$pkgdir"
}
