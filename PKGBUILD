# Maintainer: Aleksandr Gornostal <ulauncher.app@gmail.com>

# To install, run `makepkg -is`

pkgname=ulauncher-git
pkgver=2.0.30
pkgrel=1
pkgdesc='Application launcher for Linux'
arch=('any')
url="http://ulauncher.io"
license=('GPL3')
depends=('gobject-introspection-runtime' 'libappindicator-gtk3' 'libkeybinder3' 'webkit2gtk'
         "python2-"{dbus,gobject,pyinotify,pysqlite,levenshtein,xdg})
makedepends=('python2-distutils-extra')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
source=("https://github.com/Ulauncher/Ulauncher/releases/download/2.0.30/ulauncher_2.0.30.tar.gz")
sha256sums=('SKIP')

prepare() {
  cd ulauncher
  find -iname "*.py" | xargs sed -i 's=\(^#! */usr/bin.*\)python *$=\1python2='
}

build() {
  cd ulauncher
  python2 setup.py build
}

package() {
  cd ulauncher
  install -Dm644 build/share/applications/ulauncher.desktop "$pkgdir/usr/share/applications/ulauncher.desktop"
  python2 setup.py install --root="$pkgdir" --optimize=1 --skip-build
  sed -i 's=\(^#! */usr/bin.*\)python *$=\1python2=' "$pkgdir/usr/share/ulauncher/timer-shortcut/timer.py.src"
  rm -rf "$pkgdir"/usr/share/ulauncher/preferences/{no*,src,bow*,gul*,pack*}
}
