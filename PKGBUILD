# vim: set ft=sh:
# Maintainer: Yen Chi Hsuan <yan12125 at gmail dot com>

_pkgname=version-control-tools
pkgname=$_pkgname-hg
pkgver=r5588.866e7cfd28fe
pkgrel=2
pkgdesc="Tools, extensions, hooks, etc to support version control at Mozilla"
url="https://mozilla-version-control-tools.readthedocs.io/en/latest/"
arch=('any')
depends=('mercurial' 'python')
provides=("$_pkgname")
license=('MPL2')
source=("$_pkgname"::"hg+https://hg.mozilla.org/hgcustom/version-control-tools")
sha512sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  printf "r%s.%s" "$(hg identify -n)" "$(hg identify -i)"
}

package() {
  cd "$srcdir/"

  install -Ddm755 "$pkgdir/opt/"
  cp -dr --no-preserve=ownership "$_pkgname" "$pkgdir/opt/"
  rm -rf "$pkgdir/opt/$_pkgname/.hg"*
}
