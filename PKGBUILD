# Maintainer: Jason Scurtu (scujas) <jscurtu@gmail.com>
# Original Maintainer: Marcin Tydelski <marcin.tydelski@gmail.com> 
# Contributor: Jan Lukas Gernert (JeanLuc) <https://launchpad.net/~eviltwin1>

pkgname=feedreader
pkgver=1.2.1
pkgrel=5
pkgdesc='A simple feedreader client for web services like Tiny Tiny RSS and in the future others.'
arch=('i686' 'x86_64')
url='https://launchpad.net/feedreader'
license=('GPL3')
depends=('sqlite3' 'gtk3' 'webkit2gtk' 'libnotify' 'html2text-with-utf8' 'libsoup' 'libgee' 'json-glib' 'libsecret' 'libxml2' 'rest')
optdepends=('polkit-gnome: needed for authentification in Cinnamon, Gnome')
makedepends=('vala' 'gobject-introspection' 'cmake')
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
install="${pkgname%-*}.install"
source=('https://launchpad.net/feedreader/'${pkgver%.*}'/'${pkgver}'/+download/FeedReader-'${pkgver}'.tar.gz' $pkgname.patch)
sha256sums=('cb24d6dcef46080f2aa61fdc1b0187a8c52aedf913e6f63325ee46c631e5c87a'
            '4f1ad2f9085930c9436b534fd24e3a40ff026cc24133a645ea09428c7e5143ef')

pkgver() {
  cd "${srcdir}/FeedReader-${pkgver}"
}

##Build without Libunity (-DWITH_LIBUNITY=OFF)
build() {
  cd "${srcdir}/FeedReader-${pkgver}"
  if [[ -d "${srcdir}/FeedReader-${pkgver}/build" ]]; then
    rm -rf "${srcdir}/FeedReader-${pkgver}/build"
  fi
  patch -p1 -i $srcdir/$pkgname.patch
  mkdir "${srcdir}/FeedReader-${pkgver}/build" && cd "${srcdir}/FeedReader-${pkgver}/build"
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DUSE_WEBKIT_4=ON -DWITH_LIBUNITY=OFF ..
  make
}

package() {
  cd "${srcdir}/FeedReader-${pkgver}/build"
  make DESTDIR="${pkgdir}" install
}

# vim: ts=2 sw=2 et
