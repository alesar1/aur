pkgname=julia-bin
pkgver=1.7.1
pkgrel=1
arch=('x86_64')
pkgdesc='High-level, high-performance, dynamic programming language - official binaries'
provides=(julia)
conflicts=(julia)
url='https://julialang.org/'
license=('MIT')
source=("https://julialang-s3.julialang.org/bin/linux/x64/${pkgver:0:3}/julia-${pkgver}-linux-x86_64.tar.gz")
sha256sums=('44658e9c7b45e2b9b5b59239d190cca42de05c175ea86bc346c294a8fe8d9f11')
options=(!strip)

package() {
  mkdir -p ${pkgdir}/usr/share/licenses/julia
  cp -r julia-${pkgver}/{bin,etc,include,lib,share,libexec} ${pkgdir}/usr/
  install -Dm644 julia-${pkgver}/LICENSE.md ${pkgdir}/usr/share/licenses/julia/LICENSE.md
}

# vim: ts=2 sw=2 et:

