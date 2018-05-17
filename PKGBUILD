# Maintainer: carstene1ns <arch carsten-teibes de> - http://git.io/ctPKG

pkgname=devkita64-bin
pkgver=r9
pkgrel=1
pkgdesc="AArch64 toolchain for Nintendo Switch homebrew development (precompiled)"
arch=('x86_64')
url="http://devkitpro.org"
license=('GPL')
options=(!strip libtool staticlibs emptydirs)
provides=("devkita64")
conflicts=("devkita64")
depends=('sh')
optdepends=('ncurses5-compat-libs: for aarch64-none-elf-gdb')
install=devkita64.install
source=("devkita64.sh"
        "devkita64.fish"
        "https://github.com/devkitPro/buildscripts/releases/download/devkitA64_$pkgver/devkitA64_$pkgver-linux.tar.xz")
sha256sums=('c71d64c68947c25bf48a5141589f107f5d6269e38e37c4bf528f614ff37b8981'
            'a068e1d2fbbd07f4f520824d256696244bcf85da7bf2142a1a0fe1bd550490e8'
            '207d445626dfdd4f0f789080e66eb6fea3c615b8eddf2c1b2068b4476ff747a4')

package() {
  install -d "$pkgdir"/opt/devkitpro
  cp -r devkitA64 "$pkgdir"/opt/devkitpro
  # gzip manually, as makepkg only cares for standard directories
  gzip "$pkgdir"/opt/devkitpro/devkitA64/share/man/man*/*
  gzip "$pkgdir"/opt/devkitpro/devkitA64/share/info/*
  # export environment variable
  install -Dm755 devkita64.sh "$pkgdir"/etc/profile.d/devkita64.sh
  install -Dm644 devkita64.fish "$pkgdir"/etc/fish/conf.d/devkita64.fish
}
