# Maintainer: Mort Yao <soimort@Verlangen>

pkgname=fstar
pkgver=0.9.2.0
pkgrel=1
pkgdesc='A Higher-Order Effectful Language Designed for Program Verification'
url='https://fstar-lang.org/'
license=('Apache')
arch=('i686' 'x86_64')
depends=('z3')
makedepends=('fsharp' 'ocaml>=4.02' 'ocaml-batteries' 'ocaml-findlib')
provides=('fstar')
conflicts=('fstar-bin' 'fstar-git')
source=("https://github.com/FStarLang/FStar/archive/v$pkgver.zip")
md5sums=('ad66b5c9390ace4d3f9006898e2fbb9f')

build() {
  cd "FStar-$pkgver"

  # Step 1. Building F* from sources using the F# compiler
  make -C src
  # Step 2. Extracting the sources of F* itself to OCaml
  make ocaml -C src
  # Step 3. Building F* from the OCaml snapshot
  make -C src/ocaml-output
}

package() {
  cd "FStar-$pkgver"

  install -d -m755 $pkgdir/opt/fstar $pkgdir/usr/bin
  cp -r bin/ doc/ examples/ lib/ $pkgdir/opt/fstar
  ln -s /opt/fstar/bin/fstar.exe $pkgdir/usr/bin/fstar
}
