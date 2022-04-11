# Maintainer: Ondřej Svoboda <ondrej@svobodasoft.cz>
pkgname=osdlyrics-git
provides=(osdlyrics)
conflicts=(osdlyrics osdlyrics-pedrohlc)
pkgver=0.5.10.r0.g987e99d
pkgrel=1
pkgdesc="Standalone lyrics fetcher/displayer (windowed and OSD mode). Supports MPRIS1/2 players, and MPD."
arch=(i686 x86_64 arm64)
url="https://github.com/osdlyrics/osdlyrics"
license=(GPL3)
depends=(dbus-glib desktop-file-utils gtk2 hicolor-icon-theme libnotify
         python-{future,dbus,chardet,gobject,pycurl}
         sqlite libappindicator-gtk2)
makedepends=(intltool git)
optdepends=('gobject-introspection-runtime: proxy detection in Gnome'
            'kdebindings-python: proxy detection in KDE'
            'python-mpd2: to interface with MPD')
install=$provides.install
source=("${provides}::git+https://github.com/osdlyrics/osdlyrics.git#branch=master")
md5sums=(SKIP)

pkgver() {
    cd "$srcdir/$provides"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build()
{
    cd "$srcdir/$provides"
    ./autogen.sh
    ./configure \
		--prefix=/usr PYTHON=/usr/bin/python \
		--enable-appindicator=yes
    make
}

package()
{
    cd "$srcdir/$provides"
    make DESTDIR="$pkgdir" install
}
