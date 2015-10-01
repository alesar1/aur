# Contributor: Matthew Bauer <mjbauer95@gmail.com>
# Contributor: TingPing <tingping@fedoraproject.org>
# Maintainer: Steven Allen <steven@stebalien.com>

_pkgname=pithos
pkgname=$_pkgname-git
pkgver=485
pkgrel=1
epoch=1
pkgdesc='Pandora Internet Radio player for GNOME'
arch=('any')
url="http://pithos.github.io/"
license=('GPL3')
depends=('python>=3.5' 'gtk3' 'python-gobject'
         'gst-plugins-good' 'gst-plugins-bad' 'gst-plugins-base'
         'python-setuptools' 'python-cairo')
optdepends=('libkeybinder3: for media keys plugin'
            'gst-plugins-ugly: MP3 playback support'
            'libappindicator-gtk3: Unity indicator applet support'
            'python-pacparser: PAC proxy support'
            'python-pylast: Last.fm scrobbling support'
            'libnotify: Notification support'
            'python-dbus: MPRIS/Screensaver Pause/Gnome mediakeys support')
makedepends=('git')
provides=("$_pkgname")
conflicts=("$_pkgname-bzr" "$_pkgname")
install="$pkgname.install"
sha256sums=('961b42a5b1105ff4625b86f87b5fa5d83a59495149cfb74b59f51e910a474ff9'
            'SKIP')

source=("$pkgname.install" "git+https://github.com/pithos/pithos.git")

pkgver() {
  cd "$srcdir/$_pkgname"
  git rev-list HEAD --count
}

package() {
  cd "$srcdir/$_pkgname"
  python setup.py install --optimize=1 --prefix=/usr --root="${pkgdir}/"
}
