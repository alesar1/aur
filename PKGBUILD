# Maintainer: Emma Tebibyte <emma@tebibyte.media>

pkgname="xdg-sanity"
pkgver=0.2
pkgrel=3
pkgdesc="A tool to sanely open http/s links."
arch=("any")
url="https://git.tebibyte.media/emma/xdg-sanity"
license=("AGPL3")
source=("git+https://git.tebibyte.media/emma/xdg-sanity.git")
backup=("etc/xdg-sanity/xdg-sanity.conf")
depends=("handlr")
makedepends=("git" "gendesk")
provides=("xdg-sanity")

sha256sums=("SKIP")

pkgver() {
  cd $srcdir/$pkgname
  git describe --tags --abbrev=0
}

prepare() {
  cd ..
  gendesk -n --exec="xdg-sanity %U" --genericname="Web Browser" --categories="Network;WebBrowser" --mimetypes="text/html;text/xml;application/xhtml+xml;x-scheme-handler/http;x-scheme-handler/https;application/x-xpinstall" PKGBUILD
  mv xdg-sanity.desktop "${srcdir}"
}

package() {
  cd $srcdir
  install -D ${pkgname}/xdg-sanity.sh ${pkgdir}/usr/local/bin/xdg-sanity
  install -D ${pkgname}/xdg-sanity/xdg-sanity.conf ${pkgdir}/etc/xdg-sanity/xdg-sanity.conf
  install -D ${pkgname}/xdg-sanity/extensions/teddit-mime.sample ${pkgdir}/etc/xdg-sanity/extensions/teddit-mime.sample
  install -D ${pkgname}/xdg-sanity/extensions/youtube-replace.sample ${pkgdir}/etc/xdg-sanity/extensions/youtube-replace.sample
  install -D xdg-sanity.desktop ${pkgdir}/usr/share/applications/xdg-sanity.desktop
}