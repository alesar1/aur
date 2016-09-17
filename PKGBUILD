# Maintainer: Antoine Lubineau <antoine@lubignon.info>
# Contributor: Philipp Wolfer <ph.wolfer@gmail.com>

_npmname=azure-cli
_npmver=0.10.4
pkgname=nodejs-${_npmname} # All lowercase
pkgver=${_npmver}
pkgrel=1
pkgdesc="Windows Azure Cross Platform Command Line tool"
arch=(any)
url="https://github.com/Azure/azure-xplat-cli"
license=('Apache')
depends=('nodejs' 'npm')
source=("http://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz")
noextract=("$_npmname-$_npmver.tgz")
options=(!strip)
md5sums=('c2f0b1f3eba2751a036b6630436d7e8c')

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p "$_npmdir"
  cd "$_npmdir"
  npm install -g --prefix "$pkgdir/usr" $_npmname@$_npmver
  cd $srcdir
  mkdir -p "$pkgdir/usr/share/bash-completion/completions"
  "$pkgdir/usr/bin/azure" --completion > ./bash.completion
  install -D -m644 ./bash.completion "$pkgdir/usr/share/bash-completion/completions/$_npmname"
}

# vim:set ts=2 sw=2 et:
