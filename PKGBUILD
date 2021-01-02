# Original Author: Yamakaky <yamakaky@yamaworld_fr>
# Edited by: Thomas <tpxp@live.fr> for the git version
pkgname=safeeyes-git
pkgver=2.1.1.r1.ga51ff8b
pkgrel=1
pkgdesc="A Free and Open Source tool for Linux users to reduce and prevent repetitive strain injury (RSI). Latest version from the git repository"
arch=("any")
url="https://github.com/slgobinath/SafeEyes"
license=("GPL3")
depends=("alsa-utils"
         "hicolor-icon-theme"
         "libappindicator-gtk3"
         "python"
         "python-babel"
         "python-dbus"
         "python-gobject"
         "python-psutil"
         "python-xlib"
         "xorg-xprop")
conflicts=("safeeyes")
makedepends=("python-setuptools" "git")
optdepends=("xprintidle: better idle timer")
source=("git+https://github.com/slgobinath/SafeEyes.git")
sha1sums=('SKIP')

pkgver() {
	cd "$srcdir/SafeEyes"
	git describe --tags --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
	cd "$srcdir/SafeEyes"
	PYTHONUSERBASE="/usr" python setup.py install --root="$pkgdir/" --optimize=1
}
