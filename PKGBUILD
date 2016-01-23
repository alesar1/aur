# Maintainer: Elio Esteves Duarte <elio.esteves.duarte@gmail.com>
pkgname=tomate-notify-plugin
pkgver=0.4.2
pkgrel=1
pkgdesc="Tomate plugin that shows screen notifications"
arch=('any')
url="https://github.com/eliostvs/tomate-notify-plugin"
license=('GPL')
depends=( 'gtk-update-icon-cache'
         'gtk3'
         'hicolor-icon-theme'
         'libnotify'
         'python'
         'tomate-gtk')
makedepends=('python-setuptools')
options=(!emptydirs)
source=("https://github.com/eliostvs/$pkgname/archive/$pkgver.tar.gz")
md5sums=('2c4fa841ad8ac3b752cf4a0c2790126c')
install=tomate-notify-plugin.install

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
  install -D -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgbase}/LICENSE"
}

# vim:set ts=2 sw=2 et:
