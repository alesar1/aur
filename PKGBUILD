# Maintainer: Jonathan Kotta <jpkotta AT gmail DOT com>
# Contributor: megadriver <megadriver at gmx dot com>
# Contributor: Juergen Hoetzel <juergen@archlinux.org>
# Contributor: Renchi Raju <renchi@green.tam.uiuc.edu>
# Based on emacs from [extra] and emacs-bzr from the AUR

pkgname=emacs-lucid
pkgver=27.1
_pkgver_major=${pkgver/.*}
pkgrel=1
pkgdesc="The extensible, customizable, self-documenting real-time display editor (Lucid toolkit version)"
arch=('x86_64')
url="http://www.gnu.org/software/emacs/emacs.html"
license=('GPL3')
depends=('librsvg' 'gpm' 'm17n-lib' 'hicolor-icon-theme' 'dbus' 'alsa-lib' 'gnutls' 'jansson' 'libxrandr' 'libxinerama' 'libxfixes' 'lcms2')
optdepends=('desktop-file-utils')
conflicts=('emacs')
provides=("emacs=$_pkgver_major")
validpgpkeys=('28D3BED851FDF3AB57FEF93C233587A47C207910'
              'D405AA2C862C54F17EEE6BE0E8BCD7866AFCF978')
_source_url_prefix="ftp://ftp.gnu.org/gnu/emacs"
source=(${_source_url_prefix}/emacs-$pkgver.tar.xz
        ${_source_url_prefix}/emacs-$pkgver.tar.xz.sig)
md5sums=('f1f25356b68ec69caccd41d95988d23d'
         'SKIP')

build() {
  cd "$srcdir"/emacs-$pkgver

  # For the hardening-wrapper package.  Emacs doesn't support building
  # with PIE (https://debbugs.gnu.org/cgi/bugreport.cgi?bug=18784).
  export HARDENING_PIE=0

  export PKG_CONFIG_PATH="/usr/lib/imagemagick6/pkgconfig"

  ./configure \
      --prefix=/usr --sysconfdir=/etc --libexecdir=/usr/lib --localstatedir=/var \
      --with-x-toolkit=lucid --with-xft --without-gconf --without-gsettings \
      --with-modules \
      --program-transform-name='s/^ctags$/ctags.emacs/'

  make
}

package() {
  cd "$srcdir"/emacs-$pkgver
  make DESTDIR="$pkgdir" install

  # fix user/root permissions on usr/share files
  find "$pkgdir"/usr/share/emacs/$pkgver -exec chown root:root {} \;
}
