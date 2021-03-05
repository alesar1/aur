# Maintainer: LinusDierheimer <Linus@Dierheimer.de>

pkgname=fastfetch-git
pkgver=r41.61b369e
pkgrel=1
pkgdesc="Like neofetch, but much faster because written in c. Downside: only Linux"
arch=("any")
url="https://github.com/LinusDierheimer/fastfetch#README"
license=("MIT")
depends=()
makedepends=("cmake")
optdepends=(
  "pciutils: GPU output"
  "libx11: Resolution output"
  "libxrandr: Refresh rate in Resolution output"
)
provides=("flashfetch=${pkgver}")
source=("git+https://github.com/LinusDierheimer/fastfetch.git")
sha256sums=("SKIP")

pkgver() {
  cd "fastfetch/"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build()
{
    cd "${srcdir}/fastfetch"
    mkdir -p build/
    cd build/
    cmake ..
    cmake --build .
}

package() {
    cd ${srcdir}/fastfetch
    install -D "build/fastfetch" "${pkgdir}/usr/bin/fastfetch"
    install -D "build/flashfetch" "${pkgdir}/usr/bin/flashfetch"
}
