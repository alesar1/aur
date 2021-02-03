# Maintainer: tsp <patrictroy at gmail dot com>
pkgname=rizin-git
pkgver=0.2.0.r25612.ed6d93d4d
pkgrel=1
epoch=1
pkgdesc="Open-source tools to disasm, debug, analyze and manipulate binary files"
arch=('i686' 'x86_64')
url="https://rizin.re/"
license=('GPL3' 'LGPL3')
makedepends=('git' 'meson' 'ninja')
depends=('capstone' 'lz4' 'file' 'libzip' 'xxhash' 'libuv')
provides=('rizin')
conflicts=('rizin')
source=("$pkgname"::"git+https://github.com/rizinorg/rizin.git")
md5sums=('SKIP')

pkgver () {
  cd ${pkgname}
  printf "%s.r%s.%s" "$(grep -oP "^  version: 'v\K[0-9.]*(?=(-git)',$)" meson.build)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  # this is actually needed to prevent linking against old system-wide r2 libs
  # you can comment this out, if you build in a clean environment
  export PKG_CONFIG_PATH="${srcdir}/${pkgname}/pkgcfg:${PKG_CONFIG_PATH}"

  cd ${srcdir}/${pkgname}
  arch-meson build              \
    --wrap-mode default \
    -D use_sys_capstone=true    \
    -D use_sys_magic=true       \
    -D use_sys_zip=true         \
    -D use_sys_zlib=true        \
    -D use_sys_lz4=true         \
    -D use_sys_xxhash=true      \
    -D use_sys_openssl=true     \
    -D use_sys_tree_sitter=true \
    -D use_libuv=true
  ninja -C build
}

package() {
  cd ${srcdir}/${pkgname}
  DESTDIR="${pkgdir}" ninja -C build install
  install -dm644 "${pkgdir}/usr/share/doc/rizin"
  cp -r doc/* "${pkgdir}/usr/share/doc/rizin"
  ln -s /usr/bin/rizin "${pkgdir}/usr/bin/rz"
  rm "${pkgdir}/usr/share/man/man7/esil.7"
}
