# Maintainer: 6arms1leg <m.brnsfld {at} googlemail {d0t} com>
# Contributor: Tom Wallroth <tomwallroth {at} gmail {d0t} com>
pkgname=cherrymusic
pkgver=0.38.0
pkgrel=1
pkgdesc="A standalone HTML5 (with Flash fallback) music streaming server based on CherryPy and jPlayer."
arch=('any')
url="http://fomori.org/cherrymusic"
license=('GPL3')
depends=('python>=3' 'python-cherrypy>=3' 'sqlite>=3')
makedepends=('python')
optdepends=('lame' 'vorbis-tools' 'flac' 'faad2' 'mpg123' 'opus-tools' 'ffmpeg' 'imagemagick' 'python-unidecode' 'python-gobject' 'python-pillow')
options=(!emptydirs)
install=cherrymusic.install
source=($pkgname-${pkgver//_/-}.tar.gz::https://github.com/devsnd/cherrymusic/archive/0.38.0.tar.gz 'cherrymusic@.service')
sha512sums=('f80399c34d5b3f9327baac3c54831eb311d0307d4f0085f2a49923e58762aa8d77ee0462ef9651db372f9f609948d1a87aa93d597ab80003992a81a913e8ec3e'
            '9d336a06492df0bb5718848f161895922d08171ab637b54fffad42fc5c12cd22d00f2408dabffc3617f0a59512276e38553f1c63a0ea68028982076b7f115165')

_mandir=/usr/share/man
_systemdsfdir=/usr/lib/systemd/system

package() {
  cd "$srcdir/$pkgname-${pkgver//_/-}"
  python setup.py install --root="$pkgdir/" --optimize=1
  echo -e '\033[1;32minstalling manpages...\033[0m'
  install -Dm644 "doc/man/cherrymusic.1.gz" "$pkgdir$_mandir/man1/cherrymusic.1.gz"
  install -Dm644 "doc/man/cherrymusic.conf.5.gz" "$pkgdir$_mandir/man5/cherrymusic.conf.5.gz"
  install -Dm644 "doc/man/cherrymusicd.8.gz" "$pkgdir$_mandir/man8/cherrymusicd.8.gz"
  echo -e '\033[1;32minstalling systemd service file...\033[0m'
  install -Dm644 "$srcdir/cherrymusic@.service" "$pkgdir$_systemdsfdir/cherrymusic@.service"
}

# vim:set ts=2 sw=2 et:
