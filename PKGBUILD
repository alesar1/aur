# Maintainer: willemw <willemw12@gmail.com>
# Contributor: sng <sng at hellug dot gr>
# Contributor: aksr <aksr at t-com dot me>

pkgname=pyradio-git
pkgver=0.8.9.r0.gd668e00
pkgrel=3
pkgdesc="Internet radio player for the command line"
arch=('any')
url="http://www.coderholic.com/pyradio/"
license=('MIT')
depends=('ncurses' 'python' 'python-requests')
optdepends=('mplayer: as backend' 'vlc: as backend' 'mpv: as backend')
makedepends=('git' 'python-setuptools')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=($pkgname::git+https://github.com/coderholic/pyradio.git)
md5sums=('SKIP')

prepare() {
  cd $pkgname
  _descr="$(git describe --long --tags)"
  sed -i "s/git_description = ''/git_description = '$_descr'/" pyradio/radio.py
  sed -i 's/distro = None/distro = Arch Linux/' pyradio/config
}

pkgver() {
  cd $pkgname
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd $pkgname

  install -Dm644 LICENCE "$pkgdir/usr/share/licenses/pyradio/LICENSE"

  install -dm755 "$pkgdir/usr/share/doc/pyradio"
  install -m644 README.{html,md} build.{html,md} "$pkgdir/usr/share/doc/pyradio"

  install -dm755 "$pkgdir/usr/share/man/man1"
  install -Dm644 pyradio.1 "$pkgdir/usr/share/man/man1/${pkgname%-git}.1"

  python setup.py install --root="$pkgdir" --optimize=1
}

