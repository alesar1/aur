# Maintainer: erik-pro <aarnaarn2@gmail.com>
# Contributor: Steve Holmes <steve.holmes88@gmail.com>
# Contributor: Chris Brannon <cmbrannon79@gmail.com>
pkgname=emacspeak
pkgver=49.0
pkgrel=1
pkgdesc="Emacs extension that provides spoken output"
arch=('x86_64')
url="http://emacspeak.sf.net/"
license=('GPL' 'LGPL' 'APACHE')
depends=(emacs
	 'tcl>=8.6'
	 'tcl<8.7'
	 'tclx'
	 'lesstif'
	 'espeak')
optdepends=('eflite: software speech via the FLite TTS engine'
            'python: Google client, and wrapper for Emacspeak speech servers.')
install='emacspeak.install'
source=("https://github.com/tvraman/emacspeak/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.bz2")
md5sums=('cbf0fb61180120d6eb18af572dae4606')

prepare() {
  cd "$srcdir/$pkgname-$pkgver"
  sed -i -e 's|/etc/info-dir|$(DESTDIR)/etc/info-dir|g' info/Makefile
}

build() {
  cd "$srcdir/$pkgname-$pkgver"
  make config
  make
  # This one isn't compiled by default, but a lot of folks use it.
  make espeak
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  install -dm755 "$pkgdir/etc"
  make DESTDIR="$pkgdir" install
  cd servers/linux-espeak
  make DESTDIR="$pkgdir" install
  # Interestingly, the source files are installed under DESTDIR.
  cd "$pkgdir/usr/share/emacs/site-lisp/emacspeak/servers/linux-espeak"
  rm -f tclespeak.cpp Makefile
  # A handful of files have permissions of 750 and 640; fix.
  cd "$pkgdir"
  find . -perm 640 -print0
  find . -perm 750 -print0
  gzip -9nf "${pkgdir}"/usr/share/info/*
  rm -f "$pkgdir/usr/share/info/dir"
  rm -f "$pkgdir/etc/info-dir"
}

