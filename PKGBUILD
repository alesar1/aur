#!/bin/bash
# Maintainer: Florian Bruhin (The Compiler) <archlinux.org@the-compiler.org>
# Contributor: Yannik Stein <yannik.stein [at] gmail.com>
# Contributor: Roberto Calabrese <robertocalabrese75 [at] gmail.com>

pkgname=libgcj16-bin
pkgver=5.3.1_17
pkgrel=2
pkgdesc="Dynamically load and interpret java class files. Built from binary \
executables available in Debian repositories."
url=http://gcc.gnu.org/java/
arch=(i686 x86_64)
license=(GPL)
conflicts=(gcc-gcj)
depends=(zlib)
replaces=(libgcj)

source_i686=(http://httpredir.debian.org/debian/pool/main/g/gcc-5/${pkgname%-*}_${pkgver%_*}-${pkgver##*_}_i386.deb)
source_x86_64=(http://httpredir.debian.org/debian/pool/main/g/gcc-5/${pkgname%-*}_${pkgver%_*}-${pkgver##*_}_amd64.deb)
sha1sums_i686=('54862282ab0c19fb136e78c4cb2924cae8128408')
sha1sums_x86_64=('bd8855a14054a1a5ce993d44ae47c0a23b0f62ae')

prepare() {
  tar xf data.tar.*
}

package() {
  find -type f -name 'libgcj.so*' \
    -execdir install -Dm755 {} "$pkgdir/usr/lib/{}" \;
}

# vim:set ts=2 sw=2 et:
