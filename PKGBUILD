# Maintainer: Alexander F. Rødseth <xyproto@archlinux.org>

pkgname=o
pkgver=2.42.0
pkgrel=1
pkgdesc='Text editor'
arch=(x86_64)
url='https://github.com/xyproto/o'
license=(BSD)
depends=(vte3)
makedepends=(git go)
source=("git+$url#commit=c71e23799b8ab656d08b44a00b4cf82e99a164bb") # tag: 2.42.0
optdepends=('asciidoctor: for writing man pages'
            'astyle: for formatting C#'
            'autopep8: for formatting Python'
            'brittany: for formatting Haskell'
            'clang: for formatting C++ code with clang-format'
            'crystal: for compiling Crystal'
            'cxx: for compiling C++'
            'fpc: for compiling Object Pascal'
            'fstabfmt: for formatting /etc/fstab'
            'ghc: for compiling Haskell'
            'google-java-format: for formatting Java'
            'guessica: for updating PKGBUILD files'
            'java-environment: for compiling Java'
            'kotlin: for compiling Kotlin'
            'lua: for compiling Lua'
            'lua-format: for formatting Lua'
            'ocaml: for compiling and formatting OCaml'
            'odin: for compiling Odin'
            'pandoc: for exporting Markdown to PDF'
            'prettier: for formatting JavaScript, TypeScript and CSS'
            'rustup: for compiling and formatting Rust'
            'scala: for compiling Scala'
            'scdoc: for writing man pages'
            'tidy: for formatting HTML'
            'v: for compiling and formatting V'
            'zig: for compiling and formatting Zig')
b2sums=(SKIP)

build() {
  cd $pkgname
  go build -v -mod=vendor -trimpath -buildmode=pie \
    -ldflags="-s -w -extldflags \"${LDFLAGS}\""
  make gui
}

package() {
  cd $pkgname
  install -Dm755 $pkgname "$pkgdir/usr/bin/$pkgname"
  ln -sf /usr/bin/o "$pkgdir/usr/bin/light"
  ln -sf /usr/bin/o "$pkgdir/usr/bin/redblack"
  install -Dm644 $pkgname.1 "$pkgdir/usr/share/man/man1/$pkgname.1"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  DESTDIR="$pkgdir" make gui-install
}
