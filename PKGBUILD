# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=protonup-qt
pkgver=2.6.0
pkgrel=1
pkgdesc="Install and manage Proton-GE and Luxtorpeda for Steam and Wine-GE for Lutris"
arch=('any')
url="https://davidotek.github.io/protonup-qt"
license=('GPL3')
depends=('pyside6' 'python-inputs' 'python-pyxdg' 'python-requests' 'python-vdf' 'qt6-tools')
source=("$pkgname-$pkgver.tar.gz::https://github.com/DavidoTek/ProtonUp-Qt/archive/refs/tags/v$pkgver.tar.gz"
        'net.davidotek.pupgui2.sh')
sha256sums=('8770f2aa8b74b411e864c32603ba9ecf50a416e7e6b3edb5f16d1c74962b6028'
            '3c0212ca67f64e9618ea3a7b07eeaa56ca641c3f53605bf0f4bd962527c94bd5')

package() {
  cd "ProtonUp-Qt-$pkgver"
  local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")
  install -Dm644 pupgui2/*.py -t "$pkgdir$site_packages/pupgui2/"
  python -O -m compileall "$pkgdir$site_packages/pupgui2/"

  cp -r share "$pkgdir/usr/"

  install -Dm755 "$srcdir/net.davidotek.pupgui2.sh" "$pkgdir/usr/bin/net.davidotek.pupgui2"
  ln -s /usr/bin/net.davidotek.pupgui2 "$pkgdir/usr/bin/$pkgname"
}
