# Contributor: Isaac Curtis <isaaccurtis1@gmail.com>
# Maintainer: Isaac Curtis <isaaccurtis1@gmail.com>

pkgname=zotero-beta
pkgver="5.0_beta.195+9de6a55"
pkgrel=1
pkgdesc="Zotero Standalone. A free, easy-to-use tool to help you collect, organize, cite, and share your research sources."
arch=('i686' 'x86_64')
url="http://www.zotero.org/download"
license=('GPL3')
depends=('dbus-glib' 'alsa-lib' 'gtk2' 'gcc-libs' 'nss')
conflicts=('zotero')
if [[ $CARCH == "x86_64" ]]
then
  _arch=x86_64
md5sums=('a15458ab49c300a202e1650ff7616d8b'
         '3bfed397fb9d060af469eaacfe8add63')
else
  _arch=i686
fi
_ver=${pkgver//_/-}
_ver=${_ver//+/%2B}
install='zotero-beta.install'
source=("https://download.zotero.org/standalone/beta/${_ver}/Zotero-${_ver}_linux-${_arch}.tar.bz2"
        "zotero-beta.desktop")

package() {
  mkdir -p "$pkgdir"/usr/{bin,lib/zotero}
  mv "$srcdir"/Zotero_linux-$_arch/* "$pkgdir"/usr/lib/zotero
  ln -s /usr/lib/zotero/zotero "$pkgdir"/usr/bin/zotero
  install -Dm644 "$srcdir"/zotero-beta.desktop "$pkgdir"/usr/share/applications/zotero-beta.desktop
  # Copy zotero icons to a standard location
  install -Dm644 "$pkgdir"/usr/lib/zotero/chrome/icons/default/default16.png "$pkgdir"/usr/share/icons/hicolor/16x16/apps/zotero.png
  install -Dm644 "$pkgdir"/usr/lib/zotero/chrome/icons/default/default32.png "$pkgdir"/usr/share/icons/hicolor/32x32/apps/zotero.png
  install -Dm644 "$pkgdir"/usr/lib/zotero/chrome/icons/default/default48.png "$pkgdir"/usr/share/icons/hicolor/48x48/apps/zotero.png
}
