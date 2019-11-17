# Maintainer: Dmitry Kharitonov <darksab0r@gmail.com>
# Contributor: Dave Blair <mail@dave-blair.de>

pkgname=autokey
pkgver=0.95.8
pkgrel=2
pkgdesc="AutoKey, a desktop automation utility for Linux and X11, updated to run on Python 3"
arch=('i686' 'x86_64')
url="https://github.com/autokey/autokey"
depends=('python' 'wmctrl' 'python-dbus' 'python-pyinotify'
         'zenity' 'xautomation' 'imagemagick' 'xorg-xwd' 'python-xlib' 'python-setuptools'
         'python-gobject' 'gtksourceview3' 'libnotify'
         'libappindicator-gtk3' 'gtk-update-icon-cache')
optdepends=('kdialog: for Qt interface'
            'python-pyqt5: for Qt interface'
            'python-qscintilla-qt5: for Qt interface'
            'qt5-svg: for Qt interface'
            'qt-at-spi: to work with KDE/Qt applications'
            'python-atspi: for ATSPI in Gtk interface')
replaces=('autokey-py3')
license=('GPL3')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/autokey-py3/autokey/archive/v${pkgver}.tar.gz")
sha256sums=('5de4b11c999af7f41273cf07e13c35f4c58c467e6c6df25e417c8b135c06bb49')

package() {
    cd "$srcdir/autokey-${pkgver}"
    python setup.py install --root="$pkgdir" --optimize=1 
}
