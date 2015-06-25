# Maintainer: Felix Esch <felix_esch at alice dot de>

# Upstream name of extension
_extname=ConfirmAccount
# Variant valid as package name without suffix and prefix
_basepkgname=confirmaccount

pkgname=mediawiki-$_basepkgname-git
pkgver=r1554.7fa2b67
pkgrel=1
pkgdesc="An extension for controlled account registration."
install=mediawiki-confirmaccount-git.install
source=("git+https://gerrit.wikimedia.org/r/mediawiki/extensions/$_extname")
md5sums=("SKIP")
arch=("any")
url="https://www.mediawiki.org/wiki/Extension:$_extname"
license=("GPL")
depends=("mediawiki")
makedepends=("git")
provides=("mediawiki-$_basepkgname")
conflicts=("mediawiki-$_basepkgname")

pkgver() {
  cd $_extname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  # Target extension directory of MediaWiki:
  _extdir="$pkgdir/usr/share/webapps/mediawiki/extensions"
  mkdir -p "$_extdir"
  rm -r $_extname/.git
  mv $_extname "$_extdir/"
}