# Maintainer: Tim Lagnese <tim at inept tech>

pkgname=alire
pkgver=1.0.0
pkgrel=1
pkgdesc="A catalog of ready-to-use Ada libraries plus a command-line tool (alr) to obtain, build, and incorporate them into your own projects. It aims to fulfill a similar role to Rust's cargo or OCaml's opam."
arch=('i686' 'x86_64')
url="https://alire.ada.dev/"
license=(GPL3)
depends=(glibc)
makedepends=(git gprbuild)
source=("$pkgname-$pkgver.tar.gz::https://github.com/alire-project/alire/archive/refs/tags/v$pkgver.tar.gz"
git+https://github.com/alire-project/xmlezout.git
git+https://github.com/mosteo/ajunitgen.git
git+https://github.com/mosteo/aaa.git
git+https://github.com/alire-project/semantic_versioning.git
git+https://github.com/alire-project/simple_logging.git
git+https://github.com/pmderodat/ada-toml.git
git+https://github.com/alire-project/gnatcoll-core.git
git+https://github.com/alire-project/libhello.git
git+https://github.com/mosteo/ansi-ada
git+https://github.com/mosteo/uri-ada.git
git+https://github.com/mosteo/minirest
git+https://github.com/Fabien-Chouteau/spdx_ada#commit=319ca7bcc1e2eb1843aad1f64aca3ecba91a2bcc)
b2sums=('bad08a570d464d454739edb42717a5ad33eb132dea4c3f2752e26bf122aa6a6b058e1b89987a9c8a6c5d432492b29586fbefad0e54207f8e7a9601ef1bbba9a0'
        'SKIP'
        'SKIP'
        'SKIP'
        'SKIP'
        'SKIP'
        'SKIP'
        'SKIP'
        'SKIP'
        'SKIP'
        'SKIP'
        'SKIP'
        'SKIP')

prepare()
{
  # Get the submodules from the sources above
  cd "$srcdir/$pkgname-$pkgver"
  git submodule init
  git config submodule.deps/xmlezout.url "$srcdir"/xmlezout
  git config submodule.deps/ajunitgen.url "$srcdir"/ajunitgen
  git config submodule.deps/aaa.url "$srcdir"/aaa
  git config submodule.deps/semantic_versioning.url "$srcdir"/semantic_versioning
  git config submodule.deps/simple_logging.url "$srcdir"/simple_logging
  git config submodule.deps/ada-toml.url "$srcdir"/ada-toml
  git config submodule.deps/gnatcoll-core.url "$srcdir"/gnatcoll-core
  git config submodule.deps/ansi-ada.url "$srcdir"/ansi-ada
  git config submodule.deps/uri-ada.url "$srcdir"/uri-ada
  git config submodule.deps/minirest.url "$srcdir"/minirest
  git config submodule.deps/spdx_ada.url "$srcdir"/spdx_ada
  git config submodule.test/fixtures/crates/libhello_git.url "$srcdir"/libhello
  git submodule update
}

build() {
  cd "$srcdir/$pkgname"
  gprbuild -j0 -P alr_env
}

package() {
  cd "$srcdir/$pkgname"
  gprinstall -P alr_env -p --prefix="$pkgdir/usr"
}

# vim:set ts=2 sw=2 et:

