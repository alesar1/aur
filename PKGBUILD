# Maintainer: Mattias Andrée <`base64 -d`(bWFhbmRyZWUK)@member.fsf.org>

pkgname=xpybar
pkgver=1.16
pkgrel=1
pkgdesc="A highly extensible minimalistic dock panel configured in Python 3"
arch=(any)
url="https://github.com/maandree/xpybar"
license=('GPL3' 'AGPL3')
depends=(python3 argparser-python python-xlib xorg-xrandr)
optdepends=("linux: most of the monitors require Linux's procfs or sysfs"
            "curl: for Internet services"
	    "python-pyalsaaudio: for ALSA volume control"
	    "hdparm: hdparm: for hdparm support"
	    "python-pytz: for timezone support"
	    "python-sysv-ipc: for ropty example"
	    "iputils: for ping support"
	    "inotify-tools: for inotify support"
	    "alarm: for limiting the time of a file search in locks"
	    "findutils: for file search in locks"
	    "graphicsmagick: for image support"
	    "imagemagick: for image support"
	    "file: for image support"
	    "librsvg: for image support"
	    "solar-python>=2.5: for solar data")
makedepends=(make coreutils sed zip auto-auto-complete texinfo)
install=xpybar.install
source=($url/archive/$pkgver.tar.gz)
sha256sums=(d9bbe99d75eafbd8f1c42f01b0a9c24e48e363433aedc2338daba651f1ff8d1b)


build() {
  cd "$srcdir/$pkgname-$pkgver"
  make PREFIX=/usr HDPARM_PATH=/usr/bin/hdpath
}


package() {
  cd "$srcdir/$pkgname-$pkgver"
  make PREFIX=/usr HDPARM_PATH=/usr/bin/hdpath install DESTDIR="$pkgdir"
  chmod 4755 "$pkgdir/usr/bin/restricted-hdparm"
}

