# Maintainer: Alexander F Rødseth <xyproto@archlinux.org>

pkgname=sakemake
pkgver=1.39
pkgrel=1
pkgdesc='Configuration-free build system for C++17 executables'
arch=('x86_64')
url='https://github.com/xyproto/sakemake'
license=('MIT')
makedepends=('git')
depends=('scons')
optdepends=('clang: For clang-format and for clang++'
            'mingw-w64-gcc: For compiling 64-bit Windows executables'
            'wine: For running 64-bit Windows exectuables'
            'valgrind: For tracing calls and profiling'
            'gprof2dot: For visualizing profiling information'
            'graphviz: For visualizing profiling information'
            'kcachegrind: For visualizing profiling information')
source=("git+https://github.com/xyproto/sakemake#tag=$pkgver")
md5sums=('SKIP')

package() {
  DESTDIR="$pkgdir" make -C "$pkgname" install
}

# vim: ts=2 sw=2 et:
