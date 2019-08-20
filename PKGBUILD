# Contributor: Simon Legner <Simon.Legner@gmail.com>
# Contributor: Jakob Nixdorf <flocke@shadowice.org>
# Contributor: Bertram Felgenhauer <int-e@gmx.de>
# Maintainer: Simon Legner <Simon.Legner@gmail.com>
pkgname=camlidl
pkgver=1.07
_pkgver=${pkgver/\./}
pkgrel=1
pkgdesc="A stub code generator and COM binding for Objective Caml (OCaml)"
arch=('i686' 'x86_64')
url="https://github.com/xavierleroy/camlidl"
license=(LGPL2.1)
depends=('ocaml')
options=(staticlibs)
source=("https://github.com/xavierleroy/$pkgname/archive/$pkgname$_pkgver.tar.gz"
        META.camlidl)

build() {
  cd "$srcdir/$pkgname-$pkgname$_pkgver"
  cp config/Makefile.unix config/Makefile
  make all
}

package() {
  cd "$srcdir/$pkgname-$pkgname$_pkgver"

  local _bindir="$pkgdir/usr/bin"
  local _ocamldir="$pkgdir/$(ocamlc -where)"
  mkdir -p "$_bindir" "$_ocamldir"/{caml,stublibs,"$pkgname"}

  make BINDIR="$_bindir" OCAMLLIB="$_ocamldir" install

  install -Dm644 "$srcdir/META.camlidl" "$_ocamldir/$pkgname/META"
}

sha256sums=('aa00c826017ba5d56f7bbed4a1c2e3ab98318e32dd6cdff849a3bffb85597961'
            'ed7c8db53b950f62bfe3d1f99081a42787f7b17358dcdcc0e842daacdd5c70b2')
