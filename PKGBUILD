# Maintainer: Xuanrui Qi <me@xuanruiqi.com>
# Contributor: Mort Yao <soi@mort.ninja>
# Contributor: Serge Zirukin <ftrvxmtrx@gmail.com>
# Contributor: Sergei Lebedev <superbobry@gmail.com>
# Contributor: Guillem Rieu <guillemr@gmx.net>
# Contributor: Sergey Plaksin <serp256@gmail.com>
# Contributor: Nicolas Pouillard <nicolas.pouillard@gmail.com>

pkgname=ocaml-menhir-compcert
_basepkgname=${pkgname%-*}
pkgver=20190626
pkgrel=1
pkgdesc="Latest version of Menhir that can build the latest CompCert release."
arch=("i686" "x86_64")
url="http://cristal.inria.fr/~fpottier/menhir/"
license=('GPL' 'QPL')
depends=('ocaml>=4.02')
makedepends=('ocamlbuild' 'ocaml-findlib')
provides=($_basepkgname=$pkgver)
conflicts=($_basepkgname)
options=(!strip !makeflags)
source=("https://gitlab.inria.fr/fpottier/menhir/-/archive/$pkgver/menhir-$pkgver.tar.gz")
md5sums=('097afbd686172e15bef0ccb938b9c634')

build() {
  cd "$srcdir/${_basepkgname/ocaml-/}-$pkgver"
  make PREFIX="/usr" all
}

package() {
  cd "$srcdir/${_basepkgname/ocaml-/}-$pkgver"
  export OCAMLFIND_DESTDIR="$pkgdir$(ocamlfind printconf destdir)"
  install -dm 755 "$OCAMLFIND_DESTDIR"
  make PREFIX="$pkgdir/usr" install
}
