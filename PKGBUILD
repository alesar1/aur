#!/bin/bash
# Maintainer: Florian Bruhin (The Compiler) <archlinux.org@the-compiler.org>
# Contributor: Yannik Stein <yannik.stein [at] gmail.com>
# Contributor: Roberto Calabrese <robertocalabrese75 [at] gmail.com>

pkgname=libgcj17-bin
pkgver=6.4.0_8
pkgrel=1
pkgdesc="Dynamically load and interpret java class files. Built from binary \
executables available in Debian repositories."
url=http://gcc.gnu.org/java/
arch=(i686 x86_64)
license=(GPL)
conflicts=(gcc-gcj)
depends=(zlib)

source_i686=(http://ftp.debian.org/debian/pool/main/g/gcc-6/${pkgname%-*}_${pkgver%_*}-${pkgver##*_}_i386.deb)
source_x86_64=(http://ftp.debian.org/debian/pool/main/g/gcc-6/${pkgname%-*}_${pkgver%_*}-${pkgver##*_}_amd64.deb)
sha1sums_i686=('9614f39e3a83e7d32c152bbcd43546179ea0739a')
sha1sums_x86_64=('8e682941080491a6b7708d751ab18672cdad47c5')

prepare() {
  tar xf data.tar.*
}

package() {
  find -type f -name 'libgcj.so*' \
    -execdir install -Dm755 {} "$pkgdir/usr/lib/{}" \;
}

# vim:set ts=2 sw=2 et:
