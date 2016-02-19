# Maintainer: John D Jones III AKA jnbek <jnbek1972 -_AT_- g m a i l -_Dot_- com>
# Contributor: kusanaginoturugi <kusanaginoturugi at gmail dot com>
_name=firefox
_channel=developer
_language=ja
pkgname="${_name}-${_channel}-${_language}"
pkgdesc='Japanese localization for Firefox developer build'
url='http://www.mozilla.org/firefox/developer'
pkgver=46.0a2
pkgrel=1
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
_file="${_name}-${pkgver}.${_language}.linux-${CARCH}"
_srcurl="https://download-installer.cdn.mozilla.net/pub/firefox/nightly/latest-mozilla-aurora-l10n"
source=("${_srcurl}/${_file}.tar.bz2" "firefox-$_channel-$_language.desktop" "vendor.js")
sha512sums=('7a11bc18577e64314b850d4be46ebd82228c170823129fb7c7f60b1dbf30b5e19858e6ff931dc3746654ba32822f400696c87e2efdb20b5fa7f2dfd1fd817d10'
            '7102fe45c8b2d74d1c400fedfe5c717bda9250cb3f573a7b2b153e415b35fb80d0d06c500d13396247810dc9cbf0438534d640bdf2d47475d30156bfdbcdfb6c'
            'bae5a952d9b92e7a0ccc82f2caac3578e0368ea6676f0a4bc69d3ce276ef4f70802888f882dda53f9eb8e52911fb31e09ef497188bcd630762e1c0f5293cc010')
depends=('alsa-lib' 'libxt' 'libnotify' 'mime-types' 'nss' 'gtk2' 'sqlite3' 'dbus-glib')

package() {
  install -d $pkgdir/{usr/{bin,share/{applications,pixmaps}},opt}
  cp -r firefox $pkgdir/opt/firefox-$_channel

  ln -s /opt/firefox-$_channel/firefox $pkgdir/usr/bin/firefox-$_channel
  install -m644 $srcdir/firefox-$_channel-$_language.desktop $pkgdir/usr/share/applications/
  install -m644 $srcdir/firefox/browser/icons/mozicon128.png $pkgdir/usr/share/pixmaps/$pkgname-icon.png
  ls
  install -Dm644 $srcdir/vendor.js $pkgdir/opt/firefox-$_channel/browser/defaults/preferences/vendor.js
}
