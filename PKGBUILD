# Maintainer: Bernhard Landauer <oberon@manjaro.org>

pkgname=flowblade
pkgver=1.16
pkgrel=4
pkgdesc="a multitrack non-linear video editor for Linux"
arch=('any')
url="https://github.com/jliljebl/$pkgname"
license=('GPL3')
depends=('dbus-glib'
         'frei0r-plugins'
         'gmic'
         'gtk3'
         'librsvg'
         'mlt'
         'mlt-python-bindings'
         'movit'
         'pygtk'
         'python2-dbus'
         'python2-gobject'
         'python2-numpy'
         'python2-pillow'
         'sdl_image'
         'sox'
         'swh-plugins')
source=("$url/archive/v$pkgver.tar.gz"
        "ban_qt-producers.patch::$url/commit/495a10c83b7d209bfdb1577efaf718e031ec6f25.patch"
        'run_from_install.patch')
sha256sums=('2b33535ca92ed6c179cf804ccc9cd742194742bdddcad0bd8c3387ca7a4327ef'
            '13b2d73b289e48b44fbad0abf86b3508a98d87a9faba57bf2932e227dc1305fa'
            'df19be875ec78eb1a109c9206589a09f64208364ce91e5f6a3a0928dd5156b9c')

prepare() {
  cd $pkgname-$pkgver
  patch -p1 -i $srcdir/ban_qt-producers.patch
  patch -p1 -i $srcdir/run_from_install.patch
}

package() {
  cd $pkgname-$pkgver/$pkgname-trunk
  python2 setup.py install \
    --root=$pkgdir \
    --install-lib=/usr/share/pyshared \
    --optimize=1
}
